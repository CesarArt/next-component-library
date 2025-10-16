/* eslint-disable @typescript-eslint/no-explicit-any */
import '@testing-library/jest-dom';

// Minimal Request polyfill for tests that create `new Request(...)`
// This only implements the parts used by our route tests: constructor and json().
// It lives in the test environment only.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).Request = class {
	body: any;
	method: string | undefined;
	headers: any;
	constructor(_url?: string, init?: any) {
		this.body = init?.body;
		this.method = init?.method;
		this.headers = init?.headers;
	}
	async json() {
		try {
			return JSON.parse(this.body ?? '{}');
		} catch (e) {
			return {};
		}
	}
};

