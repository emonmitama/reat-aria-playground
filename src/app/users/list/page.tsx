'use client';

import { useState } from 'react';
import { 
  Button, 
  TextField, 
  Select,
  Dialog,
  DialogContent,
  DialogActions,
  ActionMenu
} from '@/components';
import {
  AriaTable as Table,
  AriaTableHeader as TableHeader,
  AriaTableBody as TableBody,
  AriaColumn as Column,
  AriaRow as Row,
  AriaCell as Cell,
  AriaCollection as Collection,
  AriaSortDescriptor as SortDescriptor,
  AriaSelection as Selection
} from '@/components/aria';
import { UserCreateModal } from '@/components/UserCreateModal';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  isActive: boolean;
  createdAt: string;
}

// Sample data
const initialUsers: User[] = [
  {
    id: 1,
    name: '田中太郎',
    email: 'tanaka@example.com',
    phone: '090-1234-5678',
    role: 'admin',
    isActive: true,
    createdAt: '2024-01-15'
  },
  {
    id: 2,
    name: '佐藤花子',
    email: 'sato@example.com',
    phone: '080-2345-6789',
    role: 'user',
    isActive: true,
    createdAt: '2024-01-20'
  },
  {
    id: 3,
    name: '鈴木一郎',
    email: 'suzuki@example.com',
    phone: '070-3456-7890',
    role: 'moderator',
    isActive: false,
    createdAt: '2024-01-25'
  },
  {
    id: 4,
    name: '高橋美咲',
    email: 'takahashi@example.com',
    phone: '090-4567-8901',
    role: 'user',
    isActive: true,
    createdAt: '2024-02-01'
  },
  {
    id: 5,
    name: '伊藤健',
    email: 'ito@example.com',
    phone: '080-5678-9012',
    role: 'admin',
    isActive: true,
    createdAt: '2024-02-05'
  }
];

const roleOptions = [
  { id: '', name: 'すべてのロール' },
  { id: 'admin', name: '管理者' },
  { id: 'moderator', name: '編集者' },
  { id: 'user', name: 'ユーザー' },
];

const statusOptions = [
  { id: '', name: 'すべてのステータス' },
  { id: 'active', name: 'アクティブ' },
  { id: 'inactive', name: '非アクティブ' },
];

