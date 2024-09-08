import React, { type ReactNode, Children, isValidElement } from 'react';
import { If } from './if';
import { Else } from './else';
import { polymorphicForwardRef } from '../types/polymorphic';

type ConditionalComponent = typeof If | typeof Else;

type ShowProps = {
  multiple?: boolean;
};

const Show = polymorphicForwardRef<
  'div',
  JSX.IntrinsicElements['div'] & ShowProps
>(({ as: Element = 'div', children, multiple = false, ...props }, ref) => {
  const trueConditions: ReactNode[] = [];
  let Otherwise: ReactNode = null;

  Children.toArray(children).forEach((child) => {
    if (isValidElement<{ condition?: boolean }>(child)) {
      const childType = child.type as ConditionalComponent;
      if (childType === If && child.props.condition) {
        trueConditions.push(child);
        if (!multiple) return;
      } else if (childType === Else && !Otherwise) {
        Otherwise = child;
      }
    } else {
      console.warn('Invalid child type in Show component');
    }
  });

  return (
    <Element ref={ref} {...props}>
      {trueConditions.length > 0
        ? multiple
          ? trueConditions
          : trueConditions[0]
        : Otherwise}
    </Element>
  );
});
Show.displayName = 'Show';

const ShowWithComponents = Object.assign(Show, {
  If,
  Else,
});
export default ShowWithComponents;
export { ShowWithComponents as Show };
