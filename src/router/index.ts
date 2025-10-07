import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import ContactUs from '../views/ContactUs.vue'
import Home from '../views/Home.vue'
import MakeBooking from '../views/MakeBooking.vue'
import OurServices from '../views/OurServices.vue'
import OurVehicles from '../views/OurVehicles.vue'
import TruckVanHire from '../views/TruckVanHire.vue'

export const router: Object = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/about', name: 'About', component: About},
        {path: '/contact', name: 'Contact', component: ContactUs},
        {path: '/booking', name: 'Booking', component: MakeBooking},
        {path: '/services', name: 'Services', component: OurServices},
        {path: '/vehicles', name: 'Vehicles', component: OurVehicles},
        {path: '/hire', name: 'Hire', component: TruckVanHire}
    ]
})