import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule 
  ]
})
export class HomePage {
  title: string = 'Bamboo & Cane Furniture Shop';
  tagline: string = 'Discover Natural Elegance';

  featuredProducts = [
    { id: 1, name: 'Eco Bamboo Chair', image: 'assets/images/chair.jpg', price: 120 },
    { id: 2, name: 'Handcrafted Cane Sofa', image: 'assets/images/sofa.jpg', price: 450 },
    { id: 3, name: 'Rustic Bamboo Table', image: 'assets/images/table.jpg', price: 300 }
  ];
}
