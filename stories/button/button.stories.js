import BtnStyle from './BtnStyle.svelte';
import Button from "../../src/components/Button.svelte";
import { action } from '@storybook/addon-actions';

import ButtonReadme from './README.md';

export default {
  title: 'Button',
  parameters: {
    notes: { markdown: ButtonReadme }
  }
};

export const primary = () => ({
  Component: BtnStyle,
  props: { text: 'Hello'}  
});

export const secondary = () => ({
  Component: BtnStyle,
  props: { text: 'Hello' }
});

export const text = () => ({
  Component: Button,
  props: { text: 'Hello Button' },
  on: { click: action('click') },
});
