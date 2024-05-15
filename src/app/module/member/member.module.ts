import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { LoginMemberComponent } from './login-member/login-member.component';
import { RegisterMemberComponent } from './register-member/register-member.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';

import { TemplateMemberModule } from './view/template/template-member.module';
import { TemplateMemberRoutingModule } from './view/template/template-member-routing.module';
import { InscriptionMemberModule } from './view/inscription/inscription-member.module';
import { InscriptionMemberRoutingModule } from './view/inscription/inscription-member-routing.module';
import { CouponMemberModule } from './view/coupon/coupon-member.module';
import { CouponMemberRoutingModule } from './view/coupon/coupon-member-routing.module';
import { ProjectMemberModule } from './view/project/project-member.module';
import { ProjectMemberRoutingModule } from './view/project/project-member-routing.module';
import { PackagingMemberModule } from './view/packaging/packaging-member.module';
import { PackagingMemberRoutingModule } from './view/packaging/packaging-member-routing.module';
import { CollaboratorMemberModule } from './view/collaborator/collaborator-member.module';
import { CollaboratorMemberRoutingModule } from './view/collaborator/collaborator-member-routing.module';
import { CategoryMemberModule } from './view/category/category-member.module';
import { CategoryMemberRoutingModule } from './view/category/category-member-routing.module';
import { PaimentMemberModule } from './view/paiment/paiment-member.module';
import { PaimentMemberRoutingModule } from './view/paiment/paiment-member-routing.module';

import {SecurityModule} from 'src/app/module/security/security.module';
import {SecurityRoutingModule} from 'src/app/module/security/security-routing.module';


@NgModule({
  declarations: [
   LoginMemberComponent,
   RegisterMemberComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
  TemplateMemberModule,
  TemplateMemberRoutingModule,
  InscriptionMemberModule,
  InscriptionMemberRoutingModule,
  CouponMemberModule,
  CouponMemberRoutingModule,
  ProjectMemberModule,
  ProjectMemberRoutingModule,
  PackagingMemberModule,
  PackagingMemberRoutingModule,
  CollaboratorMemberModule,
  CollaboratorMemberRoutingModule,
  CategoryMemberModule,
  CategoryMemberRoutingModule,
  PaimentMemberModule,
  PaimentMemberRoutingModule,
  SecurityModule,
  SecurityRoutingModule
  ],
  exports: [
  LoginMemberComponent,
  RegisterMemberComponent,

    TemplateMemberModule,
    InscriptionMemberModule,
    CouponMemberModule,
    ProjectMemberModule,
    PackagingMemberModule,
    CollaboratorMemberModule,
    CategoryMemberModule,
    PaimentMemberModule,
  SecurityModule
  ],

})
export class MemberModule { }
