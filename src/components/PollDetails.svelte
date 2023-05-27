<script>
  import Card from "../lib/Card.svelte";
  import Button1 from "../lib/Button.svelte";
  import {PollStore} from "../stores/PollStore.js";
  import {tweened} from "svelte/motion";

  export let poll;

  $: totalVotes = Object.keys(poll)
    .filter((key) => key.startsWith("vote"))
    .reduce((acc, curr) => acc + poll[curr], 0);
  $: presentA = Math.floor(poll.votesA * 100 / totalVotes) || 0
  $: presentB = Math.floor(poll.votesB * 100 / totalVotes) || 0
  // tweened presentations
  const tweenedA = tweened(0)
  const tweenedB = tweened(0)
  $: tweenedA.set(presentA);
  $: tweenedB.set(presentB);
  // $: console.log($tweenedA, $tweenedB)


  const handleDelete = (id) => {
      // console.log("Updating polls")
      PollStore.update(
          currentPolls => currentPolls.filter(poll =>poll.id != id))
  }

</script>

<Card>
  <h3 class="text-3xl font-bold my-0 mx-auto text-gray-600">{poll.question}</h3>
  <p class="mt-1 text-sm text-gray-400">Total Votes: {totalVotes}</p>
  {#each Object.keys(poll).filter((key) => key.startsWith('answer')) as
  answerKey}
  <div
    class="mt-6 bg-gray-50 cursor-pointer my-3 mx-auto relative hover:opacity-60"
    on:click={ () => poll['votes' + answerKey.slice(-1)] +=1 }
  >
<!--    on:click={ () => { dispatcher("vote", {option:answerKey.slice(-1), id:poll.id})}}-->
    <div class="h-full absolute box-border rounded shadow opacity-50 border-l-4 border-solid {answerKey}"
         style="width: {'answerA' === answerKey ? $tweenedA: $tweenedB}%"></div>

    <span class="inline-block py-3 px-5">
      {poll[answerKey]} ({poll['votes' + answerKey.slice(-1)]})
    </span>
  </div>

  {/each}<div class="delete"><Button1
        on:click={()=>handleDelete(poll.id)} flat="true" type="red">Delete</Button1></div>
</Card>

<style>
  .answerA {
    @apply  border-green-600 bg-green-400;
  }
  .answerB {
    @apply  border-cyan-600 bg-cyan-300;
  }

  .delete {
      @apply mt-6 text-center;
  }
</style>
