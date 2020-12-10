import Vue from "vue";
import VueRouter from "vue-router";
const Privacy = () => import("../views/Privacy.vue")
const Daycare = () => import("../views/Daycare.vue")
const SignUp = () => import("../views/SignUp.vue")
const NotFound = () => import("../views/NotFound.vue")
const Contact = () => import("../views/Contact.vue")
const Vax = () => import("../views/Vax.vue")
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Home
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/register",
    name: "Register",
    component: Home
  },
  {
    path: "/vaccinations",
    name: "Vaccinations",
    component: Vax
  },
  {
    path: "/sign-up",
    name: "Sign-up",
    component: SignUp
  },
  {
    path: "/daycare",
    name: "Daycare",
    component: Daycare
  },
  // {
  //   path: "/shop",
  //   name: "Shop",
  //   beforeEnter() {location.href = "https://www.gabbadoggydaycareshop.com/"}

  // haven't tested -> window.open("https://www.gabbadoggydaycareshop.com/", "_blank")

  // },
  {
    path: "/privacy",
    name: "Privacy",
    component: Privacy
  },
  {
    path:"/*",
    name: "NotFound",
    component: NotFound
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      if (to.name == from.name) {
        return { selector: to.hash, behavior: 'smooth', offset: {x: 0, y: 25} }
      } else {
        return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ selector: to.hash, behavior: 'smooth', offset: {x: 0, y: 25} })
        }, 350)
      })
      }
     
    }
    if (savedPosition) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve( savedPosition)
        }, 250)
      })
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 250)
    })
  }
});

export default router;