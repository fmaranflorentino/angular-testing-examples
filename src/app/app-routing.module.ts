import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersAdmComponent } from './users-adm/users-adm.component';

const routes: Routes = [
  { path: 'main', component: UsersAdmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
