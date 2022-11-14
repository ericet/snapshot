<template>
  <div class="min-h-full">
    <div class="overflow-x-auto w-full">
      <table
        class="
          mx-auto
          w-full
          rounded-lg
          bg-white
          divide-gray-300
          overflow-hidden
        "
      >
        <thead class="bg-gray-900">
          <tr class="text-white text-left">
            <th class="font-semibold text-sm uppercase px-2 py-2 text-center">
              Space
            </th>
            <th class="font-semibold text-sm uppercase px-2 py-2 text-center">
              Title
            </th>
            <th
              class="
                font-semibold
                text-sm
                uppercase
                px-2
                py-2
                text-center
                hidden
                md:table-cell
              "
            >
              Voting End Time
            </th>
            <th class="font-semibold text-sm uppercase px-2 py-2 text-center">
              Choice
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr
            v-for="proposal in proposals"
            :key="proposal.id"
            class="hover:bg-blue-100"
          >
            <td class="px-2 py-2 text-center">
              <div class="text-center">
                <div>
                  <p>{{ getSpace(proposal.space) }}</p>
                </div>
              </div>
            </td>
            <td class="px-2 py-2 text-center">
              <div class="text-center">
                <div>
                  <p>{{ proposal.title }}</p>
                </div>
              </div>
            </td>

            <td class="px-2 py-2 text-center hidden md:table-cell">
              {{ getDate(proposal.end) }}
            </td>
            <td class="text-left">
              <select :value="proposal.vote" class="text-left w-48 border-solid border-2 rounded-md">
                <option
                  v-for="(choice, index) in proposal.choices"
                  :key="index"
                  :value="index+1"
                >
                  {{ choice }}
                </option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  props: ["proposals"],
  data() {
    return {
      selected: "1",
    };
  },
  methods: {
    change(value, proposal) {
      proposal.vote = value;
    },
    getDate(date) {
      return new Date(date * 1000).toLocaleDateString();
    },
    getSpace(id) {
      return this.$store.state.spaceMap.get(id).name;
    },
  },
};
</script>