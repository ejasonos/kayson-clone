<script setup>
import AboutSection from '../components/AboutSection.vue'
import ProductSection from '../components/ProductSection.vue'
import ServiceSection from '../components/ServiceSection.vue'
import TestimonialSection from '../components/TestimonialSection.vue'
import VehicleHireSection from '../components/VehicleHireSection.vue'
</script>

<template>
    <div class="flex flex-col space-y-5">
        <ServiceSection />
        <AboutSection />
        <ProductSection />
        <VehicleHireSection />
        <TestimonialSection />
    </div>
</template>