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


import {InscriptionMembreInfluencerService} from 'src/app/shared/service/influencer/inscription/InscriptionMembreInfluencer.service';
import {InscriptionMembreDto} from 'src/app/shared/model/inscription/InscriptionMembre.model';
import {InscriptionMembreCriteria} from 'src/app/shared/criteria/inscription/InscriptionMembreCriteria.model';

import {InscriptionMembreStateDto} from 'src/app/shared/model/inscription/InscriptionMembreState.model';
import {InscriptionMembreStateInfluencerService} from 'src/app/shared/service/influencer/inscription/InscriptionMembreStateInfluencer.service';
import {InscriptionCollaboratorDto} from 'src/app/shared/model/inscription/InscriptionCollaborator.model';
import {InscriptionCollaboratorInfluencerService} from 'src/app/shared/service/influencer/inscription/InscriptionCollaboratorInfluencer.service';
import {MemberDto} from 'src/app/shared/model/collaborator/Member.model';
import {MemberInfluencerService} from 'src/app/shared/service/influencer/collaborator/MemberInfluencer.service';
@Component({
  selector: 'app-inscription-membre-view-influencer',
  templateUrl: './inscription-membre-view-influencer.component.html'
})
export class InscriptionMembreViewInfluencerComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: InscriptionMembreInfluencerService, private inscriptionMembreStateService: InscriptionMembreStateInfluencerService, private inscriptionCollaboratorService: InscriptionCollaboratorInfluencerService, private memberService: MemberInfluencerService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
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
    get inscriptionMembreState(): InscriptionMembreStateDto {
        return this.inscriptionMembreStateService.item;
    }
    set inscriptionMembreState(value: InscriptionMembreStateDto) {
        this.inscriptionMembreStateService.item = value;
    }
    get inscriptionMembreStates(): Array<InscriptionMembreStateDto> {
        return this.inscriptionMembreStateService.items;
    }
    set inscriptionMembreStates(value: Array<InscriptionMembreStateDto>) {
        this.inscriptionMembreStateService.items = value;
    }

    public hideViewDialog() {
        this.viewDialog = false;
    }

    get items(): Array<InscriptionMembreDto> {
        return this.service.items;
    }

    set items(value: Array<InscriptionMembreDto>) {
        this.service.items = value;
    }

    get item(): InscriptionMembreDto {
        return this.service.item;
    }

    set item(value: InscriptionMembreDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): InscriptionMembreCriteria {
        return this.service.criteria;
    }

    set criteria(value: InscriptionMembreCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
