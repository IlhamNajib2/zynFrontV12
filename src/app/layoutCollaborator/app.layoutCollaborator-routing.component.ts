
// const root = environment.rootAppUrl;



import {UserListComponent} from 'src/app/module/security/user/list/user-list.component';
import {ModelPermissionListComponent} from 'src/app/module/security/model-permission/list/model-permission-list.component';
import {ActionPermissionListComponent} from 'src/app/module/security/action-permission/list/action-permission-list.component';
import {ModelPermissionUserListComponent} from 'src/app/module/security/model-permission-utilisateur/list/model-permission-user-list.component';
import {RoleListComponent} from 'src/app/module/security/role/list/role-list.component';



import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from 'src/app/zynerator/security/guards/auth.guard';


import {AppLayoutCollaboratorComponent} from "./app.layoutCollaborator.component";
import {HomeListComponent} from "./home/home-list/home-list.component";
import {LoginListComponent} from "./login/login-list/login-list.component";
import {PriceListComponent} from "./price/price-list/price-list.component";
import {ContactListComponent} from "./contact/contact-list/contact-list.component";
import {RegisterListComponent} from "./register/register-list/register-list.component";
import {
    ActivateAccountCollaboratorComponent
} from "./activateAccount-collaborator/activateAccount-collaborator.component";
import {ChangePasswordCollaboratorComponent} from "./changePassword-collaborator/changePassword-collaborator.component";
import {PackaginComponent} from "./packaging/packaging/list/packaging.component";
import {InscriptionComponent} from "./inscription/inscription-collaborator/list/inscription.component";



@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [
                        {

                            path: '',
                            children: [
                                {
                                    path: 'home-list',
                                    component: HomeListComponent ,

                                }
                            ]
                        },
                        {
                            path: 'contact',
                            children: [
                                {
                                    path: 'contact-list',
                                    component: ContactListComponent ,

                                }
                            ]
                        },
                        {
                            path: 'price',
                            children: [
                                {
                                    path: 'price-list',
                                    component: PriceListComponent ,

                                }
                            ]
                        },
                        {
                            path: 'login',
                            children: [
                                {
                                    path: 'login-list',
                                    component: LoginListComponent ,

                                }
                            ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: 'register-list',
                                    component: RegisterListComponent,

                                }
                            ]
                        },
                        {
                            path: 'activateAccount',
                            component: ActivateAccountCollaboratorComponent ,
                        },
                        {
                            path: 'changePassword',
                            component: ChangePasswordCollaboratorComponent ,
                        },
                         {
                            path: 'packaging',
                            component: PackaginComponent,
                        },
                        {
                            path: 'inscription',
                            component: InscriptionComponent,
                        },

                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule]


})



export class AppLayoutCollaboratorRoutingComponent{ }
