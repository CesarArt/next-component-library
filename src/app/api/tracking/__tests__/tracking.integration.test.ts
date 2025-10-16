import { POST } from '../route';

describe('POST /api/components/track (integration)', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
    jest.resetAllMocks();
  });

  it('forwards tracking event to backend', async () => {
    const fakeResponse = { ok: true, json: async () => ({}) } as any;
    global.fetch = jest.fn().mockResolvedValue(fakeResponse) as any;

    const req = new Request('http://localhost/api/components/track', { method: 'POST', body: JSON.stringify({ event: 'click' }), headers: { 'Content-Type': 'application/json' } });

    const res = await POST(req as any);

    expect(global.fetch).toHaveBeenCalled();
    expect(res).toBeDefined();
  });
});
