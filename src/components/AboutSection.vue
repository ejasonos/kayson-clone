<script setup>
// import { lightDarkMode } from "../store/WebStore.js"
</script>
<template>
    <section class="flex flex-col my-20">
        <div class="flex flex-col justify-center items-center gap-y-5">
            <div class="text-2xl xl:text-3xl font-bold text-black text-center uppercase space-y-4 flex flex-col justify-center items-center">
                <p>INTRODUCING <span class="text-green-600">KAYSON CLASSIC SERVICES<span class="text-black">,</span> YOUR COMPLETE</span> BUS HIRE SOLUTION</p>
                <div class="h-1 w-50 border border-green-600 bg-green-600 rounded-full"></div>
            </div>
            <p class="w-4/5 text-lg text-gray-900 text-center">Kayson Classic is a service oriented company aimed at building optimal service required standards aimed at achieving total customer satisfaction experience. Established in 2009 and fully functional in 2011, Kayson Classic aimed at providing exceptional customer centric services directed at meeting and solving basic day to day needs.</p>
            <RouterLink :to="{name: 'About'}" class="text-center text-green-600 text-lg cursor-default">More About Us</RouterLink>
        </div>        
    </section>
</template>