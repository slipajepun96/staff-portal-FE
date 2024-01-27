<template>
    <div>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{label}}</label>
        <input :placeholder="placeholder" :type="inputType" :name="name" v-model="inputComputed" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required>
    </div>
    <span v-if="error" class="text-red-500 text-xs">{{ error }}</span>
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