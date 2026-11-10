/** Hosting aliases are public, but must not compete with custom domains in search. */
const NON_INDEXABLE_SUFFIXES = [
  ".lovable.app",
  ".workers.dev",
  ".pages.dev",
  ".netlify.app",
] as const;

export function isHostingAlias(hostname: string): boolean {
  const normalized = hostname.toLowerCase().replace(/\.$/, "");
  return NON_INDEXABLE_SUFFIXES.some((suffix) => normalized.endsWith(suffix));
}

/** Apply after SSR/error normalization; never change body, status, or custom-domain SEO. */
export function applyIndexingPolicy(request: Request, response: Response): Response {
  // Only the actual URL is authoritative; do not trust caller-supplied forwarded headers.
  if (!isHostingAlias(new URL(request.url).hostname)) return response;

  const mediaType = (response.headers.get("content-type") ?? "")
    .split(";", 1)[0]
    .trim()
    .toLowerCase();
  if (mediaType !== "text/html" && mediaType !== "application/xhtml+xml") return response;

  const headers = new Headers(response.headers);
  // Append rather than replace intentional directives (e.g. nofollow or bot-specific rules).
  headers.append("X-Robots-Tag", "noindex");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}