import commonApi, { servicesTags } from '@/services';
import { PrescoringData, ScoringFormPut } from '@/services/application/application-types';
import { CardLoanOfferType } from '@/types/offers';

const serviceTag = servicesTags.application;
const BASEURL = 'application';

export const applicationApi = commonApi.injectEndpoints({
	endpoints: (builder) => ({
		postApplication: builder.mutation<undefined, PrescoringData>({
			query: (body) => ({
				method: 'POST',
				url: BASEURL,
				body,
			}),
			invalidatesTags: [serviceTag],
		}),

		postApplicationApply: builder.mutation<undefined, CardLoanOfferType>({
			query: (body) => ({
				method: 'POST',
				url: `${BASEURL}/apply`,
				body,
			}),
			invalidatesTags: [serviceTag],
		}),

		putApplicationRegistration: builder.mutation<undefined, ScoringFormPut>({
			query: ({ id, body }) => ({
				method: 'PUT',
				url: `${BASEURL}/registration/${id}`,
				body: { ...body, account: '11223344556677889900' },
			}),
			invalidatesTags: [serviceTag],
		}),
	}),
});

export const {
	usePostApplicationMutation,
	usePostApplicationApplyMutation,
	usePutApplicationRegistrationMutation,
} = applicationApi;
