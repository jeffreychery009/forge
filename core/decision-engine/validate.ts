import type { Answers } from "@/types/Answers";

export function isAnswersValid(answers: Answers): answers is Answers {
  if (typeof answers !== "object" || answers === null) return false;

  const obj = answers as Record<string, unknown>;

  return typeof obj.appType === "string";
}
