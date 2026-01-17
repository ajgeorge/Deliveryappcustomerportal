import { ArrowLeft, Plus, Leaf, TrendingUp, Package, Clock } from 'lucide-react';
import { useState } from 'react';

interface SurplusMarketProps {
  onNavigateToDashboard: () => void;
}

export function SurplusMarket({ onNavigateToDashboard }: SurplusMarketProps) {
  const [autoSurplusMode, setAutoSurplusMode] = useState(true);

  const surplusListings = [
    {
      id: 1,
      name: 'Breakfast Special Bag',
      originalPrice: 85.00,
      discountedPrice: 30.00,
      quantity: 5,
      expiresIn: '2 hours',
      category: 'Breakfast',
    },
    {
      id: 2,
      name: 'Fresh Salad Bundle',
      originalPrice: 65.00,
      discountedPrice: 22.00,
      quantity: 3,
      expiresIn: '4 hours',
      category: 'Salads',
    },
    {
      id: 3,
      name: 'Bakery Surprise Box',
      originalPrice: 55.00,
      discountedPrice: 18.00,
      quantity: 8,
      expiresIn: '6 hours',
      category: 'Bakery',
    },
    {
      id: 4,
      name: 'Dinner Mystery Bag',
      originalPrice: 120.00,
      discountedPrice: 40.00,
      quantity: 2,
      expiresIn: '1 hour',
      category: 'Dinner',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Mobile Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="px-4 py-4">
          <div className="flex items-center gap-3 mb-4">
            <button 
              onClick={onNavigateToDashboard}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div>
              <h1 className="font-bold text-gray-900">Surplus Market</h1>
              <p className="text-xs text-gray-500">Reduce waste, earn more</p>
            </div>
          </div>

          {/* Auto-Surplus Mode Toggle */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-3 border border-green-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-green-500 p-1.5 rounded-lg">
                  <Leaf className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Auto-Surplus Mode</p>
                  <p className="text-xs text-gray-600">Auto-list items nearing expiry</p>
                </div>
              </div>
              <button
                onClick={() => setAutoSurplusMode(!autoSurplusMode)}
                className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
                  autoSurplusMode ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                    autoSurplusMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 py-4">
        {/* Impact Widget */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg p-4 mb-6 text-white">
          <div className="flex items-center gap-2 mb-3">
            <Leaf className="w-5 h-5" />
            <h2 className="font-bold">Your Impact This Month</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4" />
                <p className="text-xs text-white/90">Revenue Recaptured</p>
              </div>
              <p className="text-2xl font-bold">QR 1,847</p>
              <p className="text-xs text-white/80 mt-1">↑ 23% from last month</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
              <div className="flex items-center gap-2 mb-1">
                <Leaf className="w-4 h-4" />
                <p className="text-xs text-white/90">Food Waste Saved</p>
              </div>
              <p className="text-2xl font-bold">142 kg</p>
              <p className="text-xs text-white/80 mt-1">Equal to 356 meals</p>
            </div>
          </div>
        </div>

        {/* Quick Add Button */}
        <button className="w-full bg-[#D90217] text-white rounded-xl py-4 px-4 mb-4 shadow-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2 font-semibold">
          <Plus className="w-5 h-5" />
          Quick Add to Surplus
        </button>

        {/* Current Surplus Listings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="p-4 border-b border-gray-200">
            <h2 className="font-bold text-gray-900">Current Surplus Listings</h2>
            <p className="text-xs text-gray-500 mt-0.5">
              {surplusListings.length} active listings
            </p>
          </div>

          <div className="divide-y divide-gray-200">
            {surplusListings.map((listing) => (
              <div key={listing.id} className="p-4">
                {/* Item Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{listing.name}</h3>
                    <div className="inline-block bg-gray-100 px-2 py-0.5 rounded-md">
                      <span className="text-xs text-gray-600">{listing.category}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-orange-600 bg-orange-50 px-2 py-1 rounded-lg">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="text-xs font-medium">{listing.expiresIn}</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center gap-3 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Original Price</p>
                    <p className="text-sm text-gray-400 line-through">QR {listing.originalPrice.toFixed(2)}</p>
                  </div>
                  <div className="text-gray-300">→</div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Surplus Price</p>
                    <p className="text-lg font-bold text-green-600">QR {listing.discountedPrice.toFixed(2)}</p>
                  </div>
                  <div className="ml-auto bg-green-100 px-2 py-1 rounded-md">
                    <p className="text-xs font-semibold text-green-700">
                      {Math.round((1 - listing.discountedPrice / listing.originalPrice) * 100)}% off
                    </p>
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-900">{listing.quantity}</span> bags remaining
                    </span>
                  </div>
                  <button className="text-sm text-[#D90217] font-medium hover:underline">
                    Edit
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="mt-3">
                  <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className="bg-green-500 h-full rounded-full transition-all"
                      style={{ width: `${(listing.quantity / 10) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="bg-blue-500 p-2 rounded-lg flex-shrink-0">
              <span className="text-white text-lg">💡</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1 text-sm">Surplus Tips</h3>
              <p className="text-xs text-gray-700">
                Items listed 2-3 hours before closing time get 40% more pickups. 
                Enable Auto-Surplus Mode to automatically list items nearing expiry.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}