import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Loginpage } from './components/loginpage/loginpage';
import { Userdashboard } from './components/userdashboard/userdashboard';
import { Admindashboard } from './components/admindashboard/admindashboard';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Mylearning } from './components/mylearning/mylearning';
import { Wishlist } from './components/wishlist/wishlist';
import { Cart } from './components/cart/cart';
import { Profile } from './components/profile/profile';
import { Userhome } from './components/userhome/userhome';
import { Overview } from './components/overview/overview';
import { ManageCourses } from './components/manage-courses/manage-courses';
import { Feedback } from './components/feedback/feedback';
import { Manageusers } from './components/manageusers/manageusers';
import { Coursedetails } from './components/coursedetails/coursedetails';
import { Profilesec } from './componenets/profilesec/profilesec';

@NgModule({
  declarations: [
    App,
    Loginpage,
    Userdashboard,
    Admindashboard,
    Mylearning,
    Wishlist,
    Cart,
    Profile,
    Userhome,
    Overview,
    ManageCourses,
    Feedback,
    Manageusers,
    Coursedetails,
    Profilesec,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
