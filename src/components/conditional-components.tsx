import React from 'react';
import { polymorphicForwardRef } from '../types/polymorphic';

export const If = polymorphicForwardRef<'div', { condition: boolean }>(
  ({ as: Element = 'div', condition, ...props }, ref) =>
    condition ? <Element ref={ref} {...props} /> : null,
);
If.displayName = 'If';

export const ElseIf = If;
ElseIf.displayName = 'ElseIf';

export const Else = polymorphicForwardRef<'div'>(
  ({ as: Element = 'div', ...props }, ref) => <Element ref={ref} {...props} />,
);
Else.displayName = 'Else';
