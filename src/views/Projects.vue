<template>
  <main
    class="h-screen w-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
  >
    <div class="h-full pb-12">
      <div class="w-11/12 text-center mx-auto">
        <h1 class="font-bold text-2xl">Projects</h1>
        <div
          class="w-full mt-10 flex justify-center flex-col md:justify-evenly md:flex-row md:flex-wrap"
        >
          <div class="w-full md:w-1/2 md:px-4 px-2 hover:px-0 transition-all duration-300">
            <div
              class="text-left bg-white transition-all duration-500 hover:border-indigo-400 shadow-md rounded p-4 my-2 dark:bg-gray-700 dark:text-gray-100"
            >
              <h2 class="text-lg font-semibold mb-4">Instagram</h2>
              <p class="text-sm font-medium text-gray-600 dark:text-gray-300">
                API Followers
              </p>
              <div class="mt-2 flex justify-end">
                <button
                  class="px-4 py-2 text-sm border border-indigo-500 transition-all duration-500 rounded-full focus:outline-none focus:bg-indigo-500 focus:text-gray-100 "
                >
                  Details
                </button>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 md:px-4 px-2 hover:px-0 transition-all duration-300">
            <div
              class="text-left bg-white transition-all duration-500 hover:border-indigo-400 shadow-md rounded p-4 my-2 dark:bg-gray-700 dark:text-gray-100"
            >
              <h2 class="text-lg font-semibold mb-4">Facebook</h2>
              <p class="text-sm font-medium text-gray-600 dark:text-gray-300">
                Unfriends Unactive User
              </p>
              <div class="mt-2 flex justify-end">
                <button
                  class="px-4 py-2 text-sm border border-indigo-500 transition-all duration-500 rounded-full focus:outline-none focus:bg-indigo-500 focus:text-gray-100 "
                >
                  Details
                </button>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 md:px-4 px-2 hover:px-0 transition-all duration-300">
            <div
              class="text-left bg-white transition-all duration-500 hover:border-indigo-400 shadow-md rounded p-4 my-2 dark:bg-gray-700 dark:text-gray-100"
            >
              <h2 class="text-lg font-semibold mb-4">WhatsApp Bot</h2>
              <p class="text-sm font-medium text-gray-600 dark:text-gray-300">
                - Quran Bot
              </p>
              <p class="text-sm font-medium text-gray-600 dark:text-gray-300">
                - Talk Bot
              </p>
              <div class="mt-2 flex justify-end">
                <button
                  class="px-4 py-2 text-sm border border-indigo-500 transition-all duration-500 rounded-full focus:outline-none focus:bg-indigo-500 focus:text-gray-100 "
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  mounted() {
    document.querySelector('title').text = "Asmin's Projects";
  },
};
</script>
