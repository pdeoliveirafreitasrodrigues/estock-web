import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/@core/Product.model';
import { ProdutoService } from 'src/app/@core/services/produto.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.scss'],
})
export class ListarProdutosComponent implements OnInit {
  constructor(private produtoService: ProdutoService) {}

  public produtos: ProductModel[] = [];

  ngOnInit(): void {
    this.produtoService.listAll().subscribe((produtos) => {
      this.produtos = produtos;
      console.log(produtos);
    });
  }
  onEdit(id: any){
    
  }
}
