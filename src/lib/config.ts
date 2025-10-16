/**
 * Centralized backend configuration.
 *
 * This module exposes the BACKEND_URL constant which is used by server-side
 * API route handlers to call the real backend. It reads from environment
 * variables when available and falls back to the default used in this repo.
 *
 * Priority:
 *  - process.env.BACKEND_URL (recommended for server-only usage)
 *  - process.env.NEXT_PUBLIC_BACKEND_URL (useful for client-side code if needed)
 *  - 'http://localhost:4000' (development fallback)
 */

export const BACKEND_URL =
  process.env.BACKEND_URL ?? process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:4000";

export default {
  BACKEND_URL,
};
