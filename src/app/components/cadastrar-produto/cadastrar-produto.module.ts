import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceModule } from 'src/app/@core/services/service.module';
import { CadastrarProdutoComponent } from './cadastrar-produto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CadastrarRoutingModule } from './cadastrar-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    CadastrarProdutoComponent
  ],
  imports: [
    CommonModule,
    CadastrarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ServiceModule
  ]
})
export class CadastrarProdutoModule { }
