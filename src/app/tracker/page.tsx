"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ChevronLeft,
  Settings,
  Home,
  BarChart3,
  User,
  Plus,
  Trash2,
  Save,
  RotateCcw,
} from "lucide-react";

type DrinkType = "💧" | "🥤" | "🍶";

type DrinkLog = {
  id: string;
  amount: number;
  note: string;
  icon: DrinkType;
  createdAt: string;
};

type TrackerStore = {
  goal: number;
  logs: DrinkLog[];
};

const STORAGE_KEY = "waterhabit_tracker_v1";
const DEFAULT_GOAL = 2500;

const quickAddItems: Array<{ emoji: DrinkType; amount: number; label: string }> = [
  { emoji: "💧", amount: 150, label: "Small Cup" },
  { emoji: "🥤", amount: 250, label: "Medium Cup" },
  { emoji: "🍶", amount: 500, label: "Bottle" },
];

function isValidStore(value: unknown): value is TrackerStore {
  if (!value || typeof value !== "object") return false;
  const data = value as Record<string, unknown>;
  if (typeof data.goal !== "number" || !Array.isArray(data.logs)) return false;

  return data.logs.every((item) => {
    if (!item || typeof item !== "object") return false;
    const log = item as Record<string, unknown>;
    return (
      typeof log.id === "string" &&
      typeof log.amount === "number" &&
      typeof log.note === "string" &&
      (log.icon === "💧" || log.icon === "🥤" || log.icon === "🍶") &&
      typeof log.createdAt === "string"
    );
  });
}

function formatCNDate(date: Date) {
  const weekdays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  return `${weekdays[date.getDay()]}, ${date.getMonth() + 1}月${date.getDate()}日`;
}

