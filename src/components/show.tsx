import React, { type ReactNode, Children, isValidElement } from 'react';
import { If, ElseIf, Else } from './conditional-components';
import { polymorphicForwardRef } from '../types/polymorphic';

const Show = polymorphicForwardRef<'div', JSX.IntrinsicElements['div']>(
  ({ as: Element = 'div', children, ...props }, ref) => {
    let When: ReactNode = null;
    let Otherwise: ReactNode = null;

    Children.toArray(children).some((child) => {
      if (isValidElement(child)) {
        if (
          (child.type === If || child.type === ElseIf) &&
          child.props.condition
        ) {
          When = child;
          return true;
        } else if (child.type === Else) {
          Otherwise = child;
        }
      }
      return false;
    });

    return (
      <Element ref={ref} {...props}>
        {When || Otherwise}
      </Element>
    );
  },
);
Show.displayName = 'Show';

const showpNs = Object.assign(Show, {
  If,
  ElseIf,
  Else,
});

export default showpNs;
