import { Button } from '../../dist/svea.module';
import BtnStyle from './BtnStyle.svelte';
import Playground from './Playground.svelte';
import ButtonReadme from './README.md';
import { action } from '@storybook/addon-actions';


export default {
  title: 'Button',
  parameters: {
    notes: { markdown: ButtonReadme }
  }
};

export const themes = () => ({ Component: BtnStyle });

export const playground = () => ({ Component: Playground });

export const actions = () => ({
  Component: Button,
  props: { 
    text: 'Fire click events',
    theme: 'primary'
  },
  on: { click: action('click') }
});

