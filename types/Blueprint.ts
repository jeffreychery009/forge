import { AppType, Stage } from "./Answers";

export type Blueprint = {
  version: "1.0";
  metadata: {
    appType: AppType;
    stage: Stage;
    generatedAt: string; // ISO
  };
  //   components: Component[];
  //   connections: Connection[];
  //   decisions: Decision[];
  //   checklist: ChecklistItem[];
  //   assumptions: string[];
  // };

  // export type ComponentType =
  //   | "frontend"
  //   | "api"
  //   | "db"
  //   | "cache"
  //   | "queue"
  //   | "worker"
  //   | "object_storage"
  //   | "search"
  //   | "notifications";

  // export type Component = {
  //   id: string; // "db.postgres", "queue.redis"
  //   type: ComponentType;
  //   title: string; // "Postgres"
  //   purpose: string; // one line
  //   required: boolean; // true/false
  //   configHints?: Record<string, string>; // optional
  // };

  // export type Connection = {
  //   from: string; // component id
  //   to: string; // component id
  //   protocol: "http" | "tcp" | "sql" | "redis" | "s3";
  //   purpose: string; // one line
  // };

  // export type Decision = {
  //   id: string;
  //   summary: string; // "Use Postgres as primary DB"
  //   reason: string; // "CRUD workload + strong relational constraints"
  //   tradeoffs: string[]; // short bullets
  //   avoidForNow?: string[]; // short bullets
  // };

  // export type ChecklistItem = {
  //   category: "security" | "reliability" | "performance" | "delivery";
  //   item: string;
  //   priority: "now" | "soon" | "later";
  // };

  // export type Warning = {
  //   code: string;
  //   message: string;
  //   severity: "info" | "warn";
};
