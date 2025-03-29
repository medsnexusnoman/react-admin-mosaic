
import { Course } from '../api/types';
import { v4 as uuidv4 } from '@/lib/utils';

// Mock courses
export const mockCourses: Course[] = [
  {
    id: uuidv4(),
    title: 'Web Development Fundamentals',
    description: 'Learn the basics of web development including HTML, CSS, and JavaScript. This course is perfect for beginners with no prior experience.',
    category: 'IT & Computer Science',
    instructor: 'Mohammed Ali',
    duration: '8 weeks',
    price: 15000,
    imageUrl: '/placeholder.svg',
    isActive: true,
    createdAt: '2023-05-01T00:00:00Z',
    updatedAt: '2023-05-01T00:00:00Z'
  },
  {
    id: uuidv4(),
    title: 'Advanced Data Science',
    description: 'Dive deep into data science concepts including machine learning, data visualization, and statistical analysis.',
    category: 'IT & Computer Science',
    instructor: 'Ayesha Khan',
    duration: '12 weeks',
    price: 25000,
    imageUrl: '/placeholder.svg',
    isActive: true,
    createdAt: '2023-05-05T00:00:00Z',
    updatedAt: '2023-05-05T00:00:00Z'
  },
  {
    id: uuidv4(),
    title: 'Business Management',
    description: 'Learn essential business management skills including strategic planning, leadership, marketing, and financial management.',
    category: 'Business & Management',
    instructor: 'Bilal Hassan',
    duration: '10 weeks',
    price: 20000,
    imageUrl: '/placeholder.svg',
    isActive: true,
    createdAt: '2023-05-10T00:00:00Z',
    updatedAt: '2023-05-10T00:00:00Z'
  },
  {
    id: uuidv4(),
    title: 'Digital Marketing',
    description: 'Master digital marketing strategies including SEO, social media marketing, content marketing, and PPC advertising.',
    category: 'Marketing',
    instructor: 'Fatima Ahmed',
    duration: '6 weeks',
    price: 18000,
    imageUrl: '/placeholder.svg',
    isActive: true,
    createdAt: '2023-05-15T00:00:00Z',
    updatedAt: '2023-05-15T00:00:00Z'
  },
  {
    id: uuidv4(),
    title: 'Sindhi Language & Culture',
    description: 'Explore the rich heritage of Sindhi language and culture through this comprehensive course.',
    category: 'Language & Culture',
    instructor: 'Abdul Karim',
    duration: '12 weeks',
    price: 10000,
    imageUrl: '/placeholder.svg',
    isActive: true,
    createdAt: '2023-05-20T00:00:00Z',
    updatedAt: '2023-05-20T00:00:00Z'
  }
];
