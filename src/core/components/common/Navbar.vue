<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import { ref } from 'vue';

const isOpen = ref(false);
const isDark = useDark();
const toggleDark = useToggle(isDark);

// Reactive state for the dropdown menu
const isDropdownOpen = ref(false);

// Toggle function for the dropdown
const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

// List of available languages
const languages = [
    { code: 'ar', name: 'العربی (AR)', url: 'https://laravel.nasirkhn.com/language/ar' },
    { code: 'bn', name: 'বাংলা (BN)', url: 'https://laravel.nasirkhn.com/language/bn' },
    { code: 'en', name: 'English (EN)', url: 'https://laravel.nasirkhn.com/language/en' },
    { code: 'fa', name: 'فارسی (FA)', url: 'https://laravel.nasirkhn.com/language/fa' },
    { code: 'vi', name: 'Vietnamese (VI)', url: 'https://laravel.nasirkhn.com/language/vi' },
];

</script>

<template>
    <nav class="bg-white px-6 py-4 shadow dark:bg-gray-900">
        <div class="container mx-auto flex flex-col md:flex-row md:items-center">
            <!-- Logo and Toggle Button -->
            <div class="flex justify-between items-center w-full md:w-auto">
                <a class="text-green-500 text-xl font-bold md:text-2xl" href="#">Vue Modular</a>
                <button type="button" @click="isOpen = !isOpen"
                    class="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none md:hidden">
                    <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path
                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0-2H4a1 1 0 1 1 0-2z" />
                    </svg>
                </button>
            </div>

            <!-- Links Section -->
            <div class="flex-grow flex flex-col md:flex-row md:items-center md:justify-between"
                :class="isOpen ? 'block' : ['hidden', 'md:flex']">
                <div class="flex flex-col md:flex-row md:ms-10">
                    <router-link to="/" class="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0 dark:text-white">
                        Home
                    </router-link>
                    <router-link to="/posts"
                        class="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0 dark:text-white">
                        Blog
                    </router-link>
                    <a class="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0 dark:text-white" href="#">
                        About us
                    </a>
                </div>

                <div class=" flex max-w-screen-xl flex-wrap items-center justify-between p-4">

                    <div class="flex items-center justify-end space-x-1 md:order-2 md:space-x-0 rtl:space-x-reverse">
                        <button @click="toggleDark()"
                            class="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:hover:bg-gray-900 dark:focus:ring-gray-700"
                            id="theme-toggle" type="button">
                            <svg :class="{ hidden: isDark }" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                            </svg>
                            <svg :class="{ hidden: !isDark }" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z">
                                </path>
                            </svg>
                        </button>

                        <div class="relative inline-block text-left">
                            <button @click="toggleDropdown"
                                class="inline-flex cursor-pointer items-center justify-center rounded px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                                type="button">
                                <svg class="icon icon-tabler icons-tabler-outline icon-tabler-language"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 5h7" />
                                    <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
                                    <path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
                                    <path d="M12 20l4 -9l4 9" />
                                    <path d="M19.1 18h-6.2" />
                                </svg>
                                <span class="ms-2 hidden sm:block">EN</span>
                            </button>

                            <!-- Dropdown Menu -->
                            <div v-if="isDropdownOpen"
                                class="absolute right-0 mt-2 w-48 origin-top-right rounded-lg bg-white shadow-lg dark:bg-gray-700 z-50">
                                <ul class="py-2 font-medium" role="none">
                                    <li v-for="language in languages" :key="language.code">
                                        <a :href="language.url"
                                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                            role="menuitem">
                                            <div class="inline-flex items-center">{{ language.name }}</div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <a class="inline-flex cursor-pointer items-center justify-center rounded px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                            href="https://laravel.nasirkhn.com/login">
                            <svg class="icon icon-tabler icons-tabler-outline icon-tabler-login me-2"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                <path d="M21 12h-13l3 -3" />
                                <path d="M11 15l-3 -3" />
                            </svg>
                            <span class="ms-2 hidden sm:block">
                                Login
                            </span>
                        </a>


                        <button
                            class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                            data-collapse-toggle="navbar-language" type="button" aria-controls="navbar-language"
                            aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </nav>
</template>
