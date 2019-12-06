import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../_models/produto.model';
import { ROUTE } from '../shared/app.route'


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  public getProdutoByID(guid: string): Observable<Produto>{
    return this.http.get<Produto>(`${ROUTE}/produto/${guid}`)
  }
  public getAllProduto(): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${ROUTE}/produto`)
  }
  public getProdutoByDesc(texto: string): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${ROUTE}/produto/getbydesc/${texto}`)
  }
  public putProduto(produto: Produto){
    return this.http.put<Produto>(`${ROUTE}/produto`, produto)
  }
}
