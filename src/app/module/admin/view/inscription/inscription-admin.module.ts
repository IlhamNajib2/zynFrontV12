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

import { InscriptionCollaboratorCreateAdminComponent } from './inscription-collaborator/create/inscription-collaborator-create-admin.component';
import { InscriptionCollaboratorEditAdminComponent } from './inscription-collaborator/edit/inscription-collaborator-edit-admin.component';
import { InscriptionCollaboratorViewAdminComponent } from './inscription-collaborator/view/inscription-collaborator-view-admin.component';
import { InscriptionCollaboratorListAdminComponent } from './inscription-collaborator/list/inscription-collaborator-list-admin.component';
import { InscriptionMembreStateCreateAdminComponent } from './inscription-membre-state/create/inscription-membre-state-create-admin.component';
import { InscriptionMembreStateEditAdminComponent } from './inscription-membre-state/edit/inscription-membre-state-edit-admin.component';
import { InscriptionMembreStateViewAdminComponent } from './inscription-membre-state/view/inscription-membre-state-view-admin.component';
import { InscriptionMembreStateListAdminComponent } from './inscription-membre-state/list/inscription-membre-state-list-admin.component';
import { InscriptionCollaboratorStateCreateAdminComponent } from './inscription-collaborator-state/create/inscription-collaborator-state-create-admin.component';
import { InscriptionCollaboratorStateEditAdminComponent } from './inscription-collaborator-state/edit/inscription-collaborator-state-edit-admin.component';
import { InscriptionCollaboratorStateViewAdminComponent } from './inscription-collaborator-state/view/inscription-collaborator-state-view-admin.component';
import { InscriptionCollaboratorStateListAdminComponent } from './inscription-collaborator-state/list/inscription-collaborator-state-list-admin.component';
import { InscriptionMembreCreateAdminComponent } from './inscription-membre/create/inscription-membre-create-admin.component';
import { InscriptionMembreEditAdminComponent } from './inscription-membre/edit/inscription-membre-edit-admin.component';
import { InscriptionMembreViewAdminComponent } from './inscription-membre/view/inscription-membre-view-admin.component';
import { InscriptionMembreListAdminComponent } from './inscription-membre/list/inscription-membre-list-admin.component';
import { InscriptionCollaboratorTypeCreateAdminComponent } from './inscription-collaborator-type/create/inscription-collaborator-type-create-admin.component';
import { InscriptionCollaboratorTypeEditAdminComponent } from './inscription-collaborator-type/edit/inscription-collaborator-type-edit-admin.component';
import { InscriptionCollaboratorTypeViewAdminComponent } from './inscription-collaborator-type/view/inscription-collaborator-type-view-admin.component';
import { InscriptionCollaboratorTypeListAdminComponent } from './inscription-collaborator-type/list/inscription-collaborator-type-list-admin.component';

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

    InscriptionCollaboratorCreateAdminComponent,
    InscriptionCollaboratorListAdminComponent,
    InscriptionCollaboratorViewAdminComponent,
    InscriptionCollaboratorEditAdminComponent,
    InscriptionMembreStateCreateAdminComponent,
    InscriptionMembreStateListAdminComponent,
    InscriptionMembreStateViewAdminComponent,
    InscriptionMembreStateEditAdminComponent,
    InscriptionCollaboratorStateCreateAdminComponent,
    InscriptionCollaboratorStateListAdminComponent,
    InscriptionCollaboratorStateViewAdminComponent,
    InscriptionCollaboratorStateEditAdminComponent,
    InscriptionMembreCreateAdminComponent,
    InscriptionMembreListAdminComponent,
    InscriptionMembreViewAdminComponent,
    InscriptionMembreEditAdminComponent,
    InscriptionCollaboratorTypeCreateAdminComponent,
    InscriptionCollaboratorTypeListAdminComponent,
    InscriptionCollaboratorTypeViewAdminComponent,
    InscriptionCollaboratorTypeEditAdminComponent,
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
  InscriptionCollaboratorCreateAdminComponent,
  InscriptionCollaboratorListAdminComponent,
  InscriptionCollaboratorViewAdminComponent,
  InscriptionCollaboratorEditAdminComponent,
  InscriptionMembreStateCreateAdminComponent,
  InscriptionMembreStateListAdminComponent,
  InscriptionMembreStateViewAdminComponent,
  InscriptionMembreStateEditAdminComponent,
  InscriptionCollaboratorStateCreateAdminComponent,
  InscriptionCollaboratorStateListAdminComponent,
  InscriptionCollaboratorStateViewAdminComponent,
  InscriptionCollaboratorStateEditAdminComponent,
  InscriptionMembreCreateAdminComponent,
  InscriptionMembreListAdminComponent,
  InscriptionMembreViewAdminComponent,
  InscriptionMembreEditAdminComponent,
  InscriptionCollaboratorTypeCreateAdminComponent,
  InscriptionCollaboratorTypeListAdminComponent,
  InscriptionCollaboratorTypeViewAdminComponent,
  InscriptionCollaboratorTypeEditAdminComponent,
  ],
})
export class InscriptionAdminModule { }
