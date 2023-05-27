import { writable } from "svelte/store";

export const PollStore = writable([
  {
    id: 1,
    question: "Python or JS?",
    answerA: "Python",
    answerB: "JavaScript",
    votesA: 19,
    votesB: 15,
  },
  {
    id: 2,
    question: "Python or C#?",
    answerA: "Python",
    answerB: "C#",
    votesA: 20,
    votesB: 9,
  },
]);
