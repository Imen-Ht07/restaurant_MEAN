import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//communiquer avec l backend
import { HttpClientModule } from '@angular/common/http';
// pour les formulaires
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
//composant
import { AppComponent } from './app.component';
import { HomeRestoComponent } from './home-resto/home-resto.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ChefsComponent } from './chefs/chefs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { ReservationComponent } from './reservation/reservation.component';
import { EventsComponent } from './events/events.component';
import { AdminComponent } from './ADMIN PART/admin/admin.component';
import { AddMenuComponent } from './ADMIN PART/add-menu/add-menu.component';
import { UpdMenuComponent } from './ADMIN PART/upd-menu/upd-menu.component';
import { ConsultMenuComponent } from './ADMIN PART/consult-menu/consult-menu.component';
import { MessageComponent } from './ADMIN PART/message/message.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterAdminComponent } from './ADMIN PART/register-admin/register-admin.component';
import { LoginAdminComponent } from './ADMIN PART/login-admin/login-admin.component';
import { ConsultReservComponent } from './ADMIN PART/consult-reserv/consult-reserv.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeRestoComponent,
    MenuComponent,
    AboutComponent,
    ChefsComponent,
    GalleryComponent,
    ContactComponent,
    ReservationComponent,
    EventsComponent,
    AdminComponent,
    AddMenuComponent,
    UpdMenuComponent,
    ConsultMenuComponent,
    MessageComponent,
    LoginComponent,
    RegisterComponent,
    RegisterAdminComponent,
    LoginAdminComponent,
    ConsultReservComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
