<script>
  import Button1 from "../lib/Button.svelte";
  import { createEventDispatcher } from "svelte";
  import Card from "../lib/Card.svelte";
  import { PollStore } from "../stores/PollStore.js";
  import { fade } from "svelte/transition";
  let dispatcher = createEventDispatcher();
  let fields = { question: "", answerA: "", answerB: "" };
  let errors = { question: "", answerA: "", answerB: "" };
  let currentQuestion = "B";
  let valid = false;
  function submitForm() {
    valid = true;
    for (let field in errors) {
      errors[field] = "";
    }

    if (fields.question.trim().length < 5) {
      valid = false;
      errors.question = "Question must be at least 5 characters long!";
    }
    for (let field in fields) {
      if (field.startsWith("answer") && fields[field].trim().length < 1) {
        valid = false;
        errors[field] = field + " cannot be empty!";
      }
    }
    // if (fields.answerB.trim().length < 1) {
    //   valid = false;
    //   errors.answerB = "Answer B cannot be empty!";
    // }
    if (valid) {
      let poll = { ...fields, votesA: 0, votesB: 0, id: Math.random() };
      PollStore.update((currentPolls) => [poll, ...currentPolls]);
      dispatcher("newPoll");
      // console.log(fields);
    }
  }

  const addQuestion = () => {
    currentQuestion;
    const nextChar = String.fromCharCode(currentQuestion.charCodeAt(0) + 1);
    fields["answer" + nextChar] = "";
    errors["answer" + nextChar] = "";
  };
</script>

<form class="w-96 mx-auto text-center" on:submit|preventDefault="{submitForm}">
  <Card>
    {#each Object.keys(fields) as key}
    <div class="form-field">
      <label for="{key}" class="capitalize"
        >{key.replace(/([A-Z])/g, " $1")}:</label
      >
      <input
        type="text"
        id="{key}"
        bind:value="{fields[key]}"
        class:ierror="{errors[key]}"
      />
      <div class="error">{errors[key]}</div>
    </div>
    {/each}
    <!--  <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded">Add Poll</button>-->
    <!--    <span on:click|preventDefault="{addQuestion}"-->
    <!--      ><Button1 type="secondary">Add Question</Button1></span-->
    <!--    >-->
    <Button1>Save Poll</Button1>
    <!--  <Button inverse="true">Add Poll</Button>-->
    <!--  <Button type="secondary">Add Poll</Button>-->
    <!--  <Button type="secondary" inverse="true">Add Poll</Button>-->
  </Card>
</form>

<style lang="postcss">
  .form-field {
    @apply m-4 mx-auto;
  }
  input {
    @apply w-full  border rounded-md py-2 px-2;
  }

  input.ierror {
    @apply sm:text-base placeholder-gray-400 focus:border-indigo-400 focus:outline-none  border-red-500;
  }

  label {
    @apply block text-left;
  }
  .error {
    @apply flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1;
  }
</style>
