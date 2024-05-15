
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AuthGuard} from 'src/app/zynerator/security/guards/auth.guard';

import { LoginCollaboratorComponent } from './login-collaborator/login-collaborator.component';
import { RegisterCollaboratorComponent } from './register-collaborator/register-collaborator.component';

@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [
                        {
                            path: 'login',
                            children: [
                                {
                                    path: '',
                                    component: LoginCollaboratorComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterCollaboratorComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'template',
                            loadChildren: () => import('./view/template/template-collaborator-routing.module').then(x => x.TemplateCollaboratorRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'inscription',
                            loadChildren: () => import('./view/inscription/inscription-collaborator-routing.module').then(x => x.InscriptionCollaboratorRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'coupon',
                            loadChildren: () => import('./view/coupon/coupon-collaborator-routing.module').then(x => x.CouponCollaboratorRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'project',
                            loadChildren: () => import('./view/project/project-collaborator-routing.module').then(x => x.ProjectCollaboratorRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'packaging',
                            loadChildren: () => import('./view/packaging/packaging-collaborator-routing.module').then(x => x.PackagingCollaboratorRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'collaborator',
                            loadChildren: () => import('./view/collaborator/collaborator-collaborator-routing.module').then(x => x.CollaboratorCollaboratorRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'category',
                            loadChildren: () => import('./view/category/category-collaborator-routing.module').then(x => x.CategoryCollaboratorRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'paiment',
                            loadChildren: () => import('./view/paiment/paiment-collaborator-routing.module').then(x => x.PaimentCollaboratorRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'security',
                            loadChildren: () => import('../security/security-routing.module').then(x => x.SecurityRoutingModule),
                            canActivate: [AuthGuard],
                        }
                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class CollaboratorRoutingModule { }
