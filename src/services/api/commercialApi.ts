
import BaseApiService from './baseApi';
import { ApiResponse, PaginatedResponse, CommercialAd } from './types';
import { mockCommercialAds } from '../mockData/commercial';

class CommercialApiService extends BaseApiService {
  constructor() {
    super('commercial');
  }

  // Get all commercial ads with pagination
  async getAds(page = 1, pageSize = 10): Promise<ApiResponse<PaginatedResponse<CommercialAd>>> {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedAds = mockCommercialAds.slice(startIndex, endIndex);
    
    return this.request<PaginatedResponse<CommercialAd>>(
      `${this.baseUrl}?page=${page}&pageSize=${pageSize}`,
      'GET',
      {
        items: paginatedAds,
        total: mockCommercialAds.length,
        page,
        pageSize,
        totalPages: Math.ceil(mockCommercialAds.length / pageSize)
      }
    );
  }

  // Get ad by ID
  async getAdById(id: string): Promise<ApiResponse<CommercialAd>> {
    return this.get<CommercialAd>(id);
  }

  // Create new ad
  async createAd(adData: Omit<CommercialAd, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<CommercialAd>> {
    return this.post<CommercialAd>(adData);
  }

  // Update ad
  async updateAd(id: string, adData: Partial<CommercialAd>): Promise<ApiResponse<CommercialAd>> {
    return this.put<CommercialAd>(id, adData);
  }

  // Delete ad
  async deleteAd(id: string): Promise<ApiResponse<{ success: boolean }>> {
    return this.delete<{ success: boolean }>(id);
  }
}

export default new CommercialApiService();
