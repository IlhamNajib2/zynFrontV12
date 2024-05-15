
// const root = environment.rootAppUrl;



import {UserListComponent} from 'src/app/module/security/user/list/user-list.component';
import {ModelPermissionListComponent} from 'src/app/module/security/model-permission/list/model-permission-list.component';
import {ActionPermissionListComponent} from 'src/app/module/security/action-permission/list/action-permission-list.component';
import {ModelPermissionUserListComponent} from 'src/app/module/security/model-permission-utilisateur/list/model-permission-user-list.component';
import {RoleListComponent} from 'src/app/module/security/role/list/role-list.component';



import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AuthGuard} from 'src/app/zynerator/security/guards/auth.guard';



import { CategoryTemplateListInfluencerComponent } from './category-template/list/category-template-list-influencer.component';
import { TypeTemplateListInfluencerComponent } from './type-template/list/type-template-list-influencer.component';
import { DomainTemplateListInfluencerComponent } from './domain-template/list/domain-template-list-influencer.component';
import { LevelTemplateListInfluencerComponent } from './level-template/list/level-template-list-influencer.component';
import { TechnologyListInfluencerComponent } from './technology/list/technology-list-influencer.component';
import { TemplateListInfluencerComponent } from './template/list/template-list-influencer.component';
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

                            path: 'category-template',
                            children: [
                                {
                                    path: 'list',
                                    component: CategoryTemplateListInfluencerComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-template',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeTemplateListInfluencerComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'domain-template',
                            children: [
                                {
                                    path: 'list',
                                    component: DomainTemplateListInfluencerComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'level-template',
                            children: [
                                {
                                    path: 'list',
                                    component: LevelTemplateListInfluencerComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'technology',
                            children: [
                                {
                                    path: 'list',
                                    component: TechnologyListInfluencerComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'template',
                            children: [
                                {
                                    path: 'list',
                                    component: TemplateListInfluencerComponent ,
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
export class TemplateInfluencerRoutingModule { }
