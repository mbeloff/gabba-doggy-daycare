<template>
  <div class="relative">
    <div class="absolute w-52 bg-white z-10 ml-2 mt-2 shadow-xl p-1">
      <p class="mb-1">{{place.name}}</p>
      <p v-html="adress" class="text-sm"></p>
      <p class="text-yellow-500 mt-2 font-bold text-xs flex items-center" v-if="rating">
        <span class="text-sm mr-1">{{rating}}</span> 
        <i class="fas fa-star -mt-px"
          v-for="star in Math.floor(rating)"
          :key="star"></i>
        <i class="fas fa-star-half -mt-px" v-if="rating % 1"></i>
        <a class="text-blue-500 font-normal" :href="place.url" target="_blank">{{ place.user_ratings_total }} reviews</a>
      </p>
      <p class="mt-2" v-if="place.opening_hours">we are: <span class="font-bold text-blue-500">{{ place.open_now == true ? 'closed at the moment' : 'open now'}}</span></p>
    </div>
    <gmap-map
        :zoom="14"    
        :center="center"
        :options="options"
        style="width:100%;  height: 400px;"
      >
      <gmap-marker
        :key="index"
        v-for="(m, index) in locationMarkers"
        :position="m.position"
        :icon="{ url: 'https://res.cloudinary.com/dg5ybbkbh/image/upload/v2/gddc/icons/GDDC_map_marker.svg'}"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>
 
<script>
export default {
  name: "GoogleMap",
  data() {
    return {     
      options: {
        mapId: '889dff40544104c5',    
        disableDefaultUI : true    
      },      
      locPlaces: [],
      existingPlace: null,
      place: {},
      count: 1,
    };
  },
  watch: {
    'region': {
      handler: function () {
        this.getPlace()
      }
    }
  },
  computed: {
    adress() {
      return this.place.adr_address
    },
    center() { 
      return {
        "lat": this.place.geometry.location.lat + 0.005,
        "lng": this.place.geometry.location.lng
      }        
    }, 
    locationMarkers() {
      return [ 
        {
          position: {lat:this.place.geometry.location.lat, lng:this.place.geometry.location.lng},
        },
      ]},
    rating() {
      return this.place.rating      
    },
    region() {
      return this.$store.state.region
    }
  },
  mounted() {
    this.getPlace();
  }, 
  methods: {
    getPlace() {
      var id = this.$store.state[this.region].contact.placeId
      var host = process.env.VUE_APP_FN_HOST
      var body = JSON.stringify({
        placeId: id
      });
      var requestOptions = {
        method: 'POST',
        body: body,
      }
      fetch( host + '/.netlify/functions/getPlace', requestOptions)
      .then(response => response.text())
        .then(result => {
          let res = JSON.parse(result).result
          this.place = res
          console.log(res)
          this.count++
        })
        .catch(error => {
          console.log("Couldn't get place", error)
      });
    }
  }
}
</script>