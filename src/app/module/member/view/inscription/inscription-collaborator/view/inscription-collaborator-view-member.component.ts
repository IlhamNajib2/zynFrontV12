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


import {InscriptionCollaboratorMemberService} from 'src/app/shared/service/member/inscription/InscriptionCollaboratorMember.service';
import {InscriptionCollaboratorDto} from 'src/app/shared/model/inscription/InscriptionCollaborator.model';
import {InscriptionCollaboratorCriteria} from 'src/app/shared/criteria/inscription/InscriptionCollaboratorCriteria.model';

import {CollaboratorDto} from 'src/app/shared/model/collaborator/Collaborator.model';
import {CollaboratorMemberService} from 'src/app/shared/service/member/collaborator/CollaboratorMember.service';
import {InscriptionMembreDto} from 'src/app/shared/model/inscription/InscriptionMembre.model';
import {InscriptionMembreMemberService} from 'src/app/shared/service/member/inscription/InscriptionMembreMember.service';
import {InscriptionCollaboratorTypeDto} from 'src/app/shared/model/inscription/InscriptionCollaboratorType.model';
import {InscriptionCollaboratorTypeMemberService} from 'src/app/shared/service/member/inscription/InscriptionCollaboratorTypeMember.service';
import {InscriptionMembreStateDto} from 'src/app/shared/model/inscription/InscriptionMembreState.model';
import {InscriptionMembreStateMemberService} from 'src/app/shared/service/member/inscription/InscriptionMembreStateMember.service';
import {PackagingDto} from 'src/app/shared/model/packaging/Packaging.model';
import {PackagingMemberService} from 'src/app/shared/service/member/packaging/PackagingMember.service';
import {InscriptionCollaboratorStateDto} from 'src/app/shared/model/inscription/InscriptionCollaboratorState.model';
import {InscriptionCollaboratorStateMemberService} from 'src/app/shared/service/member/inscription/InscriptionCollaboratorStateMember.service';
import {MemberDto} from 'src/app/shared/model/collaborator/Member.model';
import {MemberMemberService} from 'src/app/shared/service/member/collaborator/MemberMember.service';
@Component({
  selector: 'app-inscription-collaborator-view-member',
  templateUrl: './inscription-collaborator-view-member.component.html'
})
export class InscriptionCollaboratorViewMemberComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;


    inscriptionMembres = new InscriptionMembreDto();
    inscriptionMembress: Array<InscriptionMembreDto> = [];

    constructor(private service: InscriptionCollaboratorMemberService, private collaboratorService: CollaboratorMemberService, private inscriptionMembreService: InscriptionMembreMemberService, private inscriptionCollaboratorTypeService: InscriptionCollaboratorTypeMemberService, private inscriptionMembreStateService: InscriptionMembreStateMemberService, private packagingService: PackagingMemberService, private inscriptionCollaboratorStateService: InscriptionCollaboratorStateMemberService, private memberService: MemberMemberService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
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
    get collaborator(): CollaboratorDto {
        return this.collaboratorService.item;
    }
    set collaborator(value: CollaboratorDto) {
        this.collaboratorService.item = value;
    }
    get collaborators(): Array<CollaboratorDto> {
        return this.collaboratorService.items;
    }
    set collaborators(value: Array<CollaboratorDto>) {
        this.collaboratorService.items = value;
    }
    get inscriptionCollaboratorState(): InscriptionCollaboratorStateDto {
        return this.inscriptionCollaboratorStateService.item;
    }
    set inscriptionCollaboratorState(value: InscriptionCollaboratorStateDto) {
        this.inscriptionCollaboratorStateService.item = value;
    }
    get inscriptionCollaboratorStates(): Array<InscriptionCollaboratorStateDto> {
        return this.inscriptionCollaboratorStateService.items;
    }
    set inscriptionCollaboratorStates(value: Array<InscriptionCollaboratorStateDto>) {
        this.inscriptionCollaboratorStateService.items = value;
    }
    get packaging(): PackagingDto {
        return this.packagingService.item;
    }
    set packaging(value: PackagingDto) {
        this.packagingService.item = value;
    }
    get packagings(): Array<PackagingDto> {
        return this.packagingService.items;
    }
    set packagings(value: Array<PackagingDto>) {
        this.packagingService.items = value;
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
    get inscriptionCollaboratorType(): InscriptionCollaboratorTypeDto {
        return this.inscriptionCollaboratorTypeService.item;
    }
    set inscriptionCollaboratorType(value: InscriptionCollaboratorTypeDto) {
        this.inscriptionCollaboratorTypeService.item = value;
    }
    get inscriptionCollaboratorTypes(): Array<InscriptionCollaboratorTypeDto> {
        return this.inscriptionCollaboratorTypeService.items;
    }
    set inscriptionCollaboratorTypes(value: Array<InscriptionCollaboratorTypeDto>) {
        this.inscriptionCollaboratorTypeService.items = value;
    }

    public hideViewDialog() {
        this.viewDialog = false;
    }

    get items(): Array<InscriptionCollaboratorDto> {
        return this.service.items;
    }

    set items(value: Array<InscriptionCollaboratorDto>) {
        this.service.items = value;
    }

    get item(): InscriptionCollaboratorDto {
        return this.service.item;
    }

    set item(value: InscriptionCollaboratorDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): InscriptionCollaboratorCriteria {
        return this.service.criteria;
    }

    set criteria(value: InscriptionCollaboratorCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
