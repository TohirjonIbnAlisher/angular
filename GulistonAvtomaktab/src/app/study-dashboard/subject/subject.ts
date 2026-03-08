import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, 
  Car, FileText, Users, Siren, AlertTriangle, Award, XCircle, CheckCircle, Info, Wrench, Plus, ArrowUpDown, Activity, Lightbulb, UserCheck, Zap } from 'lucide-angular';
import { trigger, style, animate, transition, stagger, query } from '@angular/animations';

interface Topic {
  id: number;
  name: string;
  icon: any;
}

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './subject.html',
  styleUrls: ['./subject.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class Subject {
  hoveredCard = signal<number | null>(null);
  mixedMode = signal<boolean>(false);

  icons = {
    Car, FileText, Users, Siren, AlertTriangle, Award, XCircle, CheckCircle,
    Info, Wrench, Plus, ArrowUpDown, Activity, Lightbulb, UserCheck, Zap
  };

  topics = signal<Topic[]>([
    { id: 1, name: 'Umumiy qoidalar', icon: FileText },
    { id: 2, name: 'Haydovchilarning umumiy vazifalari', icon: Users },
    { id: 3, name: 'Piyodalarning umumiy vazifalari', icon: UserCheck },
    { id: 4, name: 'Mahsus transport vositalari', icon: Siren },
    { id: 5, name: 'Ogohlantiruvchi belgilar', icon: AlertTriangle },
    { id: 6, name: 'Imtiyoz belgilari', icon: Award },
    { id: 7, name: 'Taqiqlovchi belgilar', icon: XCircle },
    { id: 8, name: 'Buyuruvchi belgilar', icon: CheckCircle },
    { id: 9, name: 'Axborot-kursatgich belgilari', icon: Info },
    { id: 10, name: 'Servis belgilari', icon: Wrench },
    { id: 11, name: 'Qo‘shimcha axborot belgilari', icon: Plus },
    { id: 12, name: 'Yotiq chiqiqlar', icon: ArrowUpDown },
    { id: 13, name: 'Tik chiqiqlar', icon: Activity },
    { id: 14, name: 'Svetofor ishoralari', icon: Lightbulb },
    { id: 15, name: 'Tartibga soluvchining ishoralari', icon: UserCheck },
    { id: 16, name: 'Ogohlantiruvchi va avariya ishoralari', icon: Zap },
  ]);

  handleTopicClick(topic: Topic) {
    console.log('Selected topic:', topic.name);
    // TODO: navigate to topic details
  }
}