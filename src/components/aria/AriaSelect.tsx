'use client';

import {
  Select as ReactAriaSelect,
  SelectProps as ReactAriaSelectProps,
  Label as ReactAriaLabel,
  Button as ReactAriaButton,
  SelectValue as ReactAriaSelectValue,
  Popover as ReactAriaPopover,
  ListBox as ReactAriaListBox,
  ListBoxItem as ReactAriaListBoxItem,
  Collection as ReactAriaCollection
} from 'react-aria-components';

// React Ariaの基本継承コンポーネント
export interface AriaSelectProps<T> extends ReactAriaSelectProps<T> {}
export interface AriaSelectValueProps extends React.ComponentProps<typeof ReactAriaSelectValue> {}
export interface AriaListBoxProps<T> extends React.ComponentProps<typeof ReactAriaListBox<T>> {}
export interface AriaListBoxItemProps extends React.ComponentProps<typeof ReactAriaListBoxItem> {}

export function AriaSelect<T extends object>({ className, ...props }: AriaSelectProps<T>) {
  return <ReactAriaSelect className={`text-[#333] ${className || ''}`} {...props} />;
}

export function AriaSelectValue({ className, ...props }: AriaSelectValueProps) {
  return <ReactAriaSelectValue className={`text-[#333] ${className || ''}`} {...props} />;
}

export function AriaListBox<T extends object>({ className, ...props }: AriaListBoxProps<T>) {
  return <ReactAriaListBox className={`text-[#333] ${className || ''}`} {...props} />;
}

export function AriaListBoxItem({ className, ...props }: AriaListBoxItemProps) {
  return <ReactAriaListBoxItem className={`text-[#333] ${className || ''}`} {...props} />;
}

// Note: AriaLabel, AriaButton are exported from their respective files
// Only export AriaCollection here as it's specific to Select usage
export { ReactAriaCollection as AriaCollection };