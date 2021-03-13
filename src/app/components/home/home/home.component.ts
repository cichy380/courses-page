import {Component} from '@angular/core';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public navItems: { label: string, anchor: string }[] = [
    {label: 'O nas', anchor: 'onas'},
    {label: 'Szkolenia', anchor: 'szkolenia'},
    {label: 'Kontakt', anchor: 'kontakt'},
  ];

  constructor(private viewportScroller: ViewportScroller) {
  }

  public onClickNavItem(anchor: string): void {
    this.viewportScroller.scrollToAnchor(anchor);
  }
}
