import { Store, Check, Star, Crown, TrendingUp, ArrowLeft } from 'lucide-react';

interface TiersProps {
  onNavigateToDashboard: () => void;
  onLogout: () => void;
}

export function Tiers({ onNavigateToDashboard, onLogout }: TiersProps) {
  const tiers = [
    {
      name: 'Starter',
      icon: Store,
      color: 'from-gray-400 to-gray-500',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      iconBg: 'bg-gray-500',
      revenue: 'QR 0 - QR 10K',
      description: 'Perfect for new merchants getting started',
      features: [
        'Basic analytics dashboard',
        'Standard support (48h response)',
        'Weekly sales reports',
        'Mobile app access',
        'Payment processing',
      ],
      benefits: [
        'Transaction fee: 3.5%',
        'Monthly fee: QR 29',
      ],
    },
    {
      name: 'Reliable',
      icon: Star,
      color: 'from-[#D90217] to-red-700',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-300',
      iconBg: 'bg-[#D90217]',
      revenue: 'QR 10K - QR 50K',
      description: 'For growing businesses ready to scale',
      features: [
        'Advanced analytics & insights',
        'Priority support (12h response)',
        'Daily sales reports',
        'AI-powered menu insights',
        'Custom promotions',
        'API access',
        'Marketing tools',
      ],
      benefits: [
        'Transaction fee: 2.9%',
        'Monthly fee: QR 49',
        'Featured placement in app',
      ],
      current: true,
    },
    {
      name: 'Established',
      icon: Crown,
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50',
      borderColor: 'border-yellow-400',
      iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
      revenue: 'QR 50K+',
      description: 'Elite tier for top-performing merchants',
      features: [
        'Real-time analytics dashboard',
        'Dedicated account manager',
        'Instant support (2h response)',
        'Advanced AI predictions',
        'Unlimited promotions',
        'Premium API access',
        'Priority marketing support',
        'Custom integrations',
        'Exclusive partner events',
      ],
      benefits: [
        'Transaction fee: 2.4%',
        'Monthly fee: QR 99',
        'Top placement in app',
        'Featured on homepage',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Mobile Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="px-4 py-4">
          <div className="flex items-center gap-3">
            <button 
              onClick={onNavigateToDashboard}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div>
              <h1 className="font-bold text-gray-900">Merchant Tiers</h1>
              <p className="text-xs text-gray-500">Your growth path</p>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 py-4">
        {/* Current Status */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs text-gray-600 mb-1">Your current tier</p>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#D90217]" />
                <span className="font-bold text-lg text-gray-900">Reliable</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-600 mb-1">This month</p>
              <p className="font-bold text-lg text-gray-900">QR 24.7K</p>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden mb-2">
            <div className="bg-gradient-to-r from-[#D90217] to-red-700 h-full rounded-full" style={{ width: '49.4%' }}></div>
          </div>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5 text-green-600" />
            QR 25.3K more revenue to reach <span className="font-semibold text-gray-900">Established</span>
          </p>
        </div>

        {/* Info Card */}
        <div className="bg-gradient-to-br from-[#D90217] to-red-700 rounded-xl shadow-lg p-4 mb-6 text-white">
          <h3 className="font-bold mb-3">How Tiers Work</h3>
          <div className="space-y-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
              <h4 className="font-semibold mb-1 text-sm">📊 Monthly Evaluation</h4>
              <p className="text-xs text-white/90">Your tier updates monthly based on previous month's revenue.</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
              <h4 className="font-semibold mb-1 text-sm">⚡ Instant Upgrades</h4>
              <p className="text-xs text-white/90">Hit the threshold and benefits activate immediately.</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
              <h4 className="font-semibold mb-1 text-sm">🎯 Keep Your Tier</h4>
              <p className="text-xs text-white/90">Maintain revenue to keep your benefits. No mid-month downgrades.</p>
            </div>
          </div>
        </div>

        {/* Tiers List */}
        <div className="space-y-4 mb-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`${tier.bgColor} rounded-xl shadow-sm border-2 ${tier.borderColor} overflow-hidden ${
                tier.current ? 'ring-2 ring-[#D90217] ring-offset-2' : ''
              }`}
            >
              {tier.current && (
                <div className="bg-gradient-to-r from-[#D90217] to-red-700 text-white text-center py-2 px-4 font-semibold text-sm">
                  Your Current Tier
                </div>
              )}
              
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`${tier.iconBg} w-12 h-12 rounded-lg flex items-center justify-center`}>
                      <tier.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="font-bold text-gray-900">{tier.name}</h2>
                      <p className="text-xs text-gray-600">Monthly revenue</p>
                      <p className="text-sm font-bold text-gray-900">{tier.revenue}</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-700 mb-4">{tier.description}</p>

                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">Benefits</h3>
                    <div className="space-y-1.5">
                      {tier.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-gray-700 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">Features</h3>
                    <div className="space-y-1.5">
                      {tier.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 max-w-md mx-auto">
        <div className="flex justify-around items-center">
          <button 
            onClick={onNavigateToDashboard}
            className="flex flex-col items-center gap-1 text-gray-400"
          >
            <Store className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-[#D90217]">
            <Star className="w-6 h-6" />
            <span className="text-xs font-medium">Tiers</span>
          </button>
          <button 
            onClick={onLogout}
            className="flex flex-col items-center gap-1 text-gray-400"
          >
            <ArrowLeft className="w-6 h-6" />
            <span className="text-xs">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}