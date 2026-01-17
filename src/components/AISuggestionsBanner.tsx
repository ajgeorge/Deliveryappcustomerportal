import { Sparkles, TrendingUp, X } from 'lucide-react';
import { useState } from 'react';

export function AISuggestionsBanner() {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return null;
  }

  return (
    <div className="bg-gradient-to-br from-[#D90217] to-red-700 rounded-xl shadow-lg p-4 mb-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
      
      <button
        onClick={() => setIsDismissed(true)}
        className="absolute top-2 right-2 text-white/80 hover:text-white transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="relative">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-white" />
          <h2 className="font-bold text-white">AI Insights</h2>
        </div>

        <div className="space-y-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <div className="flex items-start gap-2">
              <div className="text-2xl">🔥</div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-1">Yesterday's Top Sellers</h3>
                <p className="text-white/90 text-xs mb-2">Based on yesterday's sales, these items were most popular:</p>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs text-white">
                    <span>1. Classic Burger</span>
                    <span className="font-semibold">47 orders</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-white">
                    <span>2. Chicken Wings</span>
                    <span className="font-semibold">34 orders</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-white">
                    <span>3. Caesar Salad</span>
                    <span className="font-semibold">28 orders</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <div className="flex items-start gap-2">
              <div className="text-2xl">💡</div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-1">Stock Suggestion</h3>
                <p className="text-white/90 text-xs">Consider increasing Classic Burger ingredients. Demand up 23% this week.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <div className="flex items-start gap-2">
              <TrendingUp className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white text-sm mb-1">Peak Hours Today</h3>
                <p className="text-white/90 text-xs">Expect high volume at 12:30 PM and 6:45 PM based on patterns.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}