import { Component } from '@angular/core';
import { Page } from '../../routing/page.enum';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  pages = [
    { title: 'Case Types', route: `/${Page.CASE_TYPES}` },
    { title: 'Checker', route: `/${Page.CHECKER}` },
    { title: 'Validator', route: `/${Page.VALIDATOR}` },
    { title: 'Converter', route: `/${Page.CONVERTER}` },
    { title: 'About', route: `/${Page.ABOUT}` },
    { title: 'Contact', route: `/${Page.CONTACT}` }
  ];

  mobileNavigationActive = false;

  onMenuClick(): void {
    this.mobileNavigationActive = !this.mobileNavigationActive;
  }

  onNavigate(): void {
    this.mobileNavigationActive = false;
  }
}
