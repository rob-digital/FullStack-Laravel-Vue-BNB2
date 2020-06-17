import VueRouter from 'vue-router'
import Contact from './views/Contact'
import Home from './views/Home'
import Bookables from './bookables/Bookables'
import Bookable from './bookable/Bookable'



const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    } ,
    {
        path: '/contact',
        component: Contact,
        name: 'contact'
    },
       {
        path: '/bookables',
        component: Bookables,
        name: 'bookables'
    },
    {
        path: '/bookable/:id',
        component: Bookable,
        name: 'bookable',
        props: true
    }
    //    {
    //     path: '/bookables',
    //     component: BookableItem,
    //     name: 'bookableItem'
    // }
]


const router = new VueRouter({
    routes,
    mode: 'history'
})
export default router
