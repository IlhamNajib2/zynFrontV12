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



import {InscriptionCollaboratorInfluencerService} from 'src/app/shared/service/influencer/inscription/InscriptionCollaboratorInfluencer.service';
import {InscriptionCollaboratorDto} from 'src/app/shared/model/inscription/InscriptionCollaborator.model';
import {InscriptionCollaboratorCriteria} from 'src/app/shared/criteria/inscription/InscriptionCollaboratorCriteria.model';
import {CollaboratorDto} from 'src/app/shared/model/collaborator/Collaborator.model';
import {CollaboratorInfluencerService} from 'src/app/shared/service/influencer/collaborator/CollaboratorInfluencer.service';
import {InscriptionMembreDto} from 'src/app/shared/model/inscription/InscriptionMembre.model';
import {InscriptionMembreInfluencerService} from 'src/app/shared/service/influencer/inscription/InscriptionMembreInfluencer.service';
import {InscriptionCollaboratorTypeDto} from 'src/app/shared/model/inscription/InscriptionCollaboratorType.model';
import {InscriptionCollaboratorTypeInfluencerService} from 'src/app/shared/service/influencer/inscription/InscriptionCollaboratorTypeInfluencer.service';
import {InscriptionMembreStateDto} from 'src/app/shared/model/inscription/InscriptionMembreState.model';
import {InscriptionMembreStateInfluencerService} from 'src/app/shared/service/influencer/inscription/InscriptionMembreStateInfluencer.service';
import {PackagingDto} from 'src/app/shared/model/packaging/Packaging.model';
import {PackagingInfluencerService} from 'src/app/shared/service/influencer/packaging/PackagingInfluencer.service';
import {InscriptionCollaboratorStateDto} from 'src/app/shared/model/inscription/InscriptionCollaboratorState.model';
import {InscriptionCollaboratorStateInfluencerService} from 'src/app/shared/service/influencer/inscription/InscriptionCollaboratorStateInfluencer.service';
import {MemberDto} from 'src/app/shared/model/collaborator/Member.model';
import {MemberInfluencerService} from 'src/app/shared/service/influencer/collaborator/MemberInfluencer.service';
@Component({
  selector: 'app-inscription-collaborator-create-influencer',
  templateUrl: './inscription-collaborator-create-influencer.component.html'
})
export class InscriptionCollaboratorCreateInfluencerComponent  implements OnInit {

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

    private _inscriptionMembresElement = new InscriptionMembreDto();


    private _validPackagingCode = true;
    private _validCollaboratorDescription = true;
    private _validInscriptionCollaboratorStateCode = true;
    private _validInscriptionCollaboratorStateName = true;
    private _validInscriptionCollaboratorTypeCode = true;
    private _validInscriptionCollaboratorTypeName = true;

	constructor(private service: InscriptionCollaboratorInfluencerService , private collaboratorService: CollaboratorInfluencerService, private inscriptionMembreService: InscriptionMembreInfluencerService, private inscriptionCollaboratorTypeService: InscriptionCollaboratorTypeInfluencerService, private inscriptionMembreStateService: InscriptionMembreStateInfluencerService, private packagingService: PackagingInfluencerService, private inscriptionCollaboratorStateService: InscriptionCollaboratorStateInfluencerService, private memberService: MemberInfluencerService, @Inject(PLATFORM_ID) private platformId? ) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.inscriptionMembresElement.member = new MemberDto();
        this.memberService.findAll().subscribe((data) => this.members = data);
        this.inscriptionMembresElement.inscriptionMembreState = new InscriptionMembreStateDto();
        this.inscriptionMembreStateService.findAll().subscribe((data) => this.inscriptionMembreStates = data);
        this.packagingService.findAll().subscribe((data) => this.packagings = data);
        this.collaboratorService.findAll().subscribe((data) => this.collaborators = data);
        this.inscriptionCollaboratorStateService.findAll().subscribe((data) => this.inscriptionCollaboratorStates = data);
        this.inscriptionCollaboratorTypeService.findAll().subscribe((data) => this.inscriptionCollaboratorTypes = data);
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
                this.item = new InscriptionCollaboratorDto();
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



    validateInscriptionMembres(){
        this.errorMessages = new Array();
    }


    public  setValidation(value: boolean){
    }

