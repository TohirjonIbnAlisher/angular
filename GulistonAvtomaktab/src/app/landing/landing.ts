import { Component } from '@angular/core';
import { Navigation } from './navigation/navigation';
import { ContactSection } from './contact-section/contact-section';
import { FeaturesSection } from './features-section/features-section';
import { FinalCTA } from './final-cta/final-cta';
import { Footer } from './footer/footer';
import { Hero } from './hero/hero';
import { HowItWorks } from './how-it-works/how-it-works';
import { Testimonials } from './testimonials/testimonials';
import { TrustBar } from './trust-bar/trust-bar';
import { WhySection } from './why-section/why-section';

@Component({
  selector: 'app-landing',
  imports: [Navigation, ContactSection, FeaturesSection, FinalCTA, Footer, Hero, HowItWorks, Testimonials, TrustBar, WhySection],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {

}
