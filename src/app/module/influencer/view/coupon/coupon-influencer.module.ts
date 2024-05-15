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

import { InfluencerCreateInfluencerComponent } from './influencer/create/influencer-create-influencer.component';
import { InfluencerEditInfluencerComponent } from './influencer/edit/influencer-edit-influencer.component';
import { InfluencerViewInfluencerComponent } from './influencer/view/influencer-view-influencer.component';
import { InfluencerListInfluencerComponent } from './influencer/list/influencer-list-influencer.component';
import { CouponCreateInfluencerComponent } from './coupon/create/coupon-create-influencer.component';
import { CouponEditInfluencerComponent } from './coupon/edit/coupon-edit-influencer.component';
import { CouponViewInfluencerComponent } from './coupon/view/coupon-view-influencer.component';
import { CouponListInfluencerComponent } from './coupon/list/coupon-list-influencer.component';
import { CouponDetailCreateInfluencerComponent } from './coupon-detail/create/coupon-detail-create-influencer.component';
import { CouponDetailEditInfluencerComponent } from './coupon-detail/edit/coupon-detail-edit-influencer.component';
import { CouponDetailViewInfluencerComponent } from './coupon-detail/view/coupon-detail-view-influencer.component';
import { CouponDetailListInfluencerComponent } from './coupon-detail/list/coupon-detail-list-influencer.component';

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

    InfluencerCreateInfluencerComponent,
    InfluencerListInfluencerComponent,
    InfluencerViewInfluencerComponent,
    InfluencerEditInfluencerComponent,
    CouponCreateInfluencerComponent,
    CouponListInfluencerComponent,
    CouponViewInfluencerComponent,
    CouponEditInfluencerComponent,
    CouponDetailCreateInfluencerComponent,
    CouponDetailListInfluencerComponent,
    CouponDetailViewInfluencerComponent,
    CouponDetailEditInfluencerComponent,
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
  InfluencerCreateInfluencerComponent,
  InfluencerListInfluencerComponent,
  InfluencerViewInfluencerComponent,
  InfluencerEditInfluencerComponent,
  CouponCreateInfluencerComponent,
  CouponListInfluencerComponent,
  CouponViewInfluencerComponent,
  CouponEditInfluencerComponent,
  CouponDetailCreateInfluencerComponent,
  CouponDetailListInfluencerComponent,
  CouponDetailViewInfluencerComponent,
  CouponDetailEditInfluencerComponent,
  ],
})
export class CouponInfluencerModule { }
