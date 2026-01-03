import type { Answers } from "@/types/Answers";
import type { Blueprint } from "@/types/Blueprint";

export function generateBlueprint(answers: Answers): Blueprint {
  const components: Blueprint["components"] = [];
  const connections: Blueprint["connections"] = [];

  // CRUD apps always have a database
  if (answers.appType === "crud") {
    components.push({
      id: "db.postgres",
      type: "db",
      title: "Postgres",
      purpose: "Primary database for CRUD operations",
      required: true,
    });

    components.push({
      id: "api.backend",
      type: "api",
      title: "Backend API",
      purpose: "REST API for CRUD operations",
      required: true,
    });

    connections.push({
      from: "api.backend",
      to: "db.postgres",
      protocol: "sql",
      purpose: "CRUD queries",
    });
  }

  return {
    version: "1.0",
    metadata: {
      appType: answers.appType,
      stage: answers.stage,
      generatedAt: new Date().toISOString(),
    },
    components,
    connections,
  };
}
