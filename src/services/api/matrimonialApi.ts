
import BaseApiService from './baseApi';
import { ApiResponse, PaginatedResponse, MatrimonialProfile } from './types';
import { mockMatrimonialProfiles } from '../mockData/matrimonial';

class MatrimonialApiService extends BaseApiService {
  constructor() {
    super('matrimonial');
  }

  // Get all matrimonial profiles with pagination
  async getProfiles(page = 1, pageSize = 10): Promise<ApiResponse<PaginatedResponse<MatrimonialProfile>>> {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedProfiles = mockMatrimonialProfiles.slice(startIndex, endIndex);
    
    return this.request<PaginatedResponse<MatrimonialProfile>>(
      `${this.baseUrl}?page=${page}&pageSize=${pageSize}`,
      'GET',
      {
        items: paginatedProfiles,
        total: mockMatrimonialProfiles.length,
        page,
        pageSize,
        totalPages: Math.ceil(mockMatrimonialProfiles.length / pageSize)
      }
    );
  }

  // Get profile by ID
  async getProfileById(id: string): Promise<ApiResponse<MatrimonialProfile>> {
    return this.get<MatrimonialProfile>(id);
  }

  // Create new profile
  async createProfile(profileData: Omit<MatrimonialProfile, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<MatrimonialProfile>> {
    return this.post<MatrimonialProfile>(profileData);
  }

  // Update profile
  async updateProfile(id: string, profileData: Partial<MatrimonialProfile>): Promise<ApiResponse<MatrimonialProfile>> {
    return this.put<MatrimonialProfile>(id, profileData);
  }

  // Delete profile
  async deleteProfile(id: string): Promise<ApiResponse<{ success: boolean }>> {
    return this.delete<{ success: boolean }>(id);
  }
}

export default new MatrimonialApiService();
