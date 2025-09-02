import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceholderService } from '../services/placeholder-service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class ListProductsComponent implements OnInit {
  
  private routerActive = inject(ActivatedRoute);
  private PlaceholderService = inject(PlaceholderService);
  products: Product[] = [];

  ngOnInit() {
    let category = this.routerActive.snapshot.paramMap.get('category') ?? "";
      this.PlaceholderService.getProductsByCategory<Product>(category)
      .subscribe(response => {
        this.products = response;
        console.log(this.products);
      });
  }

  
}
