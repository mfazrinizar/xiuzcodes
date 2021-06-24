<template>
  <main
    class="font-mono text-gray-800 bg-gray-100 dark:bg-gray-800 dark:text-gray-800"
  >
    <Navbar />
    <div class="container mx-auto md:p-8">
      <router-view />
    </div>
    <Footer />
  </main>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer,
  },
}
</script>
