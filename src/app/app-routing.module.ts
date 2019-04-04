import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SecondPageComponent} from  '../app/second-page/second-page.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: MainBodyComponent },
  {path: 'main/:uid', component: MainBodyComponent },
  { path: 'home/:id', component:  MainBodyComponent},
    {path: 'home', component: AppComponent },
    
   { path: 'app-secondpage/:description',component: SecondPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
