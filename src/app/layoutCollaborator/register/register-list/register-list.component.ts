import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Message} from "primeng/api";

import {ActivatedRoute, Router} from "@angular/router";
import {UserDto} from "../../../zynerator/security/shared/model/User.model";
import {RoleUserDto} from "../../../zynerator/security/shared/model/RoleUser.model";
import {RoleDto} from "../../../zynerator/security/shared/model/Role.model";
import {AuthService} from "../../../zynerator/security/shared/service/Auth.service";



@Component({
  selector: 'app-register-list',
  templateUrl: './register-list.component.html',
  styleUrls: ['./register-list.component.scss']
})
export class RegisterListComponent  implements OnInit {
    messages: Message[] = [];
    successMessage: string = '';
    errorMessage: string = '';

    constructor(private authService: AuthService,private route: ActivatedRoute) { }

    role: string;



    ngOnInit(): void {
        this.role = this.extractRoleFromUrl();
    }



    private extractRoleFromUrl(): string {
        const segments = this.route.snapshot.url.map(segment => segment.path);
        const roleIndex = segments.indexOf('app') + 1;
        return segments[roleIndex];
    }






    registerForm = new FormGroup({
        phone : new FormControl('', Validators.required),
        firstName : new FormControl('', Validators.required),
        lastName : new FormControl('', Validators.required),
        email : new FormControl('', Validators.required),
        userName : new FormControl('', Validators.required),
        password : new FormControl('', Validators.required)
    });
    clicked:Boolean=false;







    submit(){
        const formValues = this.registerForm.value
        const {phone,firstName, lastName, email ,userName, password } = formValues;
        const role = new RoleDto();
        role.authority = 'ROLE_COLLABORATOR' ;
        const roleUser = new RoleUserDto();
        roleUser.role = role;
        this.user.accountNonExpired=true;
        this.user.accountNonLocked=true;
        this.user.credentialsNonExpired=true;
        this.user.enabled=false;
        this.user.passwordChanged=false;
        this.user.firstName = firstName;
        this.user.lastName = lastName;
        this.user.phone = phone;
        this.user.username = userName;
        this.user.password = password;
        this.user.email = email;
        this.user.roleUsers = new Array<RoleUserDto>();
        this.user.roleUsers.push(roleUser);
        console.log(this.user)

        this.authService.registerAdmin().then(
            response => {
                this.successMessage = response.message;
                this.errorMessage = '';
            },
            error => {
                this.errorMessage = error.error.message;
                this.successMessage = '';
            }
        );
    }

    get user(): UserDto {
        return this.authService.user;
    }

    set user(value: UserDto) {
        this.authService.user = value;
    }

}
