import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserv } from '../Models/reservation';
@Injectable({
  providedIn: 'root'
})
export class ReservService {
  API_URI = 'http://localhost:3000/reserv';
  constructor(private http:HttpClient) { }

  getReserv(): Observable<any> {
    return this.http.get(`${this.API_URI}/reservation`);
  }
  // get by Date
  getReservDate(): Observable<any> {
    return this.http.get(`${this.API_URI}/ReservByDate`);
  }
//ajout
addReserv(newReserv: Reserv): Observable<any> {
  return this.http.post<any>(`${this.API_URI}/add`, newReserv);
}
  //supression
  deleteReserv(id:String) {
    return this.http.delete(`${this.API_URI}/dltReserv/${id}`);
    }
}
