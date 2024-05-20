import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {Message} from 'primeng/api';
import {AuthService} from 'src/app/zynerator/security/shared/service/Auth.service';
import {LayoutService} from 'src/app/layout/service/app.layout.service';


@Component({
  selector: 'app-login-collaborator',
  templateUrl: './login-collaborator.component.html',
  styleUrls: ['./login-collaborator.component.css']
})
export class LoginCollaboratorComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

    forgetPass = new FormGroup({
        username: new FormControl('',Validators.required),
        email: new FormControl('',Validators.required)
    });

  messages: Message[] = [];
  active : boolean=false;

  constructor(private authService: AuthService,public layoutService: LayoutService, private router: Router) { }

  ngOnInit(): void {
    this.messages = [];
  }

  submit(){
    const formValues = this.loginForm.value;
    const username = formValues.username;
    const password = formValues.password;
    this.authService.login(username,password);

  }
    register(){
    this.router.navigate(['/collaborator/register']);
  }
    forget(){
        this.router.navigate(['/changePassword']);
    }

}
