import { Component } from '@angular/core';
import { Page } from '../../routing/page.enum';

@Component({
  selector: 'app-tools',
  templateUrl: 'tools.component.html'
})
export class ToolsComponent {
  tools = [
    { title: 'Checker', route: `/${Page.CHECKER}` },
    { title: 'Validator', route: `/${Page.VALIDATOR}` },
    { title: 'Converter', route: `/${Page.CONVERTER}` }
  ];
}
