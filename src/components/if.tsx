import React from 'react';
import { polymorphicForwardRef } from '../types/polymorphic';
import { isFragment } from '../utils/is-fragment';

export const If = polymorphicForwardRef<
  'div',
  JSX.IntrinsicElements['div'] & { condition: boolean }
>(({ as: Element = 'div', condition, ...props }, ref) =>
  condition ? (
    isFragment(Element) ? (
      props.children
    ) : (
      <Element ref={ref} {...props} />
    )
  ) : null,
);
If.displayName = 'If';
