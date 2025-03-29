
import { MatrimonialProfile } from '../api/types';
import { v4 as uuidv4 } from '@/lib/utils';

// Mock matrimonial profiles
export const mockMatrimonialProfiles: MatrimonialProfile[] = [
  {
    id: uuidv4(),
    userId: uuidv4(),
    name: 'Ahmed Khan',
    age: 28,
    gender: 'Male',
    education: 'MBA',
    occupation: 'Business Manager',
    location: 'Karachi',
    description: 'Looking for a life partner with similar values and education. I am a business professional from a respectable family.',
    requirements: 'Education: Graduate or above, Age: 23-27, Family values: Traditional',
    contactInfo: 'Contact through parents',
    isActive: true,
    createdAt: '2023-06-15T00:00:00Z',
    updatedAt: '2023-06-15T00:00:00Z'
  },
  {
    id: uuidv4(),
    userId: uuidv4(),
    name: 'Ayesha Ali',
    age: 25,
    gender: 'Female',
    education: 'MBBS',
    occupation: 'Doctor',
    location: 'Lahore',
    description: 'Medical doctor from a respectable family seeking a compatible life partner.',
    requirements: 'Education: Professional degree, Age: 27-32, Occupation: Doctor/Engineer/Business',
    contactInfo: 'Contact through family',
    isActive: true,
    createdAt: '2023-06-20T00:00:00Z',
    updatedAt: '2023-06-20T00:00:00Z'
  },
  {
    id: uuidv4(),
    userId: uuidv4(),
    name: 'Bilal Ahmed',
    age: 30,
    gender: 'Male',
    education: 'MSc Computer Science',
    occupation: 'Software Engineer',
    location: 'Islamabad',
    description: 'Software engineer working in a multinational company. Looking for an educated life partner.',
    requirements: 'Education: Bachelor or above, Age: 25-28, Location: Islamabad/Rawalpindi preferred',
    contactInfo: 'Can be contacted directly',
    isActive: true,
    createdAt: '2023-07-05T00:00:00Z',
    updatedAt: '2023-07-05T00:00:00Z'
  },
  {
    id: uuidv4(),
    userId: uuidv4(),
    name: 'Fatima Zahra',
    age: 27,
    gender: 'Female',
    education: 'MA English',
    occupation: 'Teacher',
    location: 'Hyderabad',
    description: 'English teacher at a reputed college. Looking for a well-settled life partner.',
    requirements: 'Education: Master or above, Age: 28-35, Occupation: Professional',
    contactInfo: 'Contact through parents',
    isActive: true,
    createdAt: '2023-07-10T00:00:00Z',
    updatedAt: '2023-07-10T00:00:00Z'
  },
  {
    id: uuidv4(),
    userId: uuidv4(),
    name: 'Hamza Malik',
    age: 32,
    gender: 'Male',
    education: 'LLB',
    occupation: 'Lawyer',
    location: 'Karachi',
    description: 'Practicing lawyer with a good reputation. Looking for a compatible life partner.',
    requirements: 'Education: Graduate or above, Age: 25-30, Family values: Important',
    contactInfo: 'Contact through family',
    isActive: true,
    createdAt: '2023-07-15T00:00:00Z',
    updatedAt: '2023-07-15T00:00:00Z'
  },
  {
    id: uuidv4(),
    userId: uuidv4(),
    name: 'Zainab Khan',
    age: 26,
    gender: 'Female',
    education: 'BBA',
    occupation: 'HR Manager',
    location: 'Sukkur',
    description: 'HR professional working in a multinational company. Looking for a compatible life partner.',
    requirements: 'Education: Bachelor or above, Age: 28-34, Location: Any major city',
    contactInfo: 'Contact through family',
    isActive: true,
    createdAt: '2023-07-20T00:00:00Z',
    updatedAt: '2023-07-20T00:00:00Z'
  }
];
