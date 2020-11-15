import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {
  produits: any;
  currentP = null;
  currentIndex = -1;
  designation = '';
  constructor( private ps: ProduitService) { }

  ngOnInit(): void {
    this.retrieveProduits();
  }
  retrieveProduits() {
    this.ps.getAll()
      .subscribe(
        data => {
          this.produits = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveProduits();
    this.currentP = null;
    this.currentIndex = -1;
  }

  setActiveProduit(produit, index) {
    this.currentP = produit;
    this.currentIndex = index;
  }

  removeAllProduits() {
    this.ps.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveProduits();
        },
        error => {
          console.log(error);
        });
  }

  searchDesignation() {
    this.ps.findByDesignation(this.designation)
      .subscribe(
        data => {
          this.produits = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
