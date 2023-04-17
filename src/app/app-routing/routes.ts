import { Routes } from '@angular/router';
import { BodyComponent } from '../body/body.component';
import { RegisterComponent } from '../register/register.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { LoginComponent } from '../login/login.component';
import { CategoriesComponent } from '../categories/categories.component';
import { ItemComponent } from '../item/item.component';
import { DialogComponent } from '../dialog/dialog.component';
import { CardsComponent } from '../addToCart/cards.component';
import { PayComponent } from '../pay/pay.component';
//import { Component } from '@angular/core';
import { AboutusComponent } from '../aboutus/aboutus.component';


export const routes: Routes = [
    { path: '', redirectTo: '/body', pathMatch: 'full'},
    { path: 'body', component: BodyComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'contactus', component: ContactusComponent},
    { path: 'login', component: LoginComponent},
    { path: 'categories/:cat', component: CategoriesComponent},
    { path : 'item/:cat/:id', component: ItemComponent},
    { path: 'cards', component: CardsComponent},
    { path: 'success', component: DialogComponent},
    { path: 'pay', component: PayComponent},
    { path: 'aboutus',component: AboutusComponent }
];