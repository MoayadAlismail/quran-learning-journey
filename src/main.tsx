
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Capacitor imports for mobile functionality
import { Capacitor } from '@capacitor/core';

// Configure app for mobile if running on device
if (Capacitor.isNativePlatform()) {
  console.log('Running on native platform:', Capacitor.getPlatform());
}

createRoot(document.getElementById("root")!).render(<App />);
