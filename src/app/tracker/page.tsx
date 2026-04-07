import Link from "next/link";
import { ChevronLeft, Settings, Home, BarChart3, User, Plus } from "lucide-react";

const quickAddItems = [
  { emoji: "💧", amount: "150ml" },
  { emoji: "🥤", amount: "250ml" },
  { emoji: "🍶", amount: "500ml" },
];

const logs = [
  { time: "08:30 AM", icon: "💧", amount: "250ml", note: "Morning Coffee" },
  { time: "10:15 AM", icon: "🥤", amount: "500ml", note: "Design Break" },
  { time: "01:00 PM", icon: "🍶", amount: "500ml", note: "Lunch" },
];

const periodTabs = ["Week", "Month", "Year"];

export default function TrackerPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 lg:grid lg:grid-cols-2 lg:items-start">
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <header className="flex items-center justify-between border-b border-slate-100 bg-white/70 px-5 py-4 text-sm font-semibold text-slate-700 backdrop-blur">
            <button className="inline-flex items-center gap-1 text-slate-500">
              <ChevronLeft className="h-4 w-4" />
              Back
            </button>
            <span className="text-base tracking-wide text-slate-900">HYDRATE</span>
            <button className="inline-flex items-center gap-1 text-slate-500">
              <Settings className="h-4 w-4" />
              Settings
            </button>
          </header>

          <div className="space-y-6 p-5">
            <p className="text-center text-sm text-slate-500">周二, 4月7日</p>

            <div className="rounded-3xl bg-slate-50 p-6">
              <div className="mx-auto flex h-52 w-52 items-center justify-center rounded-full bg-[conic-gradient(#3b82f6_50%,#22c55e_50%,#e2e8f0_0)] p-4">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-white text-center">
                  <p className="text-4xl font-bold text-slate-900">1250</p>
                  <p className="text-sm font-medium text-slate-500">ml</p>
                  <p className="mt-3 text-xs uppercase tracking-widest text-slate-400">Goal 2500ml</p>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-3 flex-1 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-blue-500 to-green-500" />
                </div>
                <span className="text-sm font-semibold text-slate-600">50%</span>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-bold tracking-wide text-slate-700">QUICK ADD</h3>
              <div className="grid grid-cols-3 gap-3">
                {quickAddItems.map((item) => (
                  <button
                    key={item.amount}
                    className="rounded-2xl border border-slate-200 bg-white px-2 py-4 text-center transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="text-2xl">{item.emoji}</div>
                    <div className="mt-2 text-sm font-semibold text-slate-700">{item.amount}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-bold tracking-wide text-slate-700">TODAY&apos;S LOG</h3>
              <ul className="space-y-2 rounded-2xl bg-slate-50 p-3">
                {logs.map((log) => (
                  <li key={log.time} className="flex items-center justify-between gap-3 rounded-xl bg-white px-3 py-2 text-sm">
                    <span className="text-slate-500">{log.time}</span>
                    <span>{log.icon}</span>
                    <span className="font-semibold text-slate-700">{log.amount}</span>
                    <span className="flex-1 truncate text-right text-slate-500">{log.note}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                <Plus className="h-4 w-4" />
                Add Manual Entry
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
            <button className="inline-flex items-center gap-1 text-slate-500">
              <ChevronLeft className="h-4 w-4" />
              Back
            </button>
            <span className="text-base tracking-wide text-slate-900">STATISTICS</span>
            <button className="text-slate-500">Filter v</button>
          </header>

          <div className="space-y-6 p-5">
            <div className="rounded-2xl bg-slate-50 p-3">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">PERIOD</p>
              <div className="inline-flex rounded-full bg-white p-1 shadow-sm">
                {periodTabs.map((tab, idx) => (
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
              <p className="mt-1 text-2xl font-bold text-slate-900">2,100 ml / day</p>

              <div className="mt-5 rounded-xl border border-slate-200 bg-white p-3">
                <p className="mb-2 text-xs text-slate-400">ml</p>
                <pre className="overflow-x-auto text-[11px] leading-4 text-slate-500">
{`3000|       *
    |      * *      *
2000|     *   *    * *      *
    |    *     *  *   *    * *
1000|___*_______**_____*__*___*_
    M T W T F S S`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">INSIGHTS</p>
                <div className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-900">
                  💡 You drink 20% more on days you cycle. Keep it up!
                </div>
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">STREAK</p>
                <div className="rounded-2xl bg-slate-900 px-4 py-3 text-lg font-semibold text-white">🔥 5 Days</div>
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
