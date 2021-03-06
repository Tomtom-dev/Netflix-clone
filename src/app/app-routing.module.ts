import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from 'src/app/app.component'
import { FilmsComponent } from './films/films.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  
  {path:"films", children :[
    {path:"", component : FilmsComponent, pathMatch:"full"}
  ]},
  {path:"series", component: SeriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
