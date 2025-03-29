
import { CommercialAd } from '../api/types';
import { v4 as uuidv4 } from '@/lib/utils';

// Mock commercial ads
export const mockCommercialAds: CommercialAd[] = [
  {
    id: uuidv4(),
    userId: uuidv4(),
    title: 'Prime Commercial Plot For Sale',
    description: 'Prime location commercial plot available in Blue Area, Islamabad. Perfect for businesses looking to establish presence in the heart of the city.',
    category: 'Real Estate',
    price: 25000000,
    imageUrl: '/placeholder.svg',
    contactInfo: 'Contact: 0300-1234567',
    expiryDate: '2023-12-31T00:00:00Z',
    isActive: true,
    createdAt: '2023-06-01T00:00:00Z',
    updatedAt: '2023-06-01T00:00:00Z'
  },
  {
    id: uuidv4(),
    userId: uuidv4(),
    title: 'Software Development Services',
    description: 'Professional software development services for businesses. We specialize in web applications, mobile apps, and enterprise solutions.',
    category: 'IT Services',
    imageUrl: '/placeholder.svg',
    contactInfo: 'Email: info@techsolutions.com | Phone: 051-1234567',
    expiryDate: '2023-12-31T00:00:00Z',
    isActive: true,
    createdAt: '2023-06-05T00:00:00Z',
    updatedAt: '2023-06-05T00:00:00Z'
  },
  {
    id: uuidv4(),
    userId: uuidv4(),
    title: 'Restaurant For Sale',
    description: 'Fully operational restaurant for sale in F-7 Markaz, Islamabad. Established clientele, prime location, fully equipped kitchen.',
    category: 'Business',
    price: 15000000,
    imageUrl: '/placeholder.svg',
    contactInfo: 'Contact: 0300-2345678',
    expiryDate: '2023-11-30T00:00:00Z',
    isActive: true,
    createdAt: '2023-06-10T00:00:00Z',
    updatedAt: '2023-06-10T00:00:00Z'
  },
  {
    id: uuidv4(),
    userId: uuidv4(),
    title: 'Legal Services For Businesses',
    description: 'Comprehensive legal services for businesses including company registration, contract drafting, and dispute resolution.',
    category: 'Professional Services',
    imageUrl: '/placeholder.svg',
    contactInfo: 'Contact: 051-3456789 | Email: legal@lawfirm.com',
    expiryDate: '2023-12-15T00:00:00Z',
    isActive: true,
    createdAt: '2023-06-15T00:00:00Z',
    updatedAt: '2023-06-15T00:00:00Z'
  },
  {
    id: uuidv4(),
    userId: uuidv4(),
    title: 'Office Space For Rent',
    description: 'Modern office space available for rent in Blue Area, Islamabad. Furnished, with all utilities included.',
    category: 'Real Estate',
    price: 150000,
    imageUrl: '/placeholder.svg',
    contactInfo: 'Contact: 0300-3456789',
    expiryDate: '2023-11-15T00:00:00Z',
    isActive: true,
    createdAt: '2023-06-20T00:00:00Z',
    updatedAt: '2023-06-20T00:00:00Z'
  }
];
