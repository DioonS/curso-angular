import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  static getLocale() {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  getLocale() {
    return 'pt-BR';
  }
}
