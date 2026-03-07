import { Component } from '@angular/core';

@Component({
  selector: 'app-features-section',
  imports: [],
  templateUrl: './features-section.html',
  styleUrl: './features-section.css',
})
export class FeaturesSection {
  features = [
    {
      icon: '📚',
      title: "Mavzulashtirilgan testlar",
      description:
        "Barcha mavzular bo'yicha tuzilgan testlar. Har bir mavzuni alohida o'rganing va mustahkamlang.",
      badge: null,
    },
    {
      icon: '🔀',
      title: "Random testlar",
      description:
        "Haqiqiy imtihonga o'xshash tasodifiy testlar. O'zingizni sinab ko'ring!",
      badge: null,
    },
    {
      icon: '🎥',
      title: "Video darslar",
      description:
        "Har bir mavzu bo'yicha professional video darslar va nazariy materiallar.",
      badge: null,
    },
    {
      icon: '⚠️',
      title: "Xatolarni tahlil qilish",
      description:
        "Har bir xato uchun batafsil izoh va to'g'ri javob. Xatolaringizdan o'rganing.",
      badge: null,
    },
    {
      icon: '📊',
      title: "Progress kuzatuvi",
      description:
        "Batafsil statistika va taraqqiyotingizni kuzatish.",
      badge: null,
    },
    {
      icon: '📱',
      title: "Mobil ilova",
      description:
        "Istalgan joyda istalgan vaqtda o'rganing. iOS va Android uchun.",
      badge: "Tez orada",
    }
  ];

}
