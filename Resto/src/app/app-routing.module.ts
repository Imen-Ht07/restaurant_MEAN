import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//composant
import { HomeRestoComponent } from './home-resto/home-resto.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ChefsComponent } from './chefs/chefs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AdminComponent } from './ADMIN PART/admin/admin.component';
import { AddMenuComponent } from './ADMIN PART/add-menu/add-menu.component';
import { UpdMenuComponent } from './ADMIN PART/upd-menu/upd-menu.component';
import { ConsultMenuComponent} from './ADMIN PART/consult-menu/consult-menu.component';
import { MessageComponent } from './ADMIN PART/message/message.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterAdminComponent } from './ADMIN PART/register-admin/register-admin.component';
import { LoginAdminComponent } from './ADMIN PART/login-admin/login-admin.component';
import { ConsultReservComponent } from './ADMIN PART/consult-reserv/consult-reserv.component';
const routes: Routes = [
  {path:"", component:HomeRestoComponent},
  {path:"menu", component:MenuComponent},
  {path:"about", component:AboutComponent},
  {path:"chefs", component:ChefsComponent},
  {path:"gallery", component:GalleryComponent},
  {path:"contact", component:ContactComponent},
  {path:"events", component:EventsComponent},
  {path:"reserv", component:ReservationComponent},
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
//Admin*
{path:"admin", component:AdminComponent},
{path:"add-menu", component:AddMenuComponent},
{path:"upd-menu/:id", component:UpdMenuComponent},
{path:"consult", component:ConsultMenuComponent},
{path:"msg", component:MessageComponent},
{path:"register-ad", component:RegisterAdminComponent},
{path:"login-ad", component:LoginAdminComponent},
{path:"cslt-reserv", component:ConsultReservComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
