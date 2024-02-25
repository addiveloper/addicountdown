import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.formData();

    const title = body.get("title")?.toString()!;
    const date = body.get("date")?.toString()!;
    const id = new Date().getTime();

    const event = {
      id: id,
      title: title,
      date: date,
      url: `/countdown?title=${title}&date=${date}`,
    };

    return new Response(JSON.stringify(event));
  } catch (error) {
    console.log("[SAVE ERROR]", error);
    return new Response("Internal Error", { status: 500 });
  }
};
