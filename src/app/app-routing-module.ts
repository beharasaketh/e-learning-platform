import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Loginpage } from './components/loginpage/loginpage';
import { Admindashboard } from './components/admindashboard/admindashboard';
import { Userdashboard } from './components/userdashboard/userdashboard';
import { Mylearning } from './components/mylearning/mylearning';
import { Wishlist } from './components/wishlist/wishlist';
import { Cart } from './components/cart/cart';
import { Profile } from './components/profile/profile';
import { Userhome } from './components/userhome/userhome';
import { Overview } from './components/overview/overview';
import { ManageCourses } from './components/manage-courses/manage-courses';
import { Manageusers } from './components/manageusers/manageusers';
import { Feedback } from './components/feedback/feedback';
import { Coursedetails } from './components/coursedetails/coursedetails';
import { Profilesec } from './componenets/profilesec/profilesec';

const routes: Routes = [
  { path: '', component: Loginpage },
  {
    path: 'admin', component: Admindashboard,
    children: [
      { path: 'overview', component: Overview },
      { path: 'managecourses', component: ManageCourses },
      { path: 'manageusers', component: Manageusers },
      { path: 'feedback', component: Feedback },
    ]
  },
  {
    path: 'user', component: Userdashboard,
    children: [
      { path: 'home', component: Userhome },
      { path: 'mylearning', component: Mylearning },
      { path: 'wishlist', component: Wishlist },
      { path: 'cart', component: Cart },
      { path: 'details/:id', component: Coursedetails }]
  },
  {path:'profileUser',component:Profile}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
