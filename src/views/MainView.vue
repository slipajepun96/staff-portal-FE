<template>
<NavbarMain/>
    <div class="p-3 sm:ml-64 bg-gray-50 w-full h-screen mt-14">
        <span class="font-bold text-lg">Selamat Pagi, Umar Qayyum bin Zainal</span>
        <MainpageDashboard/>
    </div>
    <RouterView/>

</template>
<script setup>
import {RouterView} from 'vue-router'
import NavbarMain from '../components/global/NavbarMain.vue'
import MainpageDashboard from '/src/components/partials/MainpageDashboard.vue'
</script>

