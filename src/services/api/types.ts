
// Common types for API responses
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

// Pagination types
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// User related types
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  cnic?: string;
  dob?: string;
  age?: number;
  gender?: 'Male' | 'Female' | 'Other';
  religion?: string;
  education?: string;
  institute?: string;
  bloodGroup?: string;
  address?: {
    current?: {
      po?: string;
      village?: string;
      uc?: string;
      tehsil?: string;
      district?: string;
      province?: string;
    };
    permanent?: {
      house?: string;
      street?: string;
      sector?: string;
      near?: string;
      opposite?: string;
      city?: string;
      colony?: string;
    };
  };
  department?: string;
  designation?: string;
  business?: string;
  postAddress?: string;
  officeNumber?: string;
  socialAccounts?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  role: 'user' | 'admin';
  createdAt: string;
  updatedAt: string;
}

// Matrimonial related types
export interface MatrimonialProfile {
  id: string;
  userId: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female';
  education: string;
  occupation: string;
  location: string;
  description?: string;
  requirements?: string;
  contactInfo?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Directory related types
export interface DirectoryEntry {
  id: string;
  userId: string;
  name: string;
  designation: string;
  department: string;
  officeNumber: string;
  email: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Commercial related types
export interface CommercialAd {
  id: string;
  userId: string;
  title: string;
  description: string;
  category: string;
  price?: number;
  imageUrl?: string;
  contactInfo: string;
  expiryDate: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Academy related types
export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  instructor: string;
  duration: string;
  price?: number;
  imageUrl?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// News related types
export interface NewsItem {
  id: string;
  title: string;
  content: string;
  source: string;
  category: string;
  imageUrl?: string;
  publishDate: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Job related types
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string;
  salary?: string;
  contactEmail: string;
  applicationDeadline: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
