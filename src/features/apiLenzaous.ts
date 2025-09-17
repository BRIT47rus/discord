import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IChats, ISections } from './types';

export const apiLenzaous = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.lenzaos.com' }),
    endpoints: (builder) => ({
        getSections: builder.query<ISections, void>({
            query: () => '/section?v=0.0',
        }),
        getChats: builder.query<IChats, void>({
            query: () => '/chat?v=0.0',
        }),
    }),
});
export const { useGetSectionsQuery, useGetChatsQuery } = apiLenzaous;
