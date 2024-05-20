import {Component, OnInit} from '@angular/core';

import {TranslateService} from "@ngx-translate/core";
import {LayoutService} from "../../../layout/service/app.layout.service";
import {AppComponent} from "../../../app.component";
import {AppLayoutCollaboratorComponent} from "../../app.layoutCollaborator.component";
import {UserService} from "../../../zynerator/security/shared/service/User.service";
import {AuthService} from "../../../zynerator/security/shared/service/Auth.service";



@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit{
    onSearchInput(event: any) {
        const searchTerm = event.target.value;
        // Handle search input here
        console.log('Search term:', searchTerm);
    }


    constructor(public  layoutService:LayoutService , public app: AppComponent, public appMain: AppLayoutCollaboratorComponent, private authService: AuthService, private translateService: TranslateService, private userService: UserService) {

    }
    ngOnInit(): void {
    }
    value: string;
}
