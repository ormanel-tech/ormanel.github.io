import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServicesCardDetailsComponent } from './services-card-details/services-card-details.component';
import { FooterComponent } from './footer/footer.component';
import { StaffCardDetailsComponent } from './staff-card-details/staff-card-details.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ServicesSessionComponent } from './services-session/services-session.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { StaffSectionComponent } from './staff-section/staff-section.component';
import { StaffProfileComponent } from './staff-profile/staff-profile.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ServicesCardDetailsComponent, FooterComponent, StaffCardDetailsComponent, PageHeaderComponent, ServicesSessionComponent, PageFooterComponent, StaffSectionComponent, StaffProfileComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
