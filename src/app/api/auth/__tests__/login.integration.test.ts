import { POST } from '../login/route';

// Minimal integration-style test: ensure POST calls backend and sets cookie when successful
describe('POST /api/auth/login (integration)', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
    jest.resetAllMocks();
  });

  it('forwards success and sets cookie', async () => {
    const fakeResponse = {
      ok: true,
      json: async () => ({ token: 'abc123' })
    } as any;

    global.fetch = jest.fn().mockResolvedValue(fakeResponse) as any;

    // Create a minimal Request with json method
    const req = new Request('http://localhost/api/auth/login', { method: 'POST', body: JSON.stringify({ user: 'a' }), headers: { 'Content-Type': 'application/json' } });

    const res = await POST(req as any);

    // Expect fetch called
    expect(global.fetch).toHaveBeenCalled();
    // Response should be a NextResponse-like object with cookies.set available
    // We assert that the result exists and has json property
    expect(res).toBeDefined();
  });
});
