import { Component, OnInit } from '@angular/core';
import{MenuService} from 'src/app/Services/menu.service';
import{Menu} from 'src/app/Models/menu';

@Component({
  selector: 'app-consult-menu',
  templateUrl: './consult-menu.component.html',
  styleUrls: ['./consult-menu.component.css']
})
export class ConsultMenuComponent implements OnInit {
  menus!:Menu[];
  constructor(private M:MenuService) {  }

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
  
 //  supression 
 deleteMenu(_id:String)
 {
 
 this.M.deleteMenu(_id).subscribe(() => {
 alert("menu supprimé");
 }); 

  }
  ngOnInit(): void {
    this.listMenu();
}
}



