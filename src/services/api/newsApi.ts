
import BaseApiService from './baseApi';
import { ApiResponse, PaginatedResponse, NewsItem } from './types';
import { mockNewsItems } from '../mockData/news';

class NewsApiService extends BaseApiService {
  constructor() {
    super('news');
  }

  // Get all news items with pagination
  async getNewsItems(page = 1, pageSize = 10): Promise<ApiResponse<PaginatedResponse<NewsItem>>> {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedNewsItems = mockNewsItems.slice(startIndex, endIndex);
    
    return this.request<PaginatedResponse<NewsItem>>(
      `${this.baseUrl}?page=${page}&pageSize=${pageSize}`,
      'GET',
      {
        items: paginatedNewsItems,
        total: mockNewsItems.length,
        page,
        pageSize,
        totalPages: Math.ceil(mockNewsItems.length / pageSize)
      }
    );
  }

  // Get news item by ID
  async getNewsItemById(id: string): Promise<ApiResponse<NewsItem>> {
    return this.get<NewsItem>(id);
  }

  // Create new news item
  async createNewsItem(newsItemData: Omit<NewsItem, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<NewsItem>> {
    return this.post<NewsItem>(newsItemData);
  }

  // Update news item
  async updateNewsItem(id: string, newsItemData: Partial<NewsItem>): Promise<ApiResponse<NewsItem>> {
    return this.put<NewsItem>(id, newsItemData);
  }

  // Delete news item
  async deleteNewsItem(id: string): Promise<ApiResponse<{ success: boolean }>> {
    return this.delete<{ success: boolean }>(id);
  }
}

export default new NewsApiService();
