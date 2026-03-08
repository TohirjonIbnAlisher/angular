import { Component, signal } from '@angular/core';
import { LucideAngularModule, 
  Car, MessageCircle, BookOpen, FileText, ClipboardCheck, Ticket, 
  AlertCircle, User, Shuffle, GraduationCap, Bell, Crown, ChevronRight, Sparkles 
} from 'lucide-angular';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'study-dashboard',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './study-dashboard.html',
  styleUrls: ['./study-dashboard.css'],
  animations: [
    trigger('cardEnter', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px) scale(0.95)' }),
        animate('500ms cubic-bezier(.17,.67,.35,1.2)',
          style({ opacity: 1, transform: 'translateY(0) scale(1)' })
        )
      ])
    ])
  ]
})
export class StudyDashboard {

  constructor(private router: Router) {}

  hoveredButton = signal<string | null>(null);

  math = Math;

  icons = {
    Car,
    MessageCircle,
    BookOpen,
    FileText,
    ClipboardCheck,
    Ticket,
    AlertCircle,
    User,
    Shuffle,
    GraduationCap,
    Bell,
    Crown,
    ChevronRight,
    Sparkles
  };

  mainButtons = [
    { id: 'training', icon: BookOpen, text: "Mavzu bo'yicha treningni boshlash", gradient: 'from-blue-500 to-blue-600' },
    { id: 'exam', icon: FileText, text: "Mavzular bo'yicha imtihon topshirish", gradient: 'from-green-500 to-green-600' },
    { id: 'control', icon: ClipboardCheck, text: 'Oraliq Nazorat', gradient: 'from-purple-500 to-purple-600' },
    { id: 'tickets', icon: Ticket, text: "Biletlar bo'yicha treningni boshlash", gradient: 'from-orange-500 to-orange-600' },
  ];

  gridButtons = [
    { id: 'all-errors', icon: AlertCircle, text: 'Barcha xato qilingan savollar', color: 'bg-red-50 border-red-200 hover:border-red-400' },
    { id: 'my-errors', icon: User, text: 'Mening xato savollarim', color: 'bg-orange-50 border-orange-200 hover:border-orange-400' },
    { id: 'random', icon: Shuffle, text: 'Random Test', color: 'bg-purple-50 border-purple-200 hover:border-purple-400' },
    { id: 'final-exam', icon: GraduationCap, text: 'Imtihon Topshirish', color: 'bg-green-50 border-green-200 hover:border-green-400' },
  ];

  onOptionChosen() {
    // o'zgartiriladi backend yozilgandan keyin

    this.router.navigate(['/subject']);
    console.log('Option chosen');
  } 
}