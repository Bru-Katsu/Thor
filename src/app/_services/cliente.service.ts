import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../_models/cliente.model';
import { ROUTE } from '../shared/app.route';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  public getAllCliente(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${ROUTE}/cliente`)
  }
  
  public getClienteByName(texto: string): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${ROUTE}/cliente/getbyname/${texto}`)
  }

  public postCliente(obj: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${ROUTE}/cliente`,obj)
  }

  public putCliente(obj: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${ROUTE}/cliente/${obj.id}`,obj)
  }
}
