import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from '../Models/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User[] | undefined;
  API_URI= 'http://localhost:3000/user';

  constructor(private http: HttpClient, private router: Router) { }

  login(user:User): Observable<any> {
      return this.http.post<any>(`${this.API_URI}/signin`,user);

  }

  signup(newUser: User): Observable<any> {
    return this.http.post<any>(`${this.API_URI}/signup`, newUser);
  }
  logoutUser() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['']);
  }

}
