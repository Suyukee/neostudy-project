export interface PrescoringData {
	amount: number;
	term: number;
	firstName: string;
	lastName: string;
	middleName: string | null;
	email: string;
	birthdate: string | Date;
	passportSeries: string;
	passportNumber: string;
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
	account: '11223344556677890000';
}

export interface ScoringFormPut {
	id: number;
	body: ScoringForm;
}
