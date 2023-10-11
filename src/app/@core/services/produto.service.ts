import { Injectable } from '@angular/core';
import { UrlBack } from './urlEnum';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../Product.model';

@Injectable({
  providedIn: 'root'
})

// Faz referência à controller 
export class ProdutoService {
  private urlBase = UrlBack.BASE_TEST + '/api/products';
  //private urlBase = UrlBack.BASE_RAILWAY + '/api/products';

  constructor(private http: HttpClient) { }


  //Primeiro COnsumo de Endpoint
  public listAll(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.urlBase + '/listAll');
  }

  public create(body: ProductModel): Observable<number>{
    return this.http.post<number>(this.urlBase, body)
  } 

}
