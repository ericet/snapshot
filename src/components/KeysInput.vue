<template>
  <div class="mx-auto max-w-2xl mt-4">
    <textarea
      rows="10"
      @input="getKeys($event)"
      class="
        block
        p-2.5
        w-full
        text-sm text-gray-900
        bg-gray-50
        rounded-lg
        border border-gray-300
        focus:ring-blue-500 focus:border-blue-500
        dark:bg-gray-700
        dark:border-gray-600
        dark:placeholder-gray-400
        dark:text-white
        dark:focus:ring-blue-500
        dark:focus:border-blue-500
      "
      placeholder="One private key per line"
    ></textarea>
    <AccountsGrid :accounts="accounts" />
    <KeyVote :accounts="accounts" v-if="accounts.length>0"/>
  </div>
</template>

<script>
import { validatePrivateKey } from "../utils/wallet";
import KeyVote from "@/components/KeyVote.vue";
import AccountsGrid from "@/components/Accounts/AccountsGrid.vue";

export default {
  props: ["proposals"],
  components: { KeyVote, AccountsGrid },
  data() {
    return {
      input: "",
      keys: [],
      accounts: [],
    };
  },
  methods: {
    getKeys(event) {
      this.keys = [];
      let inputs = event.target.value.split("\n");

      for (let input of inputs) {
        if (input.length > 0 && validatePrivateKey(input.trim())) {
          this.keys.push(input.trim());
        }
      }
      if (this.proposals) {
        this.getVoteWallet();
      }
    },
    getVoteWallet() {
      this.accounts = [];
      for (let key of this.keys) {
        this.accounts.push({
          key: key,
          proposals: this.proposals,
        });
      }
    },
  },
};
</script>
