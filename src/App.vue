<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import ChatNode from "./components/ChatNode.vue";
import Footer from "./components/FooterSection.vue";
</script>

<template>
  <Navbar />
  <router-view class="mt-28" />
  <Footer />
  <ChatNode />
</template>

<style scoped></style>
