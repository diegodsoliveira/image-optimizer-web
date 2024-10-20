import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { take } from 'rxjs';
import { MenuSidebarList } from '../../../types/menu-sidebar-list';
import { MenuSidebarService } from '../../services/menu-sidebar.service';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  menuList: MenuSidebarList = [];

  constructor(private readonly _menuSidebarService: MenuSidebarService) {}

  ngOnInit() {
    this._menuSidebarService
      .getMenuSidebarList()
      .pipe(take(1))
      .subscribe((list) => (this.menuList = list));
  }
}
