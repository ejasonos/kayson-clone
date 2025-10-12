<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import { useWebStore } from "../store/WebStore.js";
const webStore = useWebStore();
</script>
<template>
  <section id="tops" class="relative bg-gray-200 xl:px-20">
    <div class="flex items-center h-fit">
        <Swiper 
      :modules="[Autoplay, Pagination, Navigation]"
      :spaceBetween="30"
      :loop="true"
      :autoplay="{ delay: 2000, disableOnInteraction: false }"
      pagination
      navigation
      class="overflow-hidden">
        <SwiperSlide>
          <img v-bind:src="webStore.services[0].image" class="h-[450px] w-full sobject-cover" />
          <div
            class="absolute bottom-0 mb-4 flex flex-col space-y-3 justify-center items-center"
          >
            <p class="text-green-700 text-2xl xl:text-4xl font-bold uppercase bg-white p-2">
              {{ webStore.services[0].title }}
            </p>
            <span
              class="bg-green-700 text-2xl xl:text-4xl rounded shadow-lg px-4 py-2 text-white font-bold uppercase hover:transition-all hover:scale-105"
              >{{ webStore.services[0].button }}</span
            >
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img v-bind:src="webStore.services[1].image" class="h-[450px] w-full sobject-cover" />
          <div
            class="absolute bottom-0 mb-4 flex flex-col space-y-3 justify-center items-center"
          >
            <p class="text-green-700 text-2xl xl:text-4xl font-bold uppercase bg-white p-2">
              {{ webStore.services[1].title }}
            </p>
            <span
              class="bg-green-700 text-2xl xl:text-4xl rounded shadow-lg px-4 py-2 text-white font-bold uppercase hover:transition-all hover:scale-105"
              >{{ webStore.services[1].button }}</span
            >
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img v-bind:src="webStore.services[2].image" class="h-[450px] w-full sobject-cover" />
          <div
            class="absolute bottom-0 mb-4 flex flex-col space-y-3 justify-center items-center"
          >
            <p class="text-green-700 text-2xl xl:text-4xl font-bold uppercase bg-white p-2">
              {{ webStore.services[2].title }}
            </p>
            <span
              class="bg-green-700 text-2xl xl:text-4xl rounded shadow-lg px-4 py-2 text-white font-bold uppercase hover:transition-all hover:scale-105"
              >{{ webStore.services[2].button }}</span
            >
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
