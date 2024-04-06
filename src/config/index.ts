interface IConfig {
  clientID: string;
  apiKey: string;
  webHost: string;
  appHost: string;
  localHost: string;
  appLocalHost: string;
  production: boolean;
}

const Config: IConfig = {
  clientID: import.meta.env.VITE_APP_CLIENT_ID || '',
  apiKey: import.meta.env.VITE_APP_API_KEY || '',
  webHost: import.meta.env.VITE_WEB_HOST || 'https://lucidia.io',
  appHost: import.meta.env.VITE_APP_HOST || 'https://app.lucidia.io',
  localHost: import.meta.env.VITE_LOCALHOST || 'http://localhost:3000',
  appLocalHost: import.meta.env.VITE_APP_LOCALHOST || 'http://app.localhost:3000',
  production: import.meta.env.VITE_PRODUCTION === 'true',
};

export default Config;
