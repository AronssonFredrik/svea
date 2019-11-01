<script>
  import { Button } from "../../dist/svea.module";
  import style from "../../dist/bundle.css";
  let handleClickEvent = event => console.log(event.detail.event);

  let theme;
  let themes = ["default", "primary", "secondary"];

  let defaultTheme = "default";
  let defaultText = "Text of Button";
  let defaultOutline = false;
  let defaultDisabled = false;

  let singleCheckbox = false;
</script>

<h1>Playground</h1>
Text:
<input bind:value={defaultText} />
<br />
Theme:
<select bind:value={defaultTheme}>
  {#each themes as theme}
    <option value={theme}>{theme}</option>
  {/each}
</select>
<br />
Outline:
<input type="checkbox" bind:checked={defaultOutline} />
<br />
Disabled:
<input type="checkbox" bind:checked={defaultDisabled} />
<br />

<h2>Output</h2>
<Button
  outline={defaultOutline}
  theme={defaultTheme}
  disabled={!!defaultDisabled}>
  {defaultText}
</Button>
