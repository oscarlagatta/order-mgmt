import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { CustomersComponent } from './customers/containers';

const ROUTES: Routes = [
  { path: 'customers', component: CustomersComponent },
  {
    path: 'documents',
    loadChildren: './documents/documents.module#DocumentsModule',
  },
  {
    path: 'products',
    loadChildren: './products/products.module#ProductsModule',
  },
  { path: '', pathMatch: 'full', redirectTo: 'documents' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
