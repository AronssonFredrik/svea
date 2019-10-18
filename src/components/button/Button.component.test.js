import { render, cleanup } from '@testing-library/svelte'

import Button from './Button';

describe('Button', () => {
    let component;
    beforeEach(() => {
        // render(Button);
        component = render(Button, {props: { text: 'hello' }});
      

    })
    afterEach(() => {
        cleanup();
    })


    test('should create', () => {
        expect(component).toBeDefined();
    })
    test('text should be hello', () => {
        const { getByText } = render(Comp, { props: { name: 'World' } })

        expect(getByText('Hello World!')).toBeInTheDocument()
      
        console.log(component.debug);
    })



})