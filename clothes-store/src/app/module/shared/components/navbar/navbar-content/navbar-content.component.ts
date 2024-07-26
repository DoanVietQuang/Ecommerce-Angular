import { Component, Input } from '@angular/core';
import { navigationData } from './nav-content';
@Component({
  selector: 'app-navbar-content',
  templateUrl: './navbar-content.component.html',
  styleUrls: ['./navbar-content.component.scss'],
})
export class NavbarContentComponent {
  category: any;
  @Input() selectedSection: any;

  ngOnInit() {
    this.category = navigationData;
    console.log('selected ', this.selectedSection);
  }
}
