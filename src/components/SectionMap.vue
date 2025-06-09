<template>
    <div class="relative">
        <div class="absolute z-10 p-1 mt-2 ml-2 bg-white shadow-xl w-52">
            <p class="mb-1 text-sm">{{ place.name }}</p>
            <p v-html="adress" class="text-xs"></p>
            <p
                class="flex items-center mt-2 text-xs font-bold text-yellow-500"
                v-if="rating"
            >
                <span class="mr-1 text-sm">{{ rating }}</span>
                <i
                    class="-mt-px fas fa-star"
                    v-for="star in Math.floor(rating)"
                    :key="star"
                ></i>
                <i class="-mt-px fas fa-star-half" v-if="rating % 1"></i>
                <a
                    class="font-normal text-blue-500"
                    :href="place.url"
                    target="_blank"
                    >{{ place.user_ratings_total }} reviews</a
                >
            </p>
            <p v-if="place.opening_hours" class="mt-2 text-xs">
                We are:
                <span class="font-bold text-blue-500">{{
                    place.opening_hours.open_now
                        ? 'Currently Open'
                        : 'Closed at the moment'
                }}</span>
            </p>
        </div>
        <gmap-map
            v-if="gotPlace"
            :zoom="14"
            :center="center"
            :options="options"
            style="width: 100%; height: 400px"
        >
            <gmap-marker
                :key="index"
                v-for="(m, index) in locationMarkers"
                :position="m.position"
                :icon="{
                    url: 'https://res.cloudinary.com/dg5ybbkbh/image/upload/v2/gddc/icons/GDDC_map_marker.svg',
                    scaledSize: { width: 32, height: 32 },
                    size: { width: 32, height: 32 },
                }"
                @click="center = m.position"
            ></gmap-marker>
        </gmap-map>
    </div>
</template>

<script>
export default {
    name: 'GoogleMap',
    data() {
        return {
            options: {
                mapId: '889dff40544104c5',
                disableDefaultUI: true,
            },
            locPlaces: [],
            place: {},
            gotPlace: false,
        }
    },
    watch: {
        region: {
            handler: function () {
                this.getPlace()
            },
        },
    },
    computed: {
        adress() {
            return this.place.adr_address
        },
        center() {
            return {
                lat: this.place.geometry.location.lat + 0.005,
                lng: this.place.geometry.location.lng,
            }
        },
        locationMarkers() {
            return [
                {
                    position: {
                        lat: this.place.geometry.location.lat,
                        lng: this.place.geometry.location.lng,
                    },
                },
            ]
        },
        rating() {
            return this.place.rating
        },
        region() {
            return this.$store.state.region
        },
    },
    mounted() {
        this.getPlace()
    },
    methods: {
        getPlace() {
            this.gotPlace = false
            var id = this.$store.state[this.region].contact.placeId
            var host = process.env.VUE_APP_FN_HOST
            var body = JSON.stringify({
                placeId: id,
            })
            var requestOptions = {
                method: 'POST',
                body: body,
            }
            fetch(host + '/.netlify/functions/getPlace', requestOptions)
                .then((response) => response.text())
                .then((result) => {
                    let res = JSON.parse(result).result
                    this.place = res
                    this.gotPlace = true
                })
                .catch((error) => {
                    console.log("Couldn't get place", error)
                })
        },
    },
}
</script>
