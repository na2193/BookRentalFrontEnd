import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UserListComponent } from './user-list/user-list.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { LibraryListAdmin } from './library-list-admin/library-list-admin.component';
import { LibraryListAdminAddBookDialogBox } from './library-list-admin-add-book-dialog-box/library-list-admin-add-book-dialog-box.component';

import { AngularMaterialModule } from './angular-material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserListDialogBoxComponent } from './user-list-dialog-box/user-list-dialog-box.component';
import { UserListDeleteDialogBox } from './user-list-delete-dialog-box/user-list-delete-dialog-box.component';
import { LibraryListAdminUpdateBookDialogBoxComponent } from './library-list-admin-update-book-dialog-box/library-list-admin-update-book-dialog-box.component';
import { LibraryListAdminDeleteBookDialogBoxComponent } from './library-list-admin-delete-book-dialog-box/library-list-admin-delete-book-dialog-box.component';
import { UserDisplayLibraryBookListComponent } from './user-display-library-book-list/user-display-library-book-list.component';
import { FileUploadComponent } from './file-upload/file-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    UserListComponent,
    LibraryListAdmin,
    LibraryListAdminAddBookDialogBox,
    UserListDialogBoxComponent,
    UserListDeleteDialogBox,
    LibraryListAdminUpdateBookDialogBoxComponent,
    LibraryListAdminDeleteBookDialogBoxComponent,
    UserDisplayLibraryBookListComponent,
    FileUploadComponent
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
    NgbModule,
    FlexLayoutModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
