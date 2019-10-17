<script>
  export let name;
  import Button from "./components/Button.svelte";

	let handleClickEvent = (event) => {
		console.table(event.detail.event);
	}

</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello {name}!</h1>

<Button text="hello abcf"
	on:clickHandle={handleClickEvent}
	>lorem, ipsum</Button>
