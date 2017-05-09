import { Component , OnInit, Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
 domain="";
  constructor(@Inject(DOCUMENT) private document: any) { }

    ngOnInit() {
        this.domain = this.document.location.hostname;
        console.log(this.domain);
    }
}
