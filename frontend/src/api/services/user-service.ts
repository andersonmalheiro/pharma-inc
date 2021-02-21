import { AxiosInstance } from 'axios';
import { User, ResponseModel } from './models';
import { dateFormatter } from 'utils/date-format';

export interface UserFilters {
  gender?: 'male' | 'female' | undefined;
  nat?: string;
  results?: number;
  inc?: string[];
  exc?: string[];
  name?: string;
  seed?: string;
}

export class UserService {
  constructor(private httpClient: AxiosInstance) {}

  public async getUsers(
    filters: UserFilters,
    page?: number
  ): Promise<ResponseModel<User> | undefined> {
    try {
      const response = await this.httpClient.get<ResponseModel<User>>('/', {
        params: { ...filters, page },
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
      return error;
    }

    return undefined;
  }
}
