import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditarProdutoRoutingModule } from './editar-produto-routing.module';
import { EditarProdutoComponent } from './editar-produto.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ServiceModule } from 'src/app/@core/services/service.module';

import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    EditarProdutoComponent
  ],
  imports: [
    CommonModule,
    EditarProdutoRoutingModule,
    ReactiveFormsModule,
    ServiceModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class EditarProdutoModule { }
