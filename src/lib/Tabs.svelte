<script>
  import {createEventDispatcher} from "svelte";
  const dispatch = createEventDispatcher()

  export let items;
  export let activeItem;

</script>

<div>
  <div class="mb-10">
    <ul class="flex justify-center p-0 list-none">
      {#each items as item}
        <li on:click={() => dispatch("tabChange", item)}>
          <div class:active={item ===activeItem} class="mx-4 text-xl text-gray-600 cursor-pointer">{item}</div></li>
      {/each}
    </ul>
  </div>
</div>

<style>
    .active {
        @apply text-red-400 border-b-2 border-solid border-red-400 pb-2;
    }


</style>
