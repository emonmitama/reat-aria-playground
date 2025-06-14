'use client';

import { 
  AriaCheckbox, 
  AriaCheckboxProps 
} from './aria';
import { cn } from '@/lib/utils';

interface CustomCheckboxProps extends AriaCheckboxProps {
  label?: string;
}

export function Checkbox({ 
  label, 
  className, 
  children,
  ...props 
}: CustomCheckboxProps) {
  return (
    <AriaCheckbox
      className={cn(
        'group flex items-center gap-2 text-sm cursor-pointer',
        'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
        className
      )}
      {...props}
    >
      <div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center group-data-[selected]:bg-blue-600 group-data-[selected]:border-blue-600 group-focus-visible:ring-2 group-focus-visible:ring-blue-500 group-focus-visible:ring-offset-2">
        <svg
          className="w-3 h-3 text-white opacity-0 group-data-[selected]:opacity-100"
          viewBox="0 0 12 12"
          fill="currentColor"
        >
          <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>
      {label || children}
    </AriaCheckbox>
  );
}