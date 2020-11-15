import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/produits';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient ) {}

  getAll() {
    return this.http.get(baseUrl);
  }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data) {
    return this.http.post(baseUrl, data);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByDesignation(designation) {
    return this.http.get(`${baseUrl}?designation=${designation}`);
  }
}
