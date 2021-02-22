import { createSlice } from '@reduxjs/toolkit';
import { httpClient, UserFilters, UserService } from 'api';
import { User } from 'api/services/models';

const userService = new UserService(httpClient);

export interface UserListState {
  data: User[];
  filters: UserFilters;
  loading: boolean;
  queryPage?: number;
  showModal: boolean;
  user?: User;
}

const initialState: UserListState = {
  data: [],
  filters: {
    name: '',
    gender: undefined,
    nat: '',
  },
  loading: false,
  queryPage: 1,
  showModal: false,
  user: undefined,
};

// User list slice
export const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    setQueryPage: (state, action) => {
      state.queryPage = action.payload;
    },
  },
});

// Actions
export const {
  setData,
  setFilters,
  setLoading,
  setQueryPage,
  setShowModal,
  setUser,
} = userListSlice.actions;

// Async thunk to load data
export const loadData = (filters: UserFilters, page?: number) => {
  return async (dispatch) => {
    dispatch(setFilters(filters));
    try {
      dispatch(setLoading(true));

      const { name, ...rest } = filters;
      const response = await userService.getUsers(
        {
          ...rest,
          results: 50,
          // seed: 'pharmainc',
        },
        page
      );
      dispatch(setLoading(false));

      if (response && response.results) {
        const { results } = response;
        if (name) {
          const filtered = results.filter((user) => {
            return user.full_name.toLowerCase().includes(name);
          });
          dispatch(setData(filtered));
        } else {
          dispatch(setData(results));
        }
      } else {
        dispatch(setData([]));
      }
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setData([]));
    }
  };
};

// Selector
export const userListSelector = (state): UserListState => state.userList;

// Reducer
export default userListSlice.reducer;
