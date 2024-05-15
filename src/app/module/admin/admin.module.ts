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
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
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

import { TemplateAdminModule } from './view/template/template-admin.module';
import { TemplateAdminRoutingModule } from './view/template/template-admin-routing.module';
import { InscriptionAdminModule } from './view/inscription/inscription-admin.module';
import { InscriptionAdminRoutingModule } from './view/inscription/inscription-admin-routing.module';
import { CouponAdminModule } from './view/coupon/coupon-admin.module';
import { CouponAdminRoutingModule } from './view/coupon/coupon-admin-routing.module';
import { ProjectAdminModule } from './view/project/project-admin.module';
import { ProjectAdminRoutingModule } from './view/project/project-admin-routing.module';
import { PackagingAdminModule } from './view/packaging/packaging-admin.module';
import { PackagingAdminRoutingModule } from './view/packaging/packaging-admin-routing.module';
import { CollaboratorAdminModule } from './view/collaborator/collaborator-admin.module';
import { CollaboratorAdminRoutingModule } from './view/collaborator/collaborator-admin-routing.module';
import { CategoryAdminModule } from './view/category/category-admin.module';
import { CategoryAdminRoutingModule } from './view/category/category-admin-routing.module';
import { PaimentAdminModule } from './view/paiment/paiment-admin.module';
import { PaimentAdminRoutingModule } from './view/paiment/paiment-admin-routing.module';

import {SecurityModule} from 'src/app/module/security/security.module';
import {SecurityRoutingModule} from 'src/app/module/security/security-routing.module';


@NgModule({
  declarations: [
   LoginAdminComponent,
   RegisterAdminComponent
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
  TemplateAdminModule,
  TemplateAdminRoutingModule,
  InscriptionAdminModule,
  InscriptionAdminRoutingModule,
  CouponAdminModule,
  CouponAdminRoutingModule,
  ProjectAdminModule,
  ProjectAdminRoutingModule,
  PackagingAdminModule,
  PackagingAdminRoutingModule,
  CollaboratorAdminModule,
  CollaboratorAdminRoutingModule,
  CategoryAdminModule,
  CategoryAdminRoutingModule,
  PaimentAdminModule,
  PaimentAdminRoutingModule,
  SecurityModule,
  SecurityRoutingModule
  ],
  exports: [
  LoginAdminComponent,
  RegisterAdminComponent,

    TemplateAdminModule,
    InscriptionAdminModule,
    CouponAdminModule,
    ProjectAdminModule,
    PackagingAdminModule,
    CollaboratorAdminModule,
    CategoryAdminModule,
    PaimentAdminModule,
  SecurityModule
  ],

})
export class AdminModule { }
