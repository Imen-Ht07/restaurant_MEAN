import { Component, OnInit } from '@angular/core';
import { AuthAdminService } from 'src/app/Services/auth-admin.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Admin } from 'src/app/Models/admin';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  admin!: Admin;

  adminForm: FormGroup;
  loading = false;
  submitted = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(public formBuilder: FormBuilder,
                  private authServiceA: AuthAdminService,
                        private router: Router) {
    this.adminForm= this.formBuilder.group({
      email: ['', Validators['required'], Validators['pattern'](this.emailPattern)],
      password: ['', Validators['required']]
      })
   }
  get f(){ return this.adminForm.controls; }
  ngOnInit(): void {

  }
  onSubmit() {
    this.submitted = true;
    if (this.adminForm.invalid) {
        return;
    }

    this.authServiceA.signin(this.adminForm.value )
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/admin']);
      },
      err => console.log(err)
    )

  }
}

