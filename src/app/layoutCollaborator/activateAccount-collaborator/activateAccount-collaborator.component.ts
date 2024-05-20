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

  constructor(private authService: AuthService,public layoutService: LayoutService, private router: Router) { }

  ngOnInit(): void {
    this.messages = [];
  }


    register(){
    this.router.navigate(['']);
  }
}
