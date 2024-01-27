<template>
       <div class="m-1 md:m-3 p-2">
           <span class="font-bold text-2xl">Kemaskini Rekod Peribadi</span>
       </div>
       <div class="m-1 md:m-1 p-1">
            <RouterLinkButton url="/staff/" btnText="Simpan" color="blue" class="m-1"/>
        </div>
       <div class="lg:flex">
       <div class="m-1 md:m-3 p-1 rounded-xl shadow bg-white lg:w-1/2">
           
                   <div class="flex-1 min-w-0 m-1 p-1">
                       <TextInput label="Nama" placeholder="Umar Qayyum bin Zainal" v-model:input="text" inputType="text" name="name"/>
                    </div>
                    <div class="flex-1 min-w-0 m-1 p-1">
                       </div>
                   <div class="flex flex-wrap items-center m-1 p-1">
                        <div class="flex-1 min-w-0 ">
                            <TextInput label="No. Kad Pengenalan" placeholder="961201-08-5681" v-model:input="text" inputType="text" name="name"/>
                        </div>
                        <div class="flex-1 ml-1 min-w-0 ">
                            <TextInput label="No. Pekerja" placeholder="HQ36" v-model:input="text" inputType="text" name="name"/>
                        </div>
                   </div>
                   <div class="flex flex-wrap items-center m-1 p-1">
                        <div class="flex-1 min-w-0 ">
                            <TextInput label="No. KWSP" placeholder="21945525" v-model:input="text" inputType="text" name="name"/>
                        </div>
                        <div class="flex-1 ml-1 min-w-0 ">
                            <TextInput label="No. PERKESO" placeholder="961201-08-5681" v-model:input="text" inputType="text" name="name"/>
                        </div>
                   </div>
                   <div class="flex flex-wrap items-center m-1 p-1">
                        <div class="flex-1 min-w-0 ">
                            <TextInput label="No. Cukai Pendapatan" placeholder="961201-08-5681" v-model:input="text" inputType="text" name="name"/>
                        </div>
                        <div class="flex-1 ml-1 min-w-0 ">
                            <TextInput label="No. LHDN" placeholder="961201-08-5681" v-model:input="text" inputType="text" name="name"/>
                        </div>
                   </div>
       </div>
       
       <div class="m-1 md:m-3 p-1 rounded-xl shadow bg-white lg:w-1/3">
           <div class="flex flex-wrap items-center m-1 p-1">
               <div class="flex-1 min-w-0 ">
                   <DatePicker label="Tarikh Lahir"/>
               </div>
              
           </div>
           <div class="flex flex-wrap items-center m-1 p-1">
               <div class="flex-1 min-w-0 ">
                   <TextAreaInput label="Alamat" placeholder="Alamat"/>
               </div>
           </div>
           
       </div>
       <div class="m-1 md:m-3 p-1 shadow bg-white lg:w-1/3">
           <div class="flex flex-wrap items-center m-1 p-1">
               <div class="flex-1 min-w-0 ">
                   <p class="text-xs font-bold text-gray-500  dark:text-gray-400 uppercase">
                       Taraf Pendidikan Tertinggi
                   </p>
                   <p class="text-sm font-medium text-gray-900  dark:text-white">
                       Diploma
                   </p>
               </div>

           </div>
           <div class="flex flex-wrap items-center m-1 p-1">
               <div class="flex-1 min-w-0 ">
                   <p class="text-xs font-bold text-gray-500 truncate dark:text-gray-400 uppercase">
                       Pendidikan Tertinggi
                   </p>
                   <p class="text-sm font-medium text-gray-900  dark:text-white">
                       Diploma Sains Komputer, UiTM
                   </p>
               </div>
           </div>
           
       </div>
       
   </div> 
   <div class="m-1 md:m-3 p-1 ">
       <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
           <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
               <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                   <tr>
                       <th scope="col" class="px-6 py-3">
                           Nama Pasangan
                       </th>
                       <th scope="col" class="px-6 py-3">
                           Kad Pengenalan
                       </th>
                       <th scope="col" class="px-6 py-3">
                           No Telefon
                       </th>
                       <th scope="col" class="px-6 py-3">
                           Tarikh Lahir
                       </th>
                   </tr>
               </thead>
               <tbody>
                   <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                       <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           Putih binti Coklat
                       </th>
                       <td class="px-6 py-4">
                           230123-08-5778
                       </td>
                       <td class="px-6 py-4">
                           013-788 7888
                       </td>
                       <td class="px-6 py-4">
                           23 Januari 2023
                       </td>
                   </tr>
               </tbody>
           </table>
       </div>
   </div>   

   <div class="m-1 md:m-3 p-1 ">
       <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
           <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
               <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                   <tr>
                       <th scope="col" class="px-6 py-3">
                           Nama Anak
                       </th>
                       <th scope="col" class="px-6 py-3">
                           Kad Pengenalan
                       </th>
                       <th scope="col" class="px-6 py-3">
                           Umur
                       </th>
                       <th scope="col" class="px-6 py-3">
                           Tarikh Lahir
                       </th>
                   </tr>
               </thead>
               <tbody>
                   <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                       <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           Putih binti Coklat
                       </th>
                       <td class="px-6 py-4">
                           230123-08-5778
                       </td>
                       <td class="px-6 py-4">
                           1
                       </td>
                       <td class="px-6 py-4">
                           23 Januari 2023
                       </td>
                   </tr>
                   <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                       <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           Ayam binti Coklat
                       </th>
                       <td class="px-6 py-4">
                           230123-08-5778
                       </td>
                       <td class="px-6 py-4">
                           1
                       </td>
                       <td class="px-6 py-4">
                           23 Januari 2023
                       </td>
                   </tr>
               </tbody>
           </table>
           <Datepicker/>
       </div>
   </div>
</template>

<script setup>
import RouterLinkButton from '/src/components/global/RouterLinkButton.vue'
import TextInput from '/src/components/global/TextInput.vue'
import DatePicker from '/src/components/global/DatePicker.vue'
import TextAreaInput from '/src/components/global/TextAreaInput.vue'

</script>