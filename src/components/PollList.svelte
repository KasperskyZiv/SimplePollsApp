<script>
  import PollDetails from "./PollDetails.svelte";
  import { PollStore } from "../stores/PollStore.js";
  import { fade, scale } from "svelte/transition";
  import { flip } from "svelte/animate";
  // const unsub = PollStore.subscribe((data) => {
  //   polls = data;
  // });
  // onDestroy(() => unsub());
  // onMount(() => {
  //   // good place to fetch db data
  //   console.log("Component mounted!");
  // });
</script>

<div class="grid grid-cols-2 gap-20">
  {#each $PollStore as poll (poll.id)}
  <div in:fade out:scale|local animate:flip="{{duration: 500}}">
    <PollDetails {poll} />
  </div>
  {/each}
</div>

<style></style>
