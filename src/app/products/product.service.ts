import { Injectable } from '@angular/core';
import { observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [
    {
      id: 1,
      productType: 1,
      name: 'Novelty T',
      customFields: []
    },
    {
      id: 2,
      productType: 2,
      name: 'Coffee Mug',
      customFields: [
        { label: 'Inscription', fieldName: 'Inscription'}
      ]
    },
    {
      id: 3,
      productType: 2,
      name: 'Dog Tag',
      customFields: [
        { label: 'Front Engraving', fieldName: 'front'},
        { label: 'Back Engraving', fieldName: 'back'}
      ]
    }
  ]

  constructor() { }

  getProducts() {
    return of(this.products);
  }

  getProductById(pid) {
    return this.products.find(product => product.id == pid);
  }

}
