import { Component, OnInit } from '@angular/core';
import{MenuService} from 'src/app/Services/menu.service';
import{Menu} from 'src/app/Models/menu';
import {Router } from '@angular/router';
@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  imageFood!: any;

  constructor(private M:MenuService, private router:Router)  { }
  menuForm: Menu = {
    _id:'',
     nameFood:'',
     imageFood:'',
     ingredient:'',
     price:0,
   };

   loadImage(img: any) {
     this.imageFood = img.target.files[0];
     console.log(this.imageFood);
   }

   addMenus() {
     this.M.addMenu(this.menuForm,this.imageFood).subscribe(
       (data) => {
         if (!data.ok) {
           alert('ERROR!!');
         } else {
           console.log(data);
           alert('Menu saved successfully!');
         }
       },
       (err) => {
         console.log(err);
       }
     );
     this.router.navigate(['menus']);
   }

  ngOnInit(): void {
  }

}

