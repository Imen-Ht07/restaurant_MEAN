import { Component, OnInit } from '@angular/core';
import{MenuService} from 'src/app/Services/menu.service';
import{Menu} from 'src/app/Models/menu';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})

export class MenuComponent implements OnInit {

  menus:Menu[]=[];
  
  constructor(private M:MenuService) {}
  
   //methode d'affichage de la liste
   listMenu() {
    this.M.getMenu().subscribe(
      (data:any) => {
        this.menus = data;
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
 
  ngOnInit(): void {
    this.listMenu();
}
}


