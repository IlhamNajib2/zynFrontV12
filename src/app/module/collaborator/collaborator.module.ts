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
import { LoginCollaboratorComponent } from './login-collaborator/login-collaborator.component';
import { RegisterCollaboratorComponent } from './register-collaborator/register-collaborator.component';
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

import { TemplateCollaboratorModule } from './view/template/template-collaborator.module';
import { TemplateCollaboratorRoutingModule } from './view/template/template-collaborator-routing.module';
import { InscriptionCollaboratorModule } from './view/inscription/inscription-collaborator.module';
import { InscriptionCollaboratorRoutingModule } from './view/inscription/inscription-collaborator-routing.module';
import { CouponCollaboratorModule } from './view/coupon/coupon-collaborator.module';
import { CouponCollaboratorRoutingModule } from './view/coupon/coupon-collaborator-routing.module';
import { ProjectCollaboratorModule } from './view/project/project-collaborator.module';
import { ProjectCollaboratorRoutingModule } from './view/project/project-collaborator-routing.module';
import { PackagingCollaboratorModule } from './view/packaging/packaging-collaborator.module';
import { PackagingCollaboratorRoutingModule } from './view/packaging/packaging-collaborator-routing.module';
import { CollaboratorCollaboratorModule } from './view/collaborator/collaborator-collaborator.module';
import { CollaboratorCollaboratorRoutingModule } from './view/collaborator/collaborator-collaborator-routing.module';
import { CategoryCollaboratorModule } from './view/category/category-collaborator.module';
import { CategoryCollaboratorRoutingModule } from './view/category/category-collaborator-routing.module';
import { PaimentCollaboratorModule } from './view/paiment/paiment-collaborator.module';
import { PaimentCollaboratorRoutingModule } from './view/paiment/paiment-collaborator-routing.module';

import {SecurityModule} from 'src/app/module/security/security.module';
import {SecurityRoutingModule} from 'src/app/module/security/security-routing.module';




@NgModule({
  declarations: [
   LoginCollaboratorComponent,
   RegisterCollaboratorComponent,


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
  TemplateCollaboratorModule,
  TemplateCollaboratorRoutingModule,
  InscriptionCollaboratorModule,
  InscriptionCollaboratorRoutingModule,
  CouponCollaboratorModule,
  CouponCollaboratorRoutingModule,
  ProjectCollaboratorModule,
  ProjectCollaboratorRoutingModule,
  PackagingCollaboratorModule,
  PackagingCollaboratorRoutingModule,
  CollaboratorCollaboratorModule,
  CollaboratorCollaboratorRoutingModule,
  CategoryCollaboratorModule,
  CategoryCollaboratorRoutingModule,
  PaimentCollaboratorModule,
  PaimentCollaboratorRoutingModule,
  SecurityModule,
  SecurityRoutingModule
  ],
  exports: [
  LoginCollaboratorComponent,
  RegisterCollaboratorComponent,

    TemplateCollaboratorModule,
    InscriptionCollaboratorModule,
    CouponCollaboratorModule,
    ProjectCollaboratorModule,
    PackagingCollaboratorModule,
    CollaboratorCollaboratorModule,
    CategoryCollaboratorModule,
    PaimentCollaboratorModule,
  SecurityModule
  ],

})
export class CollaboratorModule { }
