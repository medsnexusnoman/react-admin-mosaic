
import { Job } from '../api/types';
import { v4 as uuidv4 } from '@/lib/utils';

// Mock jobs
export const mockJobs: Job[] = [
  {
    id: uuidv4(),
    title: 'Software Developer',
    company: 'Tech Solutions Pvt Ltd',
    location: 'Islamabad',
    description: 'We are looking for a skilled Software Developer to join our team. The ideal candidate should have experience in web development using modern technologies.',
    requirements: 'BSc/MSc in Computer Science or related field. 2+ years of experience in web development. Proficiency in React, Node.js, and SQL databases.',
    salary: '80,000 - 120,000 PKR',
    contactEmail: 'careers@techsolutions.com',
    applicationDeadline: '2023-08-15T00:00:00Z',
    isActive: true,
    createdAt: '2023-07-15T00:00:00Z',
    updatedAt: '2023-07-15T00:00:00Z'
  },
  {
    id: uuidv4(),
    title: 'Marketing Manager',
    company: 'Brand Masters',
    location: 'Islamabad',
    description: 'Brand Masters is seeking a dynamic Marketing Manager to lead our marketing efforts. The ideal candidate should have a proven track record in digital marketing.',
    requirements: 'Bachelor\'s degree in Marketing or related field. 3+ years of experience in digital marketing. Strong analytical and communication skills.',
    salary: '100,000 - 150,000 PKR',
    contactEmail: 'hr@brandmasters.com',
    applicationDeadline: '2023-08-10T00:00:00Z',
    isActive: true,
    createdAt: '2023-07-10T00:00:00Z',
    updatedAt: '2023-07-10T00:00:00Z'
  },
  {
    id: uuidv4(),
    title: 'Accountant',
    company: 'Financial Services Ltd',
    location: 'Islamabad',
    description: 'We are looking for a qualified Accountant to join our finance team. The ideal candidate should have experience in financial reporting and analysis.',
    requirements: 'Bachelor\'s degree in Accounting or Finance. 2+ years of experience in accounting. Knowledge of accounting software and Excel.',
    salary: '70,000 - 90,000 PKR',
    contactEmail: 'jobs@financialservices.com',
    applicationDeadline: '2023-08-05T00:00:00Z',
    isActive: true,
    createdAt: '2023-07-05T00:00:00Z',
    updatedAt: '2023-07-05T00:00:00Z'
  },
  {
    id: uuidv4(),
    title: 'Administrative Assistant',
    company: 'ISCWA',
    location: 'Islamabad',
    description: 'ISCWA is seeking an Administrative Assistant to support our day-to-day operations. The ideal candidate should be organized and detail-oriented.',
    requirements: 'Bachelor\'s degree in any discipline. 1+ years of experience in administrative role. Proficiency in MS Office.',
    salary: '40,000 - 60,000 PKR',
    contactEmail: 'careers@iscwa.org',
    applicationDeadline: '2023-07-31T00:00:00Z',
    isActive: true,
    createdAt: '2023-07-01T00:00:00Z',
    updatedAt: '2023-07-01T00:00:00Z'
  },
  {
    id: uuidv4(),
    title: 'Event Coordinator',
    company: 'Event Masters',
    location: 'Islamabad',
    description: 'Event Masters is looking for an experienced Event Coordinator to join our team. The ideal candidate should have experience in planning and executing corporate events.',
    requirements: 'Bachelor\'s degree in Event Management or related field. 2+ years of experience in event coordination. Strong organizational and communication skills.',
    salary: '60,000 - 80,000 PKR',
    contactEmail: 'hr@eventmasters.com',
    applicationDeadline: '2023-07-25T00:00:00Z',
    isActive: true,
    createdAt: '2023-06-25T00:00:00Z',
    updatedAt: '2023-06-25T00:00:00Z'
  }
];
