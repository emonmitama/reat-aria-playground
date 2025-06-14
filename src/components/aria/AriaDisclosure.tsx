'use client';

import {
  DisclosureGroup as ReactAriaDisclosureGroup,
  DisclosureGroupProps as ReactAriaDisclosureGroupProps,
  Disclosure as ReactAriaDisclosure,
  DisclosureProps as ReactAriaDisclosureProps,
  DisclosurePanel as ReactAriaDisclosurePanel,
  DisclosurePanelProps as ReactAriaDisclosurePanelProps,
  Button as ReactAriaButton,
  Heading as ReactAriaHeading
} from 'react-aria-components';

// React Ariaの基本継承コンポーネント
export interface AriaDisclosureGroupProps extends ReactAriaDisclosureGroupProps {}
export interface AriaDisclosureProps extends ReactAriaDisclosureProps {}
export interface AriaDisclosurePanelProps extends ReactAriaDisclosurePanelProps {}

export function AriaDisclosureGroup(props: AriaDisclosureGroupProps) {
  return <ReactAriaDisclosureGroup {...props} />;
}

export function AriaDisclosure(props: AriaDisclosureProps) {
  return <ReactAriaDisclosure {...props} />;
}

export function AriaDisclosurePanel(props: AriaDisclosurePanelProps) {
  return <ReactAriaDisclosurePanel {...props} />;
}

// Note: AriaButton and AriaHeading are exported from their respective files
// AriaDisclosure file only exports disclosure-specific components