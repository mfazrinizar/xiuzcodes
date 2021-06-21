<template>
  <Navbar class="bg-gray-100 dark:bg-gray-800" />
  <div class="font-mono text-gray-800 bg-gray-100 dark:bg-gray-800 dark:text-gray-800">
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>
