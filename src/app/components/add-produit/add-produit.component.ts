import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  produit = {
    designation: '',
    prix:  0 ,
    qte: 0,
    published : false 
  };
  submitted = false;
  constructor( private ps: ProduitService ) { }

  ngOnInit(): void {
  }
  
  saveProduit() {
    const data = {
      designation: this.produit.designation,
      prix: this.produit.prix , qte: this.produit.qte 
    };

    this.ps.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newProduit() {
    this.submitted = false;
    this.produit = {
      designation: '',
      prix: 0,
      qte:0 ,
      published: false
    };
  }

}
