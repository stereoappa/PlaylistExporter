import $ from 'jquery'
import {Component} from '@core/Component'
import {HubSelector} from '@/components/hub_selector/HubSelector'

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
    // `
    // <div class="card text-white bg-light">
    //     <div class="card-body">
    //         <div class="hub__selector">
    //             <button class="btn btn-primary dropdown-toggle" type="button"
    //                 data-toggle="dropdown" aria-haspopup="true"
    //                 aria-expanded="false">
    //                 Select your source hub
    //             </button>
    //             <div class="dropdown-menu">
    //                 <a class="dropdown-item" href="#">
    //                     <div class="dzr-ico"></div>Deezer
    //                 </a>
    //                 <a class="dropdown-item" href="#">
    //                     <div class="yamusic-ico"></div>Yandex Music
    //                 </a>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    // `
  }
}
