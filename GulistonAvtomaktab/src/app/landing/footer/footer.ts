import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  quickLinks = [
    { label: "Asosiy", href: "#hero" },
    { label: "Testlar", href: "#features" },
    { label: "Video darslar", href: "#features" },
    { label: "Narxlar", href: "#" },
  ];

  companies = [
    { label: "Biz haqimizda", href: "#why" },
    { label: "Blog", href: "#" },
    { label: "Yangiliklar", href: "#" },
    { label: "Ish o'rinlari", href: "#" },
  ];

  supports = [
    { label: "Yordam markazi", href: "#" },
    { label: "Kontakt", href: "#contact" },
    { label: "FAQ", href: "#" },
    { label: "Maxfiylik siyosati", href: "#" },
  ];
}
