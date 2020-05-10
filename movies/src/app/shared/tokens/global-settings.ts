import { InjectionToken } from '@angular/core';

export interface GlobalSettings {
  api: { baseURL: string };
  whiteListedHosts: string[];
}

export const GLOBAL_SETTINGS = new InjectionToken<GlobalSettings>('GLOBAL_SETTINGS');
