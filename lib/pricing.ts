import { ToolName } from "./type";

export const PLANS: Record<ToolName, { label: string; price: number }[]> = {
  cursor: [
    { label: "Hobby (Free)", price: 0 },
    { label: "Pro - Monthly", price: 20 },
    { label: "Pro - Annual", price: 16 },
    { label: "Pro+", price: 60 },
    { label: "Ultra", price: 200 },
    { label: "Teams - Monthly", price: 40 },
    { label: "Teams - Annual", price: 32 },
  ],
  "github-copilot": [
    { label: "Free", price: 0 },
    { label: "Pro", price: 10 },
    { label: "Pro+", price: 39 },
    { label: "Business", price: 19 },
    { label: "Enterprise", price: 39 },
  ],
  claude: [
    { label: "Free", price: 0 },
    { label: "Pro - Monthly", price: 20 },
    { label: "Pro - Annual", price: 17 },
    { label: "Max", price: 100 },
    { label: "Team Standard - Monthly", price: 25 },
    { label: "Team Standard - Annual", price: 20 },
    { label: "Team Premium - Monthly", price: 125 },
    { label: "Team Premium - Annual", price: 100 },
  ],
  chatgpt: [
    { label: "Free", price: 0 },
    { label: "Go", price: 5 },        // ~₹399/mo converted
    { label: "Plus", price: 24 },     // ~₹1,999/mo converted
    { label: "Pro", price: 128 },     // ~₹10,699/mo converted
    { label: "Business", price: 22 }, // ~₹1,800/user/mo converted
  ],
  gemini: [
    { label: "Free", price: 0 },
    { label: "Google AI Plus", price: 5 },
    { label: "Google AI Pro", price: 23 },
    { label: "Google AI Ultra", price: 78 },
  ],
  windsurf: [
    { label: "Hobby (Free)", price: 0 },
    { label: "Individual - Monthly", price: 20 },
    { label: "Individual - Annual", price: 16 },
    { label: "Teams - Monthly", price: 40 },
    { label: "Teams - Annual", price: 32 },
  ],
};

// For API tools — shown as labels in UI only, no fixed price
export const API_TOOL_LABELS: Record<string, string> = {
  'anthropic-api': 'Anthropic API',
  'openai-api': 'OpenAI API',
  'gemini-api': 'Gemini API',
};

export const API_MODEL_OPTIONS: Record<string, string[]> = {
  'anthropic-api': ['Claude Haiku 4.5', 'Claude Sonnet 4.6', 'Claude Opus 4.7'],
  'openai-api':    ['GPT-4o Mini', 'GPT-4o', 'GPT-5'],
  'gemini-api':    ['Gemini 2.5 Flash', 'Gemini 3.1 Pro', 'Gemini 3.5 Flash'],
};