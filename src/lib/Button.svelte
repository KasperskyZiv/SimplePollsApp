<script>
  // export let type: "primary" | "secondary" | "red" = "primary";
  export let type = "primary";
  export let flat = false;
  export let inverse = false;
</script>

<button class="{type}" class:flat="{flat}" class:inverse="{inverse}" on:click>
  <slot></slot>
</button>

<style lang="postcss">
  button {
    @apply border-0 cursor-pointer rounded px-4 py-2 font-bold shadow-md;
  }
  .primary {
    @apply bg-green-500 text-white hover:bg-green-700;
  }
  .red {
    @apply bg-red-500 text-white hover:bg-red-700 opacity-90;
  }
  .secondary {
    @apply bg-cyan-500 text-white hover:bg-cyan-700;
  }
  .flat {
    @apply shadow-none;
  }
  .primary.inverse {
    @apply bg-green-200 text-gray-700 hover:bg-green-400 border-gray-700 border-solid border-2;
  }
  .secondary.inverse {
    @apply bg-cyan-200 text-gray-700 hover:bg-cyan-400 border-gray-700 border-solid border-2;
  }
</style>