function formatTime(dateIso: string) {
  return new Date(dateIso).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getDayKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
    date.getDate()
  ).padStart(2, "0")}`;
}

function getRecent7Days() {
  const today = new Date();
  return Array.from({ length: 7 }).map((_, index) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (6 - index));
    return d;
  });
}

export default function TrackerPage() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [goal, setGoal] = useState(DEFAULT_GOAL);
  const [logs, setLogs] = useState<DrinkLog[]>([]);

  const [manualAmount, setManualAmount] = useState("250");
  const [manualNote, setManualNote] = useState("");
  const [manualIcon, setManualIcon] = useState<DrinkType>("💧");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        setIsHydrated(true);
        return;
      }

      const parsed: unknown = JSON.parse(raw);
      if (isValidStore(parsed)) {
        setGoal(parsed.goal);
        setLogs(parsed.logs);
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    const payload: TrackerStore = { goal, logs };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }, [goal, logs, isHydrated]);

  const today = useMemo(() => new Date(), []);
  const todayKey = getDayKey(today);

  const todaysLogs = useMemo(
    () => logs.filter((item) => getDayKey(new Date(item.createdAt)) === todayKey),
    [logs, todayKey]
  );

  const todayAmount = todaysLogs.reduce((sum, item) => sum + item.amount, 0);
  const progress = Math.min(100, Math.round((todayAmount / Math.max(goal, 1)) * 100));

  const weeklyData = useMemo(() => {
    const recentDays = getRecent7Days();
    return recentDays.map((date) => {
      const dayKey = getDayKey(date);
      const total = logs
        .filter((item) => getDayKey(new Date(item.createdAt)) === dayKey)
        .reduce((sum, item) => sum + item.amount, 0);

      return {
        label: ["S", "M", "T", "W", "T", "F", "S"][date.getDay()],
        total,
      };
    });
  }, [logs]);

  const weeklyAverage =
    weeklyData.reduce((sum, day) => sum + day.total, 0) / Math.max(weeklyData.length, 1);

  const maxY = Math.max(goal, ...weeklyData.map((item) => item.total), 1000);

  const points = weeklyData
    .map((item, index) => {
      const x = 30 + index * 45;
      const y = 190 - (item.total / maxY) * 150;
      return `${x},${y}`;
    })
    .join(" ");

  const addLog = (amount: number, icon: DrinkType, note?: string) => {
    const entry: DrinkLog = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      amount,
      icon,
      note: note?.trim() || "Quick Add",
      createdAt: new Date().toISOString(),
    };
    setLogs((prev) => [entry, ...prev]);
  };

  const handleManualAdd = () => {
    const amount = Number(manualAmount);
    if (!Number.isFinite(amount) || amount <= 0) return;
    addLog(amount, manualIcon, manualNote || "Manual Entry");
    setManualNote("");
  };

  const removeLog = (id: string) => {
    setLogs((prev) => prev.filter((item) => item.id !== id));
  };

  const resetToday = () => {
    setLogs((prev) => prev.filter((item) => getDayKey(new Date(item.createdAt)) !== todayKey));
  };

  return (
    <main className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 lg:grid lg:grid-cols-2 lg:items-start">
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <header className="flex items-center justify-between border-b border-slate-100 bg-white/70 px-5 py-4 text-sm font-semibold text-slate-700 backdrop-blur">
            <Link href="/" className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-700">
              <ChevronLeft className="h-4 w-4" />
              Back
            </Link>
            <span className="text-base tracking-wide text-slate-900">HYDRATE</span>
            <span className="inline-flex items-center gap-1 text-slate-500">
              <Settings className="h-4 w-4" />
              Settings
            </span>
          </header>

          <div className="space-y-6 p-5">
            <p className="text-center text-sm text-slate-500">{formatCNDate(today)}</p>

            <div className="rounded-3xl bg-slate-50 p-6">
              <div
                className="mx-auto flex h-52 w-52 items-center justify-center rounded-full p-4"
                style={{
                  background: `conic-gradient(#3b82f6 ${progress * 0.6}%, #22c55e ${progress}%, #e2e8f0 ${progress}%)`,
                }}
              >
                <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-white text-center">
                  <p className="text-4xl font-bold text-slate-900">{todayAmount}</p>
                  <p className="text-sm font-medium text-slate-500">ml</p>
                  <p className="mt-3 text-xs uppercase tracking-widest text-slate-400">Goal {goal}ml</p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="h-3 flex-1 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-sm font-semibold text-slate-600">{progress}%</span>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <input
                  type="number"
                  min={200}
                  step={50}
                  value={goal}
                  onChange={(e) => setGoal(Math.max(200, Number(e.target.value) || DEFAULT_GOAL))}
                  className="w-28 rounded-lg border border-slate-200 px-3 py-1.5 text-sm"
                />
                <span className="text-sm text-slate-500">ml daily goal</span>
                <button
                  onClick={() => setGoal(DEFAULT_GOAL)}
                  className="ml-auto inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2 py-1 text-xs text-slate-500 hover:bg-slate-100"
                >
                  <Save className="h-3 w-3" />
                  Reset Goal
                </button>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-bold tracking-wide text-slate-700">QUICK ADD</h3>
              <div className="grid grid-cols-3 gap-3">
                {quickAddItems.map((item) => (
                  <button
                    key={item.amount}
                    onClick={() => addLog(item.amount, item.emoji, item.label)}
                    className="rounded-2xl border border-slate-200 bg-white px-2 py-4 text-center transition hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]"
                  >
                    <div className="text-2xl">{item.emoji}</div>
                    <div className="mt-2 text-sm font-semibold text-slate-700">{item.amount}ml</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-bold tracking-wide text-slate-700">TODAY&apos;S LOG</h3>

              <div className="mb-3 grid grid-cols-1 gap-2 rounded-2xl border border-slate-200 bg-white p-3 sm:grid-cols-4">
                <select
                  value={manualIcon}
                  onChange={(e) => setManualIcon(e.target.value as DrinkType)}
                  className="rounded-lg border border-slate-200 px-2 py-2 text-sm"
                >
                  <option value="💧">💧 Water</option>
                  <option value="🥤">🥤 Drink</option>
                  <option value="🍶">🍶 Bottle</option>
                </select>
                <input
                  value={manualAmount}
                  onChange={(e) => setManualAmount(e.target.value)}
                  type="number"
                  min={1}
                  className="rounded-lg border border-slate-200 px-2 py-2 text-sm"
                  placeholder="Amount ml"
                />
                <input
                  value={manualNote}
                  onChange={(e) => setManualNote(e.target.value)}
                  className="rounded-lg border border-slate-200 px-2 py-2 text-sm"
                  placeholder="Note"
                />
                <button
                  onClick={handleManualAdd}
                  className="inline-flex items-center justify-center gap-1 rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  <Plus className="h-4 w-4" />
                  Add
                </button>
              </div>

              <ul className="space-y-2 rounded-2xl bg-slate-50 p-3">
                {todaysLogs.length === 0 && (
                  <li className="rounded-xl bg-white px-3 py-5 text-center text-sm text-slate-400">
                    No records yet, click Quick Add or add manually.
                  </li>
                )}
                {todaysLogs.map((log) => (
                  <li
                    key={log.id}
                    className="flex items-center justify-between gap-3 rounded-xl bg-white px-3 py-2 text-sm"
                  >
                    <span className="text-slate-500">{formatTime(log.createdAt)}</span>
                    <span>{log.icon}</span>
                    <span className="font-semibold text-slate-700">{log.amount}ml</span>
                    <span className="flex-1 truncate text-right text-slate-500">{log.note}</span>
                    <button
                      onClick={() => removeLog(log.id)}
                      className="text-slate-400 transition hover:text-red-500"
                      aria-label="Delete log"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>

              <button
                onClick={resetToday}
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-700"
              >
                <RotateCcw className="h-4 w-4" />
                Clear Today
              </button>
            </div>
          </div>

          <footer className="grid grid-cols-3 border-t border-slate-100 bg-white px-5 py-3 text-xs font-semibold text-slate-500">
            <button className="flex flex-col items-center gap-1 text-blue-600">
              <Home className="h-4 w-4" />
              Home
            </button>
            <button className="flex flex-col items-center gap-1">
              <BarChart3 className="h-4 w-4" />
              Stats
            </button>
            <button className="flex flex-col items-center gap-1">
              <User className="h-4 w-4" />
              Profile
            </button>
          </footer>
        </section>

        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <header className="flex items-center justify-between border-b border-slate-100 px-5 py-4 text-sm font-semibold text-slate-700">
            <span className="inline-flex items-center gap-1 text-slate-500">
              <ChevronLeft className="h-4 w-4" />
              Back
            </span>
            <span className="text-base tracking-wide text-slate-900">STATISTICS</span>
            <span className="text-slate-500">Filter v</span>
          </header>

          <div className="space-y-6 p-5">
            <div className="rounded-2xl bg-slate-50 p-3">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">PERIOD</p>
              <div className="inline-flex rounded-full bg-white p-1 shadow-sm">
                {["Week", "Month", "Year"].map((tab, idx) => (
                  <button
                    key={tab}
                    className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
                      idx === 0 ? "bg-blue-600 text-white" : "text-slate-500"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">WEEKLY AVERAGE</p>
              <p className="mt-1 text-2xl font-bold text-slate-900">{Math.round(weeklyAverage)} ml / day</p>

              <div className="mt-5 rounded-xl border border-slate-200 bg-white p-3">
                <p className="mb-2 text-xs text-slate-400">ml</p>
                <svg viewBox="0 0 340 220" className="h-52 w-full">
                  {[0, 1000, 2000, 3000].map((tick) => {
                    const y = 190 - (tick / maxY) * 150;
                    return (
                      <g key={tick}>
                        <line x1="30" y1={y} x2="300" y2={y} stroke="#e2e8f0" strokeWidth="1" />
                        <text x="6" y={y + 4} fontSize="10" fill="#94a3b8">
                          {tick}
                        </text>
                      </g>
                    );
                  })}

                  {weeklyData.map((item, index) => {
                    const x = 30 + index * 45;
                    const barHeight = (item.total / maxY) * 150;
                    const y = 190 - barHeight;
                    return (
                      <g key={`${item.label}-${index}`}>
                        <rect
                          x={x - 10}
                          y={y}
                          width="20"
                          height={Math.max(barHeight, 2)}
                          rx="6"
                          fill="#bfdbfe"
                        />
                        <text x={x} y="210" textAnchor="middle" fontSize="10" fill="#64748b">
                          {item.label}
                        </text>
                      </g>
                    );
                  })}

                  <polyline fill="none" stroke="#2563eb" strokeWidth="3" points={points} />
                  {weeklyData.map((item, index) => {
                    const x = 30 + index * 45;
                    const y = 190 - (item.total / maxY) * 150;
                    return <circle key={`dot-${index}`} cx={x} cy={y} r="4" fill="#1d4ed8" />;
                  })}
                </svg>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">INSIGHTS</p>
                <div className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-900">
                  💡 On days above 2000ml, your average is {(weeklyAverage / Math.max(goal, 1) * 100).toFixed(0)}%
                  of your goal. Keep it up!
                </div>
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">STREAK</p>
                <div className="rounded-2xl bg-slate-900 px-4 py-3 text-lg font-semibold text-white">
                  🔥 {
                    weeklyData.reduce((count, day) => {
                      if (day.total >= goal) return count + 1;
                      return count;
                    }, 0)
                  }{' '}
                  Days (last 7)
                </div>
              </div>
            </div>
          </div>

          <footer className="grid grid-cols-3 border-t border-slate-100 bg-white px-5 py-3 text-xs font-semibold text-slate-500">
            <button className="flex flex-col items-center gap-1">
              <Home className="h-4 w-4" />
              Home
            </button>
            <button className="flex flex-col items-center gap-1 text-blue-600">
              <BarChart3 className="h-4 w-4" />
              Stats
            </button>
            <button className="flex flex-col items-center gap-1">
              <User className="h-4 w-4" />
              Profile
            </button>
          </footer>
        </section>
      </div>

      <div className="mx-auto mt-8 w-full max-w-6xl px-4 text-center">
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        >
          ← Back to Landing
        </Link>
      </div>
    </main>
  );
}
