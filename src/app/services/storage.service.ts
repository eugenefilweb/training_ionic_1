import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async set(key: string, value: string) {
    return await Preferences.set({key, value});
  }

  async get(key: string) {
    return await Preferences.get({key});
  }
}
