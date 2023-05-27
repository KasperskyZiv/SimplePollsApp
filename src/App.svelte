<script>
  import TopHeader from "./components/Header.svelte";
  import BFooter from "./components/Footer.svelte";
  import Tabs from "./lib/Tabs.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import PollList from "./components/PollList.svelte";
  import { PollStore } from "./stores/PollStore.js";
  import Button1 from "./lib/Button.svelte";

  let items = ["Current Polls", "Add New Polls"];
  let activeItem = "Current Polls";

  // const createPollForm = (event) => {
  //   // polls = [...polls, event.detail];
  //   console.log("createPollForm called");
  //   activeItem = "Current Polls";
  // };
</script>

<TopHeader />
<main>
  <Tabs {items} {activeItem} on:tabChange={(e) => {activeItem = e.detail;}} />
  {#if activeItem === "Current Polls"}
  <PollList />
  {:else if activeItem === "Add New Polls"} <CreatePollForm on:newPoll={() =>
  activeItem = "Current Polls"}/> {/if}
  <!--      <Button1 on:click={() => {console.log($PollStore)}}>log polls</Button1>-->
</main>
<BFooter />

<style>
  main {
    @apply max-w-screen-lg mx-auto mt-4;
  }
</style>
