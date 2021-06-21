<template>
  <div class="text-white">
    <div
      v-for="manga in listAnime.anime"
      v-bind:key="manga.chapter"
      class="mb-4 mx-2 card rounded-md shadow-md bg-gray-50 overflow-hidden"
    >
      <img :src="manga.thumb" />
      <div class="text-left ml-4 mb-2 pt-2">
        <p class="text-base text-gray-700">{{ manga.title }}</p>
        <div class="flex text-sm mt-2">
          <span
            class="inline-block bg-gray-500 shadow rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2"
            >{{ manga.chapter }}
          </span>
          <span
            class="inline-block bg-gray-500 shadow rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2"
            >{{ manga.type }}</span
          >
          <span
            class="inline-block bg-gray-500 shadow rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2"
            >{{ manga.updated_on }}</span
          >
          <a
            :data-endpoint="manga.endpoint"
            :href="'/detail?manga=' + manga.endpoint"
            class="inline-block bg-blue-500 shadow rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2 mb-2"
          >
            Detail
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const axios = require('axios');
const { reactive } = require('vue');

export default {
  props: {
    page: {
      type: String,
      default: '1',
    },
  },
  setup(props) {
    const listAnime = reactive({
      anime: [],
    });
    axios
      .get(`https://mangamint.kaedenoki.net/api/manga/page/${props.page}`)
      .then((s) => {
        const data = s.data.manga_list;
        listAnime.anime = data;
      })
      .catch((err) => console.log(err.message));
    return { listAnime };
  },
};
</script>
