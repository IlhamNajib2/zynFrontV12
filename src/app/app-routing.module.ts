import {Route, RouterModule, Routes} from '@angular/router';
import {Component, NgModule} from '@angular/core';
import {AuthGuard} from "src/app/zynerator/security/guards/auth.guard";
import {AccessComponent} from "src/app/demo/components/auth/access/access.component";
import {AppLayoutComponent} from "src/app/layout/app.layout.component";

import {LoginAdminComponent} from 'src/app/module/admin/login-admin/login-admin.component';
import {RegisterAdminComponent} from 'src/app/module/admin/register-admin/register-admin.component';
import {LoginCollaboratorComponent} from 'src/app/module/collaborator/login-collaborator/login-collaborator.component';
import {RegisterCollaboratorComponent} from 'src/app/module/collaborator/register-collaborator/register-collaborator.component';
import {LoginMemberComponent} from 'src/app/module/member/login-member/login-member.component';
import {RegisterMemberComponent} from 'src/app/module/member/register-member/register-member.component';
import {LoginInfluencerComponent} from 'src/app/module/influencer/login-influencer/login-influencer.component';
import {RegisterInfluencerComponent} from 'src/app/module/influencer/register-influencer/register-influencer.component';

import {AppLayoutCollaboratorComponent} from "./layoutCollaborator/app.layoutCollaborator.component";
import {ContactListComponent} from "./layoutCollaborator/contact/contact-list/contact-list.component";
import {LoginListComponent} from "./layoutCollaborator/login/login-list/login-list.component";
import {RegisterListComponent} from "./layoutCollaborator/register/register-list/register-list.component";
import {PriceListComponent} from "./layoutCollaborator/price/price-list/price-list.component";
import {HomeListComponent} from "./layoutCollaborator/home/home-list/home-list.component";
import {
    ActivateAccountCollaboratorComponent
} from "./layoutCollaborator/activateAccount-collaborator/activateAccount-collaborator.component";
import {
    ChangePasswordCollaboratorComponent
} from "./layoutCollaborator/changePassword-collaborator/changePassword-collaborator.component";
import {PackaginComponent} from "./layoutCollaborator/packaging/packaging/list/packaging.component";
import {
    InscriptionComponent
} from "./layoutCollaborator/inscription/inscription-collaborator/list/inscription.component";

const routes: Routes = [
    {
        path: '',
        component: AppLayoutCollaboratorComponent,
        children: [
            {
                path: '',
                component: HomeListComponent
            },
            {path:'contact',component:ContactListComponent},
            {path:'price',component:PriceListComponent},

        ]
    },
    {path:'login',component:LoginListComponent},
    {path:'packaging',component:PackaginComponent},
    {path:'inscription',component:InscriptionComponent},
    {path:'register',component:RegisterListComponent},
    {path: 'admin/login', component: LoginAdminComponent },
    {path: 'activateAccount', component: ActivateAccountCollaboratorComponent},
    {path: 'changePassword', component: ChangePasswordCollaboratorComponent},
    {path: 'admin/register', component: RegisterAdminComponent },
    {path: 'collaborator/login', component: LoginCollaboratorComponent },
    {path: 'collaborator/register', component: RegisterCollaboratorComponent },
    {path: 'member/login', component: LoginMemberComponent },
    {path: 'member/register', component: RegisterMemberComponent },
    {path: 'influencer/login', component: LoginInfluencerComponent },
    {path: 'influencer/register', component: RegisterInfluencerComponent },
    {
        path: 'app',
        component: AppLayoutComponent,
        children: [
                {
                    path: 'admin',
                    loadChildren: () => import( './module/admin/admin-routing.module').then(x => x.AdminRoutingModule),
                    canActivate: [AuthGuard],
                },
                {
                    path: 'collaborator',
                    loadChildren: () => import( './module/collaborator/collaborator-routing.module').then(x => x.CollaboratorRoutingModule),
                    canActivate: [AuthGuard],
                },
                {
                    path: 'member',
                    loadChildren: () => import( './module/member/member-routing.module').then(x => x.MemberRoutingModule),
                    canActivate: [AuthGuard],
                },
                {
                    path: 'influencer',
                    loadChildren: () => import( './module/influencer/influencer-routing.module').then(x => x.InfluencerRoutingModule),
                    canActivate: [AuthGuard],
                },
                    { path: 'denied', component: AccessComponent },
                ],
    }
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        ],
    exports: [RouterModule],
    })
export class AppRoutingModule { }

/*
[

    {path: '', component:  HomeListComponent},
    {path: 'login', component:  LoginCollaboratorComponent},
    {path:'contact',component:ContactListComponent},
    {path:'price',component:PriceListComponent},
    {path:'login',component:LoginListComponent},
    {path:'register',component:RegisterListComponent},
    {path: 'admin/login', component: LoginAdminComponent },
    {path: 'activateAccount', component: ActivateAccountCollaboratorComponent},
    {path: 'changePassword', component: ChangePasswordCollaboratorComponent},
    {path: 'admin/register', component: RegisterAdminComponent },
    {path: 'collaborator/login', component: LoginCollaboratorComponent },
    {path: 'collaborator/register', component: RegisterCollaboratorComponent },
    {path: 'member/login', component: LoginMemberComponent },
    {path: 'member/register', component: RegisterMemberComponent },
    {path: 'influencer/login', component: LoginInfluencerComponent },
    {path: 'influencer/register', component: RegisterInfluencerComponent },
    {
    path: 'app',

    children: [
        {
            path: 'admin',
            component: AppLayoutComponent,
            loadChildren: () => import( './module/admin/admin-routing.module').then(x => x.AdminRoutingModule),
            canActivate: [AuthGuard],
        },
        {
            path: 'collaborator',
            component: AppLayoutComponent,
            loadChildren: () => import( './module/collaborator/collaborator-routing.module').then(x => x.CollaboratorRoutingModule),
            canActivate: [AuthGuard],
        },
        {
            path: 'member',
            component: AppLayoutComponent,
            loadChildren: () => import( './module/member/member-routing.module').then(x => x.MemberRoutingModule),
            canActivate: [AuthGuard],
        },
        {
            path: 'influencer',
            component: AppLayoutComponent,
            loadChildren: () => import( './module/influencer/influencer-routing.module').then(x => x.InfluencerRoutingModule),
            canActivate: [AuthGuard],
        },
            { path: 'denied', component: AccessComponent },
        ],
        canActivate: [AuthGuard]
        },
    ],
        { scrollPositionRestoration: 'enabled' }

*/
