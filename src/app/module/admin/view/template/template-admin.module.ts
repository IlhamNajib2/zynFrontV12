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

import { CategoryTemplateCreateAdminComponent } from './category-template/create/category-template-create-admin.component';
import { CategoryTemplateEditAdminComponent } from './category-template/edit/category-template-edit-admin.component';
import { CategoryTemplateViewAdminComponent } from './category-template/view/category-template-view-admin.component';
import { CategoryTemplateListAdminComponent } from './category-template/list/category-template-list-admin.component';
import { TypeTemplateCreateAdminComponent } from './type-template/create/type-template-create-admin.component';
import { TypeTemplateEditAdminComponent } from './type-template/edit/type-template-edit-admin.component';
import { TypeTemplateViewAdminComponent } from './type-template/view/type-template-view-admin.component';
import { TypeTemplateListAdminComponent } from './type-template/list/type-template-list-admin.component';
import { DomainTemplateCreateAdminComponent } from './domain-template/create/domain-template-create-admin.component';
import { DomainTemplateEditAdminComponent } from './domain-template/edit/domain-template-edit-admin.component';
import { DomainTemplateViewAdminComponent } from './domain-template/view/domain-template-view-admin.component';
import { DomainTemplateListAdminComponent } from './domain-template/list/domain-template-list-admin.component';
import { LevelTemplateCreateAdminComponent } from './level-template/create/level-template-create-admin.component';
import { LevelTemplateEditAdminComponent } from './level-template/edit/level-template-edit-admin.component';
import { LevelTemplateViewAdminComponent } from './level-template/view/level-template-view-admin.component';
import { LevelTemplateListAdminComponent } from './level-template/list/level-template-list-admin.component';
import { TechnologyCreateAdminComponent } from './technology/create/technology-create-admin.component';
import { TechnologyEditAdminComponent } from './technology/edit/technology-edit-admin.component';
import { TechnologyViewAdminComponent } from './technology/view/technology-view-admin.component';
import { TechnologyListAdminComponent } from './technology/list/technology-list-admin.component';
import { TemplateCreateAdminComponent } from './template/create/template-create-admin.component';
import { TemplateEditAdminComponent } from './template/edit/template-edit-admin.component';
import { TemplateViewAdminComponent } from './template/view/template-view-admin.component';
import { TemplateListAdminComponent } from './template/list/template-list-admin.component';

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

    CategoryTemplateCreateAdminComponent,
    CategoryTemplateListAdminComponent,
    CategoryTemplateViewAdminComponent,
    CategoryTemplateEditAdminComponent,
    TypeTemplateCreateAdminComponent,
    TypeTemplateListAdminComponent,
    TypeTemplateViewAdminComponent,
    TypeTemplateEditAdminComponent,
    DomainTemplateCreateAdminComponent,
    DomainTemplateListAdminComponent,
    DomainTemplateViewAdminComponent,
    DomainTemplateEditAdminComponent,
    LevelTemplateCreateAdminComponent,
    LevelTemplateListAdminComponent,
    LevelTemplateViewAdminComponent,
    LevelTemplateEditAdminComponent,
    TechnologyCreateAdminComponent,
    TechnologyListAdminComponent,
    TechnologyViewAdminComponent,
    TechnologyEditAdminComponent,
    TemplateCreateAdminComponent,
    TemplateListAdminComponent,
    TemplateViewAdminComponent,
    TemplateEditAdminComponent,
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
  CategoryTemplateCreateAdminComponent,
  CategoryTemplateListAdminComponent,
  CategoryTemplateViewAdminComponent,
  CategoryTemplateEditAdminComponent,
  TypeTemplateCreateAdminComponent,
  TypeTemplateListAdminComponent,
  TypeTemplateViewAdminComponent,
  TypeTemplateEditAdminComponent,
  DomainTemplateCreateAdminComponent,
  DomainTemplateListAdminComponent,
  DomainTemplateViewAdminComponent,
  DomainTemplateEditAdminComponent,
  LevelTemplateCreateAdminComponent,
  LevelTemplateListAdminComponent,
  LevelTemplateViewAdminComponent,
  LevelTemplateEditAdminComponent,
  TechnologyCreateAdminComponent,
  TechnologyListAdminComponent,
  TechnologyViewAdminComponent,
  TechnologyEditAdminComponent,
  TemplateCreateAdminComponent,
  TemplateListAdminComponent,
  TemplateViewAdminComponent,
  TemplateEditAdminComponent,
  ],
})
export class TemplateAdminModule { }
