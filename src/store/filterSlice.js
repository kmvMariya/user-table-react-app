import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "",
    username: "",
    email: "",
    phone: ""
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            console.log(state);
            console.log(action);
            const { name, value } = action.payload;
            state[name] = value;
        },
        clearFilter: (state, action) => {
            console.log(state);
            console.log(action);
            state[action.payload] = "";
        }
    },
});

export const { setFilter, clearFilter } = filterSlice.actions;
export default filterSlice.reducer;