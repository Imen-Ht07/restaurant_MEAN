import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user!: User;


  registerForm: FormGroup;
  loading = false;
  submitted = false;
  emailPattern = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$";
  constructor(public formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {
    this.registerForm= this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['',Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required]]
      })
   }


  ngOnInit(): void {

  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }

    this.authService.signup(this.registerForm.value)
    .subscribe(
      res => {
       alert("added...")
        this.router.navigate(['/login']);
      },
      err => console.log(err)
    )


  }
}
