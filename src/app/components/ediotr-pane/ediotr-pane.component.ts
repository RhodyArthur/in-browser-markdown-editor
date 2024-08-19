import { Component } from '@angular/core';
import { MarkdownService } from '../../services/markdown.service';
import { FormsModule } from '@angular/forms';
import { TogglePaneService } from '../../services/toggle-pane.service';

@Component({
  selector: 'app-ediotr-pane',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ediotr-pane.component.html',
  styleUrl: './ediotr-pane.component.css'
})
export class EdiotrPaneComponent {

  textToConvert:string = ''
  htmlContent:string = ''

  constructor (private markdown: MarkdownService,
               public togglePaneService: TogglePaneService
  ) {}

// toggle markdown and preview pane
  showCurrentPane() {
    this.togglePaneService.togglePane();
  }

  async onInputChange() {
    try {
      this.htmlContent = await this.markdown.convertToHTML(this.textToConvert);
      console.log(this.htmlContent)
    } catch (error) {
      console.error('Error loading HTML content:', error);
    }
  }
}
