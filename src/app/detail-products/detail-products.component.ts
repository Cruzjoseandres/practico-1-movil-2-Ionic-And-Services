import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceholderService } from '../services/placeholder-service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrls: ['./detail-products.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class DetailProductsComponent implements OnInit {
  private routerActivated = inject(ActivatedRoute);
  private PlaceholderService = inject(PlaceholderService);
  private product : Product | null = null;

  ngOnInit() {
    let id = this.routerActivated.snapshot.paramMap.get('id') ?? "";
    console.log(id);
    this.PlaceholderService.getProductById<Product>(id)
    .subscribe((response : Product) => {
      this.product = response;
    });
  }
}
