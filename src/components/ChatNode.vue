<script setup lang="ts">
import { useWebStore } from "../store/WebStore.js";
const webStore = useWebStore();
</script>
<template>
  <div class="fixed right-10 bottom-10 w-fit h-fit">
    <div class="flex space-x-2 justify-end">
      <div class="rounded-md p-2 bg-gray-300 text-sm">
        Need Help?
        <span class="font-semibold"> Chat with us </span>
      </div>
      <div
        class="h-10 w-10 rounded-full bg-green-500 text-center"
      >
      <div v-on:click="webStore.showChatElement()">
        <img
          v-if="webStore.chatElement === false"
          src="../assets/whatsapp.svg"
          class="h-full w-full p-1 filter invert-90"
        />
      </div>
      <div v-on:click="webStore.showChatElement()">
         <p
          v-if="webStore.chatElement === true"
          
          src="../assets/whatsapp.svg"
          class="cursor-default text-2xl text-white hover:font-bold hover:text-gray-300"
        >
          x
    </p>
      </div>
       
      </div>
    </div>
    <div
      v-if="webStore.chatElement === true"
      class="absolute right-0 bottom-0 mb-15 flex flex-col w-fit bg-white rounded-md"
    >
      <div
        class="w-[300px] bg-green-500 flex items-center space-x-1.5 p-3 rounded-tl-md rounded-tr-md"
      >
        <img src="../assets/whatsapp.svg" class="h-10 w-10 filter invert-90" />
        <div class="flex flex-col space-y-1.5">
          <p class="text-white text-md font-semibold">Start a Conversation</p>
          <p class="text-white text-sm font-normal">
            Hi! Chat with us on <span class="font-bold">WhatsApp!</span>
          </p>
        </div>
      </div>
      <div
        class="w-full p-3 rounded-bl-md rounded-br-md flex flex-col space-y-3 shadow-md"
      >
        <p class="text-gray-500 text-sm font-normal">
          The team typically replies in a few minutes
        </p>
        <div class="flex overflow-hidden rounded-md h-[100px] w-auto bg-white">
          <div class="h-full w-1 border bg-green-600 border-green-600"></div>
          <a
            class="flex justify-end items-center h-full w-full p- bg-gray-200"
            href="https://api.whatsapp.com/send?phone=2349080806095&text=Welcome%20to%20Kayson%20Classic%20Services."
            ><img src="../assets/whatsapp.svg" class="h-20 w-auto filter invert-50"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>
