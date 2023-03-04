import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ContactService} from 'src/app/Services/contact.service';
import {Contact} from 'src/app/Models/contact'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contact!:Contact;

emailPattern = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$";

  constructor( private C: ContactService, 
    private router: Router) {
     }
     contactForm: Contact = {
      _id:'',
       nameC:'',
       mailC:'',
       subject:'',
       messageC:'',
     };

  ngOnInit(): void {
  }
  addcontact() {
    this.C.addContact(this.contactForm).subscribe(
      (data) => {
        if (!data.ok) {
          alert('ERROR!!');
        } else {
          console.log(data);
          alert('message saved successfully!');
        }
      },
      (err) => {
        console.log(err);        
      }
    );
    this.router.navigate(['contacts']);
  }

}
