<template>
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{label}}</label>
    <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">

</template>
<script setup>
    import { defineEmits,toRefs,computed } from 'vue';
    const emit=defineEmits(['update:input'])
    const props = defineProps({
        label: String,
        labelColor: {type: Boolean, default: true},
        input: String,
        placeholder: {type: String, default: ''},
        inputType: String,
        error: String,
        name: String,
    })

    const {label, input, placeholder, error, name}=toRefs(props)

    const inputComputed=computed({
        get: () =>input.value,
        set: (val) => emit('update:input',val)
    })


</script>
