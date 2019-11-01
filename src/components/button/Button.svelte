<script>
  // logic goes here
  export let text,
    color,
    outline,
    disabled = false,
    ariaLabel;

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let handleClick = event => {
    dispatch("clickHandle", {
      event: event
    });
  };
</script>

<style type="text/scss">
  /* styles go here */
  /*
    default
    primary
    secondary
  */
  [disabled] {
    background: lightgray;
  }
  .outline {
    background: none;
    &[disabled] {
      color: red;
    }
  }
</style>

<!-- markup goes here -->
<button
  on:click={handleClick}
  {disabled}
  class={color ? `color-${color}` : 'color-default'}
  class:outline={outline === 'true'}
  aria-label={ariaLabel}>
  <slot>{text}</slot>
</button>
