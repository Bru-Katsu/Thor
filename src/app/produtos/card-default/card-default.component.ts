import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'src/app/_models/produto.model';

@Component({
  selector: 'thor-card-default',
  templateUrl: './card-default.component.html',
  styleUrls: ['./card-default.component.sass']
})
export class CardDefaultComponent implements OnInit {
  @Input() _produtos: Produto[]
  constructor() { }

  ngOnInit() {
  }

}
