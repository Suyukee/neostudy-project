interface FormElements extends HTMLFormControlsCollection {
	email: HTMLInputElement;
}

interface EmailFormElement extends HTMLFormElement {
	readonly elements: FormElements;
}

export type EmailFormEvent = React.FormEvent<EmailFormElement>;
