<script>
  import Button from "../../src/components/Button.svelte";
  export let text;
  let handleClickEvent = event => console.log(event.detail.event);
</script>

<Button {text} on:clickHandle={handleClickEvent} />
<Button {text} />
<Button {text} />
<Button {text} />
