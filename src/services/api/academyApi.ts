
import BaseApiService from './baseApi';
import { ApiResponse, PaginatedResponse, Course } from './types';
import { mockCourses } from '../mockData/academy';

class AcademyApiService extends BaseApiService {
  constructor() {
    super('academy');
  }

  // Get all courses with pagination
  async getCourses(page = 1, pageSize = 10): Promise<ApiResponse<PaginatedResponse<Course>>> {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedCourses = mockCourses.slice(startIndex, endIndex);
    
    return this.request<PaginatedResponse<Course>>(
      `${this.baseUrl}?page=${page}&pageSize=${pageSize}`,
      'GET',
      {
        items: paginatedCourses,
        total: mockCourses.length,
        page,
        pageSize,
        totalPages: Math.ceil(mockCourses.length / pageSize)
      }
    );
  }

  // Get course by ID
  async getCourseById(id: string): Promise<ApiResponse<Course>> {
    return this.get<Course>(id);
  }

  // Create new course
  async createCourse(courseData: Omit<Course, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<Course>> {
    return this.post<Course>(courseData);
  }

  // Update course
  async updateCourse(id: string, courseData: Partial<Course>): Promise<ApiResponse<Course>> {
    return this.put<Course>(id, courseData);
  }

  // Delete course
  async deleteCourse(id: string): Promise<ApiResponse<{ success: boolean }>> {
    return this.delete<{ success: boolean }>(id);
  }
}

export default new AcademyApiService();
