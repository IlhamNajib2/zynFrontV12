import {Component, OnInit, Input} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {FileTempDto} from 'src/app/zynerator/dto/FileTempDto.model';

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



import {InscriptionMembreCollaboratorService} from 'src/app/shared/service/collaborator/inscription/InscriptionMembreCollaborator.service';
import {InscriptionMembreDto} from 'src/app/shared/model/inscription/InscriptionMembre.model';
import {InscriptionMembreCriteria} from 'src/app/shared/criteria/inscription/InscriptionMembreCriteria.model';
import {InscriptionMembreStateDto} from 'src/app/shared/model/inscription/InscriptionMembreState.model';
import {InscriptionMembreStateCollaboratorService} from 'src/app/shared/service/collaborator/inscription/InscriptionMembreStateCollaborator.service';
import {InscriptionCollaboratorDto} from 'src/app/shared/model/inscription/InscriptionCollaborator.model';
import {InscriptionCollaboratorCollaboratorService} from 'src/app/shared/service/collaborator/inscription/InscriptionCollaboratorCollaborator.service';
import {MemberDto} from 'src/app/shared/model/collaborator/Member.model';
import {MemberCollaboratorService} from 'src/app/shared/service/collaborator/collaborator/MemberCollaborator.service';
@Component({
  selector: 'app-inscription-membre-create-collaborator',
  templateUrl: './inscription-membre-create-collaborator.component.html'
})
export class InscriptionMembreCreateCollaboratorComponent  implements OnInit {

	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;
    private _activeTab = 0;
    private _file: any;
    private _files: any;



    private _validInscriptionMembreStateCode = true;
    private _validInscriptionMembreStateName = true;

	constructor(private service: InscriptionMembreCollaboratorService , private inscriptionMembreStateService: InscriptionMembreStateCollaboratorService, private inscriptionCollaboratorService: InscriptionCollaboratorCollaboratorService, private memberService: MemberCollaboratorService, @Inject(PLATFORM_ID) private platformId? ) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.memberService.findAll().subscribe((data) => this.members = data);
        this.inscriptionMembreStateService.findAll().subscribe((data) => this.inscriptionMembreStates = data);
        this.inscriptionCollaboratorService.findAll().subscribe((data) => this.inscriptionCollaborators = data);
    }


    public save(): void {
        this.submitted = true;
        this.validateForm();
        if (this.errorMessages.length === 0) {
            this.saveWithShowOption(false);
        } else {
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs sur le formulaire'});
        }
    }

    public saveWithShowOption(showList: boolean) {
        this.service.save().subscribe(item => {
            if (item != null) {
                this.items.push({...item});
                this.createDialog = false;
                this.submitted = false;
                this.item = new InscriptionMembreDto();
            } else {
                this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Element existant'});
            }

        }, error => {
            console.log(error);
        });
    }


    public hideCreateDialog() {
        this.createDialog = false;
        this.setValidation(true);
    }





    public  setValidation(value: boolean){
    }



    public  validateForm(): void{
        this.errorMessages = new Array<string>();
    }



    public async openCreateInscriptionCollaborator(inscriptionCollaborator: string) {
    const isPermistted = await this.roleService.isPermitted('InscriptionCollaborator', 'add');
    if(isPermistted) {
         this.inscriptionCollaborator = new InscriptionCollaboratorDto();
         this.createInscriptionCollaboratorDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateInscriptionMembreState(inscriptionMembreState: string) {
    const isPermistted = await this.roleService.isPermitted('InscriptionMembreState', 'add');
    if(isPermistted) {
         this.inscriptionMembreState = new InscriptionMembreStateDto();
         this.createInscriptionMembreStateDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
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
    get createInscriptionCollaboratorDialog(): boolean {
        return this.inscriptionCollaboratorService.createDialog;
    }
    set createInscriptionCollaboratorDialog(value: boolean) {
        this.inscriptionCollaboratorService.createDialog= value;
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
    get createMemberDialog(): boolean {
        return this.memberService.createDialog;
    }
    set createMemberDialog(value: boolean) {
        this.memberService.createDialog= value;
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
    get createInscriptionMembreStateDialog(): boolean {
        return this.inscriptionMembreStateService.createDialog;
    }
    set createInscriptionMembreStateDialog(value: boolean) {
        this.inscriptionMembreStateService.createDialog= value;
    }




    get validInscriptionMembreStateCode(): boolean {
        return this._validInscriptionMembreStateCode;
    }
    set validInscriptionMembreStateCode(value: boolean) {
        this._validInscriptionMembreStateCode = value;
    }
    get validInscriptionMembreStateName(): boolean {
        return this._validInscriptionMembreStateName;
    }
    set validInscriptionMembreStateName(value: boolean) {
        this._validInscriptionMembreStateName = value;
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

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get criteria(): InscriptionMembreCriteria {
        return this.service.criteria;
    }

    set criteria(value: InscriptionMembreCriteria) {
        this.service.criteria = value;
    }

    get dateFormat() {
        return environment.dateFormatCreate;
    }

    get dateFormatColumn() {
        return environment.dateFormatCreate;
    }

    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }

    get errorMessages(): string[] {
        if (this._errorMessages == null) {
            this._errorMessages = new Array<string>();
        }
        return this._errorMessages;
    }

    set errorMessages(value: string[]) {
        this._errorMessages = value;
    }

    get validate(): boolean {
        return this.service.validate;
    }

    set validate(value: boolean) {
        this.service.validate = value;
    }


    get activeTab(): number {
        return this._activeTab;
    }

    set activeTab(value: number) {
        this._activeTab = value;
    }


}
