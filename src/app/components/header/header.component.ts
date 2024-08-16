import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Data } from '../../interface/data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isActive: boolean = false;
  showModal: boolean = false;
  data: Data[] = [];

  constructor(private dataService: DataService) {}

  toggleSideBar() {
    this.isActive = !this.isActive;
  }

  // collapse sidebar
  hideSidebar(){
    this.isActive = false;
  }

  // clear trash
  showDeleteModal(){
    this.showModal = !this.showModal;
  }

  // fetched data
  fetchData(){
    this.dataService.getData()
    .subscribe(data => {
      this.data = data
      console.log(data)
    });
  }
}
