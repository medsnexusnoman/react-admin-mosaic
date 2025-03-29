
import BaseApiService from './baseApi';
import { ApiResponse, PaginatedResponse, Job } from './types';
import { mockJobs } from '../mockData/jobs';

class JobsApiService extends BaseApiService {
  constructor() {
    super('jobs');
  }

  // Get all jobs with pagination
  async getJobs(page = 1, pageSize = 10): Promise<ApiResponse<PaginatedResponse<Job>>> {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedJobs = mockJobs.slice(startIndex, endIndex);
    
    return this.request<PaginatedResponse<Job>>(
      `${this.baseUrl}?page=${page}&pageSize=${pageSize}`,
      'GET',
      {
        items: paginatedJobs,
        total: mockJobs.length,
        page,
        pageSize,
        totalPages: Math.ceil(mockJobs.length / pageSize)
      }
    );
  }

  // Get job by ID
  async getJobById(id: string): Promise<ApiResponse<Job>> {
    return this.get<Job>(id);
  }

  // Create new job
  async createJob(jobData: Omit<Job, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<Job>> {
    return this.post<Job>(jobData);
  }

  // Update job
  async updateJob(id: string, jobData: Partial<Job>): Promise<ApiResponse<Job>> {
    return this.put<Job>(id, jobData);
  }

  // Delete job
  async deleteJob(id: string): Promise<ApiResponse<{ success: boolean }>> {
    return this.delete<{ success: boolean }>(id);
  }
}

export default new JobsApiService();
