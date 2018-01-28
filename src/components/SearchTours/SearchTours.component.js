export default {
  name: 'search-tours',
  components: {},
  props: [],
  data () {
    return {
      center: [47.327060, 8.801356],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(47.413220, -1.219482),
      zoom: 15
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}

