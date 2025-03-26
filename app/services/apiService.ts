import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api/admin"
    : "https://desertboard.ae/api/admin";

class ApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async get<T>(url: string, params?: Record<string, string | number | boolean | undefined>): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.api.get(url, { params });
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
      throw error;
    }
  }

  private handleError(error: AxiosError): void {
    console.error("API request failed:", error.message);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
    }
  }
}

const apiService = new ApiService();
export default apiService;
