import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app-routing/routes';
import { ContactusComponent } from './contactus/contactus.component';
import { HttpClientModule } from '@angular/common/http';
import { baseURL } from './shared/baseurl';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './categories/categories.component';
import { ItemComponent } from './item/item.component';
import { DialogComponent } from './dialog/dialog.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CardsComponent } from './addToCart/cards.component';
import { PayComponent } from './pay/pay.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    RegisterComponent,
    ContactusComponent,
    LoginComponent,
    CategoriesComponent,
    ItemComponent,
    CardsComponent,
    DialogComponent,
    AboutusComponent,
    PayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule ,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  providers: [
    {
      provide : 'BaseURL',useValue : baseURL
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
