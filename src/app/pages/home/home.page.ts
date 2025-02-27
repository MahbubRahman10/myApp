import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    TranslateModule,
    FormsModule 
  ]
})
export class HomePage {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en'); 
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  title: string = 'Bamboo & Cane Furniture Shop';
  tagline: string = 'Discover Natural Elegance';
  selectedLanguage = 'en';

  isFooterVisible = false;

 
  
  featuredProducts = [
    { id: 1, name: 'Eco Bamboo Chair', image: 'assets/images/2.jpg', price: 1500 },
    { id: 2, name: 'Handcrafted Cane Sofa', image: 'assets/images/3.jpg', price: 1800 },
    { id: 3, name: 'Rustic Bamboo Table', image: 'assets/images/4.jpg', price: 2300 }
  ];


  testimonials = [
    {
      name: 'Sarah W.',
      image: 'assets/images/5.jpg',
      rating: 5,
      message: 'The quality and design are exceptional. I love my new bamboo chair!'
    },
    {
      name: 'James M.',
      image: 'assets/images/5.jpg',
      rating: 4,
      message: 'Absolutely love the craftsmanship. Very durable and elegant furniture.'
    },
    {
      name: 'Emily R.',
      image: 'assets/images/5.jpg',
      rating: 5,
      message: 'Eco-friendly and stylish! Fits perfectly in my living room.'
    }
  ];

  getStars(rating: number) {
    return Array(rating).fill(0);
  }

}
