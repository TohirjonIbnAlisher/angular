import { Component } from '@angular/core';
import { LucideAngularModule, UserPlus, BookOpen, Target, Trophy } from 'lucide-angular';

@Component({
  selector: 'app-how-it-works',
  imports: [LucideAngularModule],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.css',
})
export class HowItWorks {
  steps = [
    {
      number: "01",
      icon: "👤",
      title: "Bizga qo'shiling",
      description:
        "Avtomaktabimizga tashrif buyuring va o'quvchilar safiga qo'shiling!",
    },
    {
      number: "02",
      icon: "📚",
      title: "Mavzularni o'rganing",
      description:
        "Video darslar va nazariy materiallar orqali barcha mavzularni o'rganing.",
    },
    {
      number: "03",
      icon: "🎯",
      title: "Testlarni ishlang",
      description:
        "Mavzulashtirilgan va random testlarni ishlab, bilimingizni mustahkamlang.",
    },
    {
      number: "04",
      icon: "🏆",
      title: "Imtihonni topshiring",
      description:
        "Tayyorgarlik ko'rib, ishonch bilan rasmiy imtihondan o'ting!",
    },
  ];
}
