import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/core'

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  constructor (
  ){}

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You Will be notified when the product goes on sale')
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/