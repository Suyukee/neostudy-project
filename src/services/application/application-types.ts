interface ApiClientData {
	firstName: string;
	lastName: string;
	middleName: string | null;
	email: string;
	birthdate: string | Date;
	passportSeries: string;
	passportNumber: string;
}

interface ApiCreditData {
	amount: number;
	term: number;
	monthlyPayment: number;
	rate: number;
	psk: number;
	isInsuranceEnabled: boolean;
	isSalaryClient: boolean;
}

export interface PrescoringData extends ApiClientData {
	amount: number;
	term: number;
}

export interface ScoringForm {
	gender: 'MALE' | 'FAMALE';
	maritalStatus: 'MARRIED' | 'DIVORCED' | 'SINGLE' | 'WIDOW_WIDOWER';
	dependentAmount: number;
	passportIssueDate: string;
	passportIssueBranch: string;
	employment: {
		employmentStatus: 'UNEMPLOYED' | 'SELF_EMPLOYED' | 'EMPLOYED' | 'BUSINESS_OWNER';
		employerINN: number;
		salary: number;
		position: 'WORKER' | 'MID_MANAGER' | 'TOP_MANAGER' | 'OWNER';
		workExperienceTotal: number;
		workExperienceCurrent: number;
	};
	account: '11223344556677889900';
}

export interface ScoringFormPut {
	id: number;
	body: ScoringForm;
}

export interface ApiPaymentData {
	number: number;
	date: string;
	totalPayment: number;
	interestPayment: number;
	debtPayment: number;
	remainingDebt: number;
}

export interface ApiGetApplicationById {
	id: number;

	client: ApiClientData & ScoringForm;

	credit: ApiCreditData & {
		paymentSchedule: ApiPaymentData[];
	};

	status: string;
	creationDate: string;
	signDate: string;
	sesCode: string;
	statusHistory: [
		{
			status: string;
			time: string;
			changeType: string;
		},
	];
}
