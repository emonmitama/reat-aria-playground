'use client';

import { 
  Button as ReactAriaButton, 
  ButtonProps as ReactAriaButtonProps 
} from 'react-aria-components';

// React Ariaの基本継承コンポーネント
export interface AriaButtonProps extends ReactAriaButtonProps {}

export function AriaButton({ className, ...props }: AriaButtonProps) {
  return <ReactAriaButton className={`text-[#333] ${className || ''}`} {...props} />;
}