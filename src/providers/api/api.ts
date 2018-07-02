import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiProvider {

  private apiUrl = 'http://localhost:8000/';

  constructor(public http: HttpClient) {    
  }

  getArticulos() {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    let url = this.apiUrl + "api/articulos";
    return this.http.get(url, {headers : header});
  }

  getCompanias() {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    let url = this.apiUrl + "api/companias";
    return this.http.get(url,  { headers: header });
  }

  getListaArticulos(compania) {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    let url = this.apiUrl + "api/articulosByCompanias/" + compania;
    return this.http.get(url, { headers: header });
  }

  postArticulo(nombre, precio, codigo, compania){
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    let url = this.apiUrl + "api/articulos";
    return this.http.post(url,{nombre: nombre, compania: compania, codigo: codigo, precio: precio},{headers:header});
  }

  postCompania(nombre) {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    let url = this.apiUrl + "api/companias";
    return this.http.post(url, { nombre: nombre }, { headers: header });
  }

  putArticulo(id, nombre, precio, codigo, compania) {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    let url = this.apiUrl + "api/articulos/" + id;
    console.log(url);
    return this.http.put(url, { nombre: nombre, compania: compania, codigo: codigo, precio: precio }, { headers: header });
  }

  putCompania(id, nombre) {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    let url = this.apiUrl + "api/companias/" + id;
    console.log(url);
    return this.http.put(url, { nombre: nombre}, { headers: header });
  }

  deleteArticulo(id) {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    let url = this.apiUrl + "api/articulos/" + id;
    console.log(url);
    return this.http.delete(url, { headers: header });
  }

  deleteCompania(id) {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    let url = this.apiUrl + "api/companias/" + id;
    console.log(url);
    return this.http.delete(url, { headers: header });
  }
  
}
