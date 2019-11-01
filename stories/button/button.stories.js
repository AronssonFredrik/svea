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

// export const text = () => ({
//   Component: Button,
//   props: { text: 'Hello Button' },
//   on: { click: action('click') },
// });

