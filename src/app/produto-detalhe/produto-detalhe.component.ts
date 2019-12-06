import { Component, OnInit } from '@angular/core';
import { Produto } from '../_models/produto.model';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../_services/produto.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'thor-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.sass']
})
export class ProdutoDetalheComponent implements OnInit {

  public _produto: Produto
  public _ProdutoForm: FormGroup 
  public bError: boolean = false
  public bEditMode: boolean = false

  constructor(private _route: ActivatedRoute
            , private _ProdutoService: ProdutoService
            , private _FormBuilder: FormBuilder) { }

  ngOnInit() {
    var id = this._route.snapshot.paramMap.get('id')
    this.GetProduto(id)
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

  private Delete(){
    
  }

  private Save(){
    this._ProdutoService.putProduto(this._produto).subscribe(
      (data: any) =>{

      },
      (error: any) =>{
        this.ShowErrorMessage(error)
      }
    )
  }

  private GetProduto(guid: string): void{
    this._ProdutoService.getProdutoByID(guid).subscribe(
      (data: any) => {
        this._produto = data
        this.LoadDataFields()
      },
      (error: any) => {
        this.ShowErrorMessage(error)
      }
    )
  }

  private LoadDataFields(): void{
    if(this._produto != undefined && !this.bError){
      var teste: any = {
        titulo: this._produto.titulo,
        descricao: this._produto.descricao,
        sku: this._produto.estoque.sku,
        valorVDA: this._produto.valorVDA,
        valorCPA: this._produto.valorCPA
      }
      this._ProdutoForm.patchValue(teste)
    }
  }

  private ShowErrorMessage(error: any): void{
    console.log(error)
  }
}
