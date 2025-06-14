'use client';

import {
  MenuTrigger as ReactAriaMenuTrigger,
  MenuTriggerProps as ReactAriaMenuTriggerProps,
  Button as ReactAriaButton,
  Popover as ReactAriaPopover,
  Menu as ReactAriaMenu,
  MenuProps as ReactAriaMenuProps,
  MenuItem as ReactAriaMenuItem,
  MenuItemProps as ReactAriaMenuItemProps,
  Separator as ReactAriaSeparator
} from 'react-aria-components';

// React Ariaの基本継承コンポーネント
export interface AriaMenuTriggerProps extends ReactAriaMenuTriggerProps {}
export interface AriaMenuProps<T> extends ReactAriaMenuProps<T> {}
export interface AriaMenuItemProps extends ReactAriaMenuItemProps {}
export interface AriaSeparatorProps extends React.ComponentProps<typeof ReactAriaSeparator> {}

export function AriaMenuTrigger(props: AriaMenuTriggerProps) {
  return <ReactAriaMenuTrigger {...props} />;
}

export function AriaMenu<T extends object>(props: AriaMenuProps<T>) {
  return <ReactAriaMenu {...props} />;
}

export function AriaMenuItem(props: AriaMenuItemProps) {
  return <ReactAriaMenuItem {...props} />;
}

export function AriaSeparator(props: AriaSeparatorProps) {
  return <ReactAriaSeparator {...props} />;
}

// Note: AriaButton and AriaPopover are exported from their respective files
// AriaMenu file only exports menu-specific components