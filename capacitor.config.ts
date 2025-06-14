
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.880e48f27dac487b9c3871fd51ad5316',
  appName: 'quran-learning-journey',
  webDir: 'dist',
  server: {
    url: 'https://880e48f2-7dac-487b-9c38-71fd51ad5316.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: '#10b981',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false
    }
  }
};

export default config;
