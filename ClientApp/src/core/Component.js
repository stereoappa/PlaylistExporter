import $ from 'jquery'
import 'bootstrap'
import {DomListener} from '@core/DomListener'

export class Component extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
  }

  toHTML() {
    return ``
  }

  init() {
    $('.dropdown-toggle').dropdown()
    // для вложенных компонентов в основные source и target компоненты
    if (this.components) {
      this.components.forEach(component => component.init())
    }
    this.initDOMListeners()
  }

  destroy() {
    this.removeDOMListeners()
  }
}
