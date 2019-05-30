import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from '../layout/page/page.component';
import { AboutComponent } from '../pages/about/about.component';
import { CaseTypesComponent } from '../pages/case-types/case-types.component';
import { CheckerComponent } from '../pages/checker/checker.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { ConverterComponent } from '../pages/converter/converter.component';
import { HomeComponent } from '../pages/home/home.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { ValidatorComponent } from '../pages/validator/validator.component';
import { Page } from './page.enum';

const routes: Routes = [
  {
    path: '', component: PageComponent, children: [
      { path: Page.HOME, component: HomeComponent },
      { path: Page.CASE_TYPES, component: CaseTypesComponent },
      { path: Page.CHECKER, component: CheckerComponent },
      { path: Page.VALIDATOR, component: ValidatorComponent },
      { path: Page.CONVERTER, component: ConverterComponent },
      { path: Page.ABOUT, component: AboutComponent },
      { path: Page.CONTACT, component: ContactComponent },
      { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
