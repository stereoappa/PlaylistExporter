import '@/scss/index.scss'
import {PlaylistRelocator} from '@/components/playlist_relocator/PlaylistRelocator'
import {SourceHub} from '@/components/hubs/SourceHub'
import {TargetHub} from '@/components/hubs/TargetHub'

const relocator = new PlaylistRelocator('#app', {
  components: [SourceHub, TargetHub]
})
relocator.render()
