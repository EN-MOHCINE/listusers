import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from "@angular/core"
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },// redirect users 
  {path:"login" ,component :LoginComponent},
  {path:"Contact" ,component :ContactComponent}, 
  // {path:"**" , component:NotfoundComponent},u
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
