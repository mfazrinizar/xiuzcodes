<template>
  <nav class="w-full h-10 navbar text-white">
    <div class="py-2 flex flex-col md:flex-row justify-between">
      <div class="px-2 flex justify-between items-center">
        <div class="w-full flex items-center justify-end">
          <Toggle class="mx-6" />
          <div
            @click="toggle"
            :class="{ active: isOpen }"
            class="mt-1 button w-5 h-5 mr-2 flex flex-col md:hidden focus:outline-none hover:text-gray-200"
          >
            <span class="btn bg-gray-800 dark:bg-gray-100 block" />
            <span class="btn bg-gray-800 dark:bg-gray-100 block mt-1" />
            <span class="btn bg-gray-800 dark:bg-gray-100 block mt-1" />
          </div>
        </div>
      </div>
      <div
        :class="isOpen ? 'block' : 'hidden'"
        class="z-10 w-full h-screen bg-gray-100 text-gray-800 flex flex-col items-center justify-center md:pr-12 md:block md:h-auto md:text-right dark:bg-gray-800 dark:text-gray-100"
      >
        <router-link @click="isOpen = false" to="/" class="px-2"
          >Home</router-link
        >
        <router-link @click="isOpen = false" to="/about" class="px-2"
          >About</router-link
        >
      </div>
    </div>
  </nav>
</template>
<script>
import Toggle from './DarkModeToggle.vue'

export default {
  components: {
    Toggle,
  },
  data() {
    return { isOpen: false }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
<style scoped>
.btn {
  height: 2.5px;
  border-radius: 1px;
  transform-origin: 0 0;
  transition: 0.2s;
}
.active .btn:nth-child(1) {
  transform: rotate(45deg) translate(0, -1px);
}
.active .btn:nth-child(2) {
  opacity: 0;
  transform: scale(0);
}
.active .btn:last-child {
  transform: rotate(-45deg) translate(-1px, -0.5px);
}
.router-link-exact-active {
  color: #42b983;
}
</style>
