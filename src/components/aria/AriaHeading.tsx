'use client';

import {
  Heading as ReactAriaHeading
} from 'react-aria-components';

// React Ariaの基本継承コンポーネント
export interface AriaHeadingProps extends React.ComponentProps<typeof ReactAriaHeading> {}

export function AriaHeading(props: AriaHeadingProps) {
  return <ReactAriaHeading {...props} />;
}