
import { ApiResponse, PaginatedResponse } from './types';

// Base URL for the API
const API_URL = '/api';

// Base API service with common methods
class BaseApiService {
  baseUrl: string;

  constructor(endpoint: string) {
    this.baseUrl = `${API_URL}/${endpoint}`;
  }

  // Simulate API delay
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Generic request handler
  protected async request<T>(
    url: string,
    method: string,
    data?: any,
    simulateError = false
  ): Promise<ApiResponse<T>> {
    // Simulate network delay
    await this.delay(500);

    // Simulate error for testing
    if (simulateError) {
      return {
        success: false,
        data: {} as T,
        error: 'Simulated error occurred',
      };
    }

    try {
      // For now, we're just handling mock data
      // In a real app, this would be a fetch request
      
      // Mock success response
      return {
        success: true,
        data: data as T,
        message: 'Operation completed successfully',
      };
    } catch (error) {
      return {
        success: false,
        data: {} as T,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }

  // Generic GET request
  protected async get<T>(path = '', simulateError = false): Promise<ApiResponse<T>> {
    return this.request<T>(`${this.baseUrl}${path ? `/${path}` : ''}`, 'GET', null, simulateError);
  }

  // Generic POST request
  protected async post<T>(data: any, path = '', simulateError = false): Promise<ApiResponse<T>> {
    return this.request<T>(`${this.baseUrl}${path ? `/${path}` : ''}`, 'POST', data, simulateError);
  }

  // Generic PUT request
  protected async put<T>(id: string, data: any, simulateError = false): Promise<ApiResponse<T>> {
    return this.request<T>(`${this.baseUrl}/${id}`, 'PUT', data, simulateError);
  }

  // Generic DELETE request
  protected async delete<T>(id: string, simulateError = false): Promise<ApiResponse<T>> {
    return this.request<T>(`${this.baseUrl}/${id}`, 'DELETE', null, simulateError);
  }
}

export default BaseApiService;
