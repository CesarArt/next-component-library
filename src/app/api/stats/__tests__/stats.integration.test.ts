import { GET } from '../route';

describe('GET /api/components/stats (integration)', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
    jest.resetAllMocks();
  });

  it('fetches stats from backend', async () => {
    const fakeResponse = { ok: true, json: async () => ({ stats: [] }) } as any;
    global.fetch = jest.fn().mockResolvedValue(fakeResponse) as any;

    const res = await GET();

    expect(global.fetch).toHaveBeenCalled();
    expect(res).toBeDefined();
  });
});
