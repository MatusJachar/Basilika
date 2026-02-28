// API configuration for the deployed backend
export const API_BASE_URL = 'https://basilika-tour.preview.emergentagent.com/api';

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
    return `https://basilika-tour.preview.emergentagent.com${path}`;
  }
  return `${API_BASE_URL}${path}`;
};
