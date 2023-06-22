import Vue from 'vue'
import VueRouter from 'vue-router'
const Privacy = () => import('../views/Privacy.vue')
const Daycare = () => import('../views/Daycare.vue')
const SignUp = () => import('../views/SignUp.vue')
const NotFound = () => import('../views/NotFound.vue')
const Contact = () => import('../views/Contact.vue')
const Vax = () => import('../views/Vax.vue')
const Jobs = () => import('../views/Jobs.vue')
const Grooming = () => import('../views/Grooming.vue')
const Feedback = () => import('../views/Feedback.vue')
const Explore = () => import('../views/Tour.vue')
const NewOwner = () => import('../views/NewOwner.vue')
const Pawtraits = () => import('../views/Pawtraits.vue')
const Faq = () => import('../views/Faq.vue')
const Training = () => import('../views/Training.vue')
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        redirect: '/home'
    },
    {
        path: '/brisbane',
        redirect: '/home/brisbane'
    },
    {
        path: '/home',
        name: 'New Home',
        component: Home,
        props: true
    },
    {
        path: '/login',
        name: 'Login',
        component: Home
    },
    {
        path: '/login/*',
        redirect: '/login'
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        props: true
    },
    {
        path: '/faq',
        name: 'Faq',
        component: Faq
    },
    {
        path: '/training',
        name: 'Training',
        component: Training
    },
    {
        path: '/register',
        redirect: { name: 'Question' },
        props: true
    },
    {
        path: '/question',
        name: 'Question',
        component: Home,
        props: true
    },
    {
        path: '/explore',
        name: 'Explore',
        component: Explore,
        props: true
    },
    {
        path: '/vaccinations',
        name: 'Vaccinations',
        component: Vax
    },
    {
        path: '/sign-up',
        name: 'Sign-up',
        component: SignUp,
        props: true
    },
    {
        path: '/daycare',
        name: 'Daycare',
        component: Daycare,
        props: true
    },
    {
        path: '/grooming',
        name: 'Grooming',
        component: Grooming,
        props: true
    },
    {
        path: '/jobs',
        name: 'Jobs',
        component: Jobs,
        props: true
    },
    {
        path: '/feedback',
        name: 'Feedback',
        component: Feedback,
        props: true
    },
    {
        path: '/newowner',
        name: 'NewOwner',
        component: NewOwner,
        props: true
    },
    {
        path: '/pawtraits',
        name: 'Pawtraits',
        component: Pawtraits
    },
    {
        path: '/pet-taxi',
        name: 'Taxi',
        component: Home
    },
    {
        path: '/privacy',
        name: 'Privacy',
        component: Privacy
    },
    {
        path: '/404',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: '*',
        redirect: '/404'
    }
]

const router = new VueRouter({
    mode: 'history',
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
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(savedPosition)
                }, 150)
            })
        }
        if (to.name == from.name) {
            return
        }
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ x: 0, y: 0 })
            }, 150)
        })
    }
})

export default router
