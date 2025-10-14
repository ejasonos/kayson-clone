import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import ContactUs from '../views/ContactUs.vue'
import Home from '../views/Home.vue'
import MakeBooking from '../views/MakeBooking.vue'
import OurServices from '../views/OurServices.vue'
import OurVehicles from '../views/OurVehicles.vue'
import TruckVanHire from '../views/TruckVanHire.vue'
// admin page
import AdminPage from '../views/Admin.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home, meta: {title: 'Bus hire services in Lagos from kayson Classic Services'}},
        {path: '/about', name: 'About', component: About, meta: {title: 'Hire a Bus in Lagos from Kayson Classic Services Ltd'}},
        {path: '/contact', name: 'Contact', component: ContactUs, meta: {title: 'Kayson Classic Services | Bus Hire Company in Lagos'}},
        {path: '/booking', name: 'Booking', component: MakeBooking, meta: {title: 'Book your Vehicles in Lagos with Kayson Classic Services'}},
        {path: '/services', name: 'Services', component: OurServices, meta: {title: 'Corporate Transportation, School Transportation and more | Kayson Classic'}},
        {path: '/vehicles', name: 'Vehicles', component: OurVehicles, meta: {title: 'Buses, SUVs, Saloon cars for Hire in Lagos from Kayson Classic'}},
        {path: '/hire', name: 'Hire', component: TruckVanHire, meta: {title: 'Truck & Vah for Hire in Lagos, Nigeria from Kayson Classic Services'}},
        {path: '/admin', name: 'Admin', component: AdminPage, meta: { title: 'The Admin Page'}}
    ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = 'My Vue.js App'; // Default title
  }
  next();
});