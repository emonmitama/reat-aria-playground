'use client';

import {
  AriaTable,
  AriaTableHeader,
  AriaTableBody,
  AriaColumn,
  AriaRow,
  AriaCell,
  AriaTableProps,
  AriaColumnProps,
  AriaRowProps,
  AriaCellProps,
  AriaCheckbox
} from './aria';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CustomTableProps extends AriaTableProps {
  className?: string;
  children: ReactNode;
}

export function Table({ className, children, ...props }: CustomTableProps) {
  return (
    <AriaTable 
      className={cn(
        'w-full border-collapse border border-gray-300 rounded-lg overflow-hidden',
        className
      )} 
      {...props}
    >
      {children}
    </AriaTable>
  );
}

interface CustomColumnProps extends AriaColumnProps {
  className?: string;
  children: ReactNode;
}

export function TableColumn({ className, children, ...props }: CustomColumnProps) {
  return (
    <AriaColumn 
      className={cn(
        'px-4 py-3 text-left font-medium text-gray-900 bg-gray-50 border-b border-gray-300',
        'hover:bg-gray-100 focus:outline-none focus:bg-gray-100',
        'cursor-pointer select-none',
        className
      )} 
      {...props}
    >
      <div className="flex items-center space-x-1">
        {children}
        {props.allowsSorting && (
          <span className="text-gray-400 text-xs">↕</span>
        )}
      </div>
    </AriaColumn>
  );
}

interface CustomRowProps extends AriaRowProps {
  className?: string;
  children: ReactNode;
}

export function TableRow({ className, children, ...props }: CustomRowProps) {
  return (
    <AriaRow 
      className={cn(
        'border-b border-gray-200 hover:bg-gray-50',
        'data-[selected]:bg-blue-50 data-[selected]:hover:bg-blue-100',
        'focus:outline-none focus:bg-gray-50',
        className
      )} 
      {...props}
    >
      {children}
    </AriaRow>
  );
}

interface CustomCellProps extends AriaCellProps {
  className?: string;
  children: ReactNode;
}

export function TableCell({ className, children, ...props }: CustomCellProps) {
  return (
    <AriaCell 
      className={cn(
        'px-4 py-3 text-gray-700',
        className
      )} 
      {...props}
    >
      {children}
    </AriaCell>
  );
}

// Export the original components for more advanced use cases
export { AriaTableHeader as TableHeader, AriaTableBody as TableBody };