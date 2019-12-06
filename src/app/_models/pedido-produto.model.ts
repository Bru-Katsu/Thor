import { Pedido } from './pedido.model';
import { Produto } from './produto.model';

export class PedidoProduto {
    public produtoId: number
    public produto: Produto
    public pedidoid: number
    public pedido: Pedido
}
