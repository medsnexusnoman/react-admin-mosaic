
import { User } from '../api/types';
import { v4 as uuidv4 } from '@/lib/utils';

// Mock user data
export const mockUsers: User[] = [
  {
    id: uuidv4(),
    firstName: 'Abdul',
    lastName: 'Karim',
    email: 'abdul.karim@example.com',
    mobile: '0300-1234567',
    cnic: '61101-1234567-1',
    dob: '1985-05-15',
    age: 38,
    gender: 'Male',
    religion: 'Islam',
    education: 'Masters',
    institute: 'Sindh University',
    bloodGroup: 'B+',
    address: {
      current: {
        po: 'Post Office',
        village: 'Village Name',
        uc: 'UC-1',
        tehsil: 'Tehsil Name',
        district: 'Islamabad',
        province: 'Federal Territory'
      },
      permanent: {
        house: '123',
        street: 'Main Street',
        sector: 'G-11',
        city: 'Islamabad',
        colony: 'Capital Colony'
      }
    },
    department: 'Administration',
    designation: 'Director General',
    business: '',
    postAddress: 'Office # 19, 3rd Floor, Capital Plaza, G-11 Markaz, Islamabad',
    officeNumber: '+92-21-1234567',
    socialAccounts: {
      facebook: 'https://facebook.com/abdulkarim',
      twitter: 'https://twitter.com/abdulkarim'
    },
    role: 'admin',
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2023-01-01T00:00:00Z'
  },
  {
    id: uuidv4(),
    firstName: 'Fatima',
    lastName: 'Ahmed',
    email: 'fatima.ahmed@example.com',
    mobile: '0300-2345678',
    cnic: '61101-2345678-2',
    dob: '1990-08-21',
    age: 33,
    gender: 'Female',
    religion: 'Islam',
    education: 'PhD',
    institute: 'Quaid-i-Azam University',
    bloodGroup: 'A+',
    address: {
      current: {
        district: 'Islamabad',
        province: 'Federal Territory'
      }
    },
    department: 'Finance',
    designation: 'Deputy Director',
    officeNumber: '+92-21-2345678',
    role: 'user',
    createdAt: '2023-02-01T00:00:00Z',
    updatedAt: '2023-02-01T00:00:00Z'
  },
  {
    id: uuidv4(),
    firstName: 'Mohammed',
    lastName: 'Ali',
    email: 'mohammed.ali@example.com',
    mobile: '0300-3456789',
    gender: 'Male',
    department: 'Human Resources',
    designation: 'Assistant Director',
    officeNumber: '+92-21-3456789',
    role: 'user',
    createdAt: '2023-03-01T00:00:00Z',
    updatedAt: '2023-03-01T00:00:00Z'
  },
  {
    id: uuidv4(),
    firstName: 'Ayesha',
    lastName: 'Khan',
    email: 'ayesha.khan@example.com',
    mobile: '0300-4567890',
    gender: 'Female',
    department: 'Information Technology',
    designation: 'Senior Officer',
    officeNumber: '+92-21-4567890',
    role: 'user',
    createdAt: '2023-04-01T00:00:00Z',
    updatedAt: '2023-04-01T00:00:00Z'
  },
  {
    id: uuidv4(),
    firstName: 'Bilal',
    lastName: 'Hassan',
    email: 'bilal.hassan@example.com',
    mobile: '0300-5678901',
    gender: 'Male',
    department: 'Development',
    designation: 'Project Manager',
    officeNumber: '+92-21-5678901',
    role: 'user',
    createdAt: '2023-05-01T00:00:00Z',
    updatedAt: '2023-05-01T00:00:00Z'
  }
];
