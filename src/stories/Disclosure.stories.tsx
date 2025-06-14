import type { Meta, StoryObj } from '@storybook/react';
import { Disclosure, DisclosureGroup } from '@/components/Disclosure';

const meta = {
  title: 'Components/Disclosure',
  component: Disclosure,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Disclosure>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'What is React Aria?',
    children: (
      <p>
        React Aria is a library of React Hooks that provides accessible UI primitives for your design system.
        It provides behavior, accessibility, and interactions for many common UI components so you can focus on styling.
      </p>
    ),
  },
};

export const LongContent: Story = {
  args: {
    title: 'Technical Details',
    children: (
      <div className="space-y-3">
        <p>
          React Aria provides a comprehensive set of hooks for building accessible components.
          It handles keyboard navigation, focus management, ARIA attributes, and internationalization.
        </p>
        <p>
          The library is designed to work with any styling solution, whether you use CSS-in-JS,
          CSS modules, Tailwind CSS, or plain CSS.
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Keyboard navigation support</li>
          <li>Screen reader compatibility</li>
          <li>Mobile touch interactions</li>
          <li>Internationalization support</li>
          <li>Type-safe APIs</li>
        </ul>
      </div>
    ),
  },
};

export const MultipleDisclosures: Story = {
  render: () => (
    <DisclosureGroup className="w-96">
      <Disclosure title="Getting Started">
        <p>
          To get started with React Aria, install the package and import the hooks you need.
          Each hook provides the behavior and accessibility features for a specific component type.
        </p>
      </Disclosure>
      <Disclosure title="Styling">
        <p>
          React Aria components are unstyled by default, giving you complete control over the appearance.
          You can use any CSS framework or styling solution you prefer.
        </p>
      </Disclosure>
      <Disclosure title="Accessibility">
        <p>
          All React Aria components follow WAI-ARIA standards and provide comprehensive keyboard navigation,
          screen reader support, and other accessibility features out of the box.
        </p>
      </Disclosure>
    </DisclosureGroup>
  ),
};

export const FAQ: Story = {
  render: () => (
    <DisclosureGroup className="w-96">
      <Disclosure title="Is React Aria free to use?">
        <p>
          Yes, React Aria is completely free and open source. It's maintained by Adobe and
          licensed under the Apache 2.0 license.
        </p>
      </Disclosure>
      <Disclosure title="Can I use React Aria with TypeScript?">
        <p>
          Absolutely! React Aria is written in TypeScript and provides full type safety.
          All hooks and components have comprehensive TypeScript definitions.
        </p>
      </Disclosure>
      <Disclosure title="Does it work with React Server Components?">
        <p>
          React Aria hooks require client-side JavaScript for event handling and state management.
          You'll need to use the 'use client' directive when using React Aria in Next.js with the app router.
        </p>
      </Disclosure>
      <Disclosure title="How does it compare to other component libraries?">
        <p>
          Unlike traditional component libraries that provide pre-styled components, React Aria focuses
          on behavior and accessibility. This gives you maximum flexibility while ensuring your components
          are accessible to all users.
        </p>
      </Disclosure>
    </DisclosureGroup>
  ),
};