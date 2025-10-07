<script setup>
import { ref } from "vue";

// BUSES & VANS
let moreinfobus1 = ref(false);
let moreinfobus2 = ref(false);
let moreinfobus3 = ref(false);
let moreinfobus4 = ref(false);
let moreinfobus5 = ref(false);

// SUVS
let moreinfosuv1 = ref(false);
let moreinfosuv2 = ref(false);
let moreinfosuv3 = ref(false);

// SALOON CARS
let moreinfosaloon1 = ref(false);
let moreinfosaloon2 = ref(false);
</script>
<template>
  <section class="flex flex-col p-10 xl:px-20">
    <div id="tops" class="grid grid-cols-3">
      <ul class="flex flex-col">
        <li class="flex flex-col space-y-2 w-full justify-center">
          <div class="h-[120px] w-full flex justify-center items-center">
            <img
              src="/hiace1-1024x593.png"
              class="h-full w-full object-contain scale-110 lg:scale-140"
            />
          </div>
          <div class="flex flex-col">
            <div class="flex flex-col space-y-2 w-fit">
              <p class="text-md text-gray-800 font-bold uppercase">
                Buses & Vans
              </p>
              <div class="h-0.5 rounded-full bg-green-500 w-1/2"></div>
            </div>
            <div class="flex flex-col gap-y-2">
              <div class="mt-7 flex items-center space-x-3">
                <p
                  v-if="moreinfobus1 === true"
                  v-on:click="
                    moreinfobus1 === false ? (moreinfobus1 = true) : (moreinfobus1 = false)
                  "
                  class="px-3 py-0.5 bg-green-600 w-fit text-white font-bold text-2xl cursor-default"
                >
                  -
                </p>
                <p
                  v-if="moreinfobus1 === false"
                  v-on:click="
                    moreinfobus1 === false ? (moreinfobus1 = true) : (moreinfobus1 = false)
                  "
                  class="px-3 py-0.5 bg-green-600 w-fit text-white font-bold text-2xl cursor-default"
                >
                  +
                </p>
                <p class="text-sm font-bold text-gray-900 uppercase">
                  Hyundai h1
                </p>
              </div>
              <article
                v-if="moreinfobus1 === true"
                class="text-xs text-gray-900/50 pl-3"
              >
                With nine seats, the H-1 Bus has all the space you need. The 842
                itres of luggage space and superb interiour enhanced by
                flush-fitting side windows for grerat visibility, gives you the
                peace of mind that your journey will be a success. The new H1
                Bus variant also boasts an interior with a leather steering
                wheel and gear knob as well as glove box cooling for extra
                comfort on the road.
              </article>
              <div
                v-if="moreinfobus1 === true"
                class="grid grid-cols-3 justify-center items-center p-1 space-y-1 bg-gray-300"
              >
                <img src="/hy-1.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-2.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-3.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-4.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-5.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-6.jpg" class="h-20 w-20" alt="car interior" />
              </div>
            </div>
             <div class="flex flex-col gap-y-2">
              <div class="mt-7 flex items-center space-x-3">
                <p
                  v-if="moreinfobus2 === true"
                  v-on:click="
                    moreinfobus2 === false ? (moreinfobus2 = true) : (moreinfobus2 = false)
                  "
                  class="px-3 py-0.5 bg-green-600 w-fit text-white font-bold text-2xl cursor-default"
                >
                  -
                </p>
                <p
                  v-if="moreinfobus2 === false"
                  v-on:click="
                    moreinfobus2 === false ? (moreinfobus2 = true) : (moreinfobus2 = false)
                  "
                  class="px-3 py-0.5 bg-green-600 w-fit text-white font-bold text-2xl cursor-default"
                >
                  +
                </p>
                <p class="text-sm font-bold text-gray-900 uppercase">
                  toyota coaster bus
                </p>
              </div>
              <article
                v-if="moreinfobus2 === true"
                class="text-xs text-gray-900/50 pl-3"
              >
                With nine seats, the H-1 Bus has all the space you need. The 842
                itres of luggage space and superb interiour enhanced by
                flush-fitting side windows for grerat visibility, gives you the
                peace of mind that your journey will be a success. The new H1
                Bus variant also boasts an interior with a leather steering
                wheel and gear knob as well as glove box cooling for extra
                comfort on the road.
              </article>
              <div
                v-if="moreinfobus2 === true"
                class="grid grid-cols-3 justify-center items-center p-1 space-y-1 bg-gray-300"
              >
                <img src="/hy-1.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-2.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-3.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-4.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-5.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-6.jpg" class="h-20 w-20" alt="car interior" />
              </div>
            </div>
             <div class="flex flex-col gap-y-2">
              <div class="mt-7 flex items-center space-x-3">
                <p
                  v-if="moreinfobus3 === true"
                  v-on:click="
                    moreinfobus3 === false ? (moreinfobus3 = true) : (moreinfobus3 = false)
                  "
                  class="px-3 py-0.5 bg-green-600 w-fit text-white font-bold text-2xl cursor-default"
                >
                  -
                </p>
                <p
                  v-if="moreinfobus3 === false"
                  v-on:click="
                    moreinfobus3 === false ? (moreinfobus3 = true) : (moreinfobus3 = false)
                  "
                  class="px-3 py-0.5 bg-green-600 w-fit text-white font-bold text-2xl cursor-default"
                >
                  +
                </p>
                <p class="text-sm font-bold text-gray-900 uppercase">
                  toyota hiace (14/15 seater)
                </p>
              </div>
              <article
                v-if="moreinfobus3 === true"
                class="text-xs text-gray-900/50 pl-3"
              >
                With nine seats, the H-1 Bus has all the space you need. The 842
                itres of luggage space and superb interiour enhanced by
                flush-fitting side windows for grerat visibility, gives you the
                peace of mind that your journey will be a success. The new H1
                Bus variant also boasts an interior with a leather steering
                wheel and gear knob as well as glove box cooling for extra
                comfort on the road.
              </article>
              <div
                v-if="moreinfobus3 === true"
                class="grid grid-cols-3 justify-center items-center p-1 space-y-1 bg-gray-300"
              >
                <img src="/hy-1.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-2.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-3.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-4.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-5.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-6.jpg" class="h-20 w-20" alt="car interior" />
              </div>
            </div>
             <div class="flex flex-col gap-y-2">
              <div class="mt-7 flex items-center space-x-3">
                <p
                  v-if="moreinfobus4 === true"
                  v-on:click="
                    moreinfobus4 === false ? (moreinfobus4 = true) : (moreinfobus4 = false)
                  "
                  class="px-3 py-0.5 bg-green-600 w-fit text-white font-bold text-2xl cursor-default"
                >
                  -
                </p>
                <p
                  v-if="moreinfobus4 === false"
                  v-on:click="
                    moreinfobus4 === false ? (moreinfobus4 = true) : (moreinfobus4 = false)
                  "
                  class="px-3 py-0.5 bg-green-600 w-fit text-white font-bold text-2xl cursor-default"
                >
                  +
                </p>
                <p class="text-sm font-bold text-gray-900 uppercase">
                  toyota hilux
                </p>
              </div>
              <article
                v-if="moreinfobus1 === true"
                class="text-xs text-gray-900/50 pl-3"
              >
                With nine seats, the H-1 Bus has all the space you need. The 842
                itres of luggage space and superb interiour enhanced by
                flush-fitting side windows for grerat visibility, gives you the
                peace of mind that your journey will be a success. The new H1
                Bus variant also boasts an interior with a leather steering
                wheel and gear knob as well as glove box cooling for extra
                comfort on the road.
              </article>
              <div
                v-if="moreinfobus4 === true"
                class="grid grid-cols-3 justify-center items-center p-1 space-y-1 bg-gray-300"
              >
                <img src="/hy-1.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-2.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-3.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-4.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-5.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-6.jpg" class="h-20 w-20" alt="car interior" />
              </div>
            </div>
             <div class="flex flex-col gap-y-2">
              <div class="mt-7 flex items-center space-x-3">
                <p
                  v-if="moreinfobus5 === true"
                  v-on:click="
                    moreinfobus5 === false ? (moreinfobus5 = true) : (moreinfobus5 = false)
                  "
                  class="px-3 py-0.5 bg-green-600 w-fit text-white font-bold text-2xl cursor-default"
                >
                  -
                </p>
                <p
                  v-if="moreinfobus5 === false"
                  v-on:click="
                    moreinfobus5 === false ? (moreinfobus5 = true) : (moreinfobus5 = false)
                  "
                  class="px-3 py-0.5 bg-green-600 w-fit text-white font-bold text-2xl cursor-default"
                >
                  +
                </p>
                <p class="text-sm font-bold text-gray-900 uppercase">
                  toyota sienna
                </p>
              </div>
              <article
                v-if="moreinfobus5 === true"
                class="text-xs text-gray-900/50 pl-3"
              >
                With nine seats, the H-1 Bus has all the space you need. The 842
                itres of luggage space and superb interiour enhanced by
                flush-fitting side windows for grerat visibility, gives you the
                peace of mind that your journey will be a success. The new H1
                Bus variant also boasts an interior with a leather steering
                wheel and gear knob as well as glove box cooling for extra
                comfort on the road.
              </article>
              <div
                v-if="moreinfobus5 === true"
                class="grid grid-cols-3 justify-center items-center p-1 space-y-1 bg-gray-300"
              >
                <img src="/hy-1.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-2.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-3.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-4.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-5.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-6.jpg" class="h-20 w-20" alt="car interior" />
              </div>
            </div>
          </div>
        </li>
      </ul>
