'use client';

import { 
  AriaDisclosureGroup,
  AriaDisclosure,
  AriaDisclosurePanel,
  AriaDisclosureGroupProps,
  AriaDisclosureProps,
  AriaButton
} from './aria';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CustomDisclosureProps extends AriaDisclosureProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function Disclosure({ 
  title, 
  children, 
  className,
  ...props 
}: CustomDisclosureProps) {
  return (
    <AriaDisclosure className={cn('border border-gray-200 rounded-lg', className)} {...props}>
      <AriaButton className="w-full px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-t-lg group flex items-center justify-between">
        <span className="font-medium text-gray-900">{title}</span>
        <svg 
          className="w-5 h-5 text-gray-500 transition-transform group-data-[expanded]:rotate-180" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </AriaButton>
      <AriaDisclosurePanel className="px-4 py-3 text-gray-700 border-t border-gray-200">
        {children}
      </AriaDisclosurePanel>
    </AriaDisclosure>
  );
}

interface CustomDisclosureGroupProps extends AriaDisclosureGroupProps {
  children: ReactNode;
  className?: string;
}

export function DisclosureGroup({ 
  children, 
  className,
  ...props 
}: CustomDisclosureGroupProps) {
  return (
    <AriaDisclosureGroup className={cn('space-y-2', className)} {...props}>
      {children}
    </AriaDisclosureGroup>
  );
}