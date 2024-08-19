import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TogglePaneService {

  showPane: boolean = true;
  constructor() { }

  togglePane() {
    this.showPane = !this.showPane;
  }
}
