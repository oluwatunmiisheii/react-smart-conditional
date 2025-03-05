import React from 'react';
import '@testing-library/jest-dom';
import { If } from '../../src/components/if';
import { render, screen } from '@testing-library/react';

describe('If', () => {
  it.each([
    [true, true],
    [false, false],
  ])(
    'should render children when condition is %s',
    (condition, shouldRender) => {
      render(<If condition={condition}>Hello</If>);
      if (shouldRender) {
        expect(screen.queryByText('Hello')).toBeInTheDocument();
      } else {
        expect(screen.queryByText('Hello')).not.toBeInTheDocument();
      }
    },
  );

  it('should render correctly with a custom element type', () => {
    const { container } = render(
      <If condition={true} as="span">
        Hello
      </If>,
    );
    expect(screen.queryByText('Hello')).toBeInTheDocument();
    expect(container.firstChild?.nodeName).toBe('SPAN');
  });

  it('should forward ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <If condition={true} ref={ref}>
        Hello
      </If>,
    );
    expect(ref.current).toBeInTheDocument();
  });

  it('should pass additional props', () => {
    const { container } = render(
      <If condition={true} className="test" id="test">
        Hello
      </If>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should not pass ref and props when custom component is a Fragment', () => {
    const ref = React.createRef<HTMLDivElement>();

    const { container } = render(
      <If
        condition={true}
        as={React.Fragment}
        ref={ref}
        className="test"
        id="test"
      >
        Hello
      </If>,
    );
    expect(ref.current).toBeNull();
    expect(container).toMatchSnapshot();
  });
});
