import React from 'react';
import { Show } from '../../src/components/show';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Show component', () => {
  it('renders first true If child when multiple is false (default)', () => {
    render(
      <Show>
        <Show.If condition={true}>If content 1</Show.If>
        <Show.If condition={true}>If content 2</Show.If>
        <Show.Else>Else content</Show.Else>
      </Show>,
    );
    expect(screen.getByText('If content 1')).toBeInTheDocument();
    expect(screen.queryByText('If content 2')).not.toBeInTheDocument();
    expect(screen.queryByText('Else content')).not.toBeInTheDocument();
  });

  it('renders all true If children when multiple is true', () => {
    render(
      <Show multiple>
        <Show.If condition={true}>If content 1</Show.If>
        <Show.If condition={true}>If content 2</Show.If>
        <Show.Else>Else content</Show.Else>
      </Show>,
    );
    expect(screen.getByText('If content 1')).toBeInTheDocument();
    expect(screen.getByText('If content 2')).toBeInTheDocument();
    expect(screen.queryByText('Else content')).not.toBeInTheDocument();
  });

  it('renders Else child when no If conditions are true', () => {
    render(
      <Show>
        <Show.If condition={false}>If content 1</Show.If>
        <Show.If condition={false}>If content 2</Show.If>
        <Show.Else>Else content</Show.Else>
      </Show>,
    );
    expect(screen.queryByText('If content 1')).not.toBeInTheDocument();
    expect(screen.queryByText('If content 2')).not.toBeInTheDocument();
    expect(screen.getByText('Else content')).toBeInTheDocument();
  });

  it('renders nothing when no conditions are true and no Else is provided', () => {
    const { container } = render(
      <Show>
        <Show.If condition={false}>If content 1</Show.If>
        <Show.If condition={false}>If content 2</Show.If>
      </Show>,
    );
    expect(container.firstChild).toBeEmptyDOMElement();
  });

  it('warns about invalid child types', () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    render(
      <Show>
        <Show.If condition={true}>Valid child</Show.If>
        {/* @ts-ignore - Intentionally passing an invalid child */}
        {5}
      </Show>,
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      'Invalid child type in Show component',
    );
    consoleSpy.mockRestore();
  });

  describe('polymorphic', () => {
    it.each<[string, React.ElementType, boolean | undefined]>([
      ['Show.If', Show.If, true],
      ['Show.Else', Show.Else, undefined],
    ])('renders %s as a default element', (name, Component, condition) => {
      const { container } = render(
        <Show>
          <Component {...(condition !== undefined ? { condition } : {})}>
            {name} content
          </Component>
        </Show>,
      );
      expect(container.firstChild?.firstChild?.nodeName).toBe('DIV');
    });

    it.each<[string, React.ElementType, boolean | undefined]>([
      ['Show.If', Show.If, true],
      ['Show.Else', Show.Else, undefined],
    ])('renders %s as a custom element', (name, Component, condition) => {
      const { container } = render(
        <Show>
          <Component
            {...(condition !== undefined ? { condition } : {})}
            as="span"
          >
            {name} content
          </Component>
        </Show>,
      );
      expect(container.firstChild?.firstChild?.nodeName).toBe('SPAN');
    });

    it.each<[string, React.ElementType, boolean | undefined]>([
      ['Show.If', Show.If, true],
      ['Show.Else', Show.Else, undefined],
    ])(
      'passes additional props and forwards ref',
      (name, Component, condition) => {
        const ref = React.createRef<HTMLButtonElement>();
        const { container } = render(
          <Show>
            <Component
              {...(condition !== undefined ? { condition } : {})}
              as="button"
              type="submit"
              className="custom-class"
              ref={ref}
            >
              {name} content
            </Component>
          </Show>,
        );
        const button = container.firstChild?.firstChild as HTMLButtonElement;
        expect(button.nodeName).toBe('BUTTON');
        expect(button.type).toBe('submit');
        expect(button.className).toBe('custom-class');
        expect(ref.current).toBe(button);
      },
    );
  });
});
