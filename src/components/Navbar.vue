<script setup>
import { ref } from 'vue'
import { useWebStore } from "../store/WebStore.js";
const webStore = useWebStore();
let mobileMenu = ref(false)
</script>

<template>
  <section class="fixed top-0 left-0 w-full bg-white z-10 shadow-lg">
    <nav class="flex items-center py-3 px-7 space-x-2 xl:pl-22">
      <div class="text-sm text-gray-400 gap-x-1 flex items-center">
        <img src="/phone.svg" class="h-3 w-3" />Call Us: 08034317041
      </div>
      <div class="text-sm text-gray-400 gap-x-1 flex items-center">
        <img src="/message.svg" class="h-3 w-3" />info@kayson.com.ng
      </div>
    </nav>
    <header class="flex p-5 xl:px-0 justify-between xl:justify-around">
      <img v-bind:src="webStore.logo" class="h-8 w-auto" />
      <div 
          @click="(mobileMenu === false ? mobileMenu = true : mobileMenu = false)">
        <img
          src="/bars.svg"
          class="h-9 w-9 bg-green-600 p-2 hover:bg-green-400 xl:hidden"
        />
      </div>
      <nav class="hidden xl:flex justify-end xl:gap-x-4">
        <!-- Desktop screen menu -->
        <RouterLink
          v-bind:to="{ name: 'Home' }"
          class="text-md text-gray-400 font-semibold uppercase underline underline-offset-15 decoration-transparent focus:decoration-inherit hover:text-green-600"
          >Home</RouterLink
        >
        <RouterLink
          v-bind:to="{ name: 'About' }"
          class="text-md text-gray-400 font-semibold uppercase underline underline-offset-15 decoration-transparent focus:decoration-inherit hover:text-green-600"
          >About Us</RouterLink
        >
        <RouterLink
          v-bind:to="{ name: 'Services' }"
          class="text-md text-gray-400 font-semibold uppercase underline underline-offset-15 decoration-transparent focus:decoration-inherit hover:text-green-600"
          >Our Services
        </RouterLink>
        <RouterLink
          v-bind:to="{ name: 'Hire' }"
          class="text-md text-gray-400 font-semibold uppercase underline underline-offset-15 decoration-transparent focus:decoration-inherit hover:text-green-600"
          >Truck & Van Hire
        </RouterLink>
        <RouterLink
          v-bind:to="{ name: 'Vehicles' }"
          class="text-md text-gray-400 font-semibold uppercase underline underline-offset-15 decoration-transparent focus:decoration-inherit hover:text-green-600"
          >Our Vehicles
        </RouterLink>
        <RouterLink
          v-bind:to="{ name: 'Booking' }"
          class="text-md text-gray-400 font-semibold uppercase underline underline-offset-15 decoration-transparent focus:decoration-inherit hover:text-green-600"
          >Make A Booking
        </RouterLink>
        <RouterLink
          v-bind:to="{ name: 'Contact' }"
          class="text-md text-gray-400 font-semibold uppercase underline underline-offset-15 decoration-transparent focus:decoration-inherit hover:text-green-600"
          >Contact Us
        </RouterLink>
      </nav>
      <nav
        v-if="mobileMenu === true"
        class="bg-white absolute right-0 flex flex-col w-[60%] z-10 rounded-lg rounded-t-none pr-5 overflow-hidden"
      >
        <!-- Mobile screen menu setting-->
        <div
          v-on:click="mobileMenu === true ? mobileMenu = false : mobileMenu = true"
          class="self-end text-xl text-white py-0 px-3.5 bg-green-600 border-[1px] border-gray-400 w-fit h-fit hover:bg-green-200 hover:text-gray-800 cursor-default mb-1"
        >
          x
        </div>
        <RouterLink
          v-bind:to="{ name: 'Home' }"
          class="text-lg xl:text-xl text-gray-400 font-semibold px-3 py-1.5 border-[1px] border-b-0 border-gray-400 hover:bg-green-600 hover:text-white uppercase rounded-t-lg"
        >
          Home</RouterLink
        >
        <RouterLink
          v-bind:to="{ name: 'About' }"
          class="text-lg xl:text-xl text-gray-400 font-semibold p-3 py-1.5 border-[1px] border-b-0 border-gray-400 hover:bg-green-600 hover:text-white uppercase"
        >
          About Us</RouterLink
        >
        <RouterLink
          v-bind:to="{ name: 'Services' }"
          class="text-lg xl:text-xl text-gray-400 font-semibold p-3 py-1.5 border-[1px] border-b-0 border-gray-400 hover:bg-green-600 hover:text-white uppercase"
        >
          Our Services</RouterLink
        >
        <RouterLink
          v-bind:to="{ name: 'Hire' }"
          class="text-lg xl:text-xl text-gray-400 font-semibold p-3 py-1.5 border-[1px] border-b-0 border-gray-400 hover:bg-green-600 hover:text-white uppercase"
        >
          Truck & Van Hire</RouterLink
        >
        <RouterLink
          v-bind:to="{ name: 'Vehicles' }"
          class="text-lg xl:text-xl text-gray-400 font-semibold p-3 py-1.5 border-[1px] border-b-0 border-gray-400 hover:bg-green-600 hover:text-white uppercase"
        >
          Our Vehicles</RouterLink
        >
        <RouterLink
          v-bind:to="{ name: 'Booking' }"
          class="text-lg xl:text-xl text-gray-400 font-semibold p-3 py-1.5 border-[1px] border-b-0 border-gray-400 hover:bg-green-600 hover:text-white uppercase"
        >
          Make A Booking</RouterLink
        >
        <RouterLink
          v-bind:to="{ name: 'Contact' }"
          class="text-lg xl:text-xl text-gray-400 font-semibold p-3 py-1.5 border-[1px] border-gray-400 hover:bg-green-600 hover:text-white uppercase rounded-b-lg"
        >
          Contact Us</RouterLink
        >
      </nav>
    </header>
  </section>
</template>
<style scoped>
.router-link-active {
  color: green;
}
</style>
