import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DescriptionComponent } from './components/description/description.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ProjectsComponent } from './components/projects/projects.component';
import { GitComponent } from './components/git/git.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DescriptionComponent,
    SkillsComponent,
    ProjectsComponent,
    GitComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
