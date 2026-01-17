import { Store, DollarSign, ShoppingBag, TrendingUp, Award, LogOut, Menu, Leaf } from 'lucide-react';
import { AISuggestionsBanner } from './AISuggestionsBanner';

interface DashboardProps {
  onNavigateToTiers: () => void;
  onNavigateToSurplus: () => void;
  onLogout: () => void;
}

export function Dashboard({ onNavigateToTiers, onNavigateToSurplus, onLogout }: DashboardProps) {
  const stats = [
    {
      label: "Today's Sales",
      value: 'QR 2,847',
      icon: DollarSign,
      color: 'bg-green-500',
      change: '+18%',
    },
    {
      label: 'Orders',
      value: '64',
      icon: ShoppingBag,
      color: 'bg-[#D90217]',
      change: '+12',
    },
    {
      label: 'Average Order',
      value: 'QR 44.48',
      icon: TrendingUp,
      color: 'bg-blue-500',
      change: '+QR 3.20',
    },
  ];

  const recentOrders = [
    { id: '#4521', items: '2 items', amount: 'QR 32.50', time: '2 min ago', status: 'Preparing' },
    { id: '#4520', items: '5 items', amount: 'QR 67.80', time: '8 min ago', status: 'Ready' },
    { id: '#4519', items: '1 item', amount: 'QR 15.00', time: '15 min ago', status: 'Completed' },
    { id: '#4518', items: '3 items', amount: 'QR 48.20', time: '22 min ago', status: 'Completed' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Mobile Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="px-4 py-4">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-3">
              <div className="bg-[#D90217] p-2 rounded-lg">
                <Store className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-gray-900">Joe's Diner</h1>
                <p className="text-xs text-gray-500">Merchant Portal</p>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      <main className="px-4 py-4">
        {/* AI Suggestions Banner */}
        <AISuggestionsBanner />

        {/* Surplus Market Quick Access */}
        <button 
          onClick={onNavigateToSurplus}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl shadow-lg p-4 mb-6 hover:from-green-600 hover:to-emerald-700 transition-all"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                <Leaf className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="font-bold text-sm">Surplus Market</p>
                <p className="text-xs text-white/90">5 items ready to list</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-white/80">This month</p>
              <p className="font-bold">QR 1,847</p>
            </div>
          </div>
        </button>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-3 mb-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`${stat.color} p-2.5 rounded-lg`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs mb-0.5">{stat.label}</p>
                    <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tier Status Card */}
        <div className="bg-gradient-to-br from-[#D90217] to-red-700 rounded-xl shadow-lg p-4 mb-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span className="font-semibold">Your Tier: Reliable</span>
            </div>
            <button 
              onClick={onNavigateToTiers}
              className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors"
            >
              View Details
            </button>
          </div>
          <div className="mb-2">
            <div className="flex justify-between text-xs mb-1">
              <span>Monthly Revenue</span>
              <span>QR 24,700 / QR 50,000</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
              <div className="bg-white h-full rounded-full" style={{ width: '49.4%' }}></div>
            </div>
          </div>
          <p className="text-xs text-white/90">QR 25,300 more to reach Established tier</p>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h2 className="font-bold text-gray-900">Recent Orders</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {recentOrders.map((order) => (
              <div key={order.id} className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="font-mono text-sm font-semibold text-gray-900">{order.id}</div>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        order.status === 'Completed'
                          ? 'bg-green-100 text-green-700'
                          : order.status === 'Ready'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-gray-900">{order.amount}</div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{order.items}</span>
                  <span>{order.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 max-w-md mx-auto">
        <div className="flex justify-around items-center">
          <button className="flex flex-col items-center gap-1 text-[#D90217]">
            <Store className="w-6 h-6" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button 
            onClick={onNavigateToSurplus}
            className="flex flex-col items-center gap-1 text-gray-400"
          >
            <Leaf className="w-6 h-6" />
            <span className="text-xs">Surplus</span>
          </button>
          <button 
            onClick={onNavigateToTiers}
            className="flex flex-col items-center gap-1 text-gray-400"
          >
            <Award className="w-6 h-6" />
            <span className="text-xs">Tiers</span>
          </button>
          <button 
            onClick={onLogout}
            className="flex flex-col items-center gap-1 text-gray-400"
          >
            <LogOut className="w-6 h-6" />
            <span className="text-xs">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}