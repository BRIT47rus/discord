import { configureStore } from '@reduxjs/toolkit';
import { apiLenzaous } from '../features/apiLenzaous';
import categorySelectrReducer from '../features/categorySlice';
import {
    useDispatch,
    useSelector,
    type TypedUseSelectorHook,
} from 'react-redux';
export const store = configureStore({
    reducer: {
        isSelected: categorySelectrReducer,
        [apiLenzaous.reducerPath]: apiLenzaous.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiLenzaous.middleware),
});
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSellector: TypedUseSelectorHook<RootState> = useSelector;
