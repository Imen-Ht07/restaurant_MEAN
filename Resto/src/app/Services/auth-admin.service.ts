import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Admin} from '../Models/admin';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {
  currentAdmin: Admin[] | undefined;
  API_URI= 'http://localhost:3000/admin';

  constructor(private http: HttpClient, private router: Router) { }

  signin(admin:Admin): Observable<any> {
      return this.http.post<any>(`${this.API_URI}/login`,admin);

  }

  register(newAdmin: Admin): Observable<any> {
    return this.http.post<any>(`${this.API_URI}/register`, newAdmin);
  }
  logoutAdmin() {
    localStorage.removeItem('currentAdmin');
    this.router.navigate(['/admin']);
  }

}
