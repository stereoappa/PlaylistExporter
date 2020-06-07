import $ from 'jquery'
import {Component} from '@core/Component'
import {HubSelector} from '@/components/hubs/hub_selector/HubSelector'

export class SourceHub extends Component {
  static className = 'source-panel'

  constructor($root, options = {}) {
    super($root, {
      name: 'SourceHub',
      listeners: []
    })
    this.$root = $root
    this.components = [HubSelector]
  }

  toHTML() {
    const $root = $('<div/>', {
      class: 'card text-white bg-light'
    })
    const $innerHtml = $('<div/>', {
      class: 'card-body'
    })

    this.components = this.components.map(Component => {
      const $hubElement = $('<div/>', {
        class: Component.className
      })

      const component = new Component($hubElement)
      $hubElement.html(component.toHTML())

      $innerHtml.append($hubElement)
      return component
    })

    return $root.append($innerHtml)
  }
}
