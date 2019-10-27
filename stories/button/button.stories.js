import BtnStyle from './BtnStyle.svelte';
import { action } from '@storybook/addon-actions';


export default {
    title: 'Btn',
};

export const primary = () => ({
        Component: BtnStyle,
        props: { text: 'Hello' }
});
  
  export const secondary = () => ({
        Component: BtnStyle,
        props: { text: 'Hello' }
});

export const text = () => 
  (
    {
    Component: BtnStyle,
    props: { text: 'Hello Button' },
    on: { click: action('clicked') },
  }
);
