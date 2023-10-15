import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarProdutoRoutingModule } from './editar-produto-routing.module';
import { EditarProdutoComponent } from './editar-produto.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ServiceModule } from 'src/app/@core/services/service.module';


@NgModule({
  declarations: [
    EditarProdutoComponent
  ],
  imports: [
    CommonModule,
    EditarProdutoRoutingModule,
    ReactiveFormsModule,
    ServiceModule
  ]
})
export class EditarProdutoModule { }
