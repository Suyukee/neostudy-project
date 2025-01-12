import commonApi, { servicesTags } from '@/services';

const serviceTag = servicesTags.document;
const BASEURL = 'document';

export const documentApi = commonApi.injectEndpoints({
	endpoints: (builder) => ({
		createDocument: builder.mutation<void, number>({
			query: (id) => ({
				method: 'POST',
				url: `${BASEURL}/${id}`,
			}),
			invalidatesTags: [serviceTag],
		}),

		signDocument: builder.mutation<void, number>({
			query: (id) => ({
				method: 'POST',
				url: `${BASEURL}/${id}/sign`,
			}),
			invalidatesTags: [serviceTag],
		}),
	}),
});

export const { useCreateDocumentMutation, useSignDocumentMutation } = documentApi;
