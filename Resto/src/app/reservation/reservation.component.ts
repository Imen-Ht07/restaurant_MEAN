import { Component, OnInit } from '@angular/core';
import { Reserv } from '../Models/reservation';
import { ReservService } from '../Services/reserv.service';
import {Router } from '@angular/router';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(private R:ReservService , private router:Router) { }
  reservForm: Reserv = {
    _id:'',
    nameR:'',
    mailR:'',
    telR:0,
    dateR:new Date(),
    timeR:new Date(),
    nmbr:0,
    messageR:'',
   };
   addReserv() {
    this.R.addReserv(this.reservForm).subscribe(
      (data) => {
        if (!data.ok) {
          alert('ERROR!!');
        } else {
          console.log(data);
          alert('Reservation saved successfully!');
        }
      },
      (err) => {
        console.log(err);
      }
    );
    this.router.navigate(['reserv']);
  }
  ngOnInit(): void {
  }

}
