'use client';

import {
  Dialog as ReactAriaDialog,
  DialogProps as ReactAriaDialogProps,
  DialogTrigger as ReactAriaDialogTrigger,
  Modal as ReactAriaModal,
  ModalOverlay as ReactAriaModalOverlay,
  Heading as ReactAriaHeading
} from 'react-aria-components';

// React Ariaの基本継承コンポーネント
export interface AriaDialogProps extends ReactAriaDialogProps {}
export interface AriaDialogTriggerProps extends React.ComponentProps<typeof ReactAriaDialogTrigger> {}
export interface AriaModalProps extends React.ComponentProps<typeof ReactAriaModal> {}
export interface AriaModalOverlayProps extends React.ComponentProps<typeof ReactAriaModalOverlay> {}

export function AriaDialogTrigger(props: AriaDialogTriggerProps) {
  return <ReactAriaDialogTrigger {...props} />;
}

export function AriaDialog(props: AriaDialogProps) {
  return <ReactAriaDialog {...props} />;
}

export function AriaModal(props: AriaModalProps) {
  return <ReactAriaModal {...props} />;
}

export function AriaModalOverlay(props: AriaModalOverlayProps) {
  return <ReactAriaModalOverlay {...props} />;
}

// Note: AriaHeading is exported from AriaHeading.tsx