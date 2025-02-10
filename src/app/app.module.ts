import { UsersService } from './service/users.service';//

import { Component,NgModule } from '@angular/core';


// route 
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//matsnackbar
import {MatSnackBarModule} from '@angular/material/snack-bar';
//forms
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
//http
import {  HttpClientModule } from '@angular/common/http';
//material 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DialoqComponent } from './dialoq/dialoq.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { AlertDeleteComponent } from './alert-delete/alert-delete.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ButtonModule } from 'primeng/button';

// import {  DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';


// carousel
// import { MatCarouselModule } from "@ngmodule/material-carousel"
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [
    AppComponent,
    DialoqComponent,
    AlertDeleteComponent,
    LoginComponent,
    ContactComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,

    //http client 
    HttpClientModule,
    //forms
    ReactiveFormsModule,
    
    
    //carousel 
    MatGridListModule ,
    MatCardModule ,
    NgImageSliderModule ,
    // MatCarouselModule ,

    //material  
    MatNativeDateModule ,
    MatDatepickerModule ,
    MatTooltipModule ,
    MatToolbarModule ,
    MatIconModule ,
    MatButtonModule ,
    MatDialogModule ,
    MatFormFieldModule,
    MatInputModule
    ,MatSelectModule ,
    MatTableModule,
    MatSnackBarModule ,
    MatPaginatorModule,
    MatSidenavModule,
    MatListModule,
    ButtonModule 
    //

    
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
