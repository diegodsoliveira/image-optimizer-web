import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FileUploadComponent } from '../../layout/file-upload/file-upload.component';
import { MenuComponent } from '../../layout/sidebar/menu/menu.component';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { ToolBarComponent } from '../../layout/tool-bar/tool-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MenuComponent,
    SidebarComponent,
    FileUploadComponent,
    MatToolbarModule,
    ToolBarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
