'use client';

import {
  Popover as ReactAriaPopover
} from 'react-aria-components';

// React Ariaの基本継承コンポーネント
export interface AriaPopoverProps extends React.ComponentProps<typeof ReactAriaPopover> {}

export function AriaPopover(props: AriaPopoverProps) {
  return <ReactAriaPopover {...props} />;
}