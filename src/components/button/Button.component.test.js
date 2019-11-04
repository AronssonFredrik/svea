import '@testing-library/jest-dom/extend-expect'

import {cleanup, fireEvent, render, wait} from '@testing-library/svelte';

import Button from './Button';

const renderButton = (props) => {
    const { container } = render(Button, { props });
    return container;
};


describe('Button', () => {
    let component;
    afterEach(() => cleanup());
    beforeEach(() => cleanup());

    test('should create', () => {
        component = render(Button);

        expect(component).toBeDefined();
    })
    describe('create with theme', () => {
        test('should default to default', () => {
            const container = renderButton({});
            const button = container.querySelector('button');

            expect(button.classList).toContain('theme-default');
        });
        describe('as secondary', () => {
            const container = renderButton({ theme: 'primary' });
            const button = container.querySelector('button');

            test('should contain theme-primary as class', () => {
                expect(button.classList).toContain('theme-primary');
            });
            test('should NOt contain theme-default as class', () => {
                expect(button.classList).not.toContain('theme-default');
            });
        })

    })
    describe('handle disabled state', () => {
        test('should default to not disabled', () => {
            const container = renderButton({});
            const button = container.querySelector('button');

            expect(button.disabled).toBe(false);
        });
        test('set disabled value', () => {
            const container = renderButton({ disabled: 'true' });
            const button = container.querySelector('button');

            expect(button.disabled).toBe(true);
        })
    })
    describe('handle outline state', () => {
        test('should default to not outline', () => {
            const container = renderButton({});
            const button = container.querySelector('button');

            expect(button.classList).not.toContain('outline');
        });
        test('set outline value', () => {
            const container = renderButton({ outline: 'true' });
            const button = container.querySelector('button');

            expect(button.classList).toContain('outline');
        })
    })
    describe('handle aria-label', () => {
        test('should not contain aria-label', () => {
            const container = renderButton({});
            const button = container.querySelector('button');

            expect(button.getAttribute('aria-label')).toBe(null);
        });
        test('set value to aria-label', () => {
            const container = renderButton({ ariaLabel: true });
            const button = container.querySelector('button');

            expect(button.getAttribute('aria-label')).toBe('true');
        })
    })
    describe('handle text', () => {
        test('as props', () => {
            const container = renderButton({ text: 'hello' });
            const button = container.querySelector('button');
            expect(button.innerHTML).toContain('hello');    
        })
        // test('as declarative', () => {
        // })
    })
    // describe('handle click-event', () => {
    //     test('abc', async () => {
    //         // const { component } = await render(Button, {
    //         //     props: { onSubmit: jest.fn() }
    //         // });
    //         const container = await renderButton({ onClick: jest.fn() });
    //         const button = container.querySelector('button');


    //         await fireEvent.click(button);
    //         await wait();

    //         expect(button.onClick).toHaveBeenCalledTimes(1);
    //     })
    // })


    // describe('handle click-event', async () => {
    //     const container = renderButton(
    //         {
    //             click: console.log('hello')
    //         }
    //     );
    //     const button = container.querySelector('button');

    //     // button.click();
    //     fireEvent.click(button);
    //     await tick();

    //     // expect(button.handleClick).hasBeenCalled();
    // })
})