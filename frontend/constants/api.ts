// API configuration for the deployed backend
export const API_BASE_URL = 'http://178.104.72.151:3000/api';

export const API_ENDPOINTS = {
  health: '/health',
  languages: '/languages',
  tourStops: '/tour-stops',
  tourStop: (id: string) => `/tour-stops/${id}`,
  basilicaInfo: (language: string) => `/basilica-info?language=${language}`,
  siteSettings: '/site-settings',
  offlinePackage: '/offline-package',
  audioFile: (filename: string) => `/uploads/audio/${filename}`,
};

export const getFullUrl = (path: string): string => {
  if (path.startsWith('http')) return path;
  if (path.startsWith('/api')) {
    return `http://178.104.72.151:3000${path}`;
  }
  return `${API_BASE_URL}${path}`;
};