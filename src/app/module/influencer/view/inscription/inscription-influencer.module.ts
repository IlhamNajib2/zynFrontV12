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

import { InscriptionCollaboratorCreateInfluencerComponent } from './inscription-collaborator/create/inscription-collaborator-create-influencer.component';
import { InscriptionCollaboratorEditInfluencerComponent } from './inscription-collaborator/edit/inscription-collaborator-edit-influencer.component';
import { InscriptionCollaboratorViewInfluencerComponent } from './inscription-collaborator/view/inscription-collaborator-view-influencer.component';
import { InscriptionCollaboratorListInfluencerComponent } from './inscription-collaborator/list/inscription-collaborator-list-influencer.component';
import { InscriptionMembreStateCreateInfluencerComponent } from './inscription-membre-state/create/inscription-membre-state-create-influencer.component';
import { InscriptionMembreStateEditInfluencerComponent } from './inscription-membre-state/edit/inscription-membre-state-edit-influencer.component';
import { InscriptionMembreStateViewInfluencerComponent } from './inscription-membre-state/view/inscription-membre-state-view-influencer.component';
import { InscriptionMembreStateListInfluencerComponent } from './inscription-membre-state/list/inscription-membre-state-list-influencer.component';
import { InscriptionCollaboratorStateCreateInfluencerComponent } from './inscription-collaborator-state/create/inscription-collaborator-state-create-influencer.component';
import { InscriptionCollaboratorStateEditInfluencerComponent } from './inscription-collaborator-state/edit/inscription-collaborator-state-edit-influencer.component';
import { InscriptionCollaboratorStateViewInfluencerComponent } from './inscription-collaborator-state/view/inscription-collaborator-state-view-influencer.component';
import { InscriptionCollaboratorStateListInfluencerComponent } from './inscription-collaborator-state/list/inscription-collaborator-state-list-influencer.component';
import { InscriptionMembreCreateInfluencerComponent } from './inscription-membre/create/inscription-membre-create-influencer.component';
import { InscriptionMembreEditInfluencerComponent } from './inscription-membre/edit/inscription-membre-edit-influencer.component';
import { InscriptionMembreViewInfluencerComponent } from './inscription-membre/view/inscription-membre-view-influencer.component';
import { InscriptionMembreListInfluencerComponent } from './inscription-membre/list/inscription-membre-list-influencer.component';
import { InscriptionCollaboratorTypeCreateInfluencerComponent } from './inscription-collaborator-type/create/inscription-collaborator-type-create-influencer.component';
import { InscriptionCollaboratorTypeEditInfluencerComponent } from './inscription-collaborator-type/edit/inscription-collaborator-type-edit-influencer.component';
import { InscriptionCollaboratorTypeViewInfluencerComponent } from './inscription-collaborator-type/view/inscription-collaborator-type-view-influencer.component';
import { InscriptionCollaboratorTypeListInfluencerComponent } from './inscription-collaborator-type/list/inscription-collaborator-type-list-influencer.component';

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

    InscriptionCollaboratorCreateInfluencerComponent,
    InscriptionCollaboratorListInfluencerComponent,
    InscriptionCollaboratorViewInfluencerComponent,
    InscriptionCollaboratorEditInfluencerComponent,
    InscriptionMembreStateCreateInfluencerComponent,
    InscriptionMembreStateListInfluencerComponent,
    InscriptionMembreStateViewInfluencerComponent,
    InscriptionMembreStateEditInfluencerComponent,
    InscriptionCollaboratorStateCreateInfluencerComponent,
    InscriptionCollaboratorStateListInfluencerComponent,
    InscriptionCollaboratorStateViewInfluencerComponent,
    InscriptionCollaboratorStateEditInfluencerComponent,
    InscriptionMembreCreateInfluencerComponent,
    InscriptionMembreListInfluencerComponent,
    InscriptionMembreViewInfluencerComponent,
    InscriptionMembreEditInfluencerComponent,
    InscriptionCollaboratorTypeCreateInfluencerComponent,
    InscriptionCollaboratorTypeListInfluencerComponent,
    InscriptionCollaboratorTypeViewInfluencerComponent,
    InscriptionCollaboratorTypeEditInfluencerComponent,
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
  InscriptionCollaboratorCreateInfluencerComponent,
  InscriptionCollaboratorListInfluencerComponent,
  InscriptionCollaboratorViewInfluencerComponent,
  InscriptionCollaboratorEditInfluencerComponent,
  InscriptionMembreStateCreateInfluencerComponent,
  InscriptionMembreStateListInfluencerComponent,
  InscriptionMembreStateViewInfluencerComponent,
  InscriptionMembreStateEditInfluencerComponent,
  InscriptionCollaboratorStateCreateInfluencerComponent,
  InscriptionCollaboratorStateListInfluencerComponent,
  InscriptionCollaboratorStateViewInfluencerComponent,
  InscriptionCollaboratorStateEditInfluencerComponent,
  InscriptionMembreCreateInfluencerComponent,
  InscriptionMembreListInfluencerComponent,
  InscriptionMembreViewInfluencerComponent,
  InscriptionMembreEditInfluencerComponent,
  InscriptionCollaboratorTypeCreateInfluencerComponent,
  InscriptionCollaboratorTypeListInfluencerComponent,
  InscriptionCollaboratorTypeViewInfluencerComponent,
  InscriptionCollaboratorTypeEditInfluencerComponent,
  ],
})
export class InscriptionInfluencerModule { }
