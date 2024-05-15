
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AuthGuard} from 'src/app/zynerator/security/guards/auth.guard';

import { LoginMemberComponent } from './login-member/login-member.component';
import { RegisterMemberComponent } from './register-member/register-member.component';

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
                                    component: LoginMemberComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterMemberComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'template',
                            loadChildren: () => import('./view/template/template-member-routing.module').then(x => x.TemplateMemberRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'inscription',
                            loadChildren: () => import('./view/inscription/inscription-member-routing.module').then(x => x.InscriptionMemberRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'coupon',
                            loadChildren: () => import('./view/coupon/coupon-member-routing.module').then(x => x.CouponMemberRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'project',
                            loadChildren: () => import('./view/project/project-member-routing.module').then(x => x.ProjectMemberRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'packaging',
                            loadChildren: () => import('./view/packaging/packaging-member-routing.module').then(x => x.PackagingMemberRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'collaborator',
                            loadChildren: () => import('./view/collaborator/collaborator-member-routing.module').then(x => x.CollaboratorMemberRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'category',
                            loadChildren: () => import('./view/category/category-member-routing.module').then(x => x.CategoryMemberRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'paiment',
                            loadChildren: () => import('./view/paiment/paiment-member-routing.module').then(x => x.PaimentMemberRoutingModule),
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
export class MemberRoutingModule { }
