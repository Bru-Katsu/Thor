import { Component, OnInit } from '@angular/core';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell, faChartBar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'thor-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  faSearch = faSearch;
  faBars = faBars;
  faBell = faBell;

  constructor() { }

  ngOnInit() {
  }

}
