import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProdutosComponent} from './listar-produtos.component';

const routes: Routes = [
  {path: '', component: ListarProdutosComponent},
];

@NgModule({
  
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ListarRoutingModule { }
