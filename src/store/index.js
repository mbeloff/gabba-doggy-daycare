import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    global: {
      openTime: "7:00am",
      closeTime: "6:00pm",
      email: "woof@gabbadoggydaycare.com",
      jsonld: {
        "@context" : "http://schema.org",
        "@type" : "LocalBusiness",
        "name" : "Gabba Doggy Daycare",
        "image" : "https://res.cloudinary.com/dg5ybbkbh/image/upload/v1607553601/gddc/photos/03.jpg",
        "logo" : "https://www.gabbadoggydaycare.com/img/gddc-logo.02c7187e.svg",
        "telephone" : "0423 487 302",
        "email" : "woof@gabbadoggydaycare.com",
        "address" : {
          "@type" : "PostalAddress",
          "streetAddress" : "46 Deshon st",
          "addressLocality" : "Woolloongabba",
          "addressRegion" : "QLD",
          "postalCode" : "4102"
        },
        "openingHoursSpecification" : {
          "@type" : "OpeningHoursSpecification",
          "dayOfWeek" : {
            "@type" : "DayOfWeek",
            "name" : "Mo-Fr 06:30-18:30"
          }
        },
        "url" : "https://www.gabbdoggydaycare.com/",
        "aggregateRating" : {
          "@type" : "AggregateRating",
          "ratingValue" : "5",
          "bestRating" : "5",
          "worstRating" : "1",
          "ratingCount" : "1"
        }
      }
    },
    mutations: {},
    actions: {},
    modules: {}
  }
})