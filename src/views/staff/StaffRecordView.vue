<template>
        <div class="m-1 md:m-3 p-2">
            <span class="font-bold text-2xl">Rekod Peribadi</span>

        </div>
        <div class="m-1 md:m-1 p-1">
            <RouterLinkButton url="/staff/record-edit" btnText="Kemaskini" color="gray" class="m-1"/>
            <RouterLinkButton btnText="Eksport ke PDF" color="gray" class="m-1"/>
        </div>
        <div class="lg:flex">
        <div class="m-1 md:m-3 p-1 rounded-xl shadow bg-white lg:w-1/3">
            
                    <div class="flex-1 min-w-0 m-1 p-1">
                        <p class="text-xs font-bold text-gray-500 truncate dark:text-gray-400 uppercase">
                            Nama
                        </p>
                        <p class="text-md font-medium text-gray-900 dark:text-white">
                            Umar Qayyum bin Zainal
                        </p>
                    </div>
                    <div class="flex flex-wrap items-center m-1 p-1">
                        <div class="flex-1 min-w-0 ">
                            <p class="text-xs font-bold text-gray-500 truncate dark:text-gray-400 uppercase">
                                No. Kad Pengenalan
                            </p>
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                961201-08-5681
                            </p>
                        </div>
                        <div class="flex-1 min-w-0 ">
                            <p class="text-xs font-bold text-gray-500 truncate dark:text-gray-400 uppercase">
                                No. Pekerja
                            </p>
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                HQ36
                            </p>
                        </div>
                    </div>
                    <div class="flex flex-wrap items-center m-1 p-1">
                        <div class="flex-1 min-w-0 ">
                            <p class="text-xs font-bold text-gray-500 truncate dark:text-gray-400 uppercase">
                                No. KWSP
                            </p>
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                21945525
                            </p>
                        </div>
                        <div class="flex-1 min-w-0 ">
                            <p class="text-xs font-bold text-gray-500 truncate dark:text-gray-400 uppercase">
                                No. PERKESO
                            </p>
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                HQ36
                            </p>
                        </div>
                    </div>
                    <div class="flex flex-wrap items-center m-1 p-1">
                        <div class="flex-1 min-w-0 ">
                            <p class="text-xs font-bold text-gray-500 truncate dark:text-gray-400 uppercase">
                                No. Cukai
                            </p>
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                961201-08-5681
                            </p>
                        </div>
                        <div class="flex-1 min-w-0 ">
                            <p class="text-xs font-bold text-gray-500 truncate dark:text-gray-400 uppercase">
                                No. Cukai
                            </p>
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                HQ36
                            </p>
                        </div>
                    </div>
        </div>
        
        <div class="m-1 md:m-3 p-1 rounded-xl shadow bg-white lg:w-1/3">
            <div class="flex flex-wrap items-center m-1 p-1">
                <div class="flex-1 min-w-0 ">
                    <p class="text-xs font-bold text-gray-500 truncate dark:text-gray-400 uppercase">
                        Tarikh Lahir
                    </p>
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        1 Disember 1996
                    </p>
                </div>
                <div class="flex-1 min-w-0 ">
                    <p class="text-xs font-bold text-gray-500 truncate dark:text-gray-400 uppercase">
                        Umur
                    </p>
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        28 Tahun
                    </p>
                </div>
            </div>
            <div class="flex flex-wrap items-center m-1 p-1">
                <div class="flex-1 min-w-0 ">
                    <p class="text-xs font-bold text-gray-500 truncate dark:text-gray-400 uppercase">
                        Alamat rumah
                    </p>
                    <p class="text-sm font-medium text-gray-900  dark:text-white">
                        C1 Kuarters PKPP Agro Bukit Serdang,<br>
                        KM 4 Jalan Selendang,<br>
                        26800 Kuala Rompin,<br>
                        Pahang Darul Makmur
                    </p>
                </div>
            </div>
            
        </div>
        <div class="m-1 md:m-3 p-1 rounded-xl shadow bg-white lg:w-1/3">
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
        </div>
    </div>
</template>
 
 <script setup>
 import RouterLinkButton from '/src/components/global/RouterLinkButton.vue'
 </script>