import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SecondPageComponent } from './second-page/second-page.component';

const routes: Routes = [
  {path: 'home', component: AppComponent },
 { path: 'app-secondpage/:description',component: SecondPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  navigate(arg0: any[]): any {
    throw new Error("Method not implemented.");
  }
}
