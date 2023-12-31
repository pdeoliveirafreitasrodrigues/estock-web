import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ServiceModule } from 'src/app/@core/services/service.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ServiceModule,
    HttpClientModule
  ]
})
export class HomeModule { }
