<template>
  <div class="flex flex-col justify-center items-center">
    <button
      type="button"
      @click="vote"
      class="
        mt-4
        mb-8
        text-white
        bg-gradient-to-r
        from-blue-500
        via-blue-600
        to-blue-700
        hover:bg-gradient-to-br
        focus:ring-4 focus:outline-none focus:ring-blue-300
        dark:focus:ring-blue-800
        font-medium
        rounded-lg
        text-sm
        px-5
        py-2.5
        text-center
      "
    >
      Vote
    </button>
  </div>
</template>
<script>
import { getWallet } from "../libs/wallet";
import { hasVoted, vote, getVotingPowers } from "../libs/snapshot";
export default {
  props: ["accounts"],
  methods: {
    async vote() {
      for (let ac of this.accounts) {
        let key = ac.key;
        let proposals = ac.proposals;
        this.startVoting(key, proposals);
      }
    },
    async startVoting(key, proposals) {
      let wallet = getWallet(key);
      for (let proposal of proposals) {
        let isVoted = await hasVoted(wallet.address, proposal.id);
        if (isVoted) {
          proposal.status_code = "voted";
          proposal.status_message = "This proposal has already Voted";
          return;
        }
        let vp = await getVotingPowers(proposal.id, wallet.address);
        if (vp == 0) {
          proposal.status_code = "error";
          proposal.status_message = "You don't have Voting Power to vote";
          return;
        }
        if (!isVoted && vp > 0) {
          proposal.status_code = "ready";
          proposal.status_message = "Ready to vote";
          await vote(wallet, proposal);
        }
      }
    },
  },
};
</script>
