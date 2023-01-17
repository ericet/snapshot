<template>
  <div class="mx-auto mx-5">
    <div class="mx-auto max-w-4xl">
      <header>
        <h1
          class="
            text-6xl
            leading-normal
            mb-2
            text-black
            font-serif
            text-gray-700
            dark:text-gray-100
            transition-colors
          "
        >
          Snapshot Voting
        </h1>
      </header>
      <p
        class="
          ml-4
          mb-5
          font-serif
          text-gray-700
          dark:text-gray-100
          transition-colors
        "
      >
        Vote multiple proposals in one shot
      </p>
      <h1
        class="
          text-2xl
          leading-normal
          mb-2
          text-black
          font-serif
          text-gray-700
          dark:text-gray-100
          transition-colors
        "
      >
        Space
      </h1>
      <div class="mb-3 relative text-gray-700">
        <select
          v-model="selected"
          @change="getActiveProposals"
          class="
            w-full
            h-10
            pl-3
            pr-8
            text-base
            placeholder-gray-600
            border
            rounded-lg
            focus:shadow-outline
            disabled:cursor-not-allowed
          "
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
        <label
          for="default-toggle"
          class="
            inline-flex
            relative
            items-center
            mb-4
            cursor-pointer
            mt-2
            ml-2
          "
        >
          <input
            type="checkbox"
            v-model="useMetamask"
            true-value="true"
            false-value="false"
            id="default-toggle"
            class="sr-only peer"
            @change="toggle"
          />
          <div
            class="
              w-11
              h-6
              bg-gray-200
              rounded-full
              peer
              peer-focus:ring-4 peer-focus:ring-blue-300
              dark:peer-focus:ring-blue-800 dark:bg-gray-700
              peer-checked:after:translate-x-full
              peer-checked:after:border-white
              after:content-['']
              after:absolute
              after:top-0.5
              after:left-[2px]
              after:bg-white
              after:border-gray-300
              after:border
              after:rounded-full
              after:h-5
              after:w-5
              after:transition-all
              dark:border-gray-600
              peer-checked:bg-blue-600
            "
          ></div>
          <span
            class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Use MetaMask
            </span
          >
          <ConnectAccount
          :address="address" class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
          v-if="address.length > 0"
        />
        </label>
        
      </div>
      <ProposalsList
        :proposals="proposals"
        :useMetamask="useMetamask"
        class="mx-auto max-w-4xl"
        v-if="proposals.length > 0"
      />
      <div
        v-if="proposals.length == 0 && ready"
        class="
          mx-auto
          max-w-4xl
          mb-5
          bg-red-100
          border border-red-400
          text-red-700
          px-4
          py-3
          rounded
          relative
        "
        role="alert"
      >
        <span class="block sm:inline"
          >No proposals found or all proposals have been voted!</span
        >
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3" @click="close">
          <svg
            class="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path
              d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
            />
          </svg>
        </span>
      </div>
    </div>
    <KeysInput
      :proposals="proposals"
      v-if="
        proposals.length > 0 &&
        (useMetamask === 'false' || useMetamask === false)
      "
      class="mx-auto max-w-4xl mb-10"
    />

    <MetamaskVote
      :proposals="proposals"
      v-if="
        proposals.length > 0 && (useMetamask === 'true' || useMetamask === true)
      "
      class="mx-auto max-w-4xl mb-10"
    />
    <AppFooter />
  </div>
</template>
<script>
import { spacesList } from "../config/spaces";
import { getActiveProposals } from "../utils/snapshot";
import { getAddress } from "../utils/wallet";
import ProposalsList from "@/components/ProposalsList.vue";
import AppFooter from "@/components/AppFooter.vue";
import KeysInput from "@/components/KeysInput.vue";
import MetamaskVote from "@/components/MetamaskVote.vue";
import ConnectAccount from "@/components/ConnectAccount.vue";
export default {
  mounted() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", () => {
        this.proposals = [];
        this.selected = "none";
        this.ready = false;
        this.response = {};
        this.populateOptions();
        this.updateAddress(this.useMetamask);
      });
    }
  },
  created() {
    for (let space of spacesList) {
      this.$store.state.spaceMap.set(space.id, space);
    }
    this.populateOptions();
    this.updateAddress(this.useMetamask);
  },
  data() {
    return {
      selected: "none",
      proposals: [],
      spacesList: spacesList,
      options: [],
      ready: false,
      useMetamask: false,
      address: "",
    };
  },
  methods: {
    close() {
      this.response = {};
    },
    async toggle() {
      this.populateOptions();
      this.updateAddress(this.useMetamask);
    },
    async updateAddress() {
      this.address = await getAddress(this.useMetamask);
    },
    populateOptions() {
      this.options = [];
      this.options.push({ text: "All Spaces", value: "all" });
      for (let space of spacesList) {
        this.options.push({ text: space.name, value: space.id });
      }
      this.options.sort((a, b) => {
        if (a.text === "All Spaces" || b.text === "All Spaces") {
          return 1;
        }
        if (a.text < b.text) {
          return -1;
        }
        if (a.text > b.text) {
          return 1;
        }
        return 0;
      });
    },
    async getActiveProposals() {
      this.ready = false;
      this.proposals = [];
      if (this.selected === "all") {
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
      }
      this.ready = true;
    },
  },
  components: {
    ProposalsList,
    AppFooter,
    KeysInput,
    MetamaskVote,
    ConnectAccount,
  },
};
</script>
