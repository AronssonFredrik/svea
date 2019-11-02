<script>
  // logic goes here
  export let text,
    theme,
    outline,
    disabled = false,
    ariaLabel;

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let handleClick = event => {
    dispatch("click", {
      event: event
    });
  };
</script>

<style type="text/scss">
  @import "../../assets/reset.scss";
  @import "../../assets/color.scss";
  $themes: "default", "primary", "secondary";
  $theme-color: $default $white $default;
  $theme-background: $lightgray $primary $secondary;

  $outline-color: $default $primary $secondary;
  $outline-border: $lightgray $primary $secondary;

  button {
    padding: 8px 16px;
    cursor: pointer;
    transition: all 0.2s;
    border-radius: 3px;
    &:focus {
      outline: $primary auto;
    }
  }
  @each $current-theme in $themes {
    $theme: index($themes, $current-theme);
    .theme-#{$current-theme} {
      color: nth($theme-color, $theme);
      background: nth($theme-background, $theme);
      &:hover,
      &focus {
        background: darken(nth($theme-background, $theme), 5);
      }
      &.outline {
        background: none;
        border: 1px solid;
        border-color: nth($outline-border, $theme);
        color: nth($outline-color, $theme);
        &:hover,
        &focus {
          border: 1px solid darken(nth($theme-background, $theme), 5);
        }
      }
    }
  }

  :disabled {
    cursor: not-allowed;
  }
</style>

<!-- markup goes here -->
<button
  on:click={handleClick}
  {disabled}
  class={theme ? `theme-${theme}` : 'theme-default'}
  class:outline
  aria-label={ariaLabel}>
  <slot>{text}</slot>
</button>
