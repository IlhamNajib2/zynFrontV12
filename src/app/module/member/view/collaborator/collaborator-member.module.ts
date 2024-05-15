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

import { MemberCreateMemberComponent } from './member/create/member-create-member.component';
import { MemberEditMemberComponent } from './member/edit/member-edit-member.component';
import { MemberViewMemberComponent } from './member/view/member-view-member.component';
import { MemberListMemberComponent } from './member/list/member-list-member.component';
import { CollaboratorCreateMemberComponent } from './collaborator/create/collaborator-create-member.component';
import { CollaboratorEditMemberComponent } from './collaborator/edit/collaborator-edit-member.component';
import { CollaboratorViewMemberComponent } from './collaborator/view/collaborator-view-member.component';
import { CollaboratorListMemberComponent } from './collaborator/list/collaborator-list-member.component';

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

    MemberCreateMemberComponent,
    MemberListMemberComponent,
    MemberViewMemberComponent,
    MemberEditMemberComponent,
    CollaboratorCreateMemberComponent,
    CollaboratorListMemberComponent,
    CollaboratorViewMemberComponent,
    CollaboratorEditMemberComponent,
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
  MemberCreateMemberComponent,
  MemberListMemberComponent,
  MemberViewMemberComponent,
  MemberEditMemberComponent,
  CollaboratorCreateMemberComponent,
  CollaboratorListMemberComponent,
  CollaboratorViewMemberComponent,
  CollaboratorEditMemberComponent,
  ],
})
export class CollaboratorMemberModule { }
