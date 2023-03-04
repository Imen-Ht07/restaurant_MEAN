import { Component, OnInit } from '@angular/core';
import { AuthAdminService } from 'src/app/Services/auth-admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private as:AuthAdminService) { }

  ngOnInit(): void {
  }
  async logOutAdmin() {
      this.as.logoutAdmin();
  }
  }


