import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';

import { MatToolbarModule } from '@angular/material/toolbar'

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { ListarProdutosComponent } from './components/listar-produtos/listar-produtos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    HomeComponent,
    ListarProdutosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MaterialImportsModule,

    HttpClientModule
  ],
  providers: [
 
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
