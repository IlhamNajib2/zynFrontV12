import {Component, OnInit} from '@angular/core';


import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';


import {environment} from 'src/environments/environment';

import {RoleService} from 'src/app/zynerator/security/shared/service/Role.service';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';
import {ServiceLocator} from 'src/app/zynerator/service/ServiceLocator';
import {ConfirmationService, MessageService,MenuItem} from 'primeng/api';
import {FileTempDto} from 'src/app/zynerator/dto/FileTempDto.model';


import {TemplateAdminService} from 'src/app/shared/service/admin/template/TemplateAdmin.service';
import {TemplateDto} from 'src/app/shared/model/template/Template.model';
import {TemplateCriteria} from 'src/app/shared/criteria/template/TemplateCriteria.model';

import {CategoryTemplateDto} from 'src/app/shared/model/template/CategoryTemplate.model';
import {CategoryTemplateAdminService} from 'src/app/shared/service/admin/template/CategoryTemplateAdmin.service';
import {TechnologyDto} from 'src/app/shared/model/template/Technology.model';
import {TechnologyAdminService} from 'src/app/shared/service/admin/template/TechnologyAdmin.service';
import {LevelTemplateDto} from 'src/app/shared/model/template/LevelTemplate.model';
import {LevelTemplateAdminService} from 'src/app/shared/service/admin/template/LevelTemplateAdmin.service';
import {TypeTemplateDto} from 'src/app/shared/model/template/TypeTemplate.model';
import {TypeTemplateAdminService} from 'src/app/shared/service/admin/template/TypeTemplateAdmin.service';
import {DomainTemplateDto} from 'src/app/shared/model/template/DomainTemplate.model';
import {DomainTemplateAdminService} from 'src/app/shared/service/admin/template/DomainTemplateAdmin.service';
import {MemberDto} from 'src/app/shared/model/collaborator/Member.model';
import {MemberAdminService} from 'src/app/shared/service/admin/collaborator/MemberAdmin.service';
@Component({
  selector: 'app-template-view-admin',
  templateUrl: './template-view-admin.component.html'
})
export class TemplateViewAdminComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: TemplateAdminService, private categoryTemplateService: CategoryTemplateAdminService, private technologyService: TechnologyAdminService, private levelTemplateService: LevelTemplateAdminService, private typeTemplateService: TypeTemplateAdminService, private domainTemplateService: DomainTemplateAdminService, private memberService: MemberAdminService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
    }


    get levelTemplate(): LevelTemplateDto {
        return this.levelTemplateService.item;
    }
    set levelTemplate(value: LevelTemplateDto) {
        this.levelTemplateService.item = value;
    }
    get levelTemplates(): Array<LevelTemplateDto> {
        return this.levelTemplateService.items;
    }
    set levelTemplates(value: Array<LevelTemplateDto>) {
        this.levelTemplateService.items = value;
    }
    get technology(): TechnologyDto {
        return this.technologyService.item;
    }
    set technology(value: TechnologyDto) {
        this.technologyService.item = value;
    }
    get technologys(): Array<TechnologyDto> {
        return this.technologyService.items;
    }
    set technologys(value: Array<TechnologyDto>) {
        this.technologyService.items = value;
    }
    get categoryTemplate(): CategoryTemplateDto {
        return this.categoryTemplateService.item;
    }
    set categoryTemplate(value: CategoryTemplateDto) {
        this.categoryTemplateService.item = value;
    }
    get categoryTemplates(): Array<CategoryTemplateDto> {
        return this.categoryTemplateService.items;
    }
    set categoryTemplates(value: Array<CategoryTemplateDto>) {
        this.categoryTemplateService.items = value;
    }
    get domainTemplate(): DomainTemplateDto {
        return this.domainTemplateService.item;
    }
    set domainTemplate(value: DomainTemplateDto) {
        this.domainTemplateService.item = value;
    }
    get domainTemplates(): Array<DomainTemplateDto> {
        return this.domainTemplateService.items;
    }
    set domainTemplates(value: Array<DomainTemplateDto>) {
        this.domainTemplateService.items = value;
    }
    get member(): MemberDto {
        return this.memberService.item;
    }
    set member(value: MemberDto) {
        this.memberService.item = value;
    }
    get members(): Array<MemberDto> {
        return this.memberService.items;
    }
    set members(value: Array<MemberDto>) {
        this.memberService.items = value;
    }
    get typeTemplate(): TypeTemplateDto {
        return this.typeTemplateService.item;
    }
    set typeTemplate(value: TypeTemplateDto) {
        this.typeTemplateService.item = value;
    }
    get typeTemplates(): Array<TypeTemplateDto> {
        return this.typeTemplateService.items;
    }
    set typeTemplates(value: Array<TypeTemplateDto>) {
        this.typeTemplateService.items = value;
    }

    public hideViewDialog() {
        this.viewDialog = false;
    }

    get items(): Array<TemplateDto> {
        return this.service.items;
    }

    set items(value: Array<TemplateDto>) {
        this.service.items = value;
    }

    get item(): TemplateDto {
        return this.service.item;
    }

    set item(value: TemplateDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): TemplateCriteria {
        return this.service.criteria;
    }

    set criteria(value: TemplateCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
