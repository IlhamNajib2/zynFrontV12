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

import { CategoryTemplateCreateCollaboratorComponent } from './category-template/create/category-template-create-collaborator.component';
import { CategoryTemplateEditCollaboratorComponent } from './category-template/edit/category-template-edit-collaborator.component';
import { CategoryTemplateViewCollaboratorComponent } from './category-template/view/category-template-view-collaborator.component';
import { CategoryTemplateListCollaboratorComponent } from './category-template/list/category-template-list-collaborator.component';
import { TypeTemplateCreateCollaboratorComponent } from './type-template/create/type-template-create-collaborator.component';
import { TypeTemplateEditCollaboratorComponent } from './type-template/edit/type-template-edit-collaborator.component';
import { TypeTemplateViewCollaboratorComponent } from './type-template/view/type-template-view-collaborator.component';
import { TypeTemplateListCollaboratorComponent } from './type-template/list/type-template-list-collaborator.component';
import { DomainTemplateCreateCollaboratorComponent } from './domain-template/create/domain-template-create-collaborator.component';
import { DomainTemplateEditCollaboratorComponent } from './domain-template/edit/domain-template-edit-collaborator.component';
import { DomainTemplateViewCollaboratorComponent } from './domain-template/view/domain-template-view-collaborator.component';
import { DomainTemplateListCollaboratorComponent } from './domain-template/list/domain-template-list-collaborator.component';
import { LevelTemplateCreateCollaboratorComponent } from './level-template/create/level-template-create-collaborator.component';
import { LevelTemplateEditCollaboratorComponent } from './level-template/edit/level-template-edit-collaborator.component';
import { LevelTemplateViewCollaboratorComponent } from './level-template/view/level-template-view-collaborator.component';
import { LevelTemplateListCollaboratorComponent } from './level-template/list/level-template-list-collaborator.component';
import { TechnologyCreateCollaboratorComponent } from './technology/create/technology-create-collaborator.component';
import { TechnologyEditCollaboratorComponent } from './technology/edit/technology-edit-collaborator.component';
import { TechnologyViewCollaboratorComponent } from './technology/view/technology-view-collaborator.component';
import { TechnologyListCollaboratorComponent } from './technology/list/technology-list-collaborator.component';
import { TemplateCreateCollaboratorComponent } from './template/create/template-create-collaborator.component';
import { TemplateEditCollaboratorComponent } from './template/edit/template-edit-collaborator.component';
import { TemplateViewCollaboratorComponent } from './template/view/template-view-collaborator.component';
import { TemplateListCollaboratorComponent } from './template/list/template-list-collaborator.component';

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

    CategoryTemplateCreateCollaboratorComponent,
    CategoryTemplateListCollaboratorComponent,
    CategoryTemplateViewCollaboratorComponent,
    CategoryTemplateEditCollaboratorComponent,
    TypeTemplateCreateCollaboratorComponent,
    TypeTemplateListCollaboratorComponent,
    TypeTemplateViewCollaboratorComponent,
    TypeTemplateEditCollaboratorComponent,
    DomainTemplateCreateCollaboratorComponent,
    DomainTemplateListCollaboratorComponent,
    DomainTemplateViewCollaboratorComponent,
    DomainTemplateEditCollaboratorComponent,
    LevelTemplateCreateCollaboratorComponent,
    LevelTemplateListCollaboratorComponent,
    LevelTemplateViewCollaboratorComponent,
    LevelTemplateEditCollaboratorComponent,
    TechnologyCreateCollaboratorComponent,
    TechnologyListCollaboratorComponent,
    TechnologyViewCollaboratorComponent,
    TechnologyEditCollaboratorComponent,
    TemplateCreateCollaboratorComponent,
    TemplateListCollaboratorComponent,
    TemplateViewCollaboratorComponent,
    TemplateEditCollaboratorComponent,
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
  CategoryTemplateCreateCollaboratorComponent,
  CategoryTemplateListCollaboratorComponent,
  CategoryTemplateViewCollaboratorComponent,
  CategoryTemplateEditCollaboratorComponent,
  TypeTemplateCreateCollaboratorComponent,
  TypeTemplateListCollaboratorComponent,
  TypeTemplateViewCollaboratorComponent,
  TypeTemplateEditCollaboratorComponent,
  DomainTemplateCreateCollaboratorComponent,
  DomainTemplateListCollaboratorComponent,
  DomainTemplateViewCollaboratorComponent,
  DomainTemplateEditCollaboratorComponent,
  LevelTemplateCreateCollaboratorComponent,
  LevelTemplateListCollaboratorComponent,
  LevelTemplateViewCollaboratorComponent,
  LevelTemplateEditCollaboratorComponent,
  TechnologyCreateCollaboratorComponent,
  TechnologyListCollaboratorComponent,
  TechnologyViewCollaboratorComponent,
  TechnologyEditCollaboratorComponent,
  TemplateCreateCollaboratorComponent,
  TemplateListCollaboratorComponent,
  TemplateViewCollaboratorComponent,
  TemplateEditCollaboratorComponent,
  ],
})
export class TemplateCollaboratorModule { }
