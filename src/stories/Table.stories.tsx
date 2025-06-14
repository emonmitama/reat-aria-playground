import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Table, TableColumn, TableRow, TableCell, TableHeader, TableBody } from '@/components/Table';

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Moderator' },
];

export const Default: Story = {
  render: () => (
    <Table className="w-full max-w-2xl">
      <TableHeader>
        <TableColumn isRowHeader>Name</TableColumn>
        <TableColumn>Email</TableColumn>
        <TableColumn>Role</TableColumn>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                user.role === 'Admin' 
                  ? 'bg-red-100 text-red-800' 
                  : user.role === 'Moderator'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-green-100 text-green-800'
              }`}>
                {user.role}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const Selectable: Story = {
  render: () => (
    <Table selectionMode="multiple" className="w-full max-w-2xl">
      <TableHeader>
        <TableColumn isRowHeader>Name</TableColumn>
        <TableColumn>Email</TableColumn>
        <TableColumn>Role</TableColumn>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const Sortable: Story = {
  render: () => {
    const [sortDescriptor, setSortDescriptor] = useState<{column: string, direction: 'ascending' | 'descending'}>({
      column: 'name',
      direction: 'ascending'
    });

    const sortedUsers = [...users].sort((a, b) => {
      const key = sortDescriptor.column as keyof typeof a;
      let aValue = a[key];
      let bValue = b[key];
      
      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = (bValue as string).toLowerCase();
      }
      
      let comparison = 0;
      if (aValue < bValue) comparison = -1;
      if (aValue > bValue) comparison = 1;
      
      return sortDescriptor.direction === 'descending' ? -comparison : comparison;
    });

    return (
      <Table 
        className="w-full max-w-2xl"
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
      >
        <TableHeader>
          <TableColumn id="name" allowsSorting isRowHeader>Name</TableColumn>
          <TableColumn id="email" allowsSorting>Email</TableColumn>
          <TableColumn id="role">Role</TableColumn>
        </TableHeader>
        <TableBody>
          {sortedUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

const products = [
  { id: 1, name: 'MacBook Pro', category: 'Laptop', price: 1999, stock: 12 },
  { id: 2, name: 'iPhone 15', category: 'Phone', price: 999, stock: 25 },
  { id: 3, name: 'AirPods Pro', category: 'Audio', price: 249, stock: 8 },
  { id: 4, name: 'iPad Air', category: 'Tablet', price: 599, stock: 15 },
];

export const Products: Story = {
  render: () => (
    <Table className="w-full max-w-3xl">
      <TableHeader>
        <TableColumn isRowHeader>Product</TableColumn>
        <TableColumn>Category</TableColumn>
        <TableColumn>Price</TableColumn>
        <TableColumn>Stock</TableColumn>
        <TableColumn>Actions</TableColumn>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>${product.price}</TableCell>
            <TableCell>
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                product.stock > 10 
                  ? 'bg-green-100 text-green-800' 
                  : product.stock > 5
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {product.stock} in stock
              </span>
            </TableCell>
            <TableCell>
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const Empty: Story = {
  render: () => (
    <Table className="w-full max-w-2xl">
      <TableHeader>
        <TableColumn isRowHeader>Name</TableColumn>
        <TableColumn>Email</TableColumn>
        <TableColumn>Role</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={3} className="text-center py-8 text-gray-500">
            No data available
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};