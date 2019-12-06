import { PedidoProduto } from './pedido-produto.model';
import { Fornecedor } from './fornecedor.model';
import { Estoque } from './estoque.model';

export class Produto{
    public id: string
    public titulo : string
    public descricao: string
    public imagem: string
    public valorCPA: number
    public valorVDA: number
    public estoque: Estoque
    public fornecedores : Fornecedor[]
} 

