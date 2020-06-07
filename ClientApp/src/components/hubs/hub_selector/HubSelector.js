import $ from 'jquery'
import {Component} from '@core/Component';
import {createSelect} from '@/components/hubs/hub_selector/hubselector.template';

export class HubSelector extends Component {
  static className = 'hub-selector'

  constructor($root) {
    super($root, {
      name: 'HubSelector',
      listeners: ['click']
    })

    this.getAllDescriptions()
  }

  onClick(event, el$) {
    if (event.target.className !== 'dropdown-item') {
      return
    }
    $('.dropdown-item').attr('selected', false)
    $(event.target).attr('selected', true)
    $('.hub-selector .dropdown-toggle').html($(event.target).html())
  }

  async getAllDescriptions() {
    const res = await fetch('http://playlistrelocator.local/api/Hubs/')
    console.log(res)
  }

  toHTML() {
    return createSelect('source')
  }
}
