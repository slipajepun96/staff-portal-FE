<template>
    <router-link class="ms-auto text-sm text-gray-700 hover:underline dark:text-white-500" :to="url">{{ linkText }}</router-link>
</template>

<script setup>
import { defineProps,toRefs } from 'vue';
const props=defineProps({
    linkText:String,
    url:{ type:String, default: ''},
})
const {linkText,url}=toRefs(props)
</script>