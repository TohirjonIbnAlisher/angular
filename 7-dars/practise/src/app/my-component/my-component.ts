import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs';
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { SettingsService } from '../settings-service';

@Component({
  selector: 'app-my-component',
  imports: [FormsModule],
  templateUrl: './my-component.html',
  styleUrl: './my-component.css',
})
export class MyComponent {

 constructor(private settings: SettingsService) {}

  set(color: string) {
    this.settings.setColor(color);
  }

}
