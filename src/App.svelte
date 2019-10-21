<script>
  export let name;
  import Button from "./components/Button.svelte";

	let handleClickEvent = (event) => {
		console.table(event.detail.event);
  }

</script>

<h2>Primary</h2>
<Button on:clickHandle={handleClickEvent}
  color="primary"
	>Primary</Button>
<Button on:clickHandle={handleClickEvent}
  disabled="true"
  color="primary"
	>Primary: disabled</Button>
<Button on:clickHandle={handleClickEvent}
  color="primary"
  outline="true"
	>Primary: outline</Button>
<Button on:clickHandle={handleClickEvent}
  disabled="true"
  color="primary"
  outline="true"
	>Primary: outline & disabled</Button>
  
