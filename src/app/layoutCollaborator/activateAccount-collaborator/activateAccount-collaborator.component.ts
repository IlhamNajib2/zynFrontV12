import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {Message} from 'primeng/api';
import {AuthService} from 'src/app/zynerator/security/shared/service/Auth.service';
import {LayoutService} from 'src/app/layout/service/app.layout.service';


@Component({
  selector: 'app-activateAccount-collaborator',
  templateUrl: './activateAccount-collaborator.component.html',
  styleUrls: ['./activateAccount-collaborator.component.css']
})
export class ActivateAccountCollaboratorComponent implements OnInit {


    messages: Message[] = [];

    constructor(private authService: AuthService, public layoutService: LayoutService, private router: Router) {
    }


    loginForm = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });


    ngOnInit(): void {
        this.messages = [];
    }
/*
    submit() {
        const formValues = this.loginForm.value;
        const username = formValues.username;
        const passowrd = formValues.password;
        this.authService.login(username, passowrd);

    }

 */

    submit() {
        this.router.navigate(['/packaging']);

    }

    register() {
        this.router.navigate(['/register']);
    }

    forget() {
        this.router.navigate(['/changePassword']);
    }


}
