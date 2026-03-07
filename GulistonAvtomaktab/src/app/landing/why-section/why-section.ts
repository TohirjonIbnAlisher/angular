import { Component } from '@angular/core';

@Component({
  selector: 'app-why-section',
  imports: [],
  templateUrl: './why-section.html',
  styleUrl: './why-section.css',
})
export class WhySection {
  features = [
    {
      icon: "🎯",
      title: "Aniq maqsad",
      description:
        "Har bir test rasmiy imtihon formatiga 100% mos holda tuzilgan. Hech qanday keraksiz materiallar yo'q.",
      color: "bg-blue-500",
    },
    {
      icon: "🏆",
      title: "Kafolatlangan natija",
      description:
        "95% o'quvchilarimiz birinchi urinishda imtihondan o'tishadi. Siz ham ularga qo'shiling!",
      color: "bg-green-500",
    },
    {
      icon: "⏰",
      title: "Vaqtni tejang",
      description:
        "Mavzulashtirilgan testlar va izohlar bilan o'rganish jarayonini 3 baravar tezlashtiring.",
      color: "bg-purple-500",
    },
    {
      icon: "⚡",
      title: "Darhol natija",
      description:
        "Har bir savolga batafsil izoh va xatolaringizni tahlil qilish. Real vaqtda o'rganing.",
      color: "bg-orange-500",
    },
  ];
}
