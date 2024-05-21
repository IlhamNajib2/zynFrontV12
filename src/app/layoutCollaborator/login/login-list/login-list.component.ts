import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Message} from "primeng/api";

import {Router} from "@angular/router";
import {AuthService} from "../../../zynerator/security/shared/service/Auth.service";
import {LayoutService} from "../../../layout/service/app.layout.service";

@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['./login-list.component.scss']
})
export class LoginListComponent  implements OnInit {

    loginForm = new FormGroup({
        username: new FormControl('',Validators.required),
        password: new FormControl('',Validators.required)
    });

    messages: Message[] = [];

    constructor(private authService: AuthService,public layoutService: LayoutService, private router: Router) { }

    ngOnInit(): void {
        this.messages = [];
    }

    submit(){
        const formValues = this.loginForm.value;
        const username = formValues.username;
        const passowrd = formValues.password;
        this.authService.login(username, passowrd);

    }
    register(){
        this.router.navigate(['/register']);
    }
    forget(){
        this.router.navigate(['/changePassword']);
    }
}
 /*
 import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {Message} from 'primeng/api';
import {AuthService} from 'src/app/zynerator/security/shared/service/Auth.service';
import {LayoutService} from 'src/app/layout/service/app.layout.service';


@Component({
  selector: 'app-login-collaborator',
  templateUrl: './changePassword-collaborator.component.html',
  styleUrls: ['./changePassword-collaborator.component.css']
})
export class ChangePasswordCollaboratorComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  messages: Message[] = [];

  constructor(private authService: AuthService,public layoutService: LayoutService, private router: Router) { }

  ngOnInit(): void {
    this.messages = [];
  }

  submit(){
    const formValues = this.loginForm.value;
    const username = formValues.username;
    const passowrd = formValues.password;
    this.authService.login(username, passowrd);

  }
    register(){
    this.router.navigate(['/collaborator/register']);
  }
}

 */
