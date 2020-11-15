import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProduitComponent } from './components/add-produit/add-produit.component';
import { DetailsProduitComponent } from './components/details-produit/details-produit.component';
import { ListProduitComponent } from './components/list-produit/list-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProduitComponent,
    DetailsProduitComponent,
    ListProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
