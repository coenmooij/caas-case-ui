import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { RoutingModule } from '../routing/routing.module';
import { AboutComponent } from './about/about.component';
import { CaseTypesComponent } from './case-types/case-types.component';
import { CheckerComponent } from './checker/checker.component';
import { ContactComponent } from './contact/contact.component';
import { ConverterComponent } from './converter/converter.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ValidatorComponent } from './validator/validator.component';

const PAGES = [
  AboutComponent,
  CaseTypesComponent,
  CheckerComponent,
  ContactComponent,
  ConverterComponent,
  HomeComponent,
  NotFoundComponent,
  ValidatorComponent
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RoutingModule
  ],
  declarations: PAGES,
  exports: PAGES
})
export class PagesModule {
}
