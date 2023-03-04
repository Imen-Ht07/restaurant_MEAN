import { Component, OnInit } from '@angular/core';
import{MenuService} from 'src/app/Services/menu.service';
import{Menu} from 'src/app/Models/menu';
import {ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-upd-menu',
  templateUrl: './upd-menu.component.html',
  styleUrls: ['./upd-menu.component.css']
})
export class UpdMenuComponent implements OnInit {
  menus:Menu[]=[];
  menuImage!: any;
  id!:String;
  constructor(private M:MenuService, private route: ActivatedRoute)  { }
  menuForm: Menu = {
    _id:'',
     nameFood: '',
     imageFood: '',
     ingredient: '',
     price: 0,
   };
   message='';


   loadImage(imageFood: any) {
    this.menuImage = imageFood.target.files[0];
    console.log(this.menuImage);
  }
  getMenuByID(id:any): void {
    this.M.get(id)
      .subscribe(
        data => {
          this.menuForm = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateMenu(): void {
    this.M.updMenu(this.menuForm._id, this.menuForm)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  ngOnInit(): void {
    this.message = '';
    this.id = this.route.snapshot.params['id'];
    this.getMenuByID(this.id);
  }

}
