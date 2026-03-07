import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
  currentIndex = signal(0);

  testimonials = [
    {
      name: "Nodira Karimova",
      role: "Talaba, 22 yosh",
      image:
        "https://images.unsplash.com/photo-1722263147569-fa8873772867?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGZlbWFsZSUyMHN0dWRlbnQlMjBoYXBweSUyMGdyYWR1YXRpb258ZW58MXx8fHwxNzcyODc0NzYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      quote:
        "AvtoMaktab platformasi juda qulay va tushunarli. Mavzulashtirilgan testlar orqali barcha mavzularni yaxshi o'rgandim. Birinchi urinishdayoq imtihondan o'tdim!",
      rating: 5,
    },
    {
      name: "Sardor Mahmudov",
      role: "Dasturchi, 25 yosh",
      image:
        "https://images.unsplash.com/photo-1631674250158-7ccb1f5e7a8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHV6YmVrJTIwbWFuJTIwc3R1ZGVudCUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzcyODc0NzYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      quote:
        "Video darslar va batafsil izohlar juda foydali bo'ldi. Progress kuzatuvi imkoniyati qaysi mavzularda zaif ekanligimni ko'rsatdi. Rahmat AvtoMaktab!",
      rating: 5,
    },
    {
      name: "Dilnoza Aliyeva",
      role: "O'qituvchi, 28 yosh",
      image:
        "https://images.unsplash.com/photo-1532964821867-98851c797461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwZHJpdmluZyUyMGNhciUyMGhhcHB5fGVufDF8fHx8MTc3Mjg3NDc2NHww&ixlib=rb-4.1.0&q=80&w=1080",
      quote:
        "Eng yaxshi online platforma! Random testlar xuddi rasmiy imtihon kabi. Hamma do'stlarimga tavsiya qilaman. 95% muvaffaqiyat darajasi haqiqat!",
      rating: 5,
    },
    {
      name: "Jamshid Tursunov",
      role: "Talaba, 21 yosh",
      image:
        "https://images.unsplash.com/photo-1660734194607-2f9548670761?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHlvdW5nJTIwYXNpYW4lMjBzdHVkZW50JTIwdGFibGV0JTIwc21pbGluZ3xlbnwxfHx8fDE3NzI4NzQ3NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      quote:
        "Platformaning interfeysi juda sodda va tushunarli. Mobil versiyada ham ishlatish qulay. Xatolarimni tahlil qilish funksiyasi juda yoqdi!",
      rating: 5,
    },
  ];

  nextIndex = () => {
    this.currentIndex.update((i) => (i + 1) % this.testimonials.length);
  };
  prevIndex = () => {
    this.currentIndex.update((i) =>
      i === 0 ? this.testimonials.length - 1 : i - 1
    );
  };

  setIndex = (index: number) => {
    this.currentIndex.set(index);
  };
}
