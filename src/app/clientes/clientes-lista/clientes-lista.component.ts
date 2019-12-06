import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../_services/cliente.service'
import { Cliente } from '../../_models/cliente.model'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

declare var $: any
import * as $ from 'jquery'

@Component({
  selector: 'thor-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.sass']
})
export class ClientesListaComponent implements OnInit {
  constructor(private clienteService: ClienteService) { }
  faSearch = faSearch;
  public _clientes: Cliente[]
  public ehPost: boolean
  public _clientesSearch: Cliente[]
  public cliente: Cliente
  public _error: any

  ngOnInit() {
    this.getClientes()
  }
  
  private getClientes(): void{
    this.clienteService.getAllCliente().subscribe(
      (clientes: Cliente[]) =>{
        this._clientes = clientes
      }, error => {
        this._error = error
        alert(`500 ${error}`)
      }
    )
  }

  private PesquisaCliente(texto: string): void{
    if(texto.trim() != ""){
      this.clienteService.getClienteByName(texto).subscribe(
        (clientes: Cliente[]) => {
          this._clientesSearch = clientes
        }, error => {
          this._error = error
          $('.toast').toast()
        }
      )
    }else{
      this._clientesSearch = undefined
    }
  }

}
