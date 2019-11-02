# Button

## Summary

Declarative component [...] 

## Basic usage
Import it via script tag:

```html
<script>
    import Button from 'svea';
    ...
</script>


<Button>Click here</Button>
```

## Properties
Following props are available for `button`.

| Prop | Type | Description | Default |
| ------------- |-------------| -----| -----|
| disabled | boolean | specifies if the button should be disabled | false |
| aria-label | value | specifies the aria-label for the button | null |
| theme | value | specifies the theme for the button (styling) | default (tbd) |
| outline | boolean | specifies if the button should be outlined (styling) | true/false (tbd) |
| on:click | event | trigger event | none |

## Accessibility

| Keystroke | Notes |
| --------- |------ |
| `Enter` | triggers an action or event |
| `Space` | triggers an action or event |