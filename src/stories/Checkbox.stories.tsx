import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@/components/Checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const Checked: Story = {
  args: {
    label: 'Pre-selected option',
    defaultSelected: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    isDisabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled and checked',
    isDisabled: true,
    defaultSelected: true,
  },
};

export const WithChildren: Story = {
  args: {
    children: (
      <span>
        I agree to the{' '}
        <a href="#" className="text-blue-600 underline">
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="#" className="text-blue-600 underline">
          Privacy Policy
        </a>
      </span>
    ),
  },
};