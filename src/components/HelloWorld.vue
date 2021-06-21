<template>
  <div>
    <div
      class="w-full shadow-md text-gray-800 rounded p-2 bg-gray-50 flex items-center justify-between mb-8 dark:bg-gray-700 dark:text-indigo-50"
    >
      <div class="w-full flex justify-between">
        Dark Mode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            @click="selectTheme('dark')"
            :class="theme === 'dark' ? 'hidden' : ''"
            class="text-gray-600"
            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
          />
          <path
            @click="selectTheme('light')"
            :class="theme === 'light' ? 'hidden' : ''"
            fill-rule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <div
      class="text-center p-4 rounded shadow-md bg-gray-50 text-gray-800 dark:bg-gray-700 dark:text-indigo-50"
    >
      <h1>{{ msg }}</h1>
      <h1>{{ time }}</h1>
    </div>
    <div class="w-full flex justify-between">
      <div class="animate w-12 h-12 bg-purple-200"></div>
      <div class="animate2 w-12 h-12 bg-purple-200"></div>
      <div class="animate3 w-12 h-12 bg-indigo-200"></div>
    </div>
  </div>
</template>
<script>
const moment = require('moment');
const { ref, onMounted } = require('vue');

export default {
  props: { msg: String },
  setup() {
    const theme = ref(localStorage.getItem('theme') ?? 'light');
    const time = ref(moment().format(moment.HTML5_FMT.TIME_SECONDS));
    setInterval(() => {
      time.value = moment().format(moment.HTML5_FMT.TIME_SECONDS);
    }, 1000);
    const selectTheme = (value) => {
      theme.value = value;
      localStorage.setItem('theme', value);
      const root = document.querySelector('html').classList;
      root.add(localStorage.getItem('theme'));
      if (value === 'dark') {
        root.remove('light');
      } else {
        root.remove('dark');
      }
    };
    const mount = () => {
      // ketika sistem browser dalam keadaan darkmode ataupun localStorage.theme === dark
      if (localStorage.getItem('theme') === 'dark' || (localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.querySelector('html').classList.add('dark');
        localStorage.setItem('theme', 'dark');
        theme.value = localStorage.getItem('theme');
        console.log(`mount ${theme.value}`);
      } else {
        localStorage.setItem('theme', 'light');
        console.log(`mount ${theme.value}`);
        document.querySelector('html').classList.add('light');
      }
    };
    onMounted(mount);
    console.log(theme.value);
    return { theme, time, selectTheme };
  },
};
</script>
<style>
@keyframes slide {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  90% {
    opacity: 0;
  }
  100% {
    transform: translateY(-100vh) rotate(360deg);
  }
}
.animate {
  position: absolute;
  bottom: 0;
  animation: slide 10s linear infinite;
}
.animate2 {
  position: absolute;
  bottom: 0;
  right: 18px;
  animation: slide 8s linear infinite;
}

.animate3 {
  position: absolute;
  bottom: 0;
  left: 80px;
  animation: slide 12s linear infinite;
}
</style>
