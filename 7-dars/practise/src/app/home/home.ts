import { Component } from '@angular/core';
import { SettingsService } from '../settings-service';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, NgStyle } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgStyle, AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(public settingsService : SettingsService) { }

}
