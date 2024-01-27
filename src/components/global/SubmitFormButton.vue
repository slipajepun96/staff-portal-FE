<template>
 <button type="submit" class="w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="$emit('submit',true)">{{ btnText }}</button>
</template>

<script setup>
    import {defineProps,toRefs} from 'vue';
    const props=defineProps({
        btnText:String
    })

    const {btnText}=toRefs(props)
</script>