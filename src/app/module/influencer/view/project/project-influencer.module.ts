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

import { PaimentCollaboratorStateCreateInfluencerComponent } from './paiment-collaborator-state/create/paiment-collaborator-state-create-influencer.component';
import { PaimentCollaboratorStateEditInfluencerComponent } from './paiment-collaborator-state/edit/paiment-collaborator-state-edit-influencer.component';
import { PaimentCollaboratorStateViewInfluencerComponent } from './paiment-collaborator-state/view/paiment-collaborator-state-view-influencer.component';
import { PaimentCollaboratorStateListInfluencerComponent } from './paiment-collaborator-state/list/paiment-collaborator-state-list-influencer.component';
import { ProjectStateCreateInfluencerComponent } from './project-state/create/project-state-create-influencer.component';
import { ProjectStateEditInfluencerComponent } from './project-state/edit/project-state-edit-influencer.component';
import { ProjectStateViewInfluencerComponent } from './project-state/view/project-state-view-influencer.component';
import { ProjectStateListInfluencerComponent } from './project-state/list/project-state-list-influencer.component';
import { PaimentInfluencerStateCreateInfluencerComponent } from './paiment-influencer-state/create/paiment-influencer-state-create-influencer.component';
import { PaimentInfluencerStateEditInfluencerComponent } from './paiment-influencer-state/edit/paiment-influencer-state-edit-influencer.component';
import { PaimentInfluencerStateViewInfluencerComponent } from './paiment-influencer-state/view/paiment-influencer-state-view-influencer.component';
import { PaimentInfluencerStateListInfluencerComponent } from './paiment-influencer-state/list/paiment-influencer-state-list-influencer.component';
import { ProjectCreateInfluencerComponent } from './project/create/project-create-influencer.component';
import { ProjectEditInfluencerComponent } from './project/edit/project-edit-influencer.component';
import { ProjectViewInfluencerComponent } from './project/view/project-view-influencer.component';
import { ProjectListInfluencerComponent } from './project/list/project-list-influencer.component';

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

    PaimentCollaboratorStateCreateInfluencerComponent,
    PaimentCollaboratorStateListInfluencerComponent,
    PaimentCollaboratorStateViewInfluencerComponent,
    PaimentCollaboratorStateEditInfluencerComponent,
    ProjectStateCreateInfluencerComponent,
    ProjectStateListInfluencerComponent,
    ProjectStateViewInfluencerComponent,
    ProjectStateEditInfluencerComponent,
    PaimentInfluencerStateCreateInfluencerComponent,
    PaimentInfluencerStateListInfluencerComponent,
    PaimentInfluencerStateViewInfluencerComponent,
    PaimentInfluencerStateEditInfluencerComponent,
    ProjectCreateInfluencerComponent,
    ProjectListInfluencerComponent,
    ProjectViewInfluencerComponent,
    ProjectEditInfluencerComponent,
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
  PaimentCollaboratorStateCreateInfluencerComponent,
  PaimentCollaboratorStateListInfluencerComponent,
  PaimentCollaboratorStateViewInfluencerComponent,
  PaimentCollaboratorStateEditInfluencerComponent,
  ProjectStateCreateInfluencerComponent,
  ProjectStateListInfluencerComponent,
  ProjectStateViewInfluencerComponent,
  ProjectStateEditInfluencerComponent,
  PaimentInfluencerStateCreateInfluencerComponent,
  PaimentInfluencerStateListInfluencerComponent,
  PaimentInfluencerStateViewInfluencerComponent,
  PaimentInfluencerStateEditInfluencerComponent,
  ProjectCreateInfluencerComponent,
  ProjectListInfluencerComponent,
  ProjectViewInfluencerComponent,
  ProjectEditInfluencerComponent,
  ],
})
export class ProjectInfluencerModule { }
