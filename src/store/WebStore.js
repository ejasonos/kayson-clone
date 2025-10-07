import { defineStore } from 'pinia'

export const useWebStore = defineStore('items', {
    state: () => ({
        mobileMenu: false,
        chatElement: false,
        logo: '/logo-2.png',
        brand: 'Kayson Classic Services',
        developer: 'UBS Digital',
        services: [
            {id: 'service1', image: '/istockphoto-1303182383-612x612-removebg-preview.png', title: 'Kayson Classic', button: 'Bus Hire Service'},
            {id: 'service2', image: '/istockphoto-1309541953-640x640-removebg-preview.png', title: 'Hiring a bus has never been so easy', button: 'Book a vehicle now'},
            {id: 'service3', image: '/istockphoto-1081816214-612x612-removebg-preview.png', title: 'Choose a Car. Make Booking. ', button: 'Ride.'}
        ],
        testimonial: [
            {id: 'testimonial1', name: 'Andy J.', image: '/pexels-photo-1-77x77.jpg', title: '', comment: 'The best ride service in all of Lagos. Check it out!'},
            {id: 'testimonial2', name: 'Ubong E', image: '/pexels-photo-101584-77x77.jpeg', title: 'Cheif Exec.', comment: 'Whoop whoop, Kayson. Let\'s do it again!'},
            {id: 'testimonial3', name: 'John James', image: '/pexels-photo-173295-77x77.jpeg', title: 'Consultant', comment: 'Watch out for Kayson! They takin\' over.'},
            {id: 'testimonial4', name: 'Mr Chukwuma', image: '/pexels-photo-77x77.jpg', title: 'Retiree', comment: 'Family couldn\'t have gone any smoother that what Kayson did for us. Na una biko!'}
        ]
    }),
    getters: {
        showMobileMenu: (state) => {
            if (state.mobileMenu === false) {
                state.mobileMenu = true
            } else if (state.mobileMenu === true) {
                state.mobileMenu = false
            }
        },
        showChatElement: (state) => {
            if (state.chatElement === false) {
                state.chatElement = true
            } else if (state.chatElement === true) {
                state.chatElement = false
            }
        }
    }
})