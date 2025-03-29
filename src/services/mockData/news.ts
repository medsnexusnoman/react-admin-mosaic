
import { NewsItem } from '../api/types';
import { v4 as uuidv4 } from '@/lib/utils';

// Mock news items
export const mockNewsItems: NewsItem[] = [
  {
    id: uuidv4(),
    title: 'ISCWA Hosts Annual Cultural Festival',
    content: 'The Islamabadian Sindhiera Cultural and Welfare Association successfully hosted its annual cultural festival at the National Council of Arts, Islamabad. The event showcased the rich heritage of Sindhi culture through music, dance, and traditional crafts.',
    source: 'ISCWA Press',
    category: 'Cultural Events',
    imageUrl: '/placeholder.svg',
    publishDate: '2023-07-15T00:00:00Z',
    isActive: true,
    createdAt: '2023-07-15T00:00:00Z',
    updatedAt: '2023-07-15T00:00:00Z'
  },
  {
    id: uuidv4(),
    title: 'Scholarship Program Launched for Sindhi Students',
    content: 'ISCWA has launched a new scholarship program for Sindhi students pursuing higher education in Islamabad. The program aims to support talented students from underprivileged backgrounds.',
    source: 'Education News',
    category: 'Education',
    imageUrl: '/placeholder.svg',
    publishDate: '2023-07-10T00:00:00Z',
    isActive: true,
    createdAt: '2023-07-10T00:00:00Z',
    updatedAt: '2023-07-10T00:00:00Z'
  },
  {
    id: uuidv4(),
    title: 'Health Camp Organized in Islamabad',
    content: 'ISCWA organized a free health camp in G-11 Markaz, Islamabad. The camp provided free medical check-ups, consultations, and medicines to over 500 people from the community.',
    source: 'Health News',
    category: 'Health',
    imageUrl: '/placeholder.svg',
    publishDate: '2023-07-05T00:00:00Z',
    isActive: true,
    createdAt: '2023-07-05T00:00:00Z',
    updatedAt: '2023-07-05T00:00:00Z'
  },
  {
    id: uuidv4(),
    title: 'ISCWA Signs MoU with Local Business Association',
    content: 'ISCWA has signed a Memorandum of Understanding with the Islamabad Chamber of Commerce and Industry to promote entrepreneurship among the Sindhi community in Islamabad.',
    source: 'Business News',
    category: 'Business',
    imageUrl: '/placeholder.svg',
    publishDate: '2023-06-30T00:00:00Z',
    isActive: true,
    createdAt: '2023-06-30T00:00:00Z',
    updatedAt: '2023-06-30T00:00:00Z'
  },
  {
    id: uuidv4(),
    title: 'Environmental Awareness Campaign Launched',
    content: 'ISCWA has launched an environmental awareness campaign focusing on tree plantation and waste management in Islamabad. The campaign aims to create a cleaner and greener Islamabad.',
    source: 'Environmental News',
    category: 'Environment',
    imageUrl: '/placeholder.svg',
    publishDate: '2023-06-25T00:00:00Z',
    isActive: true,
    createdAt: '2023-06-25T00:00:00Z',
    updatedAt: '2023-06-25T00:00:00Z'
  }
];