<ul class="flex flex-col">
        <li class="flex flex-col space-y-2 w-full justify-center">
          <div class="h-[120px] w-full flex justify-center items-center">
            <img
              src="/prado.png"
              class="h-full w-full object-contain scale-120 lg:scale-140"
            />
          </div>
          <div class="flex flex-col">
            <div class="flex flex-col space-y-2 w-fit">
              <p class="text-md text-gray-800 font-bold uppercase">
                suvs
              </p>
              <div class="h-0.5 rounded-full bg-green-500 w-1/2"></div>
            </div>
            <div class="flex flex-col gap-y-2">
              <div class="mt-7 flex items-center space-x-3">
                <p
                  v-if="moreinfosuv1 === true"
                  v-on:click="
                    moreinfosuv1 === false ? (moreinfosuv1 = true) : (moreinfosuv1 = false)
                  "
                  class="px-3 py-0.5 bg-green-600 w-fit text-white font-bold text-2xl cursor-default"
                >
                  -
                </p>
                <p
                  v-if="moreinfosuv1 === false"
                  v-on:click="
                    moreinfosuv1 === false ? (moreinfosuv1 = true) : (moreinfosuv1 = false)
                  "
                  class="px-3 py-0.5 bg-green-600 w-fit text-white font-bold text-2xl cursor-default"
                >
                  +
                </p>
                <p class="text-sm font-bold text-gray-900 uppercase">
                  toyota prado
                </p>
              </div>
              <article
                v-if="moreinfosuv1 === true"
                class="text-xs text-gray-900/50 pl-3"
              >
                With nine seats, the H-1 Bus has all the space you need. The 842
                itres of luggage space and superb interiour enhanced by
                flush-fitting side windows for grerat visibility, gives you the
                peace of mind that your journey will be a success. The new H1
                Bus variant also boasts an interior with a leather steering
                wheel and gear knob as well as glove box cooling for extra
                comfort on the road.
              </article>
              <div
                v-if="moreinfosuv1 === true"
                class="grid grid-cols-3 justify-center items-center p-1 space-y-1 bg-gray-300"
              >
                <img src="/hy-1.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-2.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-3.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-4.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-5.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-6.jpg" class="h-20 w-20" alt="car interior" />
              </div>
            </div>
            <div class="flex flex-col gap-y-2">
              <div class="mt-7 flex items-center space-x-3">
                <p
                  v-if="moreinfosuv2 === true"
                  v-on:click="
                    moreinfosuv2 === false ? (moreinfosuv2 = true) : (moreinfosuv2 = false)
                  "
                  class="px-3 py-0.5 bg-green-600 w-fit text-white font-bold text-2xl cursor-default"
                >
                  -
                </p>
                <p
                  v-if="moreinfosuv2 === false"
                  v-on:click="
                    moreinfosuv2 === false ? (moreinfosuv2 = true) : (moreinfosuv2 = false)
                  "
                  class="px-3 py-0.5 bg-green-600 w-fit text-white font-bold text-2xl cursor-default"
                >
                  +
                </p>
                <p class="text-sm font-bold text-gray-900 uppercase">
                  toyota landcruiser
                </p>
              </div>
              <article
                v-if="moreinfosuv2 === true"
                class="text-xs text-gray-900/50 pl-3"
              >
                With nine seats, the H-1 Bus has all the space you need. The 842
                itres of luggage space and superb interiour enhanced by
                flush-fitting side windows for grerat visibility, gives you the
                peace of mind that your journey will be a success. The new H1
                Bus variant also boasts an interior with a leather steering
                wheel and gear knob as well as glove box cooling for extra
                comfort on the road.
              </article>
              <div
                v-if="moreinfosuv2 === true"
                class="grid grid-cols-3 justify-center items-center p-1 space-y-1 bg-gray-300"
              >
                <img src="/hy-1.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-2.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-3.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-4.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-5.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-6.jpg" class="h-20 w-20" alt="car interior" />
              </div>
            </div>
            <div class="flex flex-col gap-y-2">
              <div class="mt-7 flex items-center space-x-3">
                <p
                  v-if="moreinfosuv3 === true"
                  v-on:click="
                    moreinfosuv3 === false ? (moreinfosuv3 = true) : (moreinfosuv3 = false)
                  "
                  class="px-3 py-0.5 bg-green-600 w-fit text-white font-bold text-2xl cursor-default"
                >
                  -
                </p>
                <p
                  v-if="moreinfosuv3 === false"
                  v-on:click="
                    moreinfosuv3 === false ? (moreinfosuv3 = true) : (moreinfosuv3 = false)
                  "
                  class="px-3 py-0.5 bg-green-600 w-fit text-white font-bold text-2xl cursor-default"
                >
                  +
                </p>
                <p class="text-sm font-bold text-gray-900 uppercase">
                  toyota highlander
                </p>
              </div>
              <article
                v-if="moreinfosuv3 === true"
                class="text-xs text-gray-900/50 pl-3"
              >
                With nine seats, the H-1 Bus has all the space you need. The 842
                itres of luggage space and superb interiour enhanced by
                flush-fitting side windows for grerat visibility, gives you the
                peace of mind that your journey will be a success. The new H1
                Bus variant also boasts an interior with a leather steering
                wheel and gear knob as well as glove box cooling for extra
                comfort on the road.
              </article>
              <div
                v-if="moreinfosuv3 === true"
                class="grid grid-cols-3 justify-center items-center p-1 space-y-1 bg-gray-300"
              >
                <img src="/hy-1.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-2.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-3.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-4.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-5.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-6.jpg" class="h-20 w-20" alt="car interior" />
              </div>
            </div>
          </div>

        </li>
      </ul>
