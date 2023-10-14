import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: 'home', loadChildren: () => import('./components/home/home.module').then((m) => m.HomeModule) },
  {path: 'cadastrar-produto', loadChildren: () => import('./components/cadastrar-produto/cadastrar-produto.module')
  .then((c) => c.CadastrarProdutoModule) },
  {path: 'listar-produtos', loadChildren: () => import('./components/listar-produtos/listar-produtos.module')
  .then((l) => l.ListarProdutosModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
