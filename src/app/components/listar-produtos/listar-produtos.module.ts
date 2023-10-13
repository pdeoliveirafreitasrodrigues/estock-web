import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceModule } from 'src/app/@core/services/service.module';
import { HttpClientModule } from '@angular/common/http';
import { ListarRoutingModule } from './listar-rounting';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServiceModule,
    HttpClientModule,
    ListarRoutingModule
  ]
})
export class ListarProdutosModule { }
