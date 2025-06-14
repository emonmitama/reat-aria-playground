import type { Meta, StoryObj } from '@storybook/react';
import { Dialog, DialogContent, DialogActions } from '@/components/Dialog';
import { Button } from '@/components/Button';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Confirm Action',
    trigger: <Button variant="primary">Open Dialog</Button>,
    children: (
      <>
        <DialogContent>
          Are you sure you want to delete this item? This action cannot be undone.
        </DialogContent>
        <DialogActions>
          <Button variant="outline">Cancel</Button>
          <Button variant="primary">Delete</Button>
        </DialogActions>
      </>
    ),
  },
};

export const Small: Story = {
  args: {
    title: 'Small Dialog',
    size: 'sm',
    trigger: <Button variant="secondary">Open Small Dialog</Button>,
    children: (
      <>
        <DialogContent>
          This is a small dialog with limited content.
        </DialogContent>
        <DialogActions>
          <Button variant="primary">OK</Button>
        </DialogActions>
      </>
    ),
  },
};

export const Large: Story = {
  args: {
    title: 'Large Dialog',
    size: 'lg',
    trigger: <Button variant="outline">Open Large Dialog</Button>,
    children: (
      <>
        <DialogContent>
          <p className="mb-4">
            This is a large dialog with more content. It can contain multiple paragraphs,
            forms, or other complex layouts.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </DialogContent>
        <DialogActions>
          <Button variant="outline">Cancel</Button>
          <Button variant="primary">Confirm</Button>
        </DialogActions>
      </>
    ),
  },
};

export const WithForm: Story = {
  args: {
    title: 'User Information',
    trigger: <Button variant="primary">Edit Profile</Button>,
    children: (
      <>
        <DialogContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input 
                type="email" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue="john@example.com"
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="outline">Cancel</Button>
          <Button variant="primary">Save Changes</Button>
        </DialogActions>
      </>
    ),
  },
};

export const NoTitle: Story = {
  args: {
    trigger: <Button variant="secondary">Open Dialog</Button>,
    children: (
      <>
        <DialogContent>
          <h3 className="text-lg font-semibold mb-2">Custom Title</h3>
          <p>This dialog doesn't use the built-in title prop, but includes a custom heading instead.</p>
        </DialogContent>
        <DialogActions>
          <Button variant="primary">Close</Button>
        </DialogActions>
      </>
    ),
  },
};