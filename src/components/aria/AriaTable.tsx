'use client';

import {
  Table as ReactAriaTable,
  TableProps as ReactAriaTableProps,
  TableHeader as ReactAriaTableHeader,
  TableHeaderProps as ReactAriaTableHeaderProps,
  TableBody as ReactAriaTableBody,
  TableBodyProps as ReactAriaTableBodyProps,
  Column as ReactAriaColumn,
  ColumnProps as ReactAriaColumnProps,
  Row as ReactAriaRow,
  RowProps as ReactAriaRowProps,
  Cell as ReactAriaCell,
  CellProps as ReactAriaCellProps,
  Collection as ReactAriaCollection,
  SortDescriptor as ReactAriaSortDescriptor,
  Selection as ReactAriaSelection
} from 'react-aria-components';

// React Ariaの基本継承コンポーネント
export interface AriaTableProps extends ReactAriaTableProps {}
export interface AriaTableHeaderProps extends ReactAriaTableHeaderProps {}
export interface AriaTableBodyProps<T> extends ReactAriaTableBodyProps<T> {}
export interface AriaColumnProps extends ReactAriaColumnProps {}
export interface AriaRowProps extends ReactAriaRowProps {}
export interface AriaCellProps extends ReactAriaCellProps {}

export function AriaTable(props: AriaTableProps) {
  return <ReactAriaTable {...props} />;
}

export function AriaTableHeader(props: AriaTableHeaderProps) {
  return <ReactAriaTableHeader {...props} />;
}

export function AriaTableBody<T extends object>(props: AriaTableBodyProps<T>) {
  return <ReactAriaTableBody {...props} />;
}

export function AriaColumn(props: AriaColumnProps) {
  return <ReactAriaColumn {...props} />;
}

export function AriaRow(props: AriaRowProps) {
  return <ReactAriaRow {...props} />;
}

export function AriaCell(props: AriaCellProps) {
  return <ReactAriaCell {...props} />;
}

export { 
  ReactAriaCollection as AriaCollection, 
  type ReactAriaSortDescriptor as AriaSortDescriptor,
  type ReactAriaSelection as AriaSelection
};