<script>
  import { Button } from "../../dist/svea.module"
  import style from "../../dist/bundle.css";
  let handleClickEvent = event => console.log(event.detail.event);
</script>

<h1>Themes</h1>
<Button>Default</Button>
<Button theme="primary">Primary</Button>
<Button theme="secondary">Secondary</Button>

<h2>Default</h2>
<Button>Default</Button>
<Button outline="true">Outline</Button>
<Button outline="true" disabled>Outline & disabled</Button>
<Button disabled>Disabled</Button>

<h2>Primary</h2>
<Button theme="primary">Default</Button>
<Button theme="primary" outline="true">Outline</Button>
<Button theme="primary" outline="true" disabled>Outline & disabled</Button>
<Button theme="primary" disabled>Disabled</Button>

<h2>Secondary</h2>
<Button theme="secondary">Default</Button>
<Button theme="secondary" outline="true">Outline</Button>
<Button theme="secondary" outline="true" disabled>Outline & disabled</Button>
<Button theme="secondary" disabled>Disabled</Button>

