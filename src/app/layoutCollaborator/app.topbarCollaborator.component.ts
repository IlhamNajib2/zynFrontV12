import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { SelectItem } from 'primeng/api';
import { LayoutService } from "./service/app.layoutCollaborator.service";
import {AppLayoutCollaboratorComponent} from "./app.layoutCollaborator.component";
import {AppComponent} from "../app.component";
import {AuthService} from "../zynerator/security/shared/service/Auth.service";
import {TranslateService} from "@ngx-translate/core";
import {UserService} from "../zynerator/security/shared/service/User.service";
import {UserDto} from "../zynerator/security/shared/model/User.model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-topbarCollaborator',
    templateUrl: './app.topbarCollaborator.component.html',
    styleUrls:['./app.topbarCollaborator.component.css']
})
export class AppTopbarCollaboratorComponent implements OnInit{
    roleAdmin = false;
    editDialog = false ;
    languageOptions: SelectItem[];
    selectedLanguage: string;




    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;
    public async edit(dto: UserDto) {
        this.userService.findByUsername(dto.username).subscribe(res => {
            this.item = res;
            this.editDialog = true;
        });

    }
    public editUser(){
        this.userService.edit().subscribe(data => this.authenticatedUser = data);
        this.authService.loadInfos();
        this.editDialog = false;
    }

    public hideEditDialog() {
        this.editDialog = false;
    }



    constructor(public  layoutService:LayoutService , public app: AppComponent, public appMain: AppLayoutCollaboratorComponent, private authService: AuthService, private translateService: TranslateService, private userService: UserService,private router: Router) {
        this.languageOptions = [
            { label: 'English', value: 'en' },
            { label: 'Français', value: 'fr' },
            { label: 'العربية', value: 'ar' }
        ];
    }

    useLanguage(language: string): void {
        this.translateService.use(language);
    }
    ngOnInit(): void {
        this.authService.loadInfos();
        if ( this.authService.authenticatedUser.roleUsers[0].role.authority === 'ROLE_ADMIN') {
            this.roleAdmin = true;
        }
    }

    logout(){
        this.authService.logout();
    }
    get item(): UserDto {
        return this.userService.item;
    }

    set item(value: UserDto) {
        this.userService.item = value;
    }
    get authenticatedUser(): UserDto{
        return this.authService.authenticatedUser;
    }
    set authenticatedUser(userDto: UserDto){
        this.authService.authenticatedUser = userDto;
    }


    navigate() {
        this.router.navigate(['/contact']);
    }
}
