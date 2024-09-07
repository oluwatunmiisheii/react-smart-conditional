import React from 'react';
import Show from './show';

export const Test = () => {
  return (
    <Show as="a">
      <Show.If condition={true}>
        <div>test</div>
      </Show.If>
      <Show.Else>
        <div>test2</div>
      </Show.Else>
    </Show>
  );
};
