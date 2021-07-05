import Vue from "vue";
import VueRouter from "vue-router";
const Privacy = () => import("../views/Privacy.vue")
const Daycare = () => import("../views/Daycare.vue")
const SignUp = () => import("../views/SignUp.vue")
const NotFound = () => import("../views/NotFound.vue")
const Contact = () => import("../views/Contact.vue")
const Vax = () => import("../views/Vax.vue")
const Jobs = () => import("../views/Jobs.vue")
const Grooming = () => import("../views/Grooming.vue")
const Training = () => import("../views/Training.vue")
const Feedback = () => import("../views/Feedback.vue")
const Explore = () => import("../views/Explore.vue")
const Overnight = () => import("../views/Overnight.vue")
const NewOwner = () => import("../views/NewOwner.vue")
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/home"
  },
  {
    path: '/adelaide',
    props: true,
    redirect: {
      path:'/home/adelaide',
      props: {region: 'adelaide'}}

  },
  {
    path: '/brisbane',
    redirect: '/home/brisbane'
  },
  {
    path: "/home/:region?",
    name: "New Home",
    component: Home,
    props: true,  
  },
  {
    path: "/login",
    name: "Login",
    component: Home,
  },
  {
    path: "/login/*",
    redirect: "/login"
  },
  {
    path: "/contact/:region?",
    name: "Contact",
    component: Contact,
    props: true
  },
  {
    path: "/register/:region?",
    redirect: { name: 'Question'},
    props: true
  },
  {
    path: "/question/:region?",
    name: "Question",
    component: Home,
    props: true
  },
  {
    path: "/training/:region?",
    name: "Training",
    component: Training,
    props: true
  },
  {
    path: "/explore/:region?",
    name: "Explore",
    component: Explore,
    props: true
  },
  {
    path: "/vaccinations",
    name: "Vaccinations",
    component: Vax
  },
  {
    path: "/sign-up/:region?",
    name: "Sign-up",
    component: SignUp,
    props: true
  },
  {
    path: "/daycare/:region?",
    name: "Daycare",
    component: Daycare,
    props: true
  },
  {
    path: "/grooming/:region?",
    name: "Grooming",
    component: Grooming,
    props: true,
  },
  {
    path: "/jobs/:region?",
    name: "Jobs",
    component: Jobs,
    props: true
  },
  {
    path: "/feedback/:region?",
    name: "Feedback",
    component: Feedback,
    props: true
  },
  {
    path: "/dev/newowner/:region?",
    name: "NewOwner",
    component: NewOwner,
    props: true,
  },
  {
    path: '/overnight',
    name: 'Overnight',
    component: Overnight
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: Privacy
  },
  {
    path:"/404",
    name: "NotFound",
    component: NotFound
  },
  {
    path:"*",
    redirect: "/404"
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    // if (to.hash) {
    //   if (to.name == from.name) {
    //     return { selector: to.hash, behavior: 'smooth', offset: {x: 0, y: 25} }
    //   } else {
    //     return new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve({ selector: to.hash, behavior: 'smooth', offset: {x: 0, y: 25} })
    //     }, 350)
    //   })
    //   }     
    // }
    if (savedPosition) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve( savedPosition)
        }, 150)
      })
    }
    if (to.name == from.name) {
          return
        }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 150)
    })
  }
});

export default router;