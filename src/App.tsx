import { useState } from 'react';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { Tiers } from './components/Tiers';
import { SurplusMarket } from './components/SurplusMarket';

type Screen = 'login' | 'dashboard' | 'tiers' | 'surplus';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentScreen('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentScreen('login');
  };

  const navigateToTiers = () => {
    setCurrentScreen('tiers');
  };

  const navigateToDashboard = () => {
    setCurrentScreen('dashboard');
  };

  const navigateToSurplus = () => {
    setCurrentScreen('surplus');
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="max-w-md mx-auto">
      {currentScreen === 'dashboard' && (
        <Dashboard 
          onNavigateToTiers={navigateToTiers}
          onNavigateToSurplus={navigateToSurplus}
          onLogout={handleLogout}
        />
      )}
      {currentScreen === 'tiers' && (
        <Tiers 
          onNavigateToDashboard={navigateToDashboard}
          onLogout={handleLogout}
        />
      )}
      {currentScreen === 'surplus' && (
        <SurplusMarket 
          onNavigateToDashboard={navigateToDashboard}
        />
      )}
    </div>
  );
}