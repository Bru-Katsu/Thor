import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser, faChartBar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'thor-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.sass']
})
export class PainelComponent implements OnInit {
  faUser = faUser;
  faChartBar = faChartBar;

  public username: string
  constructor() {
    this.username = "Brunão Alves"
   }

  ngOnInit() {
  }

}
