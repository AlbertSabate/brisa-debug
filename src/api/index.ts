import { type RequestContext } from "brisa";

export async function POST(request: RequestContext) {
  const data = await request.json();
  // This should console.
  console.log('Request data', data);

  const responseData = JSON.stringify(data);

  const responseOptions = {
    headers: { "content-type": "application/json" },
  };

  return new Response(responseData, responseOptions);
}
