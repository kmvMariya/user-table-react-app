import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilterState} from '../types/interfaces';  

interface IFilterPayload {
  name: keyof IFilterState;
  value: string;
}

const initialState: IFilterState = {};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<IFilterPayload>) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    clearFilter: (state, action: PayloadAction<keyof IFilterState>) => {
      state[action.payload] = "";
    }
  },
});

export const { setFilter, clearFilter } = filterSlice.actions;
export default filterSlice.reducer;
