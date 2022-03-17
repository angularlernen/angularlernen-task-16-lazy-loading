import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventCollectionComponent } from './event-collection/event-collection.component';
import { EventsComponent } from './events.component';

const routes: Routes = [
  {
    path: 'events',
    component: EventsComponent,
    children: [
      {
        path: ':id',
        component: EventDetailComponent
      },
      {
        path: '',
        component: EventCollectionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
