import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';
import { PlaceholderService } from '../services/placeholder-service';
import { Product } from '../models/product.model';
import { IonHeader, IonList, IonItem, IonContent, IonLabel, IonTitle, IonButtons, IonBackButton, IonToolbar } from "@ionic/angular/standalone";


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
  standalone: true,
  imports: [ IonToolbar, IonTitle, IonLabel, IonContent , CommonModule, IonHeader, IonButtons,IonList, IonItem ,IonBackButton]
})
export class ListProductsComponent implements OnInit {

  private routerActivated = inject(ActivatedRoute);
  private router = inject(Router);
  private PlaceholderService = inject(PlaceholderService);
  products: Product[] = [];

  ngOnInit() {
    let category = this.routerActivated.snapshot.paramMap.get('category') ?? "";
      this.PlaceholderService.getProductsByCategory<Product>(category)
      .subscribe(response => {
        this.products = response;
        console.log(this.products);
      });
  }

  detail(id: number) {
    this.router.navigate(['product-detail', id]);
  }

  
}
