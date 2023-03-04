import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu} from 'src/app/Models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menus:Menu[]=[];
  currentMenu: Menu[] | undefined;

  API_URI = 'http://localhost:3000/menu';
  
  constructor(private http:HttpClient) { }
  getMenu(): Observable<any> {
    return this.http.get(`${this.API_URI}/menu`);
  }
//ajout

addMenu(newMenu:any, imageFood: File): Observable<any> {
  const fd = new FormData();
  fd.append('nameFood', newMenu.nameFood); 
  fd.append('ingredient', newMenu.ingredient)     
  fd.append('price', newMenu.price);
  fd.append('imageFood', imageFood, imageFood.name);
  return this.http.post<Menu>(`${this.API_URI}/add`, fd);
}
  //supression
    deleteMenu(id:String) {
      return this.http.delete(`${this.API_URI}/dltMenu/${id}`);
      }

//modifier
update(id: any, data: any): Observable<any> {
  return this.http.put(`${this.API_URI}/${id}`, data);
}
updMenu(id: any, data: any): Observable<any> {
    
  return this.http.put<Menu>(`${this.API_URI}/modifMenu/${id}`, data);
}
get(id: any): Observable<any> {
  return this.http.get(`${this.API_URI}/get/${id}`);
}
}
