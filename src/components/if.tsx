import React from 'react';
import { polymorphicForwardRef } from '../types/polymorphic';

export const If = polymorphicForwardRef<'div', { condition: boolean }>(
  ({ as: Element = 'div', condition, ...props }, ref) =>
    condition ? <Element ref={ref} {...props} /> : null,
);
If.displayName = 'If';
