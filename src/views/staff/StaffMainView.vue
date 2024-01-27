<template>
    <NavbarMain/>
    <div class="p-3 sm:ml-64 bg-gray-50 h-screen mt-14">
        <RouterView/>
    </div>
</template>

<script setup>
import {RouterView, RouterLink} from 'vue-router'
import NavbarMain from '/src/components/global/NavbarMain.vue'
import MainpageDashboard from '/src/components/partials/MainpageDashboard.vue'
</script>