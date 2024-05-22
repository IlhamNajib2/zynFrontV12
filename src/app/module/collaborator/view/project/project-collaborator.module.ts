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

import { PaimentCollaboratorStateCreateCollaboratorComponent } from './paiment-collaborator-state/create/paiment-collaborator-state-create-collaborator.component';
import { PaimentCollaboratorStateEditCollaboratorComponent } from './paiment-collaborator-state/edit/paiment-collaborator-state-edit-collaborator.component';
import { PaimentCollaboratorStateViewCollaboratorComponent } from './paiment-collaborator-state/view/paiment-collaborator-state-view-collaborator.component';
import { PaimentCollaboratorStateListCollaboratorComponent } from './paiment-collaborator-state/list/paiment-collaborator-state-list-collaborator.component';
import { ProjectStateCreateCollaboratorComponent } from './project-state/create/project-state-create-collaborator.component';
import { ProjectStateEditCollaboratorComponent } from './project-state/edit/project-state-edit-collaborator.component';
import { ProjectStateViewCollaboratorComponent } from './project-state/view/project-state-view-collaborator.component';
import { ProjectStateListCollaboratorComponent } from './project-state/list/project-state-list-collaborator.component';
import { PaimentInfluencerStateCreateCollaboratorComponent } from './paiment-influencer-state/create/paiment-influencer-state-create-collaborator.component';
import { PaimentInfluencerStateEditCollaboratorComponent } from './paiment-influencer-state/edit/paiment-influencer-state-edit-collaborator.component';
import { PaimentInfluencerStateViewCollaboratorComponent } from './paiment-influencer-state/view/paiment-influencer-state-view-collaborator.component';
import { PaimentInfluencerStateListCollaboratorComponent } from './paiment-influencer-state/list/paiment-influencer-state-list-collaborator.component';
import { ProjectCreateCollaboratorComponent } from './project/create/project-create-collaborator.component';
import { ProjectEditCollaboratorComponent } from './project/edit/project-edit-collaborator.component';
import { ProjectViewCollaboratorComponent } from './project/view/project-view-collaborator.component';
import { ProjectListCollaboratorComponent } from './project/list/project-list-collaborator.component';

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
import {SplitterModule} from "primeng/splitter";
import {ScrollTopModule} from "primeng/scrolltop";



@NgModule({
  declarations: [

    PaimentCollaboratorStateCreateCollaboratorComponent,
    PaimentCollaboratorStateListCollaboratorComponent,
    PaimentCollaboratorStateViewCollaboratorComponent,
    PaimentCollaboratorStateEditCollaboratorComponent,
    ProjectStateCreateCollaboratorComponent,
    ProjectStateListCollaboratorComponent,
    ProjectStateViewCollaboratorComponent,
    ProjectStateEditCollaboratorComponent,
    PaimentInfluencerStateCreateCollaboratorComponent,
    PaimentInfluencerStateListCollaboratorComponent,
    PaimentInfluencerStateViewCollaboratorComponent,
    PaimentInfluencerStateEditCollaboratorComponent,
    ProjectCreateCollaboratorComponent,
    ProjectListCollaboratorComponent,
    ProjectViewCollaboratorComponent,
    ProjectEditCollaboratorComponent,
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
        SplitterModule,
        ScrollTopModule,


    ],
  exports: [
  PaimentCollaboratorStateCreateCollaboratorComponent,
  PaimentCollaboratorStateListCollaboratorComponent,
  PaimentCollaboratorStateViewCollaboratorComponent,
  PaimentCollaboratorStateEditCollaboratorComponent,
  ProjectStateCreateCollaboratorComponent,
  ProjectStateListCollaboratorComponent,
  ProjectStateViewCollaboratorComponent,
  ProjectStateEditCollaboratorComponent,
  PaimentInfluencerStateCreateCollaboratorComponent,
  PaimentInfluencerStateListCollaboratorComponent,
  PaimentInfluencerStateViewCollaboratorComponent,
  PaimentInfluencerStateEditCollaboratorComponent,
  ProjectCreateCollaboratorComponent,
  ProjectListCollaboratorComponent,
  ProjectViewCollaboratorComponent,
  ProjectEditCollaboratorComponent,
  ],
})
export class ProjectCollaboratorModule { }
