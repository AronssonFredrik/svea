// import { Button } from '../../dist/svea.module';
import BtnStyle from './BtnStyle.svelte';
import ButtonReadme from './README.md';
import { action } from '@storybook/addon-actions';


export default {
  title: 'Button',
  parameters: {
    notes: { markdown: ButtonReadme }
  }
};
// export const primary = () => ({
//   Component: Button,
//   props: { text: 'Hello'}  
// });


export const secondary = () => ({
  Component: BtnStyle,
  props: { text: 'Hello' }
});

// export const text = () => ({
//   Component: Button,
//   props: { text: 'Hello Button' },
//   on: { click: action('click') },
// });

