export default {
  name: 'search-tours',
  components: {
  },
  props: [],
  data () {
    return {
      zoom: 12,
      center: { lat: 47.327060, lng: 8.801356 },
      markers: [
        { position: { lat: 47.327060, lng: 8.801356 }, title: 'Test' },
        { position: { lat: 47.327060, lng: 8.901346 }, title: 'Test2' }
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

