
import BaseApiService from './baseApi';
import { ApiResponse, PaginatedResponse, DirectoryEntry } from './types';
import { mockDirectoryEntries } from '../mockData/directory';

class DirectoryApiService extends BaseApiService {
  constructor() {
    super('directory');
  }

  // Get all directory entries with pagination
  async getEntries(page = 1, pageSize = 10): Promise<ApiResponse<PaginatedResponse<DirectoryEntry>>> {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedEntries = mockDirectoryEntries.slice(startIndex, endIndex);
    
    return this.request<PaginatedResponse<DirectoryEntry>>(
      `${this.baseUrl}?page=${page}&pageSize=${pageSize}`,
      'GET',
      {
        items: paginatedEntries,
        total: mockDirectoryEntries.length,
        page,
        pageSize,
        totalPages: Math.ceil(mockDirectoryEntries.length / pageSize)
      }
    );
  }

  // Get entry by ID
  async getEntryById(id: string): Promise<ApiResponse<DirectoryEntry>> {
    return this.get<DirectoryEntry>(id);
  }

  // Create new entry
  async createEntry(entryData: Omit<DirectoryEntry, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<DirectoryEntry>> {
    return this.post<DirectoryEntry>(entryData);
  }

  // Update entry
  async updateEntry(id: string, entryData: Partial<DirectoryEntry>): Promise<ApiResponse<DirectoryEntry>> {
    return this.put<DirectoryEntry>(id, entryData);
  }

  // Delete entry
  async deleteEntry(id: string): Promise<ApiResponse<{ success: boolean }>> {
    return this.delete<{ success: boolean }>(id);
  }
}

export default new DirectoryApiService();
