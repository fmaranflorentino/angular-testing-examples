import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';

import { UsersAdmComponent } from './users-adm/users-adm.component';
import { HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from './users-adm/componets/user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersAdmComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
