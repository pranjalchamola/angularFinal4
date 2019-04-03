import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import {HttpClientModule} from '@angular/common/http';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { ModuleWithProviders } from '@angular/core';
const authRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBodyComponent,
    HeroImageComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    SecondPageComponent,
    FavoriteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

    FormsModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    authRouting,
    AppRoutingModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

