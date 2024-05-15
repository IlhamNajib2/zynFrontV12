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


import {TechnologyInfluencerService} from 'src/app/shared/service/influencer/template/TechnologyInfluencer.service';
import {TechnologyDto} from 'src/app/shared/model/template/Technology.model';
import {TechnologyCriteria} from 'src/app/shared/criteria/template/TechnologyCriteria.model';

import {TypeTemplateDto} from 'src/app/shared/model/template/TypeTemplate.model';
import {TypeTemplateInfluencerService} from 'src/app/shared/service/influencer/template/TypeTemplateInfluencer.service';
@Component({
  selector: 'app-technology-view-influencer',
  templateUrl: './technology-view-influencer.component.html'
})
export class TechnologyViewInfluencerComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: TechnologyInfluencerService, private typeTemplateService: TypeTemplateInfluencerService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
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

    get items(): Array<TechnologyDto> {
        return this.service.items;
    }

    set items(value: Array<TechnologyDto>) {
        this.service.items = value;
    }

    get item(): TechnologyDto {
        return this.service.item;
    }

    set item(value: TechnologyDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): TechnologyCriteria {
        return this.service.criteria;
    }

    set criteria(value: TechnologyCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
