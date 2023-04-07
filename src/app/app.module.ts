import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { AppFooterComponent } from './footer/app-footer.component';
import { MyProjectsComponent } from './main/my-projects/my-projects.component';
import { TechnicalSkillsComponent } from './main/technical-skills/technical-skills.component';
import { ResumenComponent } from './main/resumen/resumen.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AppFooterComponent,
    MyProjectsComponent,
    TechnicalSkillsComponent,
    ResumenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
