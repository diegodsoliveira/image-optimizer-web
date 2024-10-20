import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MenuSidebarList } from '../../../../types/menu-sidebar-list';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Input({ required: true }) menuList: MenuSidebarList = [];
}
