import {Injectable} from "@angular/core";

@Injectable()
export class PersistanceService {
  set(key: string, data: any) {
    try {
      localStorage.setItem(key,  JSON.stringify(data))
    } catch (e) {
      console.error('Error saving to localStorage', e)
    }
  }

  get(key: string): any {
    try {
      // @ts-ignore
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Error getting data from localStorage')
      return null;
    }
  }
}
