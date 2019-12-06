import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../_services/pedido.service';
import { Pedido } from '../_models/pedido.model';

@Component({
  selector: 'thor-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  public pedidos: Pedido[]
  constructor(private pedidosService: PedidoService) { }

  ngOnInit() {
    this.getPedidos()
  }

  public getPedidos(): void{
    this.pedidosService.getAllPedido().subscribe(
      (_pedidos: Pedido[]) =>{
        this.pedidos = _pedidos
    }, error => {
      alert(`500 ${error}`)
    })
  }
}
