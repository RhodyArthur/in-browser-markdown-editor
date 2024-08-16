import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isActive: boolean = false;

  toggleSideBar() {
    this.isActive = !this.isActive;
  }

  hideSidebar(){
    this.isActive = false;
  }
}
