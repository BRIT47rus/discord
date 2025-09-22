import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
export interface CategoryState {
    [id: string]: {
        chat_id: string;
        select: boolean;
    };
}
interface SetSelectedPayload {
    id: string;
    chat_id: string;
    select: boolean;
}
const initialState: CategoryState = {};

const categorySelectodSlice = createSlice({
    name: 'categorySelected',
    initialState,
    reducers: {
        setSelected: (state, action: PayloadAction<SetSelectedPayload>) => {
            const { id, chat_id, select } = action.payload;
            state[id] = { chat_id, select };
        },
        toggleSelected: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            if (state[id]) {
                state[id].select = !state[id].select;
            }
        },
    },
});

export default categorySelectodSlice.reducer;
export const { setSelected, toggleSelected } = categorySelectodSlice.actions;
