import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/@core/Product.model';
import { ProdutoService } from 'src/app/@core/services/produto.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.scss'],
})
export class ListarProdutosComponent implements OnInit {



  private atualizarListaDeProdutos() {
    this.produtoService.listAll().subscribe((produtos) => {
      this.produtos = produtos;
      console.log('Lista de produtos atualizada:', produtos);
    });
  }
  

excluir(id: number) {
  this.produtoService.deleteById(id).subscribe(
    () => {
      // Por exemplo, você pode atualizar a lista de produtos após a exclusão.
      this.atualizarListaDeProdutos();
    },
    (error) => {
      // Trate erros aqui, se necessário.
      console.error('Erro ao excluir produto:', error);
    }
  );
}

  constructor(private produtoService: ProdutoService, private router: Router) {}

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
