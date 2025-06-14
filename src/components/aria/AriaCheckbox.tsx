'use client';

import { 
  Checkbox as ReactAriaCheckbox, 
  CheckboxProps as ReactAriaCheckboxProps 
} from 'react-aria-components';

// React Ariaの基本継承コンポーネント
export interface AriaCheckboxProps extends ReactAriaCheckboxProps {}

export function AriaCheckbox(props: AriaCheckboxProps) {
  return <ReactAriaCheckbox {...props} />;
}