'use client';
import { usePersistedForm } from '@/lib/usePersistedForm';
import { AuditInput, ToolEntry, ToolName, UseCase } from '@/lib/type';
import { PLANS } from '@/lib/pricing';
import ToolRow from './AuditForm/ToolRow';

const DEFAULT_FORM: AuditInput = {
  tools: [],
  apiTools: [],
  teamSize: 1,
  useCase: 'coding',
};

const ALL_TOOLS: ToolName[] = ['cursor','github-copilot','claude','chatgpt','gemini','windsurf'];

export default function AuditForm() {
  const [form, setForm] = usePersistedForm<AuditInput>('audit-input', DEFAULT_FORM);

  function addTool(tool: ToolName) {
    const alreadyAdded = form.tools.some(t => t.tool === tool);
    if (alreadyAdded) return;
    const firstPlan = PLANS[tool][0];
    const newEntry: ToolEntry = { tool, plan: firstPlan.label, monthlySpend: firstPlan.price, seats: 1 };
    setForm({ ...form, tools: [...form.tools, newEntry] });
  }

  function updateTool(index: number, updated: ToolEntry) {
    const tools = [...form.tools];
    tools[index] = updated;
    setForm({ ...form, tools });
  }

  function removeTool(index: number) {
    setForm({ ...form, tools: form.tools.filter((_, i) => i !== index) });
  }

  const availableTools = ALL_TOOLS.filter(t => !form.tools.some(e => e.tool === t));

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">AI Spend Audit</h1>

      {/* Tool rows */}
      <div className="space-y-3">
        {form.tools.map((entry, i) => (
          <ToolRow
            key={entry.tool}
            entry={entry}
            onChange={updated => updateTool(i, updated)}
            onRemove={() => removeTool(i)}
          />
        ))}
      </div>

      {/* Add tool buttons */}
      <div className="flex flex-wrap gap-2">
        {availableTools.map(tool => (
          <button
            key={tool}
            onClick={() => addTool(tool)}
            className="border px-3 py-1 rounded-full text-sm hover:bg-gray-100"
          >
            + {tool}
          </button>
        ))}
      </div>

      {/* Team size + use case */}
      <div className="flex gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Team size</label>
          <input
            type="number"
            min={1}
            value={form.teamSize}
            onChange={e => setForm({ ...form, teamSize: Number(e.target.value) })}
            className="border rounded px-2 py-1 w-24"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Primary use case</label>
          <select
            value={form.useCase}
            onChange={e => setForm({ ...form, useCase: e.target.value as UseCase })}
            className="border rounded px-2 py-1"
          >
            {(['coding','writing','data','research','mixed'] as UseCase[]).map(u => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Submit */}
      <button
        disabled={form.tools.length === 0}
        className="w-full bg-black text-white py-3 rounded-lg disabled:opacity-40"
        onClick={() => console.log('form ready:', form)}
      >
        Audit My Spend →
      </button>
    </div>
  );
}