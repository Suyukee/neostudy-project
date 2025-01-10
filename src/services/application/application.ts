import commonApi, { servicesTags } from '@/services';
import {
	ApiGetApplicationById,
	PrescoringData,
	ScoringFormPut,
} from '@/services/application/application-types';
import { CardLoanOfferType } from '@/types/offers';

const serviceTag = servicesTags.application;
const BASEURL = 'application';

export const applicationApi = commonApi.injectEndpoints({
	endpoints: (builder) => ({
		postApplication: builder.mutation<void, PrescoringData>({
			query: (body) => ({
				method: 'POST',
				url: BASEURL,
				body,
			}),
			invalidatesTags: [serviceTag],
		}),

		postApplicationApply: builder.mutation<void, CardLoanOfferType>({
			query: (body) => ({
				method: 'POST',
				url: `${BASEURL}/apply`,
				body,
			}),
			invalidatesTags: [serviceTag],
		}),

		putApplicationRegistration: builder.mutation<void, ScoringFormPut>({
			query: ({ id, body }) => ({
				method: 'PUT',
				url: `${BASEURL}/registration/${id}`,
				body: { ...body, account: '11223344556677889900' },
			}),
			invalidatesTags: [serviceTag],
		}),

		getApplicationById: builder.query<ApiGetApplicationById, number>({
			query: (id) => ({
				url: `admin/${BASEURL}/${id}`,
			}),
			providesTags: [serviceTag],
		}),
	}),
});

export const {
	usePostApplicationMutation,
	usePostApplicationApplyMutation,
	usePutApplicationRegistrationMutation,
	useGetApplicationByIdQuery,
} = applicationApi;
