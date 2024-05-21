import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {Message} from 'primeng/api';
import {AuthService} from 'src/app/zynerator/security/shared/service/Auth.service';
import {LayoutService} from 'src/app/layout/service/app.layout.service';


@Component({
  selector: 'app-activateAccount-collaborator',
  templateUrl: './changePassword-collaborator.component.html',
  styleUrls: ['./changePassword-collaborator.component.css']
})
export class ChangePasswordCollaboratorComponent implements OnInit {

    successMessage: string = '';
    errorMessage: string = '';
    passwordChange = new FormGroup({
        email: new FormControl('',Validators.required),
        password: new FormControl('',Validators.required),
        confermpassword: new FormControl('',Validators.required)
    });

    messages: Message[] = [];
    active : boolean=false;

    constructor(private authService: AuthService,public layoutService: LayoutService, private router: Router) { }

    ngOnInit(): void {
        this.messages = [];
    }

    submit() {
        const formValues = this.passwordChange.value;
        const email = formValues.email;
        const password = formValues.password;
        this.authService.forgetPassword(email, password).then(
            (response: any) => {
                if (response && response.message) {
                    this.successMessage = response.message;
                    this.errorMessage = '';
                } else {
                    this.errorMessage = 'Une erreur inattendue est survenue1';
                    this.successMessage = '';
                }
            },
            (error: any) => { // Utilisation de any pour le moment, veuillez remplacer par le type réel de l'erreur
                if (error && error.error && error.error.message) {
                    this.errorMessage = error.error.message;
                    this.successMessage = '';
                } else {
                    this.errorMessage = 'Une erreur inattendue est survenue2';
                    this.successMessage = '';
                }
            }
        );
    }




}
