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

import { PaimentInfluencerCreateAdminComponent } from './paiment-influencer/create/paiment-influencer-create-admin.component';
import { PaimentInfluencerEditAdminComponent } from './paiment-influencer/edit/paiment-influencer-edit-admin.component';
import { PaimentInfluencerViewAdminComponent } from './paiment-influencer/view/paiment-influencer-view-admin.component';
import { PaimentInfluencerListAdminComponent } from './paiment-influencer/list/paiment-influencer-list-admin.component';
import { PaimentCollaboratorCreateAdminComponent } from './paiment-collaborator/create/paiment-collaborator-create-admin.component';
import { PaimentCollaboratorEditAdminComponent } from './paiment-collaborator/edit/paiment-collaborator-edit-admin.component';
import { PaimentCollaboratorViewAdminComponent } from './paiment-collaborator/view/paiment-collaborator-view-admin.component';
import { PaimentCollaboratorListAdminComponent } from './paiment-collaborator/list/paiment-collaborator-list-admin.component';

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

    PaimentInfluencerCreateAdminComponent,
    PaimentInfluencerListAdminComponent,
    PaimentInfluencerViewAdminComponent,
    PaimentInfluencerEditAdminComponent,
    PaimentCollaboratorCreateAdminComponent,
    PaimentCollaboratorListAdminComponent,
    PaimentCollaboratorViewAdminComponent,
    PaimentCollaboratorEditAdminComponent,
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
  PaimentInfluencerCreateAdminComponent,
  PaimentInfluencerListAdminComponent,
  PaimentInfluencerViewAdminComponent,
  PaimentInfluencerEditAdminComponent,
  PaimentCollaboratorCreateAdminComponent,
  PaimentCollaboratorListAdminComponent,
  PaimentCollaboratorViewAdminComponent,
  PaimentCollaboratorEditAdminComponent,
  ],
})
export class PaimentAdminModule { }
