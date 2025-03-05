import React from 'react';
import { Else } from '../../src/components/else';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Else', () => {
  it('should render as expected', () => {
    render(<Else>Hello</Else>);
    expect(screen.queryByText('Hello')).toBeInTheDocument();
  });

  it('should render correctly with a different element type', () => {
    const { container } = render(<Else as="span">Hello</Else>);
    expect(screen.queryByText('Hello')).toBeInTheDocument();
    expect(container.firstChild?.nodeName).toBe('SPAN');
  });

  it('should forward ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Else ref={ref}>Hello</Else>);
    expect(ref.current).toBeInTheDocument();
  });

  it('should pass additional props', () => {
    const { container } = render(
      <Else className="test" id="test">
        Hello
      </Else>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should not pass ref and props when custom component is a Fragment', () => {
    const ref = React.createRef<HTMLDivElement>();

    const { container } = render(
      <Else as={React.Fragment} ref={ref}>
        Hello
      </Else>,
    );
    expect(ref.current).toBeNull();
    expect(container).toMatchSnapshot();
  });
});
