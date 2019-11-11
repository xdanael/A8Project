import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../../../@shared/animation/router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    errorLogin= false;


    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router
    ) {
        // redirect to home if already logged in
        if (localStorage.getItem('isLoggedin')) { 
          //  this.router.navigate(['/Dashboard']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.errorLogin = false;
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
      
        if(this.f.username.value === 'Gaspare' && this.f.password.value === 'Viscillo'){
            localStorage.setItem('isLoggedin', 'true');
            this.router.navigate(['/dashboard']);
        }else {
            this.errorLogin = true;
            this.loading = false;
        }
    }

    onLoggedin(name,pw) {
        localStorage.setItem('isLoggedin', 'true');
    }
}
