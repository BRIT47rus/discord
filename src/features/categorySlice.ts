import {
    createSlice,
    type PayloadAction,
    createSelector,
} from '@reduxjs/toolkit';
interface CategoryState {
    [id: string]: {
        chat_id: string;
        select: boolean;
    };
}
interface SetSelectedPayload {
    id: string;
    select: boolean;
    chat_id: string;
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
        // hasParent: (state) => {
        //     const parrents = {};
        //     const filltered = Object.values(state).filter(
        //         (item) => item.select === true
        //     );
        //     return filltered;
        // },
    },
});

export const selectSelectedCategories = createSelector(
    (state: { categorySelected: CategoryState }) => state.categorySelected,
    (categorySelected) =>
        Object.values(categorySelected).filter((item) => item.select === true)
);
export default categorySelectodSlice.reducer;
export const { setSelected, toggleSelected } = categorySelectodSlice.actions;
