
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AuthGuard} from 'src/app/zynerator/security/guards/auth.guard';

import { LoginInfluencerComponent } from './login-influencer/login-influencer.component';
import { RegisterInfluencerComponent } from './register-influencer/register-influencer.component';

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
                                    component: LoginInfluencerComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterInfluencerComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'template',
                            loadChildren: () => import('./view/template/template-influencer-routing.module').then(x => x.TemplateInfluencerRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'inscription',
                            loadChildren: () => import('./view/inscription/inscription-influencer-routing.module').then(x => x.InscriptionInfluencerRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'coupon',
                            loadChildren: () => import('./view/coupon/coupon-influencer-routing.module').then(x => x.CouponInfluencerRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'project',
                            loadChildren: () => import('./view/project/project-influencer-routing.module').then(x => x.ProjectInfluencerRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'packaging',
                            loadChildren: () => import('./view/packaging/packaging-influencer-routing.module').then(x => x.PackagingInfluencerRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'collaborator',
                            loadChildren: () => import('./view/collaborator/collaborator-influencer-routing.module').then(x => x.CollaboratorInfluencerRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'category',
                            loadChildren: () => import('./view/category/category-influencer-routing.module').then(x => x.CategoryInfluencerRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'paiment',
                            loadChildren: () => import('./view/paiment/paiment-influencer-routing.module').then(x => x.PaimentInfluencerRoutingModule),
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
export class InfluencerRoutingModule { }
