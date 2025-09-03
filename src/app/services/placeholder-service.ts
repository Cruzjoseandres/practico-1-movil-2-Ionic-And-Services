import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {
  private _http = inject(HttpClient);
  private baseUrl = 'https://fakestoreapi.com'


  getCategories<T>(): Observable<T[]> {
    return this._http.get<T[]>(`${this.baseUrl}/products/categories`);
  }

  getAllProducts<T>(): Observable<T[]> {
    return this._http.get<T[]>(`${this.baseUrl}/products`);
  }

  getProductsByCategory<T>(category: string): Observable<T[]> {
    return this._http.get<T[]>(`${this.baseUrl}/products/category/${category}`);
  }

  getProductById<T>(id: string): Observable<T> {
    return this._http.get<T>(`${this.baseUrl}/products/${id}`);
  }
}
