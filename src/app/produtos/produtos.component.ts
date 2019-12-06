import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../_services/produto.service';
import { Produto } from '../_models/produto.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import * as $ from 'jquery'
import { Pedido } from '../_models/pedido.model';
declare var $: any

@Component({
  selector: 'thor-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.sass']
})
export class ProdutosComponent implements OnInit {

  constructor(private produtosService: ProdutoService, private fb: FormBuilder) { }

  public registerForm: FormGroup
  public _produtos: Produto[]
  public _produto: Produto
  public _produtosSearch: Produto[]
  public ehPost: boolean

  ngOnInit() {
    this.getProdutos()
    this.validation()
  }

  public getProdutos(): void{
    this.produtosService.getAllProduto().subscribe(
      (produtos: Produto[]) =>{
        this._produtos = produtos
    }, error => {
      alert(`500 ${error}`)
    })
  }

  public PesquisaProduto(texto: string): void{
    if(texto.trim() != ""){
      this.produtosService.getProdutoByDesc(texto).subscribe(
        (produtos: Produto[]) =>{
          this._produtosSearch = produtos
        }, error => {
          alert(`500 ${error}`)
        }
      )
    }else{
      this._produtosSearch = undefined
    }
  }

  public validation(): void{
    this.registerForm =  this.fb.group({
      descricao: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      valorCPA: [0, [Validators.required, Validators.min(0)]],
      valorVDA: [0, [Validators.required, Validators.min(0)]],
      qtdEstoque: [0, [Validators.required, Validators.min(1)]],
      imgURL: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(200)]]
    })
  }

  public salvarAlteracoes(): void{

  }

  public editarCliente(produto: Produto, template: any): void{
    this.ehPost = false
    this.abreModal()
    this._produto = produto
    this.registerForm.patchValue(produto)
  }

  public novoCliente(template: any): void{
    this.ehPost = true
    this.abreModal()
  }

  public abreModal(): void{
    $('#ModalProduto').modal()
    this.registerForm.reset()
  }
}
