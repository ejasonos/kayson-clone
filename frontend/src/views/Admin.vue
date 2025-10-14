<script setup>
import { onMounted } from 'vue'
import { useWebStore } from '../store/WebStore.js'

const webStore = useWebStore()

onMounted(() => {
    webStore.fetchUsers()
})
</script>
<template>
  <nav
    class="mt-40 flex justify-between items-center px-5 m-5 lg:px-10 xl:px-20 h-10 bg-blue-500 text-md font-bold"
  >
    <div>Username</div>
    <div>ICONS</div>
  </nav>
  <ul
    class="flex flex-col justify-center items-center m-5 space-y-5 text-white font-bold rounded-md shadow-md shadow-blue-200"
  >
    <li v-for="user in webStore.users" :key="user._id" class="flex flex-col flex-wrap w-100 p-2 rounded-md shadow-blue-300 shadow-md text-md text-blue-800">
        <div><span class="text-black">Name: </span>{{ user.name }}</div>
        <div><span class="text-black">Email: </span>{{ user.email }}</div>
        <div><span class="text-black">Subject: </span>{{ user.subject }}</div>
        <div><span class="text-black">Message: </span>{{ user.message }}</div>
    </li>
    <li>Item two</li>
    <li>Item three</li>
  </ul>
</template>
