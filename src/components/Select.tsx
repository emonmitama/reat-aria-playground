'use client';

import {
  AriaSelect,
  AriaSelectProps,
  AriaLabel,
  AriaButton,
  AriaSelectValue,
  AriaPopover,
  AriaListBox,
  AriaListBoxItem
} from './aria';
import { cn } from '@/lib/utils';

interface CustomSelectProps<T> extends AriaSelectProps<T> {
  label?: string;
  items: Array<{ id: T; name: string }>;
}

export function Select<T extends string | number>({ 
  label, 
  items, 
  className, 
  ...props 
}: CustomSelectProps<T>) {
  return (
    <AriaSelect className={cn('flex flex-col space-y-1', className)} {...props}>
      {label && (
        <AriaLabel className="text-sm font-medium">
          {label}
        </AriaLabel>
      )}
      <AriaButton className="px-3 py-2 border border-gray-300 rounded-md bg-white text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-center justify-between">
        <AriaSelectValue />
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </AriaButton>
      <AriaPopover className="bg-white border border-gray-300 rounded-md shadow-lg">
        <AriaListBox className="py-1 max-h-60 overflow-auto">
          {items.map((item) => (
            <AriaListBoxItem
              key={item.id}
              id={item.id}
              className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer focus:bg-blue-500 focus:text-white outline-none"
            >
              {item.name}
            </AriaListBoxItem>
          ))}
        </AriaListBox>
      </AriaPopover>
    </AriaSelect>
  );
}