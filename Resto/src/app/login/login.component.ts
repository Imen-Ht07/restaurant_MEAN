import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!: User;

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(public formBuilder: FormBuilder,
                  private authService: AuthService,
                        private router: Router) {
    this.loginForm= this.formBuilder.group({
      email: ['', Validators['required'], Validators['pattern'](this.emailPattern)],
      password: ['', Validators['required']]
      })
   }
  get f(){ return this.loginForm.controls; }
  ngOnInit(): void {

  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }

    this.authService.login(this.loginForm.value )
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/reserv']);
      },
      err => console.log(err)
    )

  }
}
