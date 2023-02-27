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
            <th
              class="font-semibold text-sm uppercase px-2 py-2 text-center"
              v-if="useMetamask === 'false' || useMetamask === false"
            >
              #
            </th>
            <th
              class="font-semibold text-sm uppercase px-2 py-2 text-center"
              v-if="useMetamask === true || useMetamask === 'true'"
            >
              Status
            </th>
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
            v-for="(proposal, index) in proposals"
            :key="index"
            class="hover:bg-blue-100"
          >
            <td
              class="px-2 py-2 text-center"
              v-if="useMetamask === 'false' || useMetamask === false"
            >
              <div class="text-center">
                <div>
                  <p>{{ index + 1 }}</p>
                </div>
              </div>
            </td>
            <td
              class="px-5 py-5 text-center"
              v-if="useMetamask === 'true' || useMetamask === true"
            >
              <div class="text-center">
                <div>
                  <span v-if="proposal.status_code === 'ready'">
                    <div class="group relative">
                      <i
                        data-feather="clock"
                        class="
                          stroke-orange-300
                          text-liText-ternary-dark
                          hover:text-gray-400
                          dark:text-liText-ternary-light
                          dark:hover:text-liBorder-primary-light
                          w-5
                        "
                      >
                      </i>
                      <span
                        class="
                          absolute
                          hidden
                          group-hover:flex
                          -top-1
                          -right-3
                          translate-x-full
                          w-48
                          px-2
                          py-1
                          bg-gray-700
                          rounded-lg
                          text-center text-white text-sm
                        "
                      >
                        {{ proposal.status_message }}</span
                      >
                    </div>
                  </span>
                  <span v-else-if="proposal.status_code === 'error'">
                    {{proposal.statu_code}}
                    <div class="group relative">
                      <i
                        alt="test"
                        data-feather="x-circle"
                        class="
                          stroke-red-600
                          text-liText-ternary-dark
                          hover:text-gray-400
                          dark:text-liText-ternary-light
                          dark:hover:text-liBorder-primary-light
                          w-5
                        "
                      ></i>
                      <span
                        class="
                          absolute
                          hidden
                          group-hover:flex
                          -top-1
                          -right-3
                          translate-x-full
                          w-auto
                          px-2
                          py-1
                          bg-gray-700
                          rounded-lg
                          text-center text-white text-sm
                        "
                      >
                        {{ proposal.status_message }}</span
                      >
                    </div>
                  </span>
                  <span v-else-if="proposal.status_code === 'success'">
                    <div class="group relative">
                      <i
                        data-feather="check-circle"
                        class="
                          stroke-green-300
                          text-liText-ternary-dark
                          hover:text-gray-400
                          dark:text-liText-ternary-light
                          dark:hover:text-liBorder-primary-light
                          w-5
                        "
                      ></i>
                      <span
                        class="
                          absolute
                          hidden
                          group-hover:flex
                          -top-1
                          -right-3
                          translate-x-full
                          w-auto
                          px-2
                          py-1
                          bg-gray-700
                          rounded-lg
                          text-center text-white text-sm
                        "
                      >
                        {{ proposal.status_message }}</span
                      >
                    </div>
                  </span>
                  <span
                    v-else-if="proposal.status_code == 'voted'"
                    class="flex justify-right"
                  >
                    <div class="group relative flex justify-right">
                      <i
                        data-feather="alert-circle"
                        class="
                          stroke-red-300
                          text-liText-ternary-dark
                          hover:text-gray-400
                          dark:text-liText-ternary-light
                          dark:hover:text-liBorder-primary-light
                          w-5
                        "
                      ></i>
                      <span
                        class="
                          absolute
                          hidden
                          group-hover:flex
                          -top-1
                          -right-3
                          translate-x-full
                          w-auto
                          px-2
                          py-1
                          bg-gray-700
                          rounded-lg
                          text-center text-white text-sm
                        "
                      >
                        {{ proposal.status_message }}</span
                      >
                    </div>
                  </span>
                </div>
              </div>
            </td>
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
                  <a
                    target="_blank"
                    :href="`https://snapshot.org/#/${proposal.space}/proposal/${proposal.id}`"
                  >
                    {{ proposal.title }}
                  </a>
                </div>
              </div>
            </td>

            <td class="px-2 py-2 text-center hidden md:table-cell">
              {{ getDate(proposal.end) }}
            </td>
            <td class="text-left">
              <select v-if="proposal.type==='single-choice' || proposal.type==='basic'"
                :value="proposal.vote"
                class="text-left w-48 border-solid border-2 rounded-md"
                @change.stop="change($event.target.value, proposal)"
              >
                <option
                  v-for="(choice, index) in proposal.choices"
                  :key="index"
                  :value="index + 1"
                >
                  {{ choice }}
                </option>
              </select>
              <select v-if="proposal.type==='approval'" class="text-left w-48 border-solid border-2 rounded-md">
                <option selected value="all">Vote for All</option>
              </select>
               <select v-if="proposal.type==='ranked-choice'" class="text-left w-48 border-solid border-2 rounded-md">
                <option selected value="all">Vote for All</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import feather from "feather-icons";
export default {
  props: ["proposals", "useMetamask"],
  data() {
    return {
      selected: "1",
    };
  },
   mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
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