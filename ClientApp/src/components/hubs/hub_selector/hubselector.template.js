export function createSelect(panelType) {
  return `
  <button class="btn btn-primary dropdown-toggle" type="button"
      data-toggle="dropdown" aria-haspopup="true"
      aria-expanded="false">
      Select your ${panelType} hub
  </button>
  <div class="dropdown-menu">
      <a class="dropdown-item" href="#">
          <div class="dzr-ico"></div>Deezer
      </a>
      <a class="dropdown-item" href="#">
          <div class="yamusic-ico"></div>Yandex Music
      </a>
  </div>
`
}
