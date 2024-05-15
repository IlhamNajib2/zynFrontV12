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

import { CategoryTemplateCreateInfluencerComponent } from './category-template/create/category-template-create-influencer.component';
import { CategoryTemplateEditInfluencerComponent } from './category-template/edit/category-template-edit-influencer.component';
import { CategoryTemplateViewInfluencerComponent } from './category-template/view/category-template-view-influencer.component';
import { CategoryTemplateListInfluencerComponent } from './category-template/list/category-template-list-influencer.component';
import { TypeTemplateCreateInfluencerComponent } from './type-template/create/type-template-create-influencer.component';
import { TypeTemplateEditInfluencerComponent } from './type-template/edit/type-template-edit-influencer.component';
import { TypeTemplateViewInfluencerComponent } from './type-template/view/type-template-view-influencer.component';
import { TypeTemplateListInfluencerComponent } from './type-template/list/type-template-list-influencer.component';
import { DomainTemplateCreateInfluencerComponent } from './domain-template/create/domain-template-create-influencer.component';
import { DomainTemplateEditInfluencerComponent } from './domain-template/edit/domain-template-edit-influencer.component';
import { DomainTemplateViewInfluencerComponent } from './domain-template/view/domain-template-view-influencer.component';
import { DomainTemplateListInfluencerComponent } from './domain-template/list/domain-template-list-influencer.component';
import { LevelTemplateCreateInfluencerComponent } from './level-template/create/level-template-create-influencer.component';
import { LevelTemplateEditInfluencerComponent } from './level-template/edit/level-template-edit-influencer.component';
import { LevelTemplateViewInfluencerComponent } from './level-template/view/level-template-view-influencer.component';
import { LevelTemplateListInfluencerComponent } from './level-template/list/level-template-list-influencer.component';
import { TechnologyCreateInfluencerComponent } from './technology/create/technology-create-influencer.component';
import { TechnologyEditInfluencerComponent } from './technology/edit/technology-edit-influencer.component';
import { TechnologyViewInfluencerComponent } from './technology/view/technology-view-influencer.component';
import { TechnologyListInfluencerComponent } from './technology/list/technology-list-influencer.component';
import { TemplateCreateInfluencerComponent } from './template/create/template-create-influencer.component';
import { TemplateEditInfluencerComponent } from './template/edit/template-edit-influencer.component';
import { TemplateViewInfluencerComponent } from './template/view/template-view-influencer.component';
import { TemplateListInfluencerComponent } from './template/list/template-list-influencer.component';

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

    CategoryTemplateCreateInfluencerComponent,
    CategoryTemplateListInfluencerComponent,
    CategoryTemplateViewInfluencerComponent,
    CategoryTemplateEditInfluencerComponent,
    TypeTemplateCreateInfluencerComponent,
    TypeTemplateListInfluencerComponent,
    TypeTemplateViewInfluencerComponent,
    TypeTemplateEditInfluencerComponent,
    DomainTemplateCreateInfluencerComponent,
    DomainTemplateListInfluencerComponent,
    DomainTemplateViewInfluencerComponent,
    DomainTemplateEditInfluencerComponent,
    LevelTemplateCreateInfluencerComponent,
    LevelTemplateListInfluencerComponent,
    LevelTemplateViewInfluencerComponent,
    LevelTemplateEditInfluencerComponent,
    TechnologyCreateInfluencerComponent,
    TechnologyListInfluencerComponent,
    TechnologyViewInfluencerComponent,
    TechnologyEditInfluencerComponent,
    TemplateCreateInfluencerComponent,
    TemplateListInfluencerComponent,
    TemplateViewInfluencerComponent,
    TemplateEditInfluencerComponent,
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
  CategoryTemplateCreateInfluencerComponent,
  CategoryTemplateListInfluencerComponent,
  CategoryTemplateViewInfluencerComponent,
  CategoryTemplateEditInfluencerComponent,
  TypeTemplateCreateInfluencerComponent,
  TypeTemplateListInfluencerComponent,
  TypeTemplateViewInfluencerComponent,
  TypeTemplateEditInfluencerComponent,
  DomainTemplateCreateInfluencerComponent,
  DomainTemplateListInfluencerComponent,
  DomainTemplateViewInfluencerComponent,
  DomainTemplateEditInfluencerComponent,
  LevelTemplateCreateInfluencerComponent,
  LevelTemplateListInfluencerComponent,
  LevelTemplateViewInfluencerComponent,
  LevelTemplateEditInfluencerComponent,
  TechnologyCreateInfluencerComponent,
  TechnologyListInfluencerComponent,
  TechnologyViewInfluencerComponent,
  TechnologyEditInfluencerComponent,
  TemplateCreateInfluencerComponent,
  TemplateListInfluencerComponent,
  TemplateViewInfluencerComponent,
  TemplateEditInfluencerComponent,
  ],
})
export class TemplateInfluencerModule { }
