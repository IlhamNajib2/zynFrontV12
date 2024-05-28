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

import { InscriptionCollaboratorCreateCollaboratorComponent } from './inscription-collaborator/create/inscription-collaborator-create-collaborator.component';
import { InscriptionCollaboratorEditCollaboratorComponent } from './inscription-collaborator/edit/inscription-collaborator-edit-collaborator.component';
import { InscriptionCollaboratorViewCollaboratorComponent } from './inscription-collaborator/view/inscription-collaborator-view-collaborator.component';
import { InscriptionCollaboratorListCollaboratorComponent } from './inscription-collaborator/list/inscription-collaborator-list-collaborator.component';
import { InscriptionMembreStateCreateCollaboratorComponent } from './inscription-membre-state/create/inscription-membre-state-create-collaborator.component';
import { InscriptionMembreStateEditCollaboratorComponent } from './inscription-membre-state/edit/inscription-membre-state-edit-collaborator.component';
import { InscriptionMembreStateViewCollaboratorComponent } from './inscription-membre-state/view/inscription-membre-state-view-collaborator.component';
import { InscriptionMembreStateListCollaboratorComponent } from './inscription-membre-state/list/inscription-membre-state-list-collaborator.component';
import { InscriptionCollaboratorStateCreateCollaboratorComponent } from './inscription-collaborator-state/create/inscription-collaborator-state-create-collaborator.component';
import { InscriptionCollaboratorStateEditCollaboratorComponent } from './inscription-collaborator-state/edit/inscription-collaborator-state-edit-collaborator.component';
import { InscriptionCollaboratorStateViewCollaboratorComponent } from './inscription-collaborator-state/view/inscription-collaborator-state-view-collaborator.component';
import { InscriptionCollaboratorStateListCollaboratorComponent } from './inscription-collaborator-state/list/inscription-collaborator-state-list-collaborator.component';
import { InscriptionMembreCreateCollaboratorComponent } from './inscription-membre/create/inscription-membre-create-collaborator.component';
import { InscriptionMembreEditCollaboratorComponent } from './inscription-membre/edit/inscription-membre-edit-collaborator.component';
import { InscriptionMembreViewCollaboratorComponent } from './inscription-membre/view/inscription-membre-view-collaborator.component';
import { InscriptionMembreListCollaboratorComponent } from './inscription-membre/list/inscription-membre-list-collaborator.component';
import { InscriptionCollaboratorTypeCreateCollaboratorComponent } from './inscription-collaborator-type/create/inscription-collaborator-type-create-collaborator.component';
import { InscriptionCollaboratorTypeEditCollaboratorComponent } from './inscription-collaborator-type/edit/inscription-collaborator-type-edit-collaborator.component';
import { InscriptionCollaboratorTypeViewCollaboratorComponent } from './inscription-collaborator-type/view/inscription-collaborator-type-view-collaborator.component';
import { InscriptionCollaboratorTypeListCollaboratorComponent } from './inscription-collaborator-type/list/inscription-collaborator-type-list-collaborator.component';

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
import {CheckboxModule} from "primeng/checkbox";
import {StepsModule} from "primeng/steps";
import {RadioButtonModule} from "primeng/radiobutton";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {RippleModule} from "primeng/ripple";
import {ProjectAdminModule} from "../../../admin/view/project/project-admin.module";



@NgModule({
  declarations: [

    InscriptionCollaboratorCreateCollaboratorComponent,
    InscriptionCollaboratorListCollaboratorComponent,
    InscriptionCollaboratorViewCollaboratorComponent,
    InscriptionCollaboratorEditCollaboratorComponent,
    InscriptionMembreStateCreateCollaboratorComponent,
    InscriptionMembreStateListCollaboratorComponent,
    InscriptionMembreStateViewCollaboratorComponent,
    InscriptionMembreStateEditCollaboratorComponent,
    InscriptionCollaboratorStateCreateCollaboratorComponent,
    InscriptionCollaboratorStateListCollaboratorComponent,
    InscriptionCollaboratorStateViewCollaboratorComponent,
    InscriptionCollaboratorStateEditCollaboratorComponent,
    InscriptionMembreCreateCollaboratorComponent,
    InscriptionMembreListCollaboratorComponent,
    InscriptionMembreViewCollaboratorComponent,
    InscriptionMembreEditCollaboratorComponent,
    InscriptionCollaboratorTypeCreateCollaboratorComponent,
    InscriptionCollaboratorTypeListCollaboratorComponent,
    InscriptionCollaboratorTypeViewCollaboratorComponent,
    InscriptionCollaboratorTypeEditCollaboratorComponent,
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
        CheckboxModule,
        StepsModule,
        RadioButtonModule,
        ScrollPanelModule,
        RippleModule,
        ProjectAdminModule,


    ],
  exports: [
  InscriptionCollaboratorCreateCollaboratorComponent,
  InscriptionCollaboratorListCollaboratorComponent,
  InscriptionCollaboratorViewCollaboratorComponent,
  InscriptionCollaboratorEditCollaboratorComponent,
  InscriptionMembreStateCreateCollaboratorComponent,
  InscriptionMembreStateListCollaboratorComponent,
  InscriptionMembreStateViewCollaboratorComponent,
  InscriptionMembreStateEditCollaboratorComponent,
  InscriptionCollaboratorStateCreateCollaboratorComponent,
  InscriptionCollaboratorStateListCollaboratorComponent,
  InscriptionCollaboratorStateViewCollaboratorComponent,
  InscriptionCollaboratorStateEditCollaboratorComponent,
  InscriptionMembreCreateCollaboratorComponent,
  InscriptionMembreListCollaboratorComponent,
  InscriptionMembreViewCollaboratorComponent,
  InscriptionMembreEditCollaboratorComponent,
  InscriptionCollaboratorTypeCreateCollaboratorComponent,
  InscriptionCollaboratorTypeListCollaboratorComponent,
  InscriptionCollaboratorTypeViewCollaboratorComponent,
  InscriptionCollaboratorTypeEditCollaboratorComponent,
  ],
})
export class InscriptionCollaboratorModule { }
