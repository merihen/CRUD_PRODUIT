import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit.service';
@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.css']
})
export class DetailsProduitComponent implements OnInit {
  currentP= null;
  message = '';

  constructor(
    private ps: ProduitService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getProduit(this.route.snapshot.paramMap.get('id'));
  }

  getProduit(id) {
    this.ps.get(id)
      .subscribe(
        data => {
          this.currentP = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

 
  updateProduit() {
    this.ps.update(this.currentP.id, this.currentP)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'Ce produit a été bien modifié!';
        },
        error => {
          console.log(error);
        });
  }

  deleteProduit() {
    this.ps.delete(this.currentP.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/produits']);
        },
        error => {
          console.log(error);
        });
  }
}
