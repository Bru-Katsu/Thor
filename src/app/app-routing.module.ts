import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ClientesListaComponent } from './clientes/clientes-lista/clientes-lista.component';
import { NovoClienteComponent } from './clientes/novo-cliente/novo-cliente.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ProdutoNovoComponent } from './produto-novo/produto-novo.component';

const routes: Routes = [
  { path:'', component: ProdutosComponent },
  { path:'dashboard', component: DashboardComponent },
  { path:'clientes', component: ClientesListaComponent},
  { path:'novo-cliente', component: NovoClienteComponent},
  { path:'pedidos', component: PedidosComponent },
  { path:'produtos', component: ProdutosComponent},
  { path:'produtos/editar/:id', component: ProdutoDetalheComponent},
  { path:'produtos/novo-produto', component: ProdutoNovoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
