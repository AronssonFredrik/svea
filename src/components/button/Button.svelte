<script>
  // logic goes here
  export let text;

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let handleClick = (event) => {
    dispatch("clickHandle", {
	  event: event
    });
  };
</script>

<style>
  /* styles go here */
</style>

<!-- markup goes here -->
<button on:click={handleClick}>
  <slot>{text}</slot>
</button>
