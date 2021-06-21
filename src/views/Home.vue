<template>
  <div class="w-full mx-auto h-screen">
    <div
      class="h-full flex items-center justify-center md:justify-start text-gray-700 dark:text-gray-100"
    >
      <div class="px-4 antialiased md:w-1/2">
        <h1 class="tr text-2xl font-semibold md:text-3xl">
          Hi there 👋,
        </h1>
        <h1 class="text-3xl font-bold md:text-4xl">I am Front-end Dev.</h1>
        <div class="text-sm font-medium mt-2 md:text-md">
          <p class="leading-5">
            I am Asmin, Live in Watabea. Born in Tampuna on 10 September 2001.
            Focused on building beautiful and awesome websites
          </p>
        </div>
      </div>
    </div>
    <div
      class="bg-gray-100 w-full text-right pr-4 dark:bg-gray-800 dark:text-gray-100"
    >
      <p class="text-xs text-gray-500">
        Build with vueJs and TailwindCSS
      </p>
    </div>
  </div>
</template>

<script>
import anime from 'animejs';
// @ is an alias to /src
export default {
  name: 'Home',
  mounted() {
    anime({
      targets: '.tr',
      translateX: 30,
      easing: 'easeOutElastic(2, .5)',
      duration: 1000,
      direction: 'alternate',
      endDelay: 0,
      delay: anime.stagger(100),
    });
  },
};
</script>
