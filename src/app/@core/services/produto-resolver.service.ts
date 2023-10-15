import { ProdutoService } from 'src/app/@core/services/produto.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EMPTY } from 'rxjs';
import { ProductModel } from '../Product.model';



@Injectable({
  providedIn: 'root'
})
export class ProdutoResolverService implements Resolve<ProductModel> {

  constructor(private produtoService: ProdutoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const id = route.params["id"];
    if(id){
      return this.produtoService.findById(id);
    }
    return EMPTY;
  }
}
