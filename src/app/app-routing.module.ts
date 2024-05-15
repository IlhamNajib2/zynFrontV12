import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
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
@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {path: '', component: LoginAdminComponent},
            {path: 'admin/login', component: LoginAdminComponent },
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
                canActivate: [AuthGuard]
                },
            ],
                { scrollPositionRestoration: 'enabled' }
            ),
        ],
    exports: [RouterModule],
    })
export class AppRoutingModule { }
