import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/Models/contact';
import { ContactService } from 'src/app/Services/contact.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  contact: Contact[]=[]; 

  constructor(private C: ContactService,
    private router : Router) { }
    //methode d'affichage de la liste
  listConctacts() {
    this.C.getContact().subscribe(
      (data:any) => {
        this.contact = data;
        console.log(data);
      },
      (err:any) => {
        console.log(err);
      }
    );
  }
  
 //  supression 
 dltContact(_id:String)
 {
 
 this.C.deleteContact(_id).subscribe(() => {
 alert("message supprimé");
 }); 

  }



//actualiser
  refresh(): void {
    window.location.reload();
}
 

  ngOnInit(): void {
    this.listConctacts();
  }

}
