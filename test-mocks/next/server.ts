/* eslint-disable @typescript-eslint/no-explicit-any */
export const NextResponse = {
  json: (body: any, opts?: any) => ({ body, ...opts }),
};

export const Request = global.Request || (() => undefined as any);
