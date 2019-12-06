
import { Cliente } from './cliente.model';
import { PedidoProduto } from './pedido-produto.model';

export class Pedido {
    id: number
    valor: number
    clienteid: number
    cliente: Cliente
    pedidoProduto: PedidoProduto[]
}
