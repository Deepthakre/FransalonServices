import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.sm50',
  appName: 'FRANSALON MERCHANT',
  webDir: 'www',
  bundledWebRuntime: false,

  server: {
    androidScheme: 'http',
    cleartext: true,
    allowNavigation: [
      'http://fransalonapp-env-1.eba-mv3mavpj.ap-northeast-1.elasticbeanstalk.com',
      'https://media.istockphoto.com/id/469090778/photo/interior-of-empty-modern-hair-and-beauty-salon.jpg?b=1&s=170667a&w=0&k=20&c=GGxqz2p8I4PEaMa1OW8sXz06Z0yD-vYsfZA9_nalgjs='
      

    ]
  },
  android: {
    allowMixedContent: true
  }


};

export default config;
