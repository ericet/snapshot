<template>
  <div class="flex flex-col justify-center items-center">
    <button
      type="button"
      @click="handleVote"
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
import { ethers } from "ethers";
import { hasVoted, getVotingPowers, vote } from "../utils/snapshot";
export default {
  props: ["proposals"],
  methods: {
    async handleVote() {
      this.clearVoteStatus();
      this.startVoting(this.proposals);
    },
    clearVoteStatus() {
      for (let proposal of this.proposals) {
        proposal.status_code = "";
        proposal.status_message = "";
      }
    },
    async startVoting(proposals) {
      let provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts");
      let previousSpace = "";
      let voted = false;
      let wallet = {};
      wallet.address = accounts[0];
      for (let proposal of proposals) {
        let isVoted = await hasVoted(wallet.address, proposal.id);
        if (isVoted) {
          proposal.status_code = "voted";
          proposal.status_message = "This proposal has already Voted";
        } else {
          if (previousSpace !== proposal.space || voted) {
            let vp = await getVotingPowers(proposal.id, wallet.address);
            previousSpace = proposal.space;
            if (vp == 0) {
              proposal.status_code = "error";
              proposal.status_message = "You don't have Voting Power to vote";
            } else {
              proposal.status_code = "ready";
              proposal.status_message = "Ready to vote";
              await vote(wallet, proposal, "true");
              voted = true;
            }
          } else {
            proposal.status_code = "error";
            proposal.status_message = "You don't have Voting Power to vote";
          }
        }
      }
    },
  },
};
</script>
