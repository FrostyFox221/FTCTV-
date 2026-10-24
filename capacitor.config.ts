import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'tv.ftctv.secondscreen',
  appName: 'FTCTV Второй экран',
  webDir: 'dist/public',
  server: {
    url: 'http://34.162.224.193',
    cleartext: true,
    androidScheme: 'https'
  },
  android: {
    buildOptions: {
      signingType: 'apksigner'
    }
  }
};

export default config;
