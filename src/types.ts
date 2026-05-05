export type LeadScenarioType =
  | 'calculation'
  | 'location'
  | 'income'
  | 'presentation'
  | 'strategy'
  | 'launch_plan'
  | 'default';

export interface LeadScenarioData {
  type: LeadScenarioType;
  buttonText: string;
  sectionId: string;
}

export interface ScenarioDetails {
  title: string;
  subtitle: string;
}

export interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  consent: boolean;
  sourceButton: string;
  scenarioType: LeadScenarioType;
  sectionId: string;
  pageUrl: string;
  utm: string;
  createdAt: string;
}
