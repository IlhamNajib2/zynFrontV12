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

import { PaimentCollaboratorStateCreateMemberComponent } from './paiment-collaborator-state/create/paiment-collaborator-state-create-member.component';
import { PaimentCollaboratorStateEditMemberComponent } from './paiment-collaborator-state/edit/paiment-collaborator-state-edit-member.component';
import { PaimentCollaboratorStateViewMemberComponent } from './paiment-collaborator-state/view/paiment-collaborator-state-view-member.component';
import { PaimentCollaboratorStateListMemberComponent } from './paiment-collaborator-state/list/paiment-collaborator-state-list-member.component';
import { ProjectStateCreateMemberComponent } from './project-state/create/project-state-create-member.component';
import { ProjectStateEditMemberComponent } from './project-state/edit/project-state-edit-member.component';
import { ProjectStateViewMemberComponent } from './project-state/view/project-state-view-member.component';
import { ProjectStateListMemberComponent } from './project-state/list/project-state-list-member.component';
import { PaimentInfluencerStateCreateMemberComponent } from './paiment-influencer-state/create/paiment-influencer-state-create-member.component';
import { PaimentInfluencerStateEditMemberComponent } from './paiment-influencer-state/edit/paiment-influencer-state-edit-member.component';
import { PaimentInfluencerStateViewMemberComponent } from './paiment-influencer-state/view/paiment-influencer-state-view-member.component';
import { PaimentInfluencerStateListMemberComponent } from './paiment-influencer-state/list/paiment-influencer-state-list-member.component';
import { ProjectCreateMemberComponent } from './project/create/project-create-member.component';
import { ProjectEditMemberComponent } from './project/edit/project-edit-member.component';
import { ProjectViewMemberComponent } from './project/view/project-view-member.component';
import { ProjectListMemberComponent } from './project/list/project-list-member.component';

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

    PaimentCollaboratorStateCreateMemberComponent,
    PaimentCollaboratorStateListMemberComponent,
    PaimentCollaboratorStateViewMemberComponent,
    PaimentCollaboratorStateEditMemberComponent,
    ProjectStateCreateMemberComponent,
    ProjectStateListMemberComponent,
    ProjectStateViewMemberComponent,
    ProjectStateEditMemberComponent,
    PaimentInfluencerStateCreateMemberComponent,
    PaimentInfluencerStateListMemberComponent,
    PaimentInfluencerStateViewMemberComponent,
    PaimentInfluencerStateEditMemberComponent,
    ProjectCreateMemberComponent,
    ProjectListMemberComponent,
    ProjectViewMemberComponent,
    ProjectEditMemberComponent,
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
  PaimentCollaboratorStateCreateMemberComponent,
  PaimentCollaboratorStateListMemberComponent,
  PaimentCollaboratorStateViewMemberComponent,
  PaimentCollaboratorStateEditMemberComponent,
  ProjectStateCreateMemberComponent,
  ProjectStateListMemberComponent,
  ProjectStateViewMemberComponent,
  ProjectStateEditMemberComponent,
  PaimentInfluencerStateCreateMemberComponent,
  PaimentInfluencerStateListMemberComponent,
  PaimentInfluencerStateViewMemberComponent,
  PaimentInfluencerStateEditMemberComponent,
  ProjectCreateMemberComponent,
  ProjectListMemberComponent,
  ProjectViewMemberComponent,
  ProjectEditMemberComponent,
  ],
})
export class ProjectMemberModule { }
