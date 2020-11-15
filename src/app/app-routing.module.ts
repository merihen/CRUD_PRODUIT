import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProduitComponent } from './components/add-produit/add-produit.component';
import { DetailsProduitComponent } from './components/details-produit/details-produit.component';
import { ListProduitComponent } from './components/list-produit/list-produit.component';

const routes: Routes = [
  { path: '', redirectTo: 'produits', pathMatch: 'full' },
  { path: 'produits', component: ListProduitComponent },
  { path: 'produits/:id', component: DetailsProduitComponent },
  { path: 'add', component: AddProduitComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