    public addInscriptionMembres() {
        if( this.item.inscriptionMembres == null )
            this.item.inscriptionMembres = new Array<InscriptionMembreDto>();
       this.validateInscriptionMembres();
       if (this.errorMessages.length === 0) {
              this.item.inscriptionMembres.push({... this.inscriptionMembresElement});
              this.inscriptionMembresElement = new InscriptionMembreDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deleteinscriptionMembres(p: InscriptionMembreDto) {
        this.item.inscriptionMembres.forEach((element, index) => {
            if (element === p) { this.item.inscriptionMembres.splice(index, 1); }
        });
    }

    public editinscriptionMembres(p: InscriptionMembreDto) {
        this.inscriptionMembresElement = {... p};
        this.activeTab = 0;
    }


    public  validateForm(): void{
        this.errorMessages = new Array<string>();
    }



    public async openCreateInscriptionCollaboratorState(inscriptionCollaboratorState: string) {
    const isPermistted = await this.roleService.isPermitted('InscriptionCollaboratorState', 'add');
    if(isPermistted) {
         this.inscriptionCollaboratorState = new InscriptionCollaboratorStateDto();
         this.createInscriptionCollaboratorStateDialog = true;
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
    public async openCreateInscriptionCollaboratorType(inscriptionCollaboratorType: string) {
    const isPermistted = await this.roleService.isPermitted('InscriptionCollaboratorType', 'add');
    if(isPermistted) {
         this.inscriptionCollaboratorType = new InscriptionCollaboratorTypeDto();
         this.createInscriptionCollaboratorTypeDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
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
    get createCollaboratorDialog(): boolean {
        return this.collaboratorService.createDialog;
    }
    set createCollaboratorDialog(value: boolean) {
        this.collaboratorService.createDialog= value;
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
    get createInscriptionCollaboratorStateDialog(): boolean {
        return this.inscriptionCollaboratorStateService.createDialog;
    }
    set createInscriptionCollaboratorStateDialog(value: boolean) {
        this.inscriptionCollaboratorStateService.createDialog= value;
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
    get createPackagingDialog(): boolean {
        return this.packagingService.createDialog;
    }
    set createPackagingDialog(value: boolean) {
        this.packagingService.createDialog= value;
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
    get createInscriptionCollaboratorTypeDialog(): boolean {
        return this.inscriptionCollaboratorTypeService.createDialog;
    }
    set createInscriptionCollaboratorTypeDialog(value: boolean) {
        this.inscriptionCollaboratorTypeService.createDialog= value;
    }




    get validPackagingCode(): boolean {
        return this._validPackagingCode;
    }
    set validPackagingCode(value: boolean) {
        this._validPackagingCode = value;
    }
    get validCollaboratorDescription(): boolean {
        return this._validCollaboratorDescription;
    }
    set validCollaboratorDescription(value: boolean) {
        this._validCollaboratorDescription = value;
    }
    get validInscriptionCollaboratorStateCode(): boolean {
        return this._validInscriptionCollaboratorStateCode;
    }
    set validInscriptionCollaboratorStateCode(value: boolean) {
        this._validInscriptionCollaboratorStateCode = value;
    }
    get validInscriptionCollaboratorStateName(): boolean {
        return this._validInscriptionCollaboratorStateName;
    }
    set validInscriptionCollaboratorStateName(value: boolean) {
        this._validInscriptionCollaboratorStateName = value;
    }
    get validInscriptionCollaboratorTypeCode(): boolean {
        return this._validInscriptionCollaboratorTypeCode;
    }
    set validInscriptionCollaboratorTypeCode(value: boolean) {
        this._validInscriptionCollaboratorTypeCode = value;
    }
    get validInscriptionCollaboratorTypeName(): boolean {
        return this._validInscriptionCollaboratorTypeName;
    }
    set validInscriptionCollaboratorTypeName(value: boolean) {
        this._validInscriptionCollaboratorTypeName = value;
    }

    get inscriptionMembresElement(): InscriptionMembreDto {
        if( this._inscriptionMembresElement == null )
            this._inscriptionMembresElement = new InscriptionMembreDto();
        return this._inscriptionMembresElement;
    }

    set inscriptionMembresElement(value: InscriptionMembreDto) {
        this._inscriptionMembresElement = value;
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

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get criteria(): InscriptionCollaboratorCriteria {
        return this.service.criteria;
    }

    set criteria(value: InscriptionCollaboratorCriteria) {
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
