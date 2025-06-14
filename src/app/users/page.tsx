'use client';

import { useState } from 'react';
import { 
  Button, 
  TextField, 
  Select, 
  Checkbox,
  Dialog,
  DialogContent,
  DialogActions
} from '@/components';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  isActive: boolean;
}

const roleOptions = [
  { id: 'admin', name: 'Administrator' },
  { id: 'moderator', name: 'Moderator' },
  { id: 'user', name: 'User' },
];

export default function UsersPage() {
  const [formData, setFormData] = useState<Omit<User, 'id'>>({
    name: '',
    email: '',
    phone: '',
    role: '',
    isActive: true,
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.role) {
      newErrors.role = 'Role is required';
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
    
    console.log('User data:', formData);
    setShowSuccess(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      role: '',
      isActive: true,
    });
    
    setIsSubmitting(false);
  };

  const handleInputChange = (field: keyof Omit<User, 'id'>) => (value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          User Information Input
        </h1>
        <p className="text-gray-600">
          Enter user information to create a new account.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextField
            label="Full Name"
            placeholder="Enter full name"
            value={formData.name}
            onChange={handleInputChange('name')}
            errorMessage={errors.name}
            isInvalid={!!errors.name}
            isRequired
          />
          
          <TextField
            label="Email Address"
            type="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleInputChange('email')}
            errorMessage={errors.email}
            isInvalid={!!errors.email}
            isRequired
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextField
            label="Phone Number"
            type="tel"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleInputChange('phone')}
            errorMessage={errors.phone}
            isInvalid={!!errors.phone}
            description="Include country code if international"
            isRequired
          />
          
          <Select
            label="Role"
            items={roleOptions}
            selectedKey={formData.role}
            onSelectionChange={(key) => handleInputChange('role')(key as string)}
            placeholder="Select a role"
            errorMessage={errors.role}
            isInvalid={!!errors.role}
            isRequired
          />
        </div>

        <div className="flex items-center space-x-3">
          <Checkbox
            isSelected={formData.isActive}
            onChange={handleInputChange('isActive')}
            label="Account is active"
          />
        </div>

        <div className="flex justify-end space-x-4 pt-4">
          <Button
            type="button"
            variant="outline"
            onPress={() => {
              setFormData({
                name: '',
                email: '',
                phone: '',
                role: '',
                isActive: true,
              });
              setErrors({});
            }}
          >
            Reset
          </Button>
          
          <Button
            type="submit"
            variant="primary"
            isDisabled={isSubmitting}
          >
            {isSubmitting ? 'Creating...' : 'Create User'}
          </Button>
        </div>
      </form>

      {showSuccess && (
        <Dialog
          trigger={null}
          title="Success!"
          size="sm"
        >
          <DialogContent>
            <p>User has been created successfully!</p>
          </DialogContent>
          <DialogActions>
            <Button 
              variant="primary"
              onPress={() => setShowSuccess(false)}
            >
              OK
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}