import { NextResponse } from "next/server";
import { leadSubmissionSchema } from "@/lib/formSchema";
import { sendLeadEmail } from "@/lib/sendLeadEmail";

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }

  const parsed = leadSubmissionSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Ungültige Formulardaten" }, { status: 400 });
  }

  const result = await sendLeadEmail(parsed.data);
  if (!result.ok) {
    return NextResponse.json({ error: result.message }, { status: result.status });
  }

  return NextResponse.json({ ok: true });
}
