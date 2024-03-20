import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { LiveComponent } from './pages/live/live.component';
import { PointstableComponent } from './pages/pointstable/pointstable.component';

export const routes: Routes = 
[
  {
    path:'',
    redirectTo:'/live',
    pathMatch:'full'
  },

  {
    path:"home",
    component:HomeComponent,
    title:"Home | crickInformer"
  },
  {
    path:"history",
    component:HistoryComponent,
    title:"Match History | crickInformer"
  },
  {
    path:"live",
    component:LiveComponent,
    title:"Live Matches | crickInformer"
  },
  {
    path:"pointstable",
    component:PointstableComponent,
    title:"Points Table | crickInformer"
  }
];
