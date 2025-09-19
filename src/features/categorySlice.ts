import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
const initialState: { [key: string]: boolean } = {};

const categorySelectodSlice = createSlice({
    name: 'categorySelected',
    initialState,
    reducers: {
        setSelected: (
            state,
            action: PayloadAction<{ id: string; value: boolean }>
        ) => {
            const { id, value } = action.payload;
            state[id] = value;
        },
        toggleSelected: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            state[id] = !state[id];
        },
    },
});
export default categorySelectodSlice.reducer;
export const { setSelected, toggleSelected } = categorySelectodSlice.actions;