export default function UserListPage() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set());
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: undefined,
    direction: 'ascending'
  });


  // Filter users based on search and filters
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = !roleFilter || user.role === roleFilter;
    const matchesStatus = !statusFilter || 
                         (statusFilter === 'active' && user.isActive) ||
                         (statusFilter === 'inactive' && !user.isActive);
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  // Apply sorting
  const sortedUsers = (() => {
    if (!sortDescriptor.column) return filteredUsers;

    console.log('Sorting by:', sortDescriptor.column, sortDescriptor.direction);
    console.log('Sample user object:', filteredUsers[0]);
    
    return [...filteredUsers].sort((a, b) => {
      const columnKey = sortDescriptor.column as string;
      let aValue: any = a[columnKey as keyof User];
      let bValue: any = b[columnKey as keyof User];

      console.log(`Comparing ${columnKey}:`, aValue, 'vs', bValue);
      console.log('User A:', a);
      console.log('User B:', b);

      // Handle different data types
      if (columnKey === 'createdAt') {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      } else if (columnKey === 'role') {
        // Sort roles by priority: admin > moderator > user
        const rolePriority = { admin: 3, moderator: 2, user: 1 };
        aValue = rolePriority[aValue as keyof typeof rolePriority] || 0;
        bValue = rolePriority[bValue as keyof typeof rolePriority] || 0;
      } else if (columnKey === 'isActive') {
        // Sort by active status: active (true) > inactive (false)
        aValue = aValue ? 1 : 0;
        bValue = bValue ? 1 : 0;
      } else if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      let comparison = 0;
      if (aValue < bValue) {
        comparison = -1;
      } else if (aValue > bValue) {
        comparison = 1;
      }

      const result = sortDescriptor.direction === 'descending' ? -comparison : comparison;
      console.log('Sort result:', result);
      return result;
    });
  })();

  // Convert Selection to Set<number> for backward compatibility
  const selectedUsers = selectedKeys === 'all' 
    ? new Set(sortedUsers.map(user => user.id))
    : new Set(Array.from(selectedKeys).map(key => Number(key)));

  const handleDeleteUser = (user: User) => {
    setUserToDelete(user);
  };

  const confirmDelete = () => {
    if (userToDelete) {
      setUsers(prev => prev.filter(u => u.id !== userToDelete.id));
      setUserToDelete(null);
    }
  };

  const handleToggleStatus = (userId: number) => {
    setUsers(prev => prev.map(user => 
      user.id === userId ? { ...user, isActive: !user.isActive } : user
    ));
  };

  const handleUserCreated = (newUser: Omit<User, 'id'>) => {
    const user: User = {
      ...newUser,
      id: Math.max(...users.map(u => u.id), 0) + 1,
      createdAt: new Date().toISOString().split('T')[0],
    };
    setUsers(prev => [user, ...prev]);
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-red-100 text-red-800';
      case 'moderator':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-green-100 text-green-800';
    }
  };

  const getStatusBadgeColor = (isActive: boolean) => {
    return isActive 
      ? 'bg-green-100 text-green-800' 
      : 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          ユーザー一覧
        </h1>
        <p className="text-gray-600">
          システム内のすべてのユーザーを管理・表示します。
        </p>
      </header>

      {/* Filters */}
      <div className="mb-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TextField
            label="ユーザー検索"
            placeholder="名前またはメールアドレスで検索..."
            value={searchTerm}
            onChange={setSearchTerm}
          />
          
          <Select
            label="ロールで絞り込み"
            items={roleOptions}
            selectedKey={roleFilter}
            onSelectionChange={(key) => setRoleFilter(key as string)}
          />
          
          <Select
            label="ステータスで絞り込み"
            items={statusOptions}
            selectedKey={statusFilter}
            onSelectionChange={(key) => setStatusFilter(key as string)}
          />
        </div>
      </div>

      {/* Results Summary */}
      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <p className="text-sm text-gray-600">
            {users.length}件中 {sortedUsers.length}件を表示
          </p>
          {/* Bulk Actions - Same position as fixed footer */}
          {selectedUsers.size > 0 && (
            <div className="flex items-center space-x-3 pl-4 border-l border-gray-300">
              <span className="text-sm font-medium text-blue-700">
                {selectedUsers.size}件選択中
              </span>
              <button
                onClick={() => setSelectedKeys(new Set())}
                className="text-sm text-blue-600 hover:text-blue-800 underline"
              >
                選択を解除
              </button>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  一括編集
                </Button>
                <Button variant="outline" size="sm">
                  選択項目をエクスポート
                </Button>
                <Button variant="secondary" size="sm">
                  一括削除
                </Button>
              </div>
            </div>
          )}
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            エクスポート
          </Button>
          <Button 
            variant="primary" 
            size="sm"
            onPress={() => setShowCreateModal(true)}
          >
            ユーザー追加
          </Button>
        </div>
      </div>


      {/* Users Table */}
      <Table 
        className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden"
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        sortDescriptor={sortDescriptor}
        onSortChange={(descriptor) => {
          console.log('Sort change:', descriptor);
          console.log('Current users:', filteredUsers);
          setSortDescriptor(descriptor);
        }}
      >
        <TableHeader>
          <Column 
            id="name"
            allowsSorting 
            isRowHeader
            className="px-4 py-3 text-left font-medium text-gray-900 bg-gray-50 border-b border-gray-300 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 cursor-pointer select-none"
          >
            <div className="flex items-center space-x-1">
              名前
              <span className="text-gray-400 text-xs">↕</span>
            </div>
          </Column>
          <Column 
            id="email"
            allowsSorting
            className="px-4 py-3 text-left font-medium text-gray-900 bg-gray-50 border-b border-gray-300 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 cursor-pointer select-none"
          >
            <div className="flex items-center space-x-1">
              メールアドレス
              <span className="text-gray-400 text-xs">↕</span>
            </div>
          </Column>
          <Column 
            id="phone"
            className="px-4 py-3 text-left font-medium text-gray-900 bg-gray-50 border-b border-gray-300"
          >
            電話番号
          </Column>
          <Column 
            id="role"
            allowsSorting
            className="px-4 py-3 text-left font-medium text-gray-900 bg-gray-50 border-b border-gray-300 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 cursor-pointer select-none"
          >
            <div className="flex items-center space-x-1">
              ロール
              <span className="text-gray-400 text-xs">↕</span>
            </div>
          </Column>
          <Column 
            id="isActive"
            allowsSorting
            className="px-4 py-3 text-left font-medium text-gray-900 bg-gray-50 border-b border-gray-300 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 cursor-pointer select-none"
          >
            <div className="flex items-center space-x-1">
              ステータス
              <span className="text-gray-400 text-xs">↕</span>
            </div>
          </Column>
          <Column 
            id="createdAt"
            allowsSorting
            className="px-4 py-3 text-left font-medium text-gray-900 bg-gray-50 border-b border-gray-300 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 cursor-pointer select-none"
          >
            <div className="flex items-center space-x-1">
              作成日
              <span className="text-gray-400 text-xs">↕</span>
            </div>
          </Column>
          <Column 
            id="actions"
            className="px-4 py-3 text-left font-medium text-gray-900 bg-gray-50 border-b border-gray-300"
          >
            アクション
          </Column>
        </TableHeader>
        <TableBody items={sortedUsers}>
          {(user) => (
            <Row 
              key={user.id}
              id={user.id}
              className="border-b border-gray-200 hover:bg-gray-50 data-[selected]:bg-blue-50 data-[selected]:hover:bg-blue-100 focus:outline-none focus:bg-gray-50"
            >
              <Cell className="px-4 py-3 text-gray-700 font-medium">{user.name}</Cell>
              <Cell className="px-4 py-3 text-gray-700">{user.email}</Cell>
              <Cell className="px-4 py-3 text-gray-700">{user.phone}</Cell>
              <Cell className="px-4 py-3 text-gray-700">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleBadgeColor(user.role)}`}>
                  {user.role === 'admin' ? '管理者' : user.role === 'moderator' ? '編集者' : 'ユーザー'}
                </span>
              </Cell>
              <Cell className="px-4 py-3 text-gray-700">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadgeColor(user.isActive)}`}>
                  {user.isActive ? 'アクティブ' : '非アクティブ'}
                </span>
              </Cell>
              <Cell className="px-4 py-3 text-gray-700">{user.createdAt}</Cell>
              <Cell className="px-4 py-3 text-gray-700">
                <ActionMenu
                  items={[
                    {
                      id: 'edit',
                      label: '編集',
                      onAction: () => console.log('Edit user:', user.id)
                    },
                    {
                      id: 'toggle-status',
                      label: user.isActive ? '非アクティブ化' : 'アクティブ化',
                      onAction: () => handleToggleStatus(user.id)
                    },
                    {
                      id: 'delete',
                      label: '削除',
                      variant: 'danger',
                      onAction: () => handleDeleteUser(user)
                    }
                  ]}
                />
              </Cell>
            </Row>
          )}
        </TableBody>
      </Table>

      {/* Delete Confirmation Dialog */}
      {userToDelete && (
        <Dialog
          trigger={null}
          title="削除の確認"
          size="sm"
        >
          <DialogContent>
            <p>
              <strong>{userToDelete.name}</strong>を削除してよろしいですか？ 
              この操作は元に戻せません。
            </p>
          </DialogContent>
          <DialogActions>
            <Button 
              variant="outline"
              onPress={() => setUserToDelete(null)}
            >
              キャンセル
            </Button>
            <Button 
              variant="primary"
              onPress={confirmDelete}
            >
              削除
            </Button>
          </DialogActions>
        </Dialog>
      )}

      {/* User Create Modal */}
      <UserCreateModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onUserCreated={handleUserCreated}
      />

    </div>
  );
}