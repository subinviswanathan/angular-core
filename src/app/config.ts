import { InjectionToken } from "@angular/core";

export interface AppCofig {
  apiUrl: string;
  size: number
}

export const APP_CONFIG: AppCofig = {
  apiUrl: 'localhost:4200',
  size: 10
};

// export const CONFIG_TOKEN = new InjectionToken<AppCofig>('CONFIG_TOKEN');
export const CONFIG_TOKEN = new InjectionToken<AppCofig>('CONFIG_TOKEN', {
  providedIn: 'root',
  factory: () => APP_CONFIG
});
