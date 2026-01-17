import { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import logo from 'figma:asset/db43b46bc1190803c3a8e30bcb921dc3c671e434.png';

interface LoginProps {
  onLogin: () => void;
}

export function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#D90217] to-red-800 flex flex-col max-w-md mx-auto">
      {/* Logo Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-12 pb-8">
        <div className="bg-white rounded-3xl p-8 mb-6 shadow-2xl">
          <img src={logo} alt="Logo" className="w-24 h-24" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Merchant Portal
        </h1>
        <p className="text-white/90 text-center">
          Manage your restaurant from anywhere
        </p>
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-t-3xl px-6 pt-8 pb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Sign In</h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D90217] focus:border-transparent outline-none text-base"
                placeholder="you@restaurant.com"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D90217] focus:border-transparent outline-none text-base"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 text-[#D90217] focus:ring-[#D90217] border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm font-medium text-[#D90217] hover:text-red-700">
              Forgot?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#D90217] text-white py-4 px-4 rounded-xl font-semibold hover:bg-red-700 transition-colors shadow-lg"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            New merchant?{' '}
            <a href="#" className="font-semibold text-[#D90217] hover:text-red-700">
              Create account
            </a>
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-center text-gray-500">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}