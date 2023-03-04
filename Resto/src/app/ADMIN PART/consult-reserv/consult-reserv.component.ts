import { Component, OnInit } from '@angular/core';
import { Reserv } from 'src/app/Models/reservation';
import { ReservService } from 'src/app/Services/reserv.service';

@Component({
  selector: 'app-consult-reserv',
  templateUrl: './consult-reserv.component.html',
  styleUrls: ['./consult-reserv.component.css']
})
export class ConsultReservComponent implements OnInit {
reserv!:Reserv[] ;

  constructor(private R:ReservService) { }
//methode d'affichage de la liste
listReserv() {
  this.R.getReserv().subscribe(
    (data:any) => {
      this.reserv = data;
      console.log(data);
    },
    (err:any) => {
      console.log(err);
    }
  );
}
//actualiser
refresh(): void {
  window.location.reload();
}

//  supression
dltReserv(_id:String)
{

this.R.deleteReserv(_id).subscribe(() => {
alert("reservation  supprimée ");
});

}
  ngOnInit(): void {
    this.listReserv();

}}
