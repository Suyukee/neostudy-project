import commonApi, { servicesTags } from '@/services';
import { SendCodeBody } from '@/services/document/document-types';

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

		sendCode: builder.mutation<void, SendCodeBody>({
			query: ({ id, code }) => ({
				method: 'POST',
				url: `${BASEURL}/${id}/sign/code`,
				body: code,
			}),
			invalidatesTags: [serviceTag],
		}),
	}),
});

export const { useCreateDocumentMutation, useSignDocumentMutation, useSendCodeMutation } =
	documentApi;
