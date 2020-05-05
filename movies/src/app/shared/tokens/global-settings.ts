import { InjectionToken } from '@angular/core';

export interface GlobalSettings {
  api: { baseURL: string };
  whiteListedHosts: string[];
}

export const GLOBAL_SETTINGS = new InjectionToken('GLOBAL_SETTINGS');
