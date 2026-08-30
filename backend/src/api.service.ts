import { Injectable } from '@nestjs/common';
import { API_ROOT } from './api-root';

@Injectable()
export class ApiService {
  getApiRoot(): API_ROOT {
    return API_ROOT;
  }
}
