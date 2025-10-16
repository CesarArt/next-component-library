/* eslint-disable @typescript-eslint/no-explicit-any */
export const NextResponse = {
  json: (body: any, opts?: any) => ({ body, ...opts, cookies: { set: (_name: string, _value: any, _opts?: any) => {} } }),
};

export const Request = global.Request || (() => undefined as any);
