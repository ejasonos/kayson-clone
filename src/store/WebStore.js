import { defineStore } from 'pinia'

export const useWebStore = defineStore('items', {
    state: () => ({
        mobileMenu: false,
        chatElement: false,
        logo: '/logo-2.png',
        brand: 'Kayson Classic Services',
        developer: 'UBS Digital',
        // Home Page
        services: [
            { id: 'service1', image: '/istockphoto-1303182383-612x612-removebg-preview.png', title: 'Kayson Classic', button: 'Bus Hire Service' },
            { id: 'service2', image: '/istockphoto-1309541953-640x640-removebg-preview.png', title: 'Hiring a bus has never been so easy', button: 'Book a vehicle now' },
            { id: 'service3', image: '/istockphoto-1081816214-612x612-removebg-preview.png', title: 'Choose a Car. Make Booking. ', button: 'Ride.' }
        ],
        vehicleServicesA: [
            {
                image: '/briefcase.svg', title: 'Corporate Transportation', info: `Our corporate transport service includes corporate shuttle
              services, staff bus services, corporate events, conference and
              company annual general meetings`},
            {
                image: '/plane.svg', title: 'Airport Transportation', info: `Our airport transportation services comprise airport pick-up and
              drop-off services between local and international wings and also
              from the wings to any part of Lagos`},
            {
                image: '/person.svg', title: 'School Transport', info: `We offer a school bus service that includes school field trips and
              escort ions and any necessary transport service required for
              schools.`}
        ],
        vehicleServicesB: [
            {
                image: '/gift.svg', title: 'Private & Social Functions', info: `We can provide transport for weddings, burials, memorials,
              engagement and dinner events, reunions, church shuttle services
              etc.`},
            {
                image: '/h.svg',
                title: 'Private & Social Funcitons',
                info: `Our inter-state transport option allows you enjoy any of our other
              services outside Lagos state (except airport transportation).
              Also, we offer commercial passenger transportation from Lagos to
              selected cities in Nigeria`
            },
            {
                image: '/car-alt.svg',
                title: 'Vehicle Leasing',
                info: `We can help with long-term vehicle hire or leasing. This involves
              agreements with a minimum of 6 months, and going up to 2 years.`
            }
        ],
        testimonial: [
            { id: 'testimonial1', name: 'Andy J.', image: '/pexels-photo-1-77x77.jpg', title: '', comment: 'The best ride service in all of Lagos. Check it out!' },
            { id: 'testimonial2', name: 'Ubong E', image: '/pexels-photo-101584-77x77.jpeg', title: 'Cheif Exec.', comment: 'Whoop whoop, Kayson. Let\'s do it again!' },
            { id: 'testimonial3', name: 'John James', image: '/pexels-photo-173295-77x77.jpeg', title: 'Consultant', comment: 'Watch out for Kayson! They takin\' over.' },
            { id: 'testimonial4', name: 'Mr Chukwuma', image: '/pexels-photo-77x77.jpg', title: 'Retiree', comment: 'Family couldn\'t have gone any smoother that what Kayson did for us. Na una biko!' }
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