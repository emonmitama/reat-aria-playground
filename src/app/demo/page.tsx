'use client';

import { useState } from 'react';
import { Button, TextField, Checkbox, Select, Dialog, Disclosure, Table, TableColumn, TableRow, TableCell, TableHeader, TableBody, DialogContent, DialogActions } from '@/components';

const fruitOptions = [
  { id: 'apple', name: 'Apple' },
  { id: 'banana', name: 'Banana' },
  { id: 'orange', name: 'Orange' },
  { id: 'strawberry', name: 'Strawberry' },
];

export default function DemoPage() {
  const [selectedFruit, setSelectedFruit] = useState<string>('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          React Aria Components Demo
        </h1>
        <p className="text-gray-600">
          A collection of accessible UI components built with React Aria and styled with Tailwind CSS.
        </p>
      </header>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button size="sm">Small Button</Button>
            <Button size="lg">Large Button</Button>
            <Button isDisabled>Disabled Button</Button>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Text Fields</h2>
          <div className="space-y-4 max-w-md">
            <TextField
              label="Name"
              placeholder="Enter your name"
            />
            <TextField
              label="Email"
              placeholder="Enter your email"
              description="We will never share your email address."
            />
            <TextField
              label="Password"
              type="password"
              placeholder="Enter your password"
              isRequired
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Checkboxes</h2>
          <div className="space-y-3">
            <Checkbox
              isSelected={isChecked}
              onChange={setIsChecked}
              label="I agree to the terms and conditions"
            />
            <Checkbox
              defaultSelected
              label="Subscribe to newsletter"
            />
            <Checkbox
              isDisabled
              label="Disabled option"
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Select</h2>
          <div className="max-w-md">
            <Select
              label="Choose your favorite fruit"
              items={fruitOptions}
              selectedKey={selectedFruit}
              onSelectionChange={(key) => setSelectedFruit(key as string)}
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Dialog</h2>
          <Dialog
            title="Example Dialog"
            trigger={<Button variant="outline">Open Dialog</Button>}
          >
            <DialogContent>
              <p>This is an example dialog using React Aria components.</p>
            </DialogContent>
            <DialogActions>
              <Button variant="primary">OK</Button>
            </DialogActions>
          </Dialog>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Disclosure (Accordion)</h2>
          <div className="space-y-2 max-w-2xl">
            <Disclosure title="What is React Aria?">
              <p>React Aria provides accessible UI primitives for your design system.</p>
            </Disclosure>
            <Disclosure title="How to use it?">
              <p>Install the package and import the components you need.</p>
            </Disclosure>
            <Disclosure title="Benefits">
              <ul className="list-disc list-inside space-y-1">
                <li>Accessibility built-in</li>
                <li>Keyboard navigation</li>
                <li>Screen reader support</li>
                <li>Mobile-friendly</li>
              </ul>
            </Disclosure>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Table</h2>
          <Table className="w-full">
            <TableHeader>
              <TableColumn isRowHeader>Name</TableColumn>
              <TableColumn>Role</TableColumn>
              <TableColumn>Status</TableColumn>
              <TableColumn>Actions</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                    Admin
                  </span>
                </TableCell>
                <TableCell>
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </TableCell>
                <TableCell>
                  <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    User
                  </span>
                </TableCell>
                <TableCell>
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </TableCell>
                <TableCell>
                  <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bob Johnson</TableCell>
                <TableCell>
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Moderator
                  </span>
                </TableCell>
                <TableCell>
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                    Inactive
                  </span>
                </TableCell>
                <TableCell>
                  <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <section className="pt-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Selected Values:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Checkbox: {isChecked ? 'Checked' : 'Unchecked'}</li>
              <li>Selected Fruit: {selectedFruit || 'None'}</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}