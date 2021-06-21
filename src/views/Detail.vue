<template>
  <div class="w-full flex justify-center">
    <div class="bg-gray-800 justify-center">
      <img class="w-1/2" :src="manga.data.thumb" alt="" srcset="" />
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

const axios = require('axios');

export default {
  props: ['query'],
  setup(props) {
    const manga = reactive({
      data: {},
    });
    if (props.query) {
      axios
        .get(`https://mangamint.kaedenoki.net/api/manga/detail/${props.query}`)
        .then((resp) => {
          manga.data = resp.data;
        })
        .catch((er) => console.log(er));
    }
    console.log(manga);
    return { manga };
  },
};
</script>
