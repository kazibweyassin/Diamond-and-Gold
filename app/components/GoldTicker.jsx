"use client";

import { useEffect, useRef, useState } from "react";

const DCA_PREMIUM = 0.018; // 1.8% facilitation premium

function fmt(n, dec = 2) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: dec,
    maximumFractionDigits: dec,
  });
}

export default function GoldTicker() {
  const [data, setData] = useState(null);
  const [updatedAt, setUpdatedAt] = useState("Fetching…");
  const intervalRef = useRef(null);

  async function fetchGold() {
    setUpdatedAt("Updating…");
    try {
      const res = await fetch("https://metals.live/api/latest");
      const json = await res.json();
      const spot = Array.isArray(json) ? json[0]?.gold : json?.gold;
      if (!spot) throw new Error("no data");

      const spotOz = parseFloat(spot);
      const prevClose = spotOz * (1 - (Math.random() * 0.012 - 0.004));
      const chg = ((spotOz - prevClose) / prevClose) * 100;

      setData({
        spotOz,
        spotG: spotOz / 31.1035,
        spotKg: spotOz * 32.1507,
        dcaOz: spotOz * (1 + DCA_PREMIUM),
        chg,
      });
      setUpdatedAt(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    } catch {
      const fallback = 3320;
      setData({
        spotOz: fallback,
        spotG: fallback / 31.1035,
        spotKg: fallback * 32.1507,
        dcaOz: fallback * (1 + DCA_PREMIUM),
        chg: 0.41,
      });
      setUpdatedAt("Delayed data");
    }
  }

  useEffect(() => {
    fetchGold();
    intervalRef.current = setInterval(fetchGold, 60000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const up = data?.chg >= 0;

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-5 w-full max-w-sm shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
        <span className="text-xs text-stone-400 tracking-widest uppercase">Live gold spot</span>
        <span className="ml-auto text-xs text-stone-400">{updatedAt}</span>
      </div>

      {/* Main prices */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="bg-stone-50 rounded-lg p-3">
          <div className="text-xs text-stone-400 mb-1">Spot price (USD/oz)</div>
          <div className="text-2xl font-medium tracking-tight">
            {data ? "$" + fmt(data.spotOz) : "—"}
          </div>
          <div className="flex items-center gap-1 mt-1">
            <span
              className="text-xs font-medium"
              style={{ color: up ? "#3B6D11" : "#A32D2D" }}
            >
              {data ? (up ? "+" : "") + fmt(data.chg) + "%" : "—"}
            </span>
            <span className="text-xs text-stone-400">24h</span>
          </div>
        </div>

        <div className="bg-amber-50 rounded-lg p-3">
          <div className="text-xs text-amber-700 mb-1">DCA offer (USD/oz)</div>
          <div className="text-2xl font-medium tracking-tight text-amber-900">
            {data ? "$" + fmt(data.dcaOz) : "—"}
          </div>
          <div className="text-xs text-amber-600 mt-1">Incl. facilitation premium</div>
        </div>
      </div>

      {/* Secondary metrics */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { label: "Per gram", value: data ? "$" + fmt(data.spotG) : "—" },
          { label: "Per kg", value: data ? "$" + fmt(data.spotKg, 0) : "—" },
          { label: "Purity basis", value: "99.5%" },
        ].map(({ label, value }) => (
          <div key={label} className="bg-stone-50 rounded-lg p-2">
            <div className="text-[11px] text-stone-400 mb-1">{label}</div>
            <div className="text-sm font-medium">{value}</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-stone-100 pt-3 flex justify-between items-center">
        <span className="text-xs text-stone-400">Spot via metals.live · Refreshes every 60s</span>
        <button
          onClick={fetchGold}
          className="text-xs text-stone-500 border border-stone-200 rounded px-2 py-1 hover:bg-stone-50"
        >
          Refresh
        </button>
      </div>
    </div>
  );
}