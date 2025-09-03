import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceholderService } from '../services/placeholder-service';
import { Product } from '../models/product.model';
import { IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonLabel, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrls: ['./detail-products.component.scss'],
  standalone: true,
  imports: [IonItem, IonBackButton, IonButtons, IonTitle, IonToolbar, IonHeader, IonImg, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCard, IonContent, CommonModule, IonLabel],
})
export class DetailProductsComponent implements OnInit {
  private routerActivated = inject(ActivatedRoute);
  private PlaceholderService = inject(PlaceholderService);
  product : Product | null = null;

  ngOnInit() {
    let id = this.routerActivated.snapshot.paramMap.get('id') ?? "";
    console.log(id);
    this.PlaceholderService.getProductById<Product>(id)
    .subscribe((response : Product) => {
      this.product = response;
      console.log(this.product);
    });
  }
}
