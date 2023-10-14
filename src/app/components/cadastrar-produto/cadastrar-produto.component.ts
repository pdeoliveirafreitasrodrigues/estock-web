import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductModel } from 'src/app/@core/Product.model';
import { ProdutoService } from 'src/app/@core/services/produto.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss']
})
export class CadastrarProdutoComponent implements OnInit {
  public listaDeProdutos: ProductModel[] = [];
  public formularioProduto!: FormGroup;
  constructor(private formBuilder: FormBuilder, private produtoService: ProdutoService) { }

  ngOnInit(): void {
    // Chamar a função para executar
    this.createForm()
  }

  public salvarProduto(){
    const jsonPronto = this.formularioProduto.value;
    this.produtoService.create(jsonPronto).subscribe(e => console.log(e))
  }


  // Começa o fomulario dentro do typescript
  // Criar (constroi) uma função que cria o formulario
  private createForm(){

    // 1- chamar o atributo do formulario
    // 2- construir os atributos do formulario
    this.formularioProduto = this.formBuilder.group({
      // inputs(atributos) do nosso formulario
      code: '',
      description: '',
      costPrice: 0,
    })

    // 3 - Criar no html o formulario
  }
}
