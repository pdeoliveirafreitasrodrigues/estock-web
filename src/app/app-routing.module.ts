import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoResolverService } from './@core/services/produto-resolver.service';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'listar-produtos' },
  {path: 'home', loadChildren: () => import('./components/home/home.module').then((m) => m.HomeModule) },
  {path: 'cadastrar-produto', loadChildren: () => import('./components/cadastrar-produto/cadastrar-produto.module')
  .then((c) => c.CadastrarProdutoModule) },

  {path: 'editar-produto/:id', loadChildren: () => import('./components/editar-produto/editar-produto.module').then((c) => c.EditarProdutoModule),
resolve: {
  produto: ProdutoResolverService
} },
  
  {path: 'listar-produtos', loadChildren: () => import('./components/listar-produtos/listar-produtos.module')
  .then((l) => l.ListarProdutosModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
