export type AppType = "crud" | "realtime" | "event_driven" | "analytics";
export type Stage = "mvp" | "growth" | "high_scale";
export type Budget = "sensitive" | "balanced" | "flexible";
export type Compliance = "low" | "moderate" | "high";

export type Answers = {
  appType: AppType;
  stage: Stage;
  // needs: {
  //   auth: boolean;
  //   asyncJobs: boolean;
  //   uploads: boolean;
  //   search: boolean;
  //   notifications: boolean;
  //   multiTenant: boolean;
  // };
  // constraints: {
  //   budget: Budget;
  //   latencySensitive: boolean;
  //   compliance: Compliance;
  //   teamSize: 1 | 2 | 3 | 4 | 5 | 10;
  // };
};
