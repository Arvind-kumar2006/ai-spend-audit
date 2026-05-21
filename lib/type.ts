export type ToolName = | 'cursor' | 'github-copilot' | 'claude' | 'chatgpt' | 'gemini' | 'windsurf';

export type ApiToolName = 'anthropic-api' | 'openai-api' | 'gemini-api';

export type UseCase = 'coding' | 'writing' | 'data' | 'research' | 'mixed';

export interface ToolEntry {
  tool: ToolName;
  plan: string;
  monthlySpend: number;
  seats: number;
}

export interface ApiToolEntry {
  tool: ApiToolName;
  monthlySpend: number;
  primaryModel?: string;
}

export interface AuditInput {
  tools: ToolEntry[];
  apiTools: ApiToolEntry[];   // separate array for API tools
  teamSize: number;
  useCase: UseCase;
}