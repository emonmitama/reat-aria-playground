'use client';

import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn(
      'w-full bg-white border-b border-gray-200 px-6 py-4',
      className
    )}>
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-gray-900">
          React Ariaサンプルアプリ
        </h1>
      </div>
    </header>
  );
}