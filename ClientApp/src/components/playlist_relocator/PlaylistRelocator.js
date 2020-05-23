import $ from 'jquery'
export class PlaylistRelocator {
  constructor(selector, options = {}) {
    this.$app = $(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $row = ($('<div/>', {class: 'row'}))

    this.components = this.components.map(Component => {
      const $col = $('<div/>', {class: 'col'})
      const $container = $('<div/>', {class: Component.className})

      const component = new Component($container)

      $col.append($('<div/>', {
        class: Component.className,
        html: component.toHTML()
      }))

      $row.append($col)
      return component
    })

    return $('<div/>', {class: 'relocator'}).append($row)
  }

  render() {
    this.$app.append(this.getRoot())
    this.components.forEach(component => component.init());
  }
}
