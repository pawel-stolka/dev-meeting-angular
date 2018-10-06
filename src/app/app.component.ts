import { Component, OnInit } from '@angular/core';
import { Product } from './models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'devmeetings-angular';
  sort = 'Products'

  products: Product[] = [
    {
      name: 'kawa',
      price: 3.50
    },
    {
      name: 'prince-polo',
      price: 7.00,
      promoted: true
    },
    {
      name: 'mandaryna',
      price: 0
    }
  ];

  promoted = this.products.filter(x => x.promoted)

}


