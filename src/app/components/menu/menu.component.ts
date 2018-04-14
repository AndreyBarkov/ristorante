import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from '../../services/menu-service.service';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: Menu[];

  constructor(private menuService: MenuServiceService) { }

  ngOnInit() {
    this.menuService.getMenu().subscribe(menu => this.menu = menu);
  }

}
