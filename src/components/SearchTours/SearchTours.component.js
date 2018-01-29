import Vue2Leaflet from 'vue2-leaflet'
import L from 'leaflet'

import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
})

L.Marker.prototype.options.icon = DefaultIcon

export default {
  name: 'search-tours',
  components: {
    'v-map': Vue2Leaflet.Map,
    'v-tilelayer': Vue2Leaflet.TileLayer,
    'v-marker': Vue2Leaflet.Marker
  },
  props: [],
  data () {
    return {
      center: [47.327060, 8.801356],
      position: [47.413220, -1.219482],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      markers: [
        { id: 'm1', position: {lat: 51.505, lng: -0.09}, tooltip: 'tooltip for marker1', draggable: true, visible: true },
        { id: 'm2', position: {lat: 51.8905, lng: -0.09}, tooltip: 'tooltip for marker2', draggable: true, visible: false },
        { id: 'm3', position: {lat: 51.005, lng: -0.09}, tooltip: 'tooltip for marker3', draggable: true, visible: true },
        { id: 'm4', position: {lat: 50.7605, lng: -0.09}, tooltip: 'tooltip for marker4', draggable: true, visible: false }
      ]
    }
  },
  computed: {

  },
  mounted () {
    setTimeout(function () { window.dispatchEvent(new Event('resize')) }, 250)
  },
  methods: {

  }
}

