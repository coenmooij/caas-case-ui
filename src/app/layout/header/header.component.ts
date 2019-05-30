import { Component } from '@angular/core';
import { Page } from '../../routing/page.enum';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  pages = [
    { title: 'Home', route: `/${Page.HOME}` },
    { title: 'Case Types', route: `/${Page.CASE_TYPES}` },
    {
      title: 'Tools', route: `/${Page.TOOLS}`, children: [
        { title: 'Checker', route: `/${Page.CHECKER}` },
        { title: 'Validator', route: `/${Page.VALIDATOR}` },
        { title: 'Converter', route: `/${Page.CONVERTER}` }
      ]
    },
    { title: 'About', route: `/${Page.ABOUT}` },
    { title: 'Contact', route: `/${Page.CONTACT}` }
  ];
}
