import { configureStore } from '@reduxjs/toolkit';
import { apiLenzaous } from '../features/apiLenzaous';

export const store = configureStore({
    reducer: {
        [apiLenzaous.reducerPath]: apiLenzaous.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiLenzaous.middleware),
});
