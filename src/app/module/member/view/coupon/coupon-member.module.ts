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

import { InfluencerCreateMemberComponent } from './influencer/create/influencer-create-member.component';
import { InfluencerEditMemberComponent } from './influencer/edit/influencer-edit-member.component';
import { InfluencerViewMemberComponent } from './influencer/view/influencer-view-member.component';
import { InfluencerListMemberComponent } from './influencer/list/influencer-list-member.component';
import { CouponCreateMemberComponent } from './coupon/create/coupon-create-member.component';
import { CouponEditMemberComponent } from './coupon/edit/coupon-edit-member.component';
import { CouponViewMemberComponent } from './coupon/view/coupon-view-member.component';
import { CouponListMemberComponent } from './coupon/list/coupon-list-member.component';
import { CouponDetailCreateMemberComponent } from './coupon-detail/create/coupon-detail-create-member.component';
import { CouponDetailEditMemberComponent } from './coupon-detail/edit/coupon-detail-edit-member.component';
import { CouponDetailViewMemberComponent } from './coupon-detail/view/coupon-detail-view-member.component';
import { CouponDetailListMemberComponent } from './coupon-detail/list/coupon-detail-list-member.component';

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

    InfluencerCreateMemberComponent,
    InfluencerListMemberComponent,
    InfluencerViewMemberComponent,
    InfluencerEditMemberComponent,
    CouponCreateMemberComponent,
    CouponListMemberComponent,
    CouponViewMemberComponent,
    CouponEditMemberComponent,
    CouponDetailCreateMemberComponent,
    CouponDetailListMemberComponent,
    CouponDetailViewMemberComponent,
    CouponDetailEditMemberComponent,
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
  InfluencerCreateMemberComponent,
  InfluencerListMemberComponent,
  InfluencerViewMemberComponent,
  InfluencerEditMemberComponent,
  CouponCreateMemberComponent,
  CouponListMemberComponent,
  CouponViewMemberComponent,
  CouponEditMemberComponent,
  CouponDetailCreateMemberComponent,
  CouponDetailListMemberComponent,
  CouponDetailViewMemberComponent,
  CouponDetailEditMemberComponent,
  ],
})
export class CouponMemberModule { }
