import { Fragment } from 'react';

export const isFragment = (Component: React.ElementType) =>
  Component === Fragment;
