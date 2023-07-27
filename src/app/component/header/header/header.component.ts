import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  navg: { 'background-color'?: string } = {};
  constructor() {}

  @HostListener('document:scroll')
  scrollOver() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navg = {
        'background-color': 'black',
      };
    } else {
      this.navg = {};
    }
    console.log(document.body.scrollTop, 'scrolllength#');
  }
}
