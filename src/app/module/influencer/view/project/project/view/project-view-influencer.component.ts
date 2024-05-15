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


import {ProjectInfluencerService} from 'src/app/shared/service/influencer/project/ProjectInfluencer.service';
import {ProjectDto} from 'src/app/shared/model/project/Project.model';
import {ProjectCriteria} from 'src/app/shared/criteria/project/ProjectCriteria.model';

import {InscriptionMembreDto} from 'src/app/shared/model/inscription/InscriptionMembre.model';
import {InscriptionMembreInfluencerService} from 'src/app/shared/service/influencer/inscription/InscriptionMembreInfluencer.service';
import {ProjectStateDto} from 'src/app/shared/model/project/ProjectState.model';
import {ProjectStateInfluencerService} from 'src/app/shared/service/influencer/project/ProjectStateInfluencer.service';
import {TemplateDto} from 'src/app/shared/model/template/Template.model';
import {TemplateInfluencerService} from 'src/app/shared/service/influencer/template/TemplateInfluencer.service';
import {DomainTemplateDto} from 'src/app/shared/model/template/DomainTemplate.model';
import {DomainTemplateInfluencerService} from 'src/app/shared/service/influencer/template/DomainTemplateInfluencer.service';
import {ProjectTemplateDto} from 'src/app/shared/model/template/ProjectTemplate.model';
import {ProjectTemplateInfluencerService} from 'src/app/shared/service/influencer/template/ProjectTemplateInfluencer.service';
@Component({
  selector: 'app-project-view-influencer',
  templateUrl: './project-view-influencer.component.html'
})
export class ProjectViewInfluencerComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;


    projectTemplates = new ProjectTemplateDto();
    projectTemplatess: Array<ProjectTemplateDto> = [];

    constructor(private service: ProjectInfluencerService, private inscriptionMembreService: InscriptionMembreInfluencerService, private projectStateService: ProjectStateInfluencerService, private templateService: TemplateInfluencerService, private domainTemplateService: DomainTemplateInfluencerService, private projectTemplateService: ProjectTemplateInfluencerService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
    }


    get template(): TemplateDto {
        return this.templateService.item;
    }
    set template(value: TemplateDto) {
        this.templateService.item = value;
    }
    get templates(): Array<TemplateDto> {
        return this.templateService.items;
    }
    set templates(value: Array<TemplateDto>) {
        this.templateService.items = value;
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
    get inscriptionMembre(): InscriptionMembreDto {
        return this.inscriptionMembreService.item;
    }
    set inscriptionMembre(value: InscriptionMembreDto) {
        this.inscriptionMembreService.item = value;
    }
    get inscriptionMembres(): Array<InscriptionMembreDto> {
        return this.inscriptionMembreService.items;
    }
    set inscriptionMembres(value: Array<InscriptionMembreDto>) {
        this.inscriptionMembreService.items = value;
    }
    get projectState(): ProjectStateDto {
        return this.projectStateService.item;
    }
    set projectState(value: ProjectStateDto) {
        this.projectStateService.item = value;
    }
    get projectStates(): Array<ProjectStateDto> {
        return this.projectStateService.items;
    }
    set projectStates(value: Array<ProjectStateDto>) {
        this.projectStateService.items = value;
    }

    public hideViewDialog() {
        this.viewDialog = false;
    }

    get items(): Array<ProjectDto> {
        return this.service.items;
    }

    set items(value: Array<ProjectDto>) {
        this.service.items = value;
    }

    get item(): ProjectDto {
        return this.service.item;
    }

    set item(value: ProjectDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): ProjectCriteria {
        return this.service.criteria;
    }

    set criteria(value: ProjectCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
