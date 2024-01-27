<template>
    <div class="w-full md:h-screen bg-white md:bg-gray-50 flex justify-center items-center">
        

        <div class="w-full md:max-w-sm p-4 md:p-4  bg-white md:border md:border-gray-200 md:rounded-lg md:shadow md:p-6 md:p-4 dark:bg-gray-800 dark:border-gray-700">
            
            <h4 class="text-xl bold font-bold text-gray-900 dark:text-white">Portal Kakitangan</h4><h5 class="text-lg bold font-bold text-gray-900 dark:text-white">PKPP Agro Sdn. Bhd.</h5>
            <form class="space-y-3" action="#">
                <EmailInput label="Emel" error="Emel Ralat" />
                <TextInput label="Kata Laluan" placeholder="•••••••••••" v-model:input="password" inputType="password" error="Kata laluan salah" />
                <div class="flex items-start">
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
                        </div>
                        <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ingat Saya ?</label>
                    </div>
                    <RouterLink linkText="Lupa Kata Laluan ?" url="/forget-password"/>
                </div>
                <SubmitFormButton btnText="Log Masuk " />
                <div class="text-xs font-medium text-gray-500 dark:text-gray-300">
                    slipa.dev-v0.1
                </div>
            </form>
        </div>

    </div>
</template>

<script setup>
    // import {ref} from 'vue'
    import EmailInput from '../components/global/EmailInput.vue'
    import TextInput from '../components/global/TextInput.vue'
    import SubmitFormButton from '../components/global/SubmitFormButton.vue'
    import RouterLink from '../components/global/RouterLink.vue'

</script>
