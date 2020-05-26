import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CapitalizarPipe } from './pipes/capitalizar.pipe';
import { FormatoProductoComponent } from './components/formato-producto/formato-producto.component';
import { SearchCatComponent } from './components/search-cat/search-cat.component';
import { LoadingComponent } from './shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    DetalleProductoComponent,
    NavbarComponent,
    FooterComponent,
    CapitalizarPipe,
    FormatoProductoComponent,
    SearchCatComponent,
    LoadingComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
