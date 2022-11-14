<template>
  <div class="mx-auto mx-5">
    <div class="mx-auto max-w-4xl">
      <header>
        <h1
          class="text-6xl leading-normal mb-2 text-black font-serif text-gray-700 dark:text-gray-100 transition-colors"
        >
          Snapshot Voting
        </h1>
      </header>
      <p
        class="ml-4 mb-5 font-serif text-gray-700 dark:text-gray-100 transition-colors"
      >
        Vote multiple proposals in one shot
      </p>
      <h1
        class="text-2xl leading-normal mb-2 text-black font-serif text-gray-700 dark:text-gray-100 transition-colors"
      >
        Space
      </h1>
      <div class="mb-3 relative text-gray-700">
        <select
          v-model="selected"
          @change="getActiveProposals"
          class="w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline disabled:cursor-not-allowed"
        >
          <option value="none" hidden>Select a Space</option>
          <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </select>
      </div>
      <ProposalsList
        :proposals="proposals"
        class="mx-auto max-w-4xl"
        v-if="proposals.length > 0"
      />
    </div>
    <KeysInput
      :proposals="proposals"
      v-if="proposals.length > 0"
      class="mx-auto max-w-4xl mb-10"
    />
    <AppFooter />
  </div>
</template>
<script>
import { spacesList } from '../config/spaces';
import { getActiveProposals } from '../libs/snapshot';
import ProposalsList from '@/components/ProposalsList.vue';
import AppFooter from '@/components/AppFooter.vue';
import KeysInput from '@/components/KeysInput.vue';
export default {
  created() {
    for (let space of spacesList) {
      this.$store.state.spaceMap.set(space.id, space);
    }
    this.populateOptions();
  },
  data() {
    return {
      selected: 'none',
      proposals: [],
      spacesList: spacesList,
      options: [],
    };
  },
  methods: {
    populateOptions() {
      this.options = [];
      this.options.push({ text: 'All Chains', value: 'all' });
      for (let space of spacesList) {
        this.options.push({ text: space.name, value: space.id });
      }
      this.options.sort((a, b) => {
        if (a.value === 'all' || b.value === 'all') {
          return 1;
        }
        if (a.value < b.value) {
          return -1;
        }
        if (a.value > b.value) {
          return 1;
        }
        return 0;
      });
    },
    async getActiveProposals() {
      this.proposals = [];
      if (this.selected === 'all') {
        for (let space of this.spacesList) {
          let proposals = await getActiveProposals(space.id);
          if (proposals.length > 0) {
            for (let proposal of proposals) {
              this.proposals.push(proposal);
            }
          }
        }
      } else {
        this.proposals = await getActiveProposals(this.selected);
        console.log(this.proposals);
      }
    },
  },
  components: { ProposalsList, AppFooter, KeysInput },
};
</script>
