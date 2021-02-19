import { AxiosInstance } from 'axios';
import { User, ResponseModel } from './models';
import { dateFormatter } from 'utils/date-format';

interface UserFilters {
  gender?: 'male' | 'female';
  nat?: string;
  page?: number;
  results?: number;
  inc?: string[];
  exc?: string[];
}

export class UserService {
  constructor(private httpClient: AxiosInstance) {}

  public async getUsers(
    filters: UserFilters
  ): Promise<ResponseModel<User> | undefined> {
    try {
      const response = await this.httpClient.get<ResponseModel<User>>('/', {
        params: filters,
      });

      if (response && response.data) {
        response.data.results.forEach((user) => {
          const { first, last } = user.name;
          const { date } = user.dob;
          user.full_name = `${first} ${last}`;
          user.birth_date = dateFormatter().format(new Date(date));
        });

        return response.data;
      }
    } catch (error) {
      throw error;
    }
  }
}
