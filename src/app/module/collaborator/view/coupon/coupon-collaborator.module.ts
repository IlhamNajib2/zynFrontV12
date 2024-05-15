import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {EditorModule} from "primeng/editor";

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from '@fullcalendar/angular';
import {CardModule} from "primeng/card";

import { InfluencerCreateCollaboratorComponent } from './influencer/create/influencer-create-collaborator.component';
import { InfluencerEditCollaboratorComponent } from './influencer/edit/influencer-edit-collaborator.component';
import { InfluencerViewCollaboratorComponent } from './influencer/view/influencer-view-collaborator.component';
import { InfluencerListCollaboratorComponent } from './influencer/list/influencer-list-collaborator.component';
import { CouponCreateCollaboratorComponent } from './coupon/create/coupon-create-collaborator.component';
import { CouponEditCollaboratorComponent } from './coupon/edit/coupon-edit-collaborator.component';
import { CouponViewCollaboratorComponent } from './coupon/view/coupon-view-collaborator.component';
import { CouponListCollaboratorComponent } from './coupon/list/coupon-list-collaborator.component';
import { CouponDetailCreateCollaboratorComponent } from './coupon-detail/create/coupon-detail-create-collaborator.component';
import { CouponDetailEditCollaboratorComponent } from './coupon-detail/edit/coupon-detail-edit-collaborator.component';
import { CouponDetailViewCollaboratorComponent } from './coupon-detail/view/coupon-detail-view-collaborator.component';
import { CouponDetailListCollaboratorComponent } from './coupon-detail/list/coupon-detail-list-collaborator.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [

    InfluencerCreateCollaboratorComponent,
    InfluencerListCollaboratorComponent,
    InfluencerViewCollaboratorComponent,
    InfluencerEditCollaboratorComponent,
    CouponCreateCollaboratorComponent,
    CouponListCollaboratorComponent,
    CouponViewCollaboratorComponent,
    CouponEditCollaboratorComponent,
    CouponDetailCreateCollaboratorComponent,
    CouponDetailListCollaboratorComponent,
    CouponDetailViewCollaboratorComponent,
    CouponDetailEditCollaboratorComponent,
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
    PaginatorModule,
    TranslateModule,
    FileUploadModule,
    FullCalendarModule,
    CardModule,
    EditorModule,


  ],
  exports: [
  InfluencerCreateCollaboratorComponent,
  InfluencerListCollaboratorComponent,
  InfluencerViewCollaboratorComponent,
  InfluencerEditCollaboratorComponent,
  CouponCreateCollaboratorComponent,
  CouponListCollaboratorComponent,
  CouponViewCollaboratorComponent,
  CouponEditCollaboratorComponent,
  CouponDetailCreateCollaboratorComponent,
  CouponDetailListCollaboratorComponent,
  CouponDetailViewCollaboratorComponent,
  CouponDetailEditCollaboratorComponent,
  ],
})
export class CouponCollaboratorModule { }
