import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation implements OnInit, OnDestroy {
  isScrolled = false;
  isMobileMenuOpen = false;

  ngOnInit() {
    window.addEventListener('scroll', this.handleScroll);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.isScrolled = window.scrollY > 20;
  };

  menuItems = [
    { label: "Asosiy", href: "#hero" },
    { label: "Testlar", href: "#features" },
    { label: "O'quv materiallari", href: "#features" },
    { label: "Natijalar", href: "#testimonials" },
    { label: "Biz haqimizda", href: "#why" },
    { label: "Kontakt", href: "#contact" },
  ];

  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMenu() {
    this.isMobileMenuOpen = false;
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 20;
  }
}
