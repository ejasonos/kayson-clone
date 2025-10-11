<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { useWebStore } from "../store/WebStore.js";
const webStore = useWebStore();
</script>
<template>
  <section class="relative flex flex-col space-y-10 p-10 bg-gray-200 w-[100%]">
    <div
      class="text-lg text-black text-center font-bold uppercase self-center w-fit flex flex-col justify-center items-center gap-y-2"
    >
      What people are saying about us
      <div
        class="h-1 w-1/2 border border-green-600 bg-green-600 rounded-full"
      ></div>
    </div>

    <div class="flex">
      <Swiper
        :modules="[Autoplay, Pagination, Navigation]"
        :spaceBetween="30"
        :loop="true"
        :autoplay="{ delay: 2000, disableOnInteraction: false }"
        pagination
        navigation
        class="overflow-hidden"
      >
        <!-- Items from the store-->
        <SwiperSlide>
          <p class="text-md text-gray-600 text-center font-normal">
            {{ webStore.testimonial[0].comment }}
          </p>
          <div class="flex justify-center">
            <div class="float-center h-15 w-15 rounded-full overflow-hidden">
              <img
                class="h-full w-full"
                v-bind:src="webStore.testimonial[0].image"
              />
            </div>
          </div>
          <div class="flex flex-col">
            <p class="text-md font-bold text-black text-center">
              {{ webStore.testimonial[0].name }}
            </p>
            <p class="text-sm font-thin text-gray-600 text-center">
              {{ webStore.testimonial[0].title }}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <p class="text-md text-gray-600 text-center font-normal">
            {{ webStore.testimonial[1].comment }}
          </p>
          <div class="flex justify-center">
            <div class="float-center h-15 w-15 rounded-full overflow-hidden">
              <img
                class="h-full w-full"
                v-bind:src="webStore.testimonial[1].image"
              />
            </div>
          </div>
          <div class="flex flex-col">
            <p class="text-md font-bold text-black text-center">
              {{ webStore.testimonial[1].name }}
            </p>
            <p class="text-sm font-thin text-gray-600 text-center">
              {{ webStore.testimonial[1].title }}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <p class="text-md text-gray-600 text-center font-normal">
            {{ webStore.testimonial[2].comment }}
          </p>
          <div class="flex justify-center">
            <div class="float-center h-15 w-15 rounded-full overflow-hidden">
              <img
                class="h-full w-full"
                v-bind:src="webStore.testimonial[2].image"
              />
            </div>
          </div>
          <div class="flex flex-col">
            <p class="text-md font-bold text-black text-center">
              {{ webStore.testimonial[2].name }}
            </p>
            <p class="text-sm font-thin text-gray-600 text-center">
              {{ webStore.testimonial[2].title }}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <p class="text-md text-gray-600 text-center font-normal">
            {{ webStore.testimonial[3].comment }}
          </p>
          <div class="flex justify-center">
            <div class="float-center h-15 w-15 rounded-full overflow-hidden">
              <img
                class="h-full w-full"
                v-bind:src="webStore.testimonial[3].image"
              />
            </div>
          </div>
          <div class="flex flex-col">
            <p class="text-md font-bold text-black text-center">
              {{ webStore.testimonial[3].name }}
            </p>
            <p class="text-sm font-thin text-gray-600 text-center">
              {{ webStore.testimonial[3].title }}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
