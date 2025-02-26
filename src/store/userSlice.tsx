import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../types/interfaces';

interface IUserState {
  users: IUser[];
  status: 'idle' | 'loading' | 'resolved' | 'rejected';
  error: string | null;
}

const initialState: IUserState = {
  users: [],
  status: 'idle',
  error: null,
};

export const fetchUsers = createAsyncThunk<IUser[], void, { rejectValue: string }>(
  'users/fetchUsers',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!response.ok) {
        throw new Error('Server Error!');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue('Failed to fetch users');
    }
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
        state.status = 'resolved';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.status = 'rejected';
        state.error = action.payload || 'Unknown error';
      });
  },
});

export default userSlice.reducer;
