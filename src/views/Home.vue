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
          <div class="p-8 mt-4">
            <a href="https://github.com/asmin-dev" target="_blank">
              <svg
                class="w-8 h-8 mx-auto text-red-500"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g data-name="Layer 2">
                  <rect
                    width="24"
                    height="24"
                    transform="rotate(180 12 12)"
                    opacity="0"
                  />
                  <path
                    class="text-indigo-500"
                    d="M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1"
                    data-name="github"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
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
