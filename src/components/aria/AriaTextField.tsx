'use client';

import {
  TextField as ReactAriaTextField,
  TextFieldProps as ReactAriaTextFieldProps,
  Label as ReactAriaLabel,
  Input as ReactAriaInput,
  Text as ReactAriaText
} from 'react-aria-components';

// React Ariaの基本継承コンポーネント
export interface AriaTextFieldProps extends ReactAriaTextFieldProps {}
export interface AriaLabelProps extends React.ComponentProps<typeof ReactAriaLabel> {}
export interface AriaInputProps extends React.ComponentProps<typeof ReactAriaInput> {}
export interface AriaTextProps extends React.ComponentProps<typeof ReactAriaText> {}

export function AriaTextField(props: AriaTextFieldProps) {
  return <ReactAriaTextField {...props} />;
}

export function AriaLabel({ className, ...props }: AriaLabelProps) {
  return <ReactAriaLabel className={`text-[#333] ${className || ''}`} {...props} />;
}

export function AriaInput({ className, ...props }: AriaInputProps) {
  return <ReactAriaInput className={`bg-white text-[#333] placeholder:text-[#ccc] ${className || ''}`} {...props} />;
}

export function AriaText({ className, ...props }: AriaTextProps) {
  return <ReactAriaText className={`text-[#333] ${className || ''}`} {...props} />;
}