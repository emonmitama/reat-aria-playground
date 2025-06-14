import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@/components/Select';

const fruits = [
  { id: 'apple', name: 'Apple' },
  { id: 'banana', name: 'Banana' },
  { id: 'orange', name: 'Orange' },
  { id: 'strawberry', name: 'Strawberry' },
  { id: 'grape', name: 'Grape' },
];

const countries = [
  { id: 'us', name: 'United States' },
  { id: 'ca', name: 'Canada' },
  { id: 'mx', name: 'Mexico' },
  { id: 'jp', name: 'Japan' },
  { id: 'de', name: 'Germany' },
];

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Choose a fruit',
    items: fruits,
  },
};

export const Countries: Story = {
  args: {
    label: 'Select country',
    items: countries,
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: 'Favorite fruit',
    items: fruits,
    defaultSelectedKey: 'apple',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled select',
    items: fruits,
    isDisabled: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Required selection',
    items: fruits,
    isRequired: true,
  },
};