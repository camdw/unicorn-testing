import { Routes } from '@angular/router';

//Components & Services go here//

import { HomepageComponent } from './components/homepage/homepage.component';
import { EventsComponent } from './components/events/events.component'
import { IframeComponent } from './components/iframe/iframe.component'

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'events', component: EventsComponent },
    { path: 'iframe', component: IframeComponent },
    
  ];