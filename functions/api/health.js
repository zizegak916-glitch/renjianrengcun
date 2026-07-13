export async function onRequest() {
  return Response.json({ status: "ok", service: "the-fool-archive" }, { headers: { "cache-control": "no-store" } });
}
