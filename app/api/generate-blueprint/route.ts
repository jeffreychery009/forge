import { NextRequest, NextResponse } from "next/server";
import { generateBlueprint } from "@/core/decision-engine/generateBlueprint";
import { isAnswersValid } from "@/core/decision-engine/validate";

export async function POST(request: NextRequest) {
  const answers = await request.json();

  if (!isAnswersValid(answers)) {
    return NextResponse.json({ error: "Invalid answers" }, { status: 400 });
  }

  const blueprint = generateBlueprint(answers);

  return NextResponse.json(blueprint);
}
