import { Component } from '@angular/core';
import { Page } from '../../routing/page.enum';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  caseTypesRoute = `/${Page.CASE_TYPES}`;
  checkerRoute = `/${Page.CHECKER}`;
  validatorRoute = `/${Page.VALIDATOR}`;
  converterRoute = `/${Page.CONVERTER}`;
}
