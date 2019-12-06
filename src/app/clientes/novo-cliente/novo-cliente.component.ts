import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/_models/cliente.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ClienteService } from 'src/app/_services/cliente.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CriaClienteCommandResult } from 'src/app/_commands/cliente/CriaClienteCommandResult.model';
import { CommandNotification } from 'src/app/_commands/commandNotification.model';
import { CommandResult } from 'src/app/_commands/commandResult.model.ts';

@Component({
  selector: 'thor-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.sass']
})
export class NovoClienteComponent implements OnInit {

  constructor(private clienteService: ClienteService, private fb: FormBuilder) { }
  faSearch = faSearch;
  public registerForm: FormGroup
  public _clientesSearch: Cliente[]
  public _clientes: Cliente[]
  public _error: any
  public _commandNotification: CommandResult
  //public _commandClienteResult: CommandResult<CriaClienteCommandResult[]> 
 // = new CommandResult<CriaClienteCommandResult[]>(false,"",new Array<CriaClienteCommandResult>())//Object.assign()
  
  public ehPost: boolean = true;
  public cliente: Cliente
  
  ngOnInit() {
    this.validation()
    this.init()
  }
  private init(): void{
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
  private validation(): void{
    this.registerForm =  this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
      sobrenome: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
      documento: ['',[Validators.required, Validators.minLength(8)]],
      telefone: [''],
      email: ['',[Validators.email]]
    })
  }
  public salvarAlteracoes(): void{
    if(this.registerForm.valid){
      if(this.ehPost){
        this.cliente = Object.assign({}, this.registerForm.value)
        this.clienteService.postCliente(this.cliente).subscribe(
          (retorno) => 
          {
            this.registerForm.reset()
            console.log(retorno)
          }, erro => {

            if(erro.status == 400)
              this._commandNotification = erro.error.data 
            
            console.log(this._commandNotification[0].property)
          }
        )
      }else{
        this.cliente = Object.assign({id: this.cliente.id}, this.registerForm.value)
        console.log(this.cliente)
        this.clienteService.putCliente(this.cliente).subscribe(
          () => {
            this.getClientes()
          }, error => {
            console.log(error)
          }
        )
      }
    }
  }
  
  public editarCliente(cliente: Cliente, template: any){
    this.ehPost = false
    this.abreModal()
    this.cliente = cliente
    this.registerForm.patchValue(cliente)
  }
  public novoCliente(template: any){
    this.ehPost = true
    this.abreModal()
  }
  public abreModal(): void{
    this.registerForm.reset()
  }
}
