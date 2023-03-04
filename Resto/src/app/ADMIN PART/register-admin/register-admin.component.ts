import { Component, OnInit } from '@angular/core';
import { AuthAdminService } from 'src/app/Services/auth-admin.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Admin } from 'src/app/Models/admin';
@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {

  admin!: Admin;

  registerAForm: FormGroup;
  loading = false;
  submitted = false;
  emailPattern = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$";

  constructor(public formBuilder: FormBuilder,
    private authServiceA: AuthAdminService,
    private router: Router) {

    this.registerAForm= this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required]]
      })
   }


  ngOnInit(): void {

  }
  get a() { return this.registerAForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.registerAForm.invalid) {
        return;
    }

    this.authServiceA.register(this.registerAForm.value)
    .subscribe(
      res => {
       alert("added...")
        this.router.navigate(['/login-ad']);
      },
      err => console.log(err)
    )


  }
}

