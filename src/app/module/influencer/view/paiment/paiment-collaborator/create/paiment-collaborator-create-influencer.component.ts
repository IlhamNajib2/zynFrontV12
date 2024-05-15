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
  selector: 'app-paiment-collaborator-create-influencer',
  templateUrl: './paiment-collaborator-create-influencer.component.html'
})
export class PaimentCollaboratorCreateInfluencerComponent  implements OnInit {

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



   private _validPaimentCollaboratorName = true;
   private _validPaimentCollaboratorCode = true;
    private _validPaimentCollaboratorStateCode = true;

	constructor(private service: PaimentCollaboratorInfluencerService , private couponDetailService: CouponDetailInfluencerService, private paimentCollaboratorStateService: PaimentCollaboratorStateInfluencerService, private inscriptionCollaboratorService: InscriptionCollaboratorInfluencerService, @Inject(PLATFORM_ID) private platformId? ) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.couponDetailService.findAll().subscribe((data) => this.couponDetails = data);
        this.inscriptionCollaboratorService.findAll().subscribe((data) => this.inscriptionCollaborators = data);
        this.paimentCollaboratorStateService.findAll().subscribe((data) => this.paimentCollaboratorStates = data);
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
                this.item = new PaimentCollaboratorDto();
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
        this.validPaimentCollaboratorName = value;
        this.validPaimentCollaboratorCode = value;
    }



    public  validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validatePaimentCollaboratorName();
        this.validatePaimentCollaboratorCode();
    }

    public validatePaimentCollaboratorName(){
        if (this.stringUtilService.isEmpty(this.item.name)) {
        this.errorMessages.push('Name non valide');
        this.validPaimentCollaboratorName = false;
        } else {
            this.validPaimentCollaboratorName = true;
        }
    }
    public validatePaimentCollaboratorCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validPaimentCollaboratorCode = false;
        } else {
            this.validPaimentCollaboratorCode = true;
        }
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
    get createCouponDetailDialog(): boolean {
        return this.couponDetailService.createDialog;
    }
    set createCouponDetailDialog(value: boolean) {
        this.couponDetailService.createDialog= value;
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
    get createPaimentCollaboratorStateDialog(): boolean {
        return this.paimentCollaboratorStateService.createDialog;
    }
    set createPaimentCollaboratorStateDialog(value: boolean) {
        this.paimentCollaboratorStateService.createDialog= value;
    }



    get validPaimentCollaboratorName(): boolean {
        return this._validPaimentCollaboratorName;
    }

    set validPaimentCollaboratorName(value: boolean) {
         this._validPaimentCollaboratorName = value;
    }
    get validPaimentCollaboratorCode(): boolean {
        return this._validPaimentCollaboratorCode;
    }

    set validPaimentCollaboratorCode(value: boolean) {
         this._validPaimentCollaboratorCode = value;
    }

    get validPaimentCollaboratorStateCode(): boolean {
        return this._validPaimentCollaboratorStateCode;
    }
    set validPaimentCollaboratorStateCode(value: boolean) {
        this._validPaimentCollaboratorStateCode = value;
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

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get criteria(): PaimentCollaboratorCriteria {
        return this.service.criteria;
    }

    set criteria(value: PaimentCollaboratorCriteria) {
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
