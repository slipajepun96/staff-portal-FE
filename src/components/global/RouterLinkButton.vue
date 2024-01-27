<template>
    <router-link class=" rounded-lg text-white font-semibold hover:text-white py-1.5 px-3 border truncate" 
    :class="[color ? 'hover:bg-'+color+'-500 bg-'+color+'-600 border-'+color+'-500':'']"
    :to="url">{{btnText}}</router-link>
                
</template>
 
<script setup>
    import { defineProps,toRefs } from 'vue';
    const props = defineProps({
        btnText: String,
        url:{ type: String, default: ''},
        color:String
    })

    const {btnText,url,color}=toRefs(props)


</script>