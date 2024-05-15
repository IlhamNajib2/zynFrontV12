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


import {PaimentCollaboratorInfluencerService} from 'src/app/shared/service/influencer/paiment/PaimentCollaboratorInfluencer.service';
import {PaimentCollaboratorDto} from 'src/app/shared/model/paiment/PaimentCollaborator.model';
import {PaimentCollaboratorCriteria} from 'src/app/shared/criteria/paiment/PaimentCollaboratorCriteria.model';

import {CouponDetailDto} from 'src/app/shared/model/coupon/CouponDetail.model';
import {CouponDetailInfluencerService} from 'src/app/shared/service/influencer/coupon/CouponDetailInfluencer.service';
import {PaimentCollaboratorStateDto} from 'src/app/shared/model/project/PaimentCollaboratorState.model';
import {PaimentCollaboratorStateInfluencerService} from 'src/app/shared/service/influencer/project/PaimentCollaboratorStateInfluencer.service';
import {InscriptionCollaboratorDto} from 'src/app/shared/model/inscription/InscriptionCollaborator.model';
import {InscriptionCollaboratorInfluencerService} from 'src/app/shared/service/influencer/inscription/InscriptionCollaboratorInfluencer.service';
@Component({
  selector: 'app-paiment-collaborator-view-influencer',
  templateUrl: './paiment-collaborator-view-influencer.component.html'
})
export class PaimentCollaboratorViewInfluencerComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: PaimentCollaboratorInfluencerService, private couponDetailService: CouponDetailInfluencerService, private paimentCollaboratorStateService: PaimentCollaboratorStateInfluencerService, private inscriptionCollaboratorService: InscriptionCollaboratorInfluencerService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
    }


    get couponDetail(): CouponDetailDto {
        return this.couponDetailService.item;
    }
    set couponDetail(value: CouponDetailDto) {
        this.couponDetailService.item = value;
    }
    get couponDetails(): Array<CouponDetailDto> {
        return this.couponDetailService.items;
    }
    set couponDetails(value: Array<CouponDetailDto>) {
        this.couponDetailService.items = value;
    }
    get inscriptionCollaborator(): InscriptionCollaboratorDto {
        return this.inscriptionCollaboratorService.item;
    }
    set inscriptionCollaborator(value: InscriptionCollaboratorDto) {
        this.inscriptionCollaboratorService.item = value;
    }
    get inscriptionCollaborators(): Array<InscriptionCollaboratorDto> {
        return this.inscriptionCollaboratorService.items;
    }
    set inscriptionCollaborators(value: Array<InscriptionCollaboratorDto>) {
        this.inscriptionCollaboratorService.items = value;
    }
    get paimentCollaboratorState(): PaimentCollaboratorStateDto {
        return this.paimentCollaboratorStateService.item;
    }
    set paimentCollaboratorState(value: PaimentCollaboratorStateDto) {
        this.paimentCollaboratorStateService.item = value;
    }
    get paimentCollaboratorStates(): Array<PaimentCollaboratorStateDto> {
        return this.paimentCollaboratorStateService.items;
    }
    set paimentCollaboratorStates(value: Array<PaimentCollaboratorStateDto>) {
        this.paimentCollaboratorStateService.items = value;
    }

    public hideViewDialog() {
        this.viewDialog = false;
    }

    get items(): Array<PaimentCollaboratorDto> {
        return this.service.items;
    }

    set items(value: Array<PaimentCollaboratorDto>) {
        this.service.items = value;
    }

    get item(): PaimentCollaboratorDto {
        return this.service.item;
    }

    set item(value: PaimentCollaboratorDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): PaimentCollaboratorCriteria {
        return this.service.criteria;
    }

    set criteria(value: PaimentCollaboratorCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
