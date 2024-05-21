import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {SidebarModule} from 'primeng/sidebar';
import {BadgeModule} from 'primeng/badge';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputSwitchModule} from 'primeng/inputswitch';
import {RippleModule} from 'primeng/ripple';
import {RouterModule} from '@angular/router';
import {AppTopbarCollaboratorComponent} from './app.topbarCollaborator.component';
import {AppFooterCollaboratorComponent} from './app.footerCollaborator.component';
import {AppLayoutCollaboratorComponent} from "./app.layoutCollaborator.component";
import {PanelMenuModule} from "primeng/panelmenu";
import {TabViewModule} from "primeng/tabview";
import {DialogModule} from "primeng/dialog";
import {TranslateModule} from "@ngx-translate/core";
import {ButtonModule} from "primeng/button";
import {PasswordModule} from "primeng/password";
import {MenuModule} from "primeng/menu";
import {SplitButtonModule} from "primeng/splitbutton";
import {DropdownModule} from "primeng/dropdown";
import {AppLayoutModule} from "../layout/app.layout.module";

import {DividerModule} from "primeng/divider";
import {HomeListComponent} from "./home/home-list/home-list.component";
import {ContactListComponent} from "./contact/contact-list/contact-list.component";
import {LoginListComponent} from "./login/login-list/login-list.component";
import {RegisterListComponent} from "./register/register-list/register-list.component";
import {PriceListComponent} from "./price/price-list/price-list.component";
import {
    ActivateAccountCollaboratorComponent
} from "./activateAccount-collaborator/activateAccount-collaborator.component";
import {ChangePasswordCollaboratorComponent} from "./changePassword-collaborator/changePassword-collaborator.component";
import {ToastModule} from "primeng/toast";
import {AccordionModule} from "primeng/accordion";


@NgModule({
    declarations: [

        AppTopbarCollaboratorComponent,
        AppFooterCollaboratorComponent,
        AppLayoutCollaboratorComponent,
        HomeListComponent,
        ContactListComponent,
        LoginListComponent,
        RegisterListComponent,
        PriceListComponent,
        ActivateAccountCollaboratorComponent,
        ChangePasswordCollaboratorComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        RouterModule,
        PanelMenuModule,
        TabViewModule,
        DialogModule,
        TranslateModule,
        ButtonModule,
        PasswordModule,
        MenuModule,
        SplitButtonModule,
        DropdownModule,
        AppLayoutModule,
        DividerModule,
        ReactiveFormsModule,
        ToastModule,
        AccordionModule,

    ],
    exports: [
        AppLayoutCollaboratorComponent,
        HomeListComponent,
        ContactListComponent,
        LoginListComponent,
        RegisterListComponent,
        PriceListComponent,
        ActivateAccountCollaboratorComponent,
        ChangePasswordCollaboratorComponent

    ]
})
export class AppLayoutCollaboratorModule {
}

