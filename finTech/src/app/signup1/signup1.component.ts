import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicesshared/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.css']
})
export class Signup1Component implements OnInit {
  SignupForm: FormGroup;
  errorMessage = '';
  successMessage = '';
  constructor(  public authService: AuthService,
                //private router: Router,
                private fb: FormBuilder)
  {
    this.createSignupForm();
  }

  model: any = {};

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }

  ngOnInit() {
  }

  createSignupForm() {
    this.SignupForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required]
    });
  }

  tryRegister(value) {
    this.authService.doSignup(value)
        .then(res => {
          console.log(res);
          this.errorMessage = '';
          this.successMessage = 'Your account has been created';
         // this.router.navigate(['/startpage']);
        }, err => {
          console.log(err);
          this.errorMessage = err.message;
          this.successMessage = '';
        });
  }



  tryGoogleLogin() {
    this.authService.doGoogleLogin()
        .then(res => {
           //   this.router.navigate(['/startpage']);
            }, err => console.log(err)
        );
  }


}
