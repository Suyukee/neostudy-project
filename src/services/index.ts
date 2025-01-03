import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const servicesTags = {
	application: 'APPLICATION' as const,
};

export const tagTypes = Object.values(servicesTags);

export const commonApi = createApi({
	tagTypes,
	reducerPath: 'commonApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:8080',
	}),
	endpoints: () => ({}),
});
