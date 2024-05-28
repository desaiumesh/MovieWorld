import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

class ApiService {
  private axiosInstance: AxiosInstance;

  constructor() {
    const baseURL = process.env.REACT_API_MOVIES_BASE_URL;
    this.axiosInstance = axios.create({
      baseURL
    });
  }

  public async get<T>(url: string): Promise<T> {

    var token = process.env.REACT_API_JWT_Token;
    var config = { 
      headers: { 
        "Authorization": `Bearer ${token}`,
         "Access-Control-Allow-Origion": "*", 
         "Access-Control-Allow-Header": "Origion, X-Requested-With, Content-Type, Accept" 
        } };
    const response = await this.axiosInstance.get<T>(url, config);
    return response.data;
  }
}

const apiService = new ApiService();
export default apiService;
