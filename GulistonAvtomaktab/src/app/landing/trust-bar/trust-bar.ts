import { Component } from '@angular/core';

@Component({
  selector: 'app-trust-bar',
  imports: [],
  templateUrl: './trust-bar.html',
  styleUrl: './trust-bar.css',
})
export class TrustBar {
  stats = [
    {
      icon: "👥",
      text: "5000+ o'quvchi muvaffaqiyatli topshirdi",
    },
    {
      icon: "📈",
      text: "95% muvaffaqiyat darajasi",
    },
    {
      icon: "🛡️",
      text: "Rasmiy testga 100% mos",
    },
    {
      icon: "✅",
      text: "Kafolatlangan natija",
    },
  ];
}
