import { commonApi, servicesTags } from '@/services';

const serviceTag = servicesTags.application;
const BASEURL = 'application';

export const applicationApi = commonApi.injectEndpoints({
	endpoints: (builder) => ({
		postApplication: builder.mutation({
			query: (body) => ({
				method: 'POST',
				url: BASEURL,
				body,
			}),
			invalidatesTags: [serviceTag],
		}),
	}),
});

export const { usePostApplicationMutation } = applicationApi;
