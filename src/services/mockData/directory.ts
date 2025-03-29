
import { DirectoryEntry } from '../api/types';
import { v4 as uuidv4 } from '@/lib/utils';

// Mock directory entries
export const mockDirectoryEntries: DirectoryEntry[] = [
  {
    id: uuidv4(),
    userId: uuidv4(),
    name: 'Abdul Karim',
    designation: 'Director General',
    department: 'Administration',
    officeNumber: '+92-21-1234567',
    email: 'abdul.karim@gov.pk',
    isActive: true,
    createdAt: '2023-06-01T00:00:00Z',
    updatedAt: '2023-06-01T00:00:00Z'
  },
  {
    id: uuidv4(),
    userId: uuidv4(),
    name: 'Fatima Ahmed',
    designation: 'Deputy Director',
    department: 'Finance',
    officeNumber: '+92-21-2345678',
    email: 'fatima.ahmed@gov.pk',
    isActive: true,
    createdAt: '2023-06-02T00:00:00Z',
    updatedAt: '2023-06-02T00:00:00Z'
  },
  {
    id: uuidv4(),
    userId: uuidv4(),
    name: 'Mohammed Ali',
    designation: 'Assistant Director',
    department: 'Human Resources',
    officeNumber: '+92-21-3456789',
    email: 'mohammed.ali@gov.pk',
    isActive: true,
    createdAt: '2023-06-03T00:00:00Z',
    updatedAt: '2023-06-03T00:00:00Z'
  },
  {
    id: uuidv4(),
    userId: uuidv4(),
    name: 'Ayesha Khan',
    designation: 'Senior Officer',
    department: 'Information Technology',
    officeNumber: '+92-21-4567890',
    email: 'ayesha.khan@gov.pk',
    isActive: true,
    createdAt: '2023-06-04T00:00:00Z',
    updatedAt: '2023-06-04T00:00:00Z'
  },
  {
    id: uuidv4(),
    userId: uuidv4(),
    name: 'Bilal Hassan',
    designation: 'Project Manager',
    department: 'Development',
    officeNumber: '+92-21-5678901',
    email: 'bilal.hassan@gov.pk',
    isActive: true,
    createdAt: '2023-06-05T00:00:00Z',
    updatedAt: '2023-06-05T00:00:00Z'
  },
  {
    id: uuidv4(),
    userId: uuidv4(),
    name: 'Sadia Jabbar',
    designation: 'Finance Officer',
    department: 'Finance',
    officeNumber: '+92-21-6789012',
    email: 'sadia.jabbar@gov.pk',
    isActive: true,
    createdAt: '2023-06-06T00:00:00Z',
    updatedAt: '2023-06-06T00:00:00Z'
  },
  {
    id: uuidv4(),
    userId: uuidv4(),
    name: 'Tariq Mahmood',
    designation: 'HR Specialist',
    department: 'Human Resources',
    officeNumber: '+92-21-7890123',
    email: 'tariq.mahmood@gov.pk',
    isActive: true,
    createdAt: '2023-06-07T00:00:00Z',
    updatedAt: '2023-06-07T00:00:00Z'
  },
  {
    id: uuidv4(),
    userId: uuidv4(),
    name: 'Zainab Riaz',
    designation: 'IT Manager',
    department: 'Information Technology',
    officeNumber: '+92-21-8901234',
    email: 'zainab.riaz@gov.pk',
    isActive: true,
    createdAt: '2023-06-08T00:00:00Z',
    updatedAt: '2023-06-08T00:00:00Z'
  }
];
