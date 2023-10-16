import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/@core/Product.model';
import { ProdutoService } from 'src/app/@core/services/produto.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.scss']
})
export class EditarProdutoComponent implements OnInit {
  public formularioProduto!: FormGroup;
  public produto: ProductModel | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createForm();

    // Obtém o ID do produto da rota
    const produtoId = this.activatedRoute.snapshot.params['id'];

    // Use o serviço ProdutoService para carregar os dados do produto pelo ID
    this.produtoService.findById(produtoId).subscribe(
      (produto) => {
        this.produto = produto; // Defina a variável produto com os dados carregados
        this.formularioProduto.patchValue({
          id: produto.id,
          code: produto.code,
          description: produto.description,
          costPrice: produto.costPrice,
        });
      },
      (error) => {
        console.error('Erro ao carregar o produto:', error);
      }
    );
  }

  private createForm() {
    this.formularioProduto = this.formBuilder.group({
      code: [this.produto?.code || ''],
      description: [this.produto?.description || ''],
      costPrice: [this.produto?.costPrice || 0],
    });
  }

  cancelarOperacao(){
    this.router.navigateByUrl('/listar-produtos');
  }

  atualizarProduto() {
    if (this.formularioProduto.valid) {
      if (this.produto) {
        const produtoAtualizado: ProductModel = {
          id: this.produto.id,
          code: this.formularioProduto.value.code,
          description: this.formularioProduto.value.description,
          costPrice: this.formularioProduto.value.costPrice,
        };
  
        this.produtoService.update(produtoAtualizado).subscribe(
          (produto) => {
            this.router.navigateByUrl('/listar-produtos');
          },
          (error) => {
            console.error('Erro ao atualizar o produto:', error);
            // Adicione este código para obter mais informações sobre a resposta do servidor
            console.log('Resposta do servidor:', error);
          }
        );
      } else {
        console.error('Produto não encontrado ou indefinido');
      }
    }
  }
  
}
