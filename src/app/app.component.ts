import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { EdiotrPaneComponent } from "./components/ediotr-pane/ediotr-pane.component";
import { PreviewPaneComponent } from "./components/preview-pane/preview-pane.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, EdiotrPaneComponent, PreviewPaneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'markdown';

}
