import { POST } from '../register/route';

describe('POST /api/auth/register (integration)', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
    jest.resetAllMocks();
  });

  it('forwards registration to backend', async () => {
    const fakeResponse = { ok: true, json: async () => ({}) } as any;
    global.fetch = jest.fn().mockResolvedValue(fakeResponse) as any;

    const req = new Request('http://localhost/api/auth/register', { method: 'POST', body: JSON.stringify({ user: 'a' }), headers: { 'Content-Type': 'application/json' } });

    const res = await POST(req as any);

    expect(global.fetch).toHaveBeenCalled();
    expect(res).toBeDefined();
  });
});
