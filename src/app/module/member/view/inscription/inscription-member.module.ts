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

import { InscriptionCollaboratorCreateMemberComponent } from './inscription-collaborator/create/inscription-collaborator-create-member.component';
import { InscriptionCollaboratorEditMemberComponent } from './inscription-collaborator/edit/inscription-collaborator-edit-member.component';
import { InscriptionCollaboratorViewMemberComponent } from './inscription-collaborator/view/inscription-collaborator-view-member.component';
import { InscriptionCollaboratorListMemberComponent } from './inscription-collaborator/list/inscription-collaborator-list-member.component';
import { InscriptionMembreStateCreateMemberComponent } from './inscription-membre-state/create/inscription-membre-state-create-member.component';
import { InscriptionMembreStateEditMemberComponent } from './inscription-membre-state/edit/inscription-membre-state-edit-member.component';
import { InscriptionMembreStateViewMemberComponent } from './inscription-membre-state/view/inscription-membre-state-view-member.component';
import { InscriptionMembreStateListMemberComponent } from './inscription-membre-state/list/inscription-membre-state-list-member.component';
import { InscriptionCollaboratorStateCreateMemberComponent } from './inscription-collaborator-state/create/inscription-collaborator-state-create-member.component';
import { InscriptionCollaboratorStateEditMemberComponent } from './inscription-collaborator-state/edit/inscription-collaborator-state-edit-member.component';
import { InscriptionCollaboratorStateViewMemberComponent } from './inscription-collaborator-state/view/inscription-collaborator-state-view-member.component';
import { InscriptionCollaboratorStateListMemberComponent } from './inscription-collaborator-state/list/inscription-collaborator-state-list-member.component';
import { InscriptionMembreCreateMemberComponent } from './inscription-membre/create/inscription-membre-create-member.component';
import { InscriptionMembreEditMemberComponent } from './inscription-membre/edit/inscription-membre-edit-member.component';
import { InscriptionMembreViewMemberComponent } from './inscription-membre/view/inscription-membre-view-member.component';
import { InscriptionMembreListMemberComponent } from './inscription-membre/list/inscription-membre-list-member.component';
import { InscriptionCollaboratorTypeCreateMemberComponent } from './inscription-collaborator-type/create/inscription-collaborator-type-create-member.component';
import { InscriptionCollaboratorTypeEditMemberComponent } from './inscription-collaborator-type/edit/inscription-collaborator-type-edit-member.component';
import { InscriptionCollaboratorTypeViewMemberComponent } from './inscription-collaborator-type/view/inscription-collaborator-type-view-member.component';
import { InscriptionCollaboratorTypeListMemberComponent } from './inscription-collaborator-type/list/inscription-collaborator-type-list-member.component';

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

    InscriptionCollaboratorCreateMemberComponent,
    InscriptionCollaboratorListMemberComponent,
    InscriptionCollaboratorViewMemberComponent,
    InscriptionCollaboratorEditMemberComponent,
    InscriptionMembreStateCreateMemberComponent,
    InscriptionMembreStateListMemberComponent,
    InscriptionMembreStateViewMemberComponent,
    InscriptionMembreStateEditMemberComponent,
    InscriptionCollaboratorStateCreateMemberComponent,
    InscriptionCollaboratorStateListMemberComponent,
    InscriptionCollaboratorStateViewMemberComponent,
    InscriptionCollaboratorStateEditMemberComponent,
    InscriptionMembreCreateMemberComponent,
    InscriptionMembreListMemberComponent,
    InscriptionMembreViewMemberComponent,
    InscriptionMembreEditMemberComponent,
    InscriptionCollaboratorTypeCreateMemberComponent,
    InscriptionCollaboratorTypeListMemberComponent,
    InscriptionCollaboratorTypeViewMemberComponent,
    InscriptionCollaboratorTypeEditMemberComponent,
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
  InscriptionCollaboratorCreateMemberComponent,
  InscriptionCollaboratorListMemberComponent,
  InscriptionCollaboratorViewMemberComponent,
  InscriptionCollaboratorEditMemberComponent,
  InscriptionMembreStateCreateMemberComponent,
  InscriptionMembreStateListMemberComponent,
  InscriptionMembreStateViewMemberComponent,
  InscriptionMembreStateEditMemberComponent,
  InscriptionCollaboratorStateCreateMemberComponent,
  InscriptionCollaboratorStateListMemberComponent,
  InscriptionCollaboratorStateViewMemberComponent,
  InscriptionCollaboratorStateEditMemberComponent,
  InscriptionMembreCreateMemberComponent,
  InscriptionMembreListMemberComponent,
  InscriptionMembreViewMemberComponent,
  InscriptionMembreEditMemberComponent,
  InscriptionCollaboratorTypeCreateMemberComponent,
  InscriptionCollaboratorTypeListMemberComponent,
  InscriptionCollaboratorTypeViewMemberComponent,
  InscriptionCollaboratorTypeEditMemberComponent,
  ],
})
export class InscriptionMemberModule { }
