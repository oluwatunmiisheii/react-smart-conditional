import React from 'react';
import { polymorphicForwardRef } from '../types/polymorphic';

export const Else = polymorphicForwardRef<'div'>(
  ({ as: Element = 'div', ...props }, ref) => <Element ref={ref} {...props} />,
);
Else.displayName = 'Else';