<ul class="flex flex-col">
        <li class="flex flex-col space-y-2 w-full justify-center">
          <div class="h-[120px] w-full flex justify-center items-center">
            <img
              src="/corolla.png"
              class="h-full w-full object-contain scale-120 lg:scale-140"
            />
          </div>
          <div class="flex flex-col">
            <div class="flex flex-col space-y-2 w-fit">
              <p class="text-md text-gray-800 font-bold uppercase">
                saloon cars
              </p>
              <div class="h-0.5 rounded-full bg-green-500 w-1/2"></div>
            </div>
            <div class="flex flex-col gap-y-2">
              <div class="mt-7 flex items-center space-x-3">
                <p
                  v-if="moreinfosaloon1 === true"
                  v-on:click="
                    moreinfosaloon1 === false ? (moreinfosaloon1 = true) : (moreinfosaloon1 = false)
                  "
                  class="px-3 py-0.5 bg-green-600 w-fit text-white font-bold text-2xl cursor-default"
                >
                  -
                </p>
                <p
                  v-if="moreinfosaloon1 === false"
                  v-on:click="
                    moreinfosaloon1 === false ? (moreinfosaloon1 = true) : (moreinfosaloon1 = false)
                  "
                  class="px-3 py-0.5 bg-green-600 w-fit text-white font-bold text-2xl cursor-default"
                >
                  +
                </p>
                <p class="text-sm font-bold text-gray-900 uppercase">
                  Toyota corolla
                </p>
              </div>
              <article
                v-if="moreinfosaloon1 === true"
                class="text-xs text-gray-900/50 pl-3"
              >
                With nine seats, the H-1 Bus has all the space you need. The 842
                itres of luggage space and superb interiour enhanced by
                flush-fitting side windows for grerat visibility, gives you the
                peace of mind that your journey will be a success. The new H1
                Bus variant also boasts an interior with a leather steering
                wheel and gear knob as well as glove box cooling for extra
                comfort on the road.
              </article>
              <div
                v-if="moreinfosaloon1 === true"
                class="grid grid-cols-3 justify-center items-center p-1 space-y-1 bg-gray-300"
              >
                <img src="/hy-1.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-2.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-3.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-4.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-5.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-6.jpg" class="h-20 w-20" alt="car interior" />
              </div>
            </div>
            <div class="flex flex-col gap-y-2">
              <div class="mt-7 flex items-center space-x-3">
                <p
                  v-if="moreinfosaloon2 === true"
                  v-on:click="
                    moreinfosaloon2 === false ? (moreinfosaloon2 = true) : (moreinfosaloon2 = false)
                  "
                  class="px-3 py-0.5 bg-green-600 w-fit text-white font-bold text-2xl cursor-default"
                >
                  -
                </p>
                <p
                  v-if="moreinfosaloon2 === false"
                  v-on:click="
                    moreinfosaloon2 === false ? (moreinfosaloon2 = true) : (moreinfosaloon2 = false)
                  "
                  class="px-3 py-0.5 bg-green-600 w-fit text-white font-bold text-2xl cursor-default"
                >
                  +
                </p>
                <p class="text-sm font-bold text-gray-900 uppercase">
                  kia cerato
                </p>
              </div>
              <article
                v-if="moreinfosaloon2 === true"
                class="text-xs text-gray-900/50 pl-3"
              >
                With nine seats, the H-1 Bus has all the space you need. The 842
                itres of luggage space and superb interiour enhanced by
                flush-fitting side windows for grerat visibility, gives you the
                peace of mind that your journey will be a success. The new H1
                Bus variant also boasts an interior with a leather steering
                wheel and gear knob as well as glove box cooling for extra
                comfort on the road.
              </article>
              <div
                v-if="moreinfosaloon2 === true"
                class="grid grid-cols-3 justify-center items-center p-1 space-y-1 bg-gray-300"
              >
                <img src="/hy-1.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-2.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-3.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-4.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-5.jpg" class="h-20 w-20" alt="car interior" />
                <img src="/hy-6.jpg" class="h-20 w-20" alt="car interior" />
              </div>
            </div>
          </div>
          
        </li>
      </ul>
    </div>
    <div class="text-center text-lg text-white font-bold p-5 bg-green-800 hover:bg-gray-800 mt-10">HAPPY WITH OUR VEHICLES? GO AHEAD AND BOOK YOUR RIDE TODAY.</div>
  </section>
</template>
