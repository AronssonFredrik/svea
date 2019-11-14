<script>
  export let name;
  import Button from "../components/button/Button.svelte";
	let handleClickEvent = (event) => {
		console.table(event.detail.event);
	}
</script>


<Button outline="true" on:click={handleClickEvent}
	>lorem, ipsum</Button>
