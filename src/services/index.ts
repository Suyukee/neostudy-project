import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const servicesTags = {
	application: 'APPLICATION' as const,
	document: 'DOCUMENT' as const,
};

export const tagTypes = Object.values(servicesTags);

const commonApi = createApi({
	tagTypes,
	reducerPath: 'commonApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:8080',
	}),
	endpoints: () => ({}),
});

export default commonApi;
