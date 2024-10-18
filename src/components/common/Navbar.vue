<template>
    <nav class="bg-blue-600 p-4 text-white flex justify-between">
      <h1 class="text-xl font-bold">Vue Blog</h1>
      <div>
        <router-link to="/" class="mr-4">Home</router-link>
        <router-link to="/blog">Blog</router-link>
      </div>
    </nav>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Navbar',
  });
  </script>
  
  <style scoped>
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  </style>
  