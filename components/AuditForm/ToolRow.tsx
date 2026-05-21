'use client';
import { ToolEntry, ToolName } from '@/lib/type';
import { PLANS } from '@/lib/pricing';

interface Props {
  entry: ToolEntry;
  onChange: (updated: ToolEntry) => void;
  onRemove: () => void;
}

const TOOL_LABELS: Record<ToolName, string> = {
  cursor: 'Cursor',
  'github-copilot': 'GitHub Copilot',
  claude: 'Claude',
  chatgpt: 'ChatGPT',
  gemini: 'Gemini',
  windsurf: 'Windsurf',
};

export default function ToolRow({ entry, onChange, onRemove }: Props) {
  const plans = PLANS[entry.tool];

  return (
    <div className="flex gap-3 items-center p-3 border rounded-lg">
      {/* Tool name (static, not editable — tool is chosen at add time) */}
      <span className="w-32 font-medium">{TOOL_LABELS[entry.tool]}</span>

      {/* Plan dropdown */}
      <select
        value={entry.plan}
        onChange={e => onChange({ ...entry, plan: e.target.value })}
        className="border rounded px-2 py-1"
      >
        {plans.map(p => (
          <option key={p.label} value={p.label}>{p.label}</option>
        ))}
      </select>

      {/* Monthly spend */}
      <input
        type="number"
        min={0}
        value={entry.monthlySpend}
        onChange={e => onChange({ ...entry, monthlySpend: Number(e.target.value) })}
        placeholder="Monthly $"
        className="border rounded px-2 py-1 w-28"
      />

      {/* Seats */}
      <input
        type="number"
        min={1}
        value={entry.seats}
        onChange={e => onChange({ ...entry, seats: Number(e.target.value) })}
        placeholder="Seats"
        className="border rounded px-2 py-1 w-20"
      />

      <button onClick={onRemove} className="text-red-500 ml-auto">Remove</button>
    </div>
  );
}