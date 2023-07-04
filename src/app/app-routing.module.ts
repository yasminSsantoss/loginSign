import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './security/login/login.component';
import { SignComponent } from './security/sign/sign.component';

const routes: Routes = [
{path: 'login', component:LoginComponent},

{path: 'sign', component:SignComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
