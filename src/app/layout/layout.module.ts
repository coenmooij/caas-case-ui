import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoutingModule } from '../routing/routing.module';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PageComponent } from './page/page.component';

const COMPONENTS = [
  BodyComponent,
  FooterComponent,
  HeaderComponent,
  PageComponent
];

@NgModule({
  imports: [
    CommonModule,
    RoutingModule
  ],
  declarations: COMPONENTS
})
export class LayoutModule {
}
