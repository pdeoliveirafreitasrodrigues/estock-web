import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarProdutoComponent } from './editar-produto.component';

const routes: Routes = [
  {path: '', component: EditarProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarProdutoRoutingModule { }
