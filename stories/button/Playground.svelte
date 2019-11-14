<script>
  import { Button } from "../../dist/svea.module";
  import style from "../../dist/bundle.css";

  let theme;
  let themes = ["default", "primary", "secondary"];

  let defaultTheme = "default";
  let defaultText = "Text of Button";
  let defaultOutline = false;
  let defaultDisabled = false;

  let singleCheckbox = false;
</script>
<style>
  code {
    background-color: #eee;
    border-radius: 3px;
    padding: 6px;
    margin-top: 12px;
    display: inline-block;
    white-space: pre-wrap;
  }
</style>

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
  disabled={defaultDisabled}>
  {defaultText}
</Button>

<br />

<code>
&lt;Button outline="{defaultOutline}" theme="{defaultTheme}" disabled="{defaultDisabled}"&gt;
  <strong>{defaultText}</strong>
&lt;/Button&gt;
</code>