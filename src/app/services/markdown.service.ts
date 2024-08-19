import { Injectable } from '@angular/core';
import { marked } from 'marked';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {

  constructor() { }

  async convertToHTML(text:string): Promise<string> {
    try {
      return await marked(text, {async: true});
    }
    catch(error){
      console.error('Error converting to HTML', error);
      throw error;
    }
  }
}
