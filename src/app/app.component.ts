import {Component, HostListener} from '@angular/core';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  primary = 'red';
  color: string;
  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    const numbers = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (numbers < 100) {
      this.color = "";
     // this.opacity = 1;
    } else if (numbers > 100) {
      this.color = "rgba(13, 13, 13, .3)";
    //  this.opacity = 0.5;
    }
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior:"smooth"});
  }

}
