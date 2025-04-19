import { Component } from '@angular/core';
import { navbarData } from './nav-data';
@Component({
  selector: 'app-sidenav',
  imports: [CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent {
  collapsed = false;
  navData = navbarData;
}
