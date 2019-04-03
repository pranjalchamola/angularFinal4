import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from "@angular/fire";
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from "@angular/fire/auth";
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
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
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
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,
    authRouting,
    AppRoutingModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

