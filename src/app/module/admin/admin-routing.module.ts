
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AuthGuard} from 'src/app/zynerator/security/guards/auth.guard';

import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';

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
                                    component: LoginAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'template',
                            loadChildren: () => import('./view/template/template-admin-routing.module').then(x => x.TemplateAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'inscription',
                            loadChildren: () => import('./view/inscription/inscription-admin-routing.module').then(x => x.InscriptionAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'coupon',
                            loadChildren: () => import('./view/coupon/coupon-admin-routing.module').then(x => x.CouponAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'project',
                            loadChildren: () => import('./view/project/project-admin-routing.module').then(x => x.ProjectAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'packaging',
                            loadChildren: () => import('./view/packaging/packaging-admin-routing.module').then(x => x.PackagingAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'collaborator',
                            loadChildren: () => import('./view/collaborator/collaborator-admin-routing.module').then(x => x.CollaboratorAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'category',
                            loadChildren: () => import('./view/category/category-admin-routing.module').then(x => x.CategoryAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'paiment',
                            loadChildren: () => import('./view/paiment/paiment-admin-routing.module').then(x => x.PaimentAdminRoutingModule),
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
export class AdminRoutingModule { }
