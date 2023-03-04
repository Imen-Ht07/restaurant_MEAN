import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import{Contact} from 'src/app/Models/contact'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  API_URI = 'http://localhost:3000/contact';
  
  constructor(private http:HttpClient) { }
  getContact(): Observable<any> {
    return this.http.get(`${this.API_URI}/contact`);
  }

//ajout
addContact(newContact: Contact): Observable<any> {
  return this.http.post<any>(`${this.API_URI}/add`, newContact);
}

  //supression
    deleteContact(id:String) {
      return this.http.delete(`${this.API_URI}/dltContact/${id}`);
      }

}
