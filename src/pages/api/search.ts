import type { APIRoute } from "astro";

export const GET: APIRoute = (Astro) => {
    const searchText = Astro.url.searchParams.get('search-text');
if (searchText == null || searchText === "") {
    throw new Error(`Invalid search text`)
}
  return new Response(
    JSON.stringify(["garbage", "more garbage", "new", searchText]),
  );
};