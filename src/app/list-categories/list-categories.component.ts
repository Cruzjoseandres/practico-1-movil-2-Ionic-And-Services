import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceholderService } from '../services/placeholder-service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class ListCategoriesComponent implements OnInit {
  private router = inject(Router);
  private PlaceholderService = inject(PlaceholderService);
  categoriesList: string[] | null = null;




  ngOnInit() {
    this.PlaceholderService.getCategories<string>()
    .subscribe(response => {
      this.categoriesList = response;
    });
  }

  detail(category: string) {
    this.router.navigate(['products', category]);
  }
}
  

