import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  [key: string]: string;
}

interface FilterPayload {
  name: keyof FilterState;
  value: string;
}

const initialState: FilterState = {};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterPayload>) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    clearFilter: (state, action: PayloadAction<keyof FilterState>) => {
      state[action.payload] = "";
    }
  },
});

export const { setFilter, clearFilter } = filterSlice.actions;
export default filterSlice.reducer;
