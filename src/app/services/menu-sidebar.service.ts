import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuSidebarList } from '../../types/menu-sidebar-list';

@Injectable({
  providedIn: 'root',
})
export class MenuSidebarService {
  private readonly menuSidebarList: MenuSidebarList = [
    { iconName: 'home', name: 'Home' },
    { iconName: 'person', name: 'Detalhes da conta' },
    { iconName: 'attach_money', name: 'Pagamentos' },
  ];

  getMenuSidebarList(): Observable<MenuSidebarList> {
    return new Observable<MenuSidebarList>((observer) => {
      setTimeout(() => {
        observer.next(this.menuSidebarList);
      }, 2);
    });
  }
}
