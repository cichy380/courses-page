import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { GameComponent } from './components/game/game.component';
import { CoverComponent } from './components/cover/cover.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ContactComponent } from './components/contact/contact.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFirstAppComponent } from './components/courses/components/angular-first-app/angular-first-app.component';
import { HomeComponent } from './components/home/home/home.component';
import { DialogInfoComponent } from './components/dialog-info/dialog-info.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    CoverComponent,
    AboutComponent,
    ServicesComponent,
    CoursesComponent,
    ContactComponent,
    AngularFirstAppComponent,
    HomeComponent,
    DialogInfoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
