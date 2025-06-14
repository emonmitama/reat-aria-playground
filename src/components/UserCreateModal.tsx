'use client';

import { useState } from 'react';
import { 
  Button, 
  TextField, 
  Select, 
  Checkbox
} from '@/components';
import {
  AriaModal,
  AriaModalOverlay,
  AriaDialog,
  AriaHeading
} from './aria';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  isActive: boolean;
}

interface UserCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUserCreated: (user: Omit<User, 'id'>) => void;
}

const roleOptions = [
  { id: 'admin', name: '管理者' },
  { id: 'moderator', name: '編集者' },
  { id: 'user', name: 'ユーザー' },
];

export function UserCreateModal({ isOpen, onClose, onUserCreated }: UserCreateModalProps) {
  const [formData, setFormData] = useState<Omit<User, 'id'>>({
    name: '',
    email: '',
    phone: '',
    role: '',
    isActive: true,
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = '名前は必須です';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスは必須です';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = '電話番号は必須です';
    } else if (!/^[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = '有効な電話番号を入力してください';
    }
    
    if (!formData.role) {
      newErrors.role = 'ロールは必須です';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onUserCreated(formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      role: '',
      isActive: true,
    });
    setErrors({});
    setIsSubmitting(false);
    onClose();
  };

  const handleInputChange = (field: keyof Omit<User, 'id'>) => (value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleClose = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      role: '',
      isActive: true,
    });
    setErrors({});
    onClose();
  };

  return (
    <AriaModalOverlay 
      isOpen={isOpen} 
      onOpenChange={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <AriaModal className="relative w-full mx-4 bg-white rounded-lg shadow-lg outline-none max-w-2xl">
        <AriaDialog className="p-6 space-y-4">
          <AriaHeading className="text-lg font-semibold text-gray-900 mb-4">
            新しいユーザーを作成
          </AriaHeading>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextField
                label="氏名"
                placeholder="氏名を入力"
                value={formData.name}
                onChange={handleInputChange('name')}
                errorMessage={errors.name}
                isInvalid={!!errors.name}
                isRequired
              />
              
              <TextField
                label="メールアドレス"
                type="email"
                placeholder="メールアドレスを入力"
                value={formData.email}
                onChange={handleInputChange('email')}
                errorMessage={errors.email}
                isInvalid={!!errors.email}
                isRequired
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextField
                label="電話番号"
                type="tel"
                placeholder="電話番号を入力"
                value={formData.phone}
                onChange={handleInputChange('phone')}
                errorMessage={errors.phone}
                isInvalid={!!errors.phone}
                description="国際電話の場合は国番号を含めてください"
                isRequired
              />
              
              <Select
                label="ロール"
                items={roleOptions}
                selectedKey={formData.role}
                onSelectionChange={(key) => handleInputChange('role')(key as string)}
                placeholder="ロールを選択"
                errorMessage={errors.role}
                isInvalid={!!errors.role}
                isRequired
              />
            </div>

            <div className="flex items-center space-x-3">
              <Checkbox
                isSelected={formData.isActive}
                onChange={handleInputChange('isActive')}
                label="アカウントをアクティブにする"
              />
            </div>
          </form>
          
          <div className="flex justify-end space-x-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onPress={handleClose}
            >
              キャンセル
            </Button>
            
            <Button
              type="submit"
              variant="primary"
              isDisabled={isSubmitting}
              onPress={handleSubmit}
            >
              {isSubmitting ? '作成中...' : 'ユーザー作成'}
            </Button>
          </div>
        </AriaDialog>
      </AriaModal>
    </AriaModalOverlay>
  );
}