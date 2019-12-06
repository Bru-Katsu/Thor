import { Component, OnInit } from '@angular/core';
import { Produto } from '../_models/produto.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'thor-produto-novo',
  templateUrl: './produto-novo.component.html',
  styleUrls: ['./produto-novo.component.sass']
})
export class ProdutoNovoComponent implements OnInit {

  public _produto: Produto
  public _ProdutoForm: FormGroup

  constructor(private _FormBuilder: FormBuilder) { }

  ngOnInit() {
    this.validation()
  }

  private validation(){
    this._ProdutoForm = this._FormBuilder.group({
      titulo: ['', []],
      descricao:['', []],
      sku: ['', []],
      valorVDA: ['', []],
      valorCPA: ['', []]
    })
  }
}
