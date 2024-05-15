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

import { InfluencerCreateAdminComponent } from './influencer/create/influencer-create-admin.component';
import { InfluencerEditAdminComponent } from './influencer/edit/influencer-edit-admin.component';
import { InfluencerViewAdminComponent } from './influencer/view/influencer-view-admin.component';
import { InfluencerListAdminComponent } from './influencer/list/influencer-list-admin.component';
import { CouponCreateAdminComponent } from './coupon/create/coupon-create-admin.component';
import { CouponEditAdminComponent } from './coupon/edit/coupon-edit-admin.component';
import { CouponViewAdminComponent } from './coupon/view/coupon-view-admin.component';
import { CouponListAdminComponent } from './coupon/list/coupon-list-admin.component';
import { CouponDetailCreateAdminComponent } from './coupon-detail/create/coupon-detail-create-admin.component';
import { CouponDetailEditAdminComponent } from './coupon-detail/edit/coupon-detail-edit-admin.component';
import { CouponDetailViewAdminComponent } from './coupon-detail/view/coupon-detail-view-admin.component';
import { CouponDetailListAdminComponent } from './coupon-detail/list/coupon-detail-list-admin.component';

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

    InfluencerCreateAdminComponent,
    InfluencerListAdminComponent,
    InfluencerViewAdminComponent,
    InfluencerEditAdminComponent,
    CouponCreateAdminComponent,
    CouponListAdminComponent,
    CouponViewAdminComponent,
    CouponEditAdminComponent,
    CouponDetailCreateAdminComponent,
    CouponDetailListAdminComponent,
    CouponDetailViewAdminComponent,
    CouponDetailEditAdminComponent,
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
  InfluencerCreateAdminComponent,
  InfluencerListAdminComponent,
  InfluencerViewAdminComponent,
  InfluencerEditAdminComponent,
  CouponCreateAdminComponent,
  CouponListAdminComponent,
  CouponViewAdminComponent,
  CouponEditAdminComponent,
  CouponDetailCreateAdminComponent,
  CouponDetailListAdminComponent,
  CouponDetailViewAdminComponent,
  CouponDetailEditAdminComponent,
  ],
})
export class CouponAdminModule { }
