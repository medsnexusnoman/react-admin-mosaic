
import BaseApiService from './baseApi';
import { ApiResponse, PaginatedResponse, User } from './types';
import { mockUsers } from '../mockData/users';

class UserApiService extends BaseApiService {
  constructor() {
    super('users');
  }

  // Get all users with pagination
  async getUsers(page = 1, pageSize = 10): Promise<ApiResponse<PaginatedResponse<User>>> {
    // In a real app, this would send pagination params to the server
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedUsers = mockUsers.slice(startIndex, endIndex);
    
    return this.request<PaginatedResponse<User>>(
      `${this.baseUrl}?page=${page}&pageSize=${pageSize}`,
      'GET',
      {
        items: paginatedUsers,
        total: mockUsers.length,
        page,
        pageSize,
        totalPages: Math.ceil(mockUsers.length / pageSize)
      }
    );
  }

  // Get user by ID
  async getUserById(id: string): Promise<ApiResponse<User>> {
    const user = mockUsers.find(user => user.id === id);
    return this.get<User>(id);
  }

  // Create new user
  async createUser(userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<User>> {
    return this.post<User>(userData);
  }

  // Update user
  async updateUser(id: string, userData: Partial<User>): Promise<ApiResponse<User>> {
    return this.put<User>(id, userData);
  }

  // Delete user
  async deleteUser(id: string): Promise<ApiResponse<{ success: boolean }>> {
    return this.delete<{ success: boolean }>(id);
  }
}

export default new UserApiService();
