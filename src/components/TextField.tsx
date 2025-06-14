'use client';

import { 
  AriaTextField, 
  AriaTextFieldProps, 
  AriaLabel, 
  AriaInput, 
  AriaText 
} from './aria';
import { cn } from '@/lib/utils';

interface CustomTextFieldProps extends AriaTextFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string;
}

export function TextField({ 
  label, 
  description, 
  errorMessage, 
  className, 
  ...props 
}: CustomTextFieldProps) {
  return (
    <AriaTextField className={cn('flex flex-col space-y-1', className)} {...props}>
      {label && (
        <AriaLabel className="text-sm font-medium">
          {label}
        </AriaLabel>
      )}
      <AriaInput className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed" />
      {description && (
        <AriaText slot="description" className="text-sm text-gray-500">
          {description}
        </AriaText>
      )}
      {errorMessage && (
        <AriaText slot="errorMessage" className="text-sm text-red-600">
          {errorMessage}
        </AriaText>
      )}
    </AriaTextField>
  );
}