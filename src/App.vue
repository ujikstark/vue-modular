<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './core/components/common/Navbar.vue';
import Footer from './core/components/common/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
});
</script>

<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>



<style scoped>
/* Optional: Add custom styling */
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
