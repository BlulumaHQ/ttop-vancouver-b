<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Apply hostname-specific indexing headers at `src/server.ts` after SSR/error normalization, using `request.url` only; this covers nested HTML without trusting forwarded headers or changing page metadata.
- HTML must pass through the server entry for the indexing policy to apply; static/prerendered HTML or host-rewriting proxies require hosting-layer enforcement and live verification, not global `_headers` rules.
