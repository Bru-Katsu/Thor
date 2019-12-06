import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../_models/pedido.model';
import { ROUTE } from '../shared/app.route'

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  public getAllPedido(): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(`${ROUTE}/pedido`)
  }


}
