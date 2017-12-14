import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { EventsComponent } from './components/events/events.component';
import { IframeComponent } from './components/iframe/iframe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    EventsComponent,
    IframeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
