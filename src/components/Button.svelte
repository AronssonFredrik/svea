<script>
  // logic goes here
  export let text,
    color,
    outline,
    disabled = false;

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let handleClick = event => {
    dispatch("clickHandle", {
      event: event
    });
  };
  
</script>

<style>
  /* styles go here */
  /*
    default
    primary
    secondary
  */
</style>

<!-- markup goes here -->
<button
  on:click={handleClick}
  {disabled}
  class={color ? `color-${color}` : 'color-default'}
  class:outline={outline === 'true'}>
  <slot>{text}</slot>
</button>

<!-- <button on:click={handleClick}
  disabled="{{disabled}}">
  <slot>{text}</slot>
</button> -->
