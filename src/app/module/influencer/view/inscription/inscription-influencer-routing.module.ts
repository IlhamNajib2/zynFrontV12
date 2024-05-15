
// const root = environment.rootAppUrl;



import {UserListComponent} from 'src/app/module/security/user/list/user-list.component';
import {ModelPermissionListComponent} from 'src/app/module/security/model-permission/list/model-permission-list.component';
import {ActionPermissionListComponent} from 'src/app/module/security/action-permission/list/action-permission-list.component';
import {ModelPermissionUserListComponent} from 'src/app/module/security/model-permission-utilisateur/list/model-permission-user-list.component';
import {RoleListComponent} from 'src/app/module/security/role/list/role-list.component';



import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AuthGuard} from 'src/app/zynerator/security/guards/auth.guard';



import { InscriptionCollaboratorListInfluencerComponent } from './inscription-collaborator/list/inscription-collaborator-list-influencer.component';
import { InscriptionMembreStateListInfluencerComponent } from './inscription-membre-state/list/inscription-membre-state-list-influencer.component';
import { InscriptionCollaboratorStateListInfluencerComponent } from './inscription-collaborator-state/list/inscription-collaborator-state-list-influencer.component';
import { InscriptionMembreListInfluencerComponent } from './inscription-membre/list/inscription-membre-list-influencer.component';
import { InscriptionCollaboratorTypeListInfluencerComponent } from './inscription-collaborator-type/list/inscription-collaborator-type-list-influencer.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [
                        {

                            path: 'action-permission',
                            children: [
                                {
                                    path: 'list',
                                    component: ActionPermissionListComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'model-permission-user',
                            children: [
                                {
                                    path: 'list',
                                    component: ModelPermissionUserListComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'role',
                            children: [
                                {
                                    path: 'list',
                                    component: RoleListComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'user',
                            children: [
                                {
                                    path: 'list',
                                    component: UserListComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'model-permission',
                            children: [
                                {
                                    path: 'list',
                                    component: ModelPermissionListComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },


                        {

                            path: 'inscription-collaborator',
                            children: [
                                {
                                    path: 'list',
                                    component: InscriptionCollaboratorListInfluencerComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'inscription-membre-state',
                            children: [
                                {
                                    path: 'list',
                                    component: InscriptionMembreStateListInfluencerComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'inscription-collaborator-state',
                            children: [
                                {
                                    path: 'list',
                                    component: InscriptionCollaboratorStateListInfluencerComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'inscription-membre',
                            children: [
                                {
                                    path: 'list',
                                    component: InscriptionMembreListInfluencerComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'inscription-collaborator-type',
                            children: [
                                {
                                    path: 'list',
                                    component: InscriptionCollaboratorTypeListInfluencerComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class InscriptionInfluencerRoutingModule { }
