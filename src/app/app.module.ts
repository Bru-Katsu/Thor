import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CardDefaultComponent } from './produtos/card-default/card-default.component';
import { CardListaComponent } from './produtos/card-lista/card-lista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PainelComponent } from './painel/painel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientesListaComponent } from './clientes/clientes-lista/clientes-lista.component';
import { NovoClienteComponent } from './clientes/novo-cliente/novo-cliente.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ProdutoEditarComponent } from './produto-editar/produto-editar.component';
import { ProdutoNovoComponent } from './produto-novo/produto-novo.component';

@NgModule({
   declarations: [
      AppComponent,
      DashboardComponent,
      PedidosComponent,
      ProdutosComponent,
      CardDefaultComponent,
      CardListaComponent,
      PainelComponent,
      NavbarComponent,
      ClientesListaComponent,
      NovoClienteComponent,
      ProdutoDetalheComponent,
      ProdutoEditarComponent,
      ProdutoNovoComponent,
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      AppRoutingModule,
      FontAwesomeModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
