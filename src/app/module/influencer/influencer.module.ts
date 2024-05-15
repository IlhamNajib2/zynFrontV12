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
import { LoginInfluencerComponent } from './login-influencer/login-influencer.component';
import { RegisterInfluencerComponent } from './register-influencer/register-influencer.component';
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

import { TemplateInfluencerModule } from './view/template/template-influencer.module';
import { TemplateInfluencerRoutingModule } from './view/template/template-influencer-routing.module';
import { InscriptionInfluencerModule } from './view/inscription/inscription-influencer.module';
import { InscriptionInfluencerRoutingModule } from './view/inscription/inscription-influencer-routing.module';
import { CouponInfluencerModule } from './view/coupon/coupon-influencer.module';
import { CouponInfluencerRoutingModule } from './view/coupon/coupon-influencer-routing.module';
import { ProjectInfluencerModule } from './view/project/project-influencer.module';
import { ProjectInfluencerRoutingModule } from './view/project/project-influencer-routing.module';
import { PackagingInfluencerModule } from './view/packaging/packaging-influencer.module';
import { PackagingInfluencerRoutingModule } from './view/packaging/packaging-influencer-routing.module';
import { CollaboratorInfluencerModule } from './view/collaborator/collaborator-influencer.module';
import { CollaboratorInfluencerRoutingModule } from './view/collaborator/collaborator-influencer-routing.module';
import { CategoryInfluencerModule } from './view/category/category-influencer.module';
import { CategoryInfluencerRoutingModule } from './view/category/category-influencer-routing.module';
import { PaimentInfluencerModule } from './view/paiment/paiment-influencer.module';
import { PaimentInfluencerRoutingModule } from './view/paiment/paiment-influencer-routing.module';

import {SecurityModule} from 'src/app/module/security/security.module';
import {SecurityRoutingModule} from 'src/app/module/security/security-routing.module';


@NgModule({
  declarations: [
   LoginInfluencerComponent,
   RegisterInfluencerComponent
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
  TemplateInfluencerModule,
  TemplateInfluencerRoutingModule,
  InscriptionInfluencerModule,
  InscriptionInfluencerRoutingModule,
  CouponInfluencerModule,
  CouponInfluencerRoutingModule,
  ProjectInfluencerModule,
  ProjectInfluencerRoutingModule,
  PackagingInfluencerModule,
  PackagingInfluencerRoutingModule,
  CollaboratorInfluencerModule,
  CollaboratorInfluencerRoutingModule,
  CategoryInfluencerModule,
  CategoryInfluencerRoutingModule,
  PaimentInfluencerModule,
  PaimentInfluencerRoutingModule,
  SecurityModule,
  SecurityRoutingModule
  ],
  exports: [
  LoginInfluencerComponent,
  RegisterInfluencerComponent,

    TemplateInfluencerModule,
    InscriptionInfluencerModule,
    CouponInfluencerModule,
    ProjectInfluencerModule,
    PackagingInfluencerModule,
    CollaboratorInfluencerModule,
    CategoryInfluencerModule,
    PaimentInfluencerModule,
  SecurityModule
  ],

})
export class InfluencerModule { }
