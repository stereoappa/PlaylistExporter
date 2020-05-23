import {Component} from '@core/Component'

export class TargetHub extends Component {
  static className = 'target-panel'

  constructor($root) {
    super($root, {
      name: 'TargetHub',
      listeners: []
    })

    this.components = []
  }

  toHTML() {
    return ``
  }
}
