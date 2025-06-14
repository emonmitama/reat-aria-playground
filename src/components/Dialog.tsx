'use client';

import { 
  AriaDialog,
  AriaDialogProps,
  AriaDialogTrigger,
  AriaModal,
  AriaModalOverlay,
  AriaButton,
  AriaHeading
} from './aria';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CustomDialogProps extends AriaDialogProps {
  title?: string;
  children: ReactNode;
  trigger?: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Dialog({ 
  title, 
  children, 
  trigger, 
  className,
  size = 'md',
  ...props 
}: CustomDialogProps) {
  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg'
  };

  return (
    <AriaDialogTrigger>
      {trigger}
      <AriaModalOverlay className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <AriaModal className={cn(
          'relative w-full mx-4 bg-white rounded-lg shadow-lg outline-none',
          sizes[size]
        )}>
          <AriaDialog className={cn('p-6 space-y-4', className)} {...props}>
            {title && (
              <AriaHeading className="text-lg font-semibold text-gray-900 mb-4">
                {title}
              </AriaHeading>
            )}
            {children}
          </AriaDialog>
        </AriaModal>
      </AriaModalOverlay>
    </AriaDialogTrigger>
  );
}

interface DialogContentProps {
  children: ReactNode;
  className?: string;
}

export function DialogContent({ children, className }: DialogContentProps) {
  return (
    <div className={cn('text-gray-700', className)}>
      {children}
    </div>
  );
}

interface DialogActionsProps {
  children: ReactNode;
  className?: string;
}

export function DialogActions({ children, className }: DialogActionsProps) {
  return (
    <div className={cn('flex justify-end space-x-2 pt-4', className)}>
      {children}
    </div>
  );
}