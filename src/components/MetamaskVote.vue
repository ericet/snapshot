<template>
  <div class="flex flex-col justify-center items-center">
    <button
      type="button"
      @click="handleVote"
      class="mt-4 mb-8 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      Vote
    </button>
  </div>
</template>
<script>
export default {
  props: ['proposals', 'account'],
  methods: {
    async handleVote() {},
  },
};
</script>
