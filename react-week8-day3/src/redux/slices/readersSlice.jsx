import { createSlice } from "@reduxjs/toolkit";

const readersSlice = createSlice({
    name: 'readers',
    initialState: [
        {
            id: 1,
            name: 'John',
            surname: 'Malkovich'
        }
    ],
    reducers: {
        ADD_USER: (state, action) => {
            return [
                ...state,
                {
                    id: state.length > 0 ? state[state.length - 1].id + 1 : 0,
                    ...action.payload
                }
            ]
        },
        REMOVE_USER: (state, action) => {
            const userIndex = state.findIndex(user => user.id === action.payload.id);
            if (userIndex === -1) return state;
            return [...state.slice(0, userIndex), ...state.slice(userIndex + 1)];
        }
    }
});

export const {ADD_USER, REMOVE_USER} = readersSlice.actions;
export default readersSlice.reducer;

