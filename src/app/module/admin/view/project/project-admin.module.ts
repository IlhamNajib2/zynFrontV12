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

import { PaimentCollaboratorStateCreateAdminComponent } from './paiment-collaborator-state/create/paiment-collaborator-state-create-admin.component';
import { PaimentCollaboratorStateEditAdminComponent } from './paiment-collaborator-state/edit/paiment-collaborator-state-edit-admin.component';
import { PaimentCollaboratorStateViewAdminComponent } from './paiment-collaborator-state/view/paiment-collaborator-state-view-admin.component';
import { PaimentCollaboratorStateListAdminComponent } from './paiment-collaborator-state/list/paiment-collaborator-state-list-admin.component';
import { ProjectStateCreateAdminComponent } from './project-state/create/project-state-create-admin.component';
import { ProjectStateEditAdminComponent } from './project-state/edit/project-state-edit-admin.component';
import { ProjectStateViewAdminComponent } from './project-state/view/project-state-view-admin.component';
import { ProjectStateListAdminComponent } from './project-state/list/project-state-list-admin.component';
import { PaimentInfluencerStateCreateAdminComponent } from './paiment-influencer-state/create/paiment-influencer-state-create-admin.component';
import { PaimentInfluencerStateEditAdminComponent } from './paiment-influencer-state/edit/paiment-influencer-state-edit-admin.component';
import { PaimentInfluencerStateViewAdminComponent } from './paiment-influencer-state/view/paiment-influencer-state-view-admin.component';
import { PaimentInfluencerStateListAdminComponent } from './paiment-influencer-state/list/paiment-influencer-state-list-admin.component';
import { ProjectCreateAdminComponent } from './project/create/project-create-admin.component';
import { ProjectEditAdminComponent } from './project/edit/project-edit-admin.component';
import { ProjectViewAdminComponent } from './project/view/project-view-admin.component';
import { ProjectListAdminComponent } from './project/list/project-list-admin.component';

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
import {ChartModule} from "primeng/chart";



@NgModule({
  declarations: [

    PaimentCollaboratorStateCreateAdminComponent,
    PaimentCollaboratorStateListAdminComponent,
    PaimentCollaboratorStateViewAdminComponent,
    PaimentCollaboratorStateEditAdminComponent,
    ProjectStateCreateAdminComponent,
    ProjectStateListAdminComponent,
    ProjectStateViewAdminComponent,
    ProjectStateEditAdminComponent,
    PaimentInfluencerStateCreateAdminComponent,
    PaimentInfluencerStateListAdminComponent,
    PaimentInfluencerStateViewAdminComponent,
    PaimentInfluencerStateEditAdminComponent,
    ProjectCreateAdminComponent,
    ProjectListAdminComponent,
    ProjectViewAdminComponent,
    ProjectEditAdminComponent,
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
        ChartModule,


    ],
  exports: [
  PaimentCollaboratorStateCreateAdminComponent,
  PaimentCollaboratorStateListAdminComponent,
  PaimentCollaboratorStateViewAdminComponent,
  PaimentCollaboratorStateEditAdminComponent,
  ProjectStateCreateAdminComponent,
  ProjectStateListAdminComponent,
  ProjectStateViewAdminComponent,
  ProjectStateEditAdminComponent,
  PaimentInfluencerStateCreateAdminComponent,
  PaimentInfluencerStateListAdminComponent,
  PaimentInfluencerStateViewAdminComponent,
  PaimentInfluencerStateEditAdminComponent,
  ProjectCreateAdminComponent,
  ProjectListAdminComponent,
  ProjectViewAdminComponent,
  ProjectEditAdminComponent,
  ],
})
export class ProjectAdminModule { }
