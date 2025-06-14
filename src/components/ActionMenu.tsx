'use client';

import { useState } from 'react';
import {
  AriaMenuTrigger,
  AriaButton,
  AriaPopover,
  AriaMenu,
  AriaMenuItem
} from './aria';
import { cn } from '@/lib/utils';

interface ActionMenuItem {
  id: string;
  label: string;
  onAction: () => void;
  variant?: 'default' | 'danger';
}

interface ActionMenuProps {
  items: ActionMenuItem[];
  className?: string;
}

export function ActionMenu({ items, className }: ActionMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AriaMenuTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
      <AriaButton
        className={cn(
          'inline-flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500',
          className
        )}
      >
        <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 16 16">
          <circle cx="2" cy="8" r="1.5"/>
          <circle cx="8" cy="8" r="1.5"/>
          <circle cx="14" cy="8" r="1.5"/>
        </svg>
      </AriaButton>
      <AriaPopover className="min-w-32 bg-white border border-gray-300 rounded-md shadow-lg">
        <AriaMenu
          className="py-1"
          onAction={(key) => {
            const item = items.find(item => item.id === key);
            if (item) {
              item.onAction();
              setIsOpen(false);
            }
          }}
        >
          {items.map((item) => (
            <AriaMenuItem
              key={item.id}
              id={item.id}
              className={cn(
                'px-3 py-2 text-sm cursor-pointer focus:outline-none',
                item.variant === 'danger'
                  ? 'text-red-700 hover:bg-red-50 focus:bg-red-50'
                  : 'text-gray-700 hover:bg-gray-100 focus:bg-gray-100'
              )}
            >
              {item.label}
            </AriaMenuItem>
          ))}
        </AriaMenu>
      </AriaPopover>
    </AriaMenuTrigger>
  );
}