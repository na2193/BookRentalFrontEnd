import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UserListComponent } from './user-list/user-list.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AdminComponent } from './admin/admin.component';
import { BookDialogAdminComponent } from './book-dialog-admin/book-dialog-admin.component';

import { AngularMaterialModule } from './angular-material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserListDialogBoxComponent } from './user-list-dialog-box/user-list-dialog-box.component';
import { UserListDeleteDialogBox } from './user-list-delete-dialog-box/user-list-delete-dialog-box.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    UserListComponent,
    AdminComponent,
    BookDialogAdminComponent,
    UserListDialogBoxComponent,
    UserListDeleteDialogBox
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule,
    NgxPaginationModule,
    AngularMaterialModule,
    NgbModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
