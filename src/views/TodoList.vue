<template>
  <div class="todo-list h-screen bg-gray-200 dark:bg-gray-800">
    <div class="flex flex-col items-center">
      <div
        class="mt-64 mb-12 w-11/12 py-4 px-2 shadow rounded-md text-gray-800 bg-gray-50 dark:text-gray-50 dark:bg-gray-700"
      >
        <h1 class="text-center text-4xl">What you do today {{ nama }}?</h1>
      </div>
      <div>
        <div class="flex flex-row items-center">
          <input
            :class="empty"
            class="h-8 rounded shadow border focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            type="text"
            placeholder="add activity"
            v-model="newData"
          />
          <button
            @click="addJob"
            class="px-2 h-8 rounded bg-blue-500 dark:text-gray-50 focus:outline-none focus:bg-blue-700"
          >
            Add
          </button>
        </div>
        <div
          class="my-2 flex items-center"
          v-for="job in todo"
          v-bind:key="job.id"
        >
          <input
            class="p-2 my-2 form-checkbox shadow rounded text-purple-500 border-blue-500 focus:ring-transparent transition transition-2"
            type="checkbox"
            :id="job.tugas"
            v-model="job.isDone"
          />
          <label
            :for="job.tugas"
            class="ml-2 text-gray-100 text-2xl text-gray-800 dark:text-gray-100"
            :class="{ 'text-green-400': job.isDone }"
          >
            {{ job.tugas }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  props: { name: { type: String, default: 'Asmin' } },
  setup(props) {
    const user = reactive({
      nama: props.name,
      newData: '',
      empty: false,
      todo: [
        { id: 1, tugas: 'Ngoding', isDone: false },
        { id: 2, tugas: 'Makan', isDone: false },
        { id: 3, tugas: 'Mandi', isDone: false },
      ],
    });

    function addJob() {
      if (user.newData === '') {
        user.empty = true;
      } else {
        user.todo.push({
          id: user.todo.length + 1,
          tugas: user.newData,
          isDone: false,
        });
        console.log(this);
      }
    }

    return { ...toRefs(user), addJob };
  },
};
</script>
