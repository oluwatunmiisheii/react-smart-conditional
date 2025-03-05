import React from 'react';
import { polymorphicForwardRef } from '../types/polymorphic';
import { isFragment } from '../utils/is-fragment';

export const Else = polymorphicForwardRef<'div', JSX.IntrinsicElements['div']>(
  ({ as: Element = 'div', ...props }, ref) => {
    return isFragment(Element) ? (
      props.children
    ) : (
      <Element ref={ref} {...props} />
    );
  },
);
Else.displayName = 'Else';
