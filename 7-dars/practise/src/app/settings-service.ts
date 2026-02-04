import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private themeColor = new BehaviorSubject<string>("white")

  currentThemeColor$ = this.themeColor.asObservable();

  setColor(color: string)
  {
    this.themeColor.next(color);
  }
}
