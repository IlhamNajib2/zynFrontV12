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

import { CategoryTemplateCreateMemberComponent } from './category-template/create/category-template-create-member.component';
import { CategoryTemplateEditMemberComponent } from './category-template/edit/category-template-edit-member.component';
import { CategoryTemplateViewMemberComponent } from './category-template/view/category-template-view-member.component';
import { CategoryTemplateListMemberComponent } from './category-template/list/category-template-list-member.component';
import { TypeTemplateCreateMemberComponent } from './type-template/create/type-template-create-member.component';
import { TypeTemplateEditMemberComponent } from './type-template/edit/type-template-edit-member.component';
import { TypeTemplateViewMemberComponent } from './type-template/view/type-template-view-member.component';
import { TypeTemplateListMemberComponent } from './type-template/list/type-template-list-member.component';
import { DomainTemplateCreateMemberComponent } from './domain-template/create/domain-template-create-member.component';
import { DomainTemplateEditMemberComponent } from './domain-template/edit/domain-template-edit-member.component';
import { DomainTemplateViewMemberComponent } from './domain-template/view/domain-template-view-member.component';
import { DomainTemplateListMemberComponent } from './domain-template/list/domain-template-list-member.component';
import { LevelTemplateCreateMemberComponent } from './level-template/create/level-template-create-member.component';
import { LevelTemplateEditMemberComponent } from './level-template/edit/level-template-edit-member.component';
import { LevelTemplateViewMemberComponent } from './level-template/view/level-template-view-member.component';
import { LevelTemplateListMemberComponent } from './level-template/list/level-template-list-member.component';
import { TechnologyCreateMemberComponent } from './technology/create/technology-create-member.component';
import { TechnologyEditMemberComponent } from './technology/edit/technology-edit-member.component';
import { TechnologyViewMemberComponent } from './technology/view/technology-view-member.component';
import { TechnologyListMemberComponent } from './technology/list/technology-list-member.component';
import { TemplateCreateMemberComponent } from './template/create/template-create-member.component';
import { TemplateEditMemberComponent } from './template/edit/template-edit-member.component';
import { TemplateViewMemberComponent } from './template/view/template-view-member.component';
import { TemplateListMemberComponent } from './template/list/template-list-member.component';

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

    CategoryTemplateCreateMemberComponent,
    CategoryTemplateListMemberComponent,
    CategoryTemplateViewMemberComponent,
    CategoryTemplateEditMemberComponent,
    TypeTemplateCreateMemberComponent,
    TypeTemplateListMemberComponent,
    TypeTemplateViewMemberComponent,
    TypeTemplateEditMemberComponent,
    DomainTemplateCreateMemberComponent,
    DomainTemplateListMemberComponent,
    DomainTemplateViewMemberComponent,
    DomainTemplateEditMemberComponent,
    LevelTemplateCreateMemberComponent,
    LevelTemplateListMemberComponent,
    LevelTemplateViewMemberComponent,
    LevelTemplateEditMemberComponent,
    TechnologyCreateMemberComponent,
    TechnologyListMemberComponent,
    TechnologyViewMemberComponent,
    TechnologyEditMemberComponent,
    TemplateCreateMemberComponent,
    TemplateListMemberComponent,
    TemplateViewMemberComponent,
    TemplateEditMemberComponent,
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
  CategoryTemplateCreateMemberComponent,
  CategoryTemplateListMemberComponent,
  CategoryTemplateViewMemberComponent,
  CategoryTemplateEditMemberComponent,
  TypeTemplateCreateMemberComponent,
  TypeTemplateListMemberComponent,
  TypeTemplateViewMemberComponent,
  TypeTemplateEditMemberComponent,
  DomainTemplateCreateMemberComponent,
  DomainTemplateListMemberComponent,
  DomainTemplateViewMemberComponent,
  DomainTemplateEditMemberComponent,
  LevelTemplateCreateMemberComponent,
  LevelTemplateListMemberComponent,
  LevelTemplateViewMemberComponent,
  LevelTemplateEditMemberComponent,
  TechnologyCreateMemberComponent,
  TechnologyListMemberComponent,
  TechnologyViewMemberComponent,
  TechnologyEditMemberComponent,
  TemplateCreateMemberComponent,
  TemplateListMemberComponent,
  TemplateViewMemberComponent,
  TemplateEditMemberComponent,
  ],
})
export class TemplateMemberModule { }
