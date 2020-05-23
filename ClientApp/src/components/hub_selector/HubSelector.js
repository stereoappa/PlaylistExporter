import $ from 'jquery'
import {Component} from '@core/Component';
import {createSelect} from '@/components/hub_selector/hubselector.template';

export class HubSelector extends Component {
  static className = 'hub-selector'

  constructor($root) {
    super($root, {
      name: 'HubSelector',
      listeners: ['click']
    })
  }

  onClick(event, el$) {
    if (event.target.className !== 'dropdown-item') {
      return
    }
    $('.dropdown-item').attr('selected', false)
    $(event.target).attr('selected', true)
    $('.hub-selector .dropdown-toggle').html($(event.target).html())
  }

  toHTML() {
    return createSelect('source')
  }
}
