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
});
