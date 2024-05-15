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



import {PaimentInfluencerMemberService} from 'src/app/shared/service/member/paiment/PaimentInfluencerMember.service';
import {PaimentInfluencerDto} from 'src/app/shared/model/paiment/PaimentInfluencer.model';
import {PaimentInfluencerCriteria} from 'src/app/shared/criteria/paiment/PaimentInfluencerCriteria.model';
import {CouponDto} from 'src/app/shared/model/coupon/Coupon.model';
import {CouponMemberService} from 'src/app/shared/service/member/coupon/CouponMember.service';
import {InfluencerDto} from 'src/app/shared/model/coupon/Influencer.model';
import {InfluencerMemberService} from 'src/app/shared/service/member/coupon/InfluencerMember.service';
import {PaimentInfluencerStateDto} from 'src/app/shared/model/project/PaimentInfluencerState.model';
import {PaimentInfluencerStateMemberService} from 'src/app/shared/service/member/project/PaimentInfluencerStateMember.service';
@Component({
  selector: 'app-paiment-influencer-create-member',
  templateUrl: './paiment-influencer-create-member.component.html'
})
export class PaimentInfluencerCreateMemberComponent  implements OnInit {

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



   private _validPaimentInfluencerName = true;
   private _validPaimentInfluencerCode = true;
    private _validInfluencerNickName = true;
    private _validCouponCode = true;
    private _validCouponName = true;
    private _validPaimentInfluencerStateCode = true;

	constructor(private service: PaimentInfluencerMemberService , private couponService: CouponMemberService, private influencerService: InfluencerMemberService, private paimentInfluencerStateService: PaimentInfluencerStateMemberService, @Inject(PLATFORM_ID) private platformId? ) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.influencerService.findAll().subscribe((data) => this.influencers = data);
        this.couponService.findAll().subscribe((data) => this.coupons = data);
        this.paimentInfluencerStateService.findAll().subscribe((data) => this.paimentInfluencerStates = data);
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
                this.item = new PaimentInfluencerDto();
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
        this.validPaimentInfluencerName = value;
        this.validPaimentInfluencerCode = value;
    }



    public  validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validatePaimentInfluencerName();
        this.validatePaimentInfluencerCode();
    }

    public validatePaimentInfluencerName(){
        if (this.stringUtilService.isEmpty(this.item.name)) {
        this.errorMessages.push('Name non valide');
        this.validPaimentInfluencerName = false;
        } else {
            this.validPaimentInfluencerName = true;
        }
    }
    public validatePaimentInfluencerCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validPaimentInfluencerCode = false;
        } else {
            this.validPaimentInfluencerCode = true;
        }
    }



    get influencer(): InfluencerDto {
        return this.influencerService.item;
    }
    set influencer(value: InfluencerDto) {
        this.influencerService.item = value;
    }
    get influencers(): Array<InfluencerDto> {
        return this.influencerService.items;
    }
    set influencers(value: Array<InfluencerDto>) {
        this.influencerService.items = value;
    }
    get createInfluencerDialog(): boolean {
        return this.influencerService.createDialog;
    }
    set createInfluencerDialog(value: boolean) {
        this.influencerService.createDialog= value;
    }
    get paimentInfluencerState(): PaimentInfluencerStateDto {
        return this.paimentInfluencerStateService.item;
    }
    set paimentInfluencerState(value: PaimentInfluencerStateDto) {
        this.paimentInfluencerStateService.item = value;
    }
    get paimentInfluencerStates(): Array<PaimentInfluencerStateDto> {
        return this.paimentInfluencerStateService.items;
    }
    set paimentInfluencerStates(value: Array<PaimentInfluencerStateDto>) {
        this.paimentInfluencerStateService.items = value;
    }
    get createPaimentInfluencerStateDialog(): boolean {
        return this.paimentInfluencerStateService.createDialog;
    }
    set createPaimentInfluencerStateDialog(value: boolean) {
        this.paimentInfluencerStateService.createDialog= value;
    }
    get coupon(): CouponDto {
        return this.couponService.item;
    }
    set coupon(value: CouponDto) {
        this.couponService.item = value;
    }
    get coupons(): Array<CouponDto> {
        return this.couponService.items;
    }
    set coupons(value: Array<CouponDto>) {
        this.couponService.items = value;
    }
    get createCouponDialog(): boolean {
        return this.couponService.createDialog;
    }
    set createCouponDialog(value: boolean) {
        this.couponService.createDialog= value;
    }



    get validPaimentInfluencerName(): boolean {
        return this._validPaimentInfluencerName;
    }

    set validPaimentInfluencerName(value: boolean) {
         this._validPaimentInfluencerName = value;
    }
    get validPaimentInfluencerCode(): boolean {
        return this._validPaimentInfluencerCode;
    }

    set validPaimentInfluencerCode(value: boolean) {
         this._validPaimentInfluencerCode = value;
    }

    get validInfluencerNickName(): boolean {
        return this._validInfluencerNickName;
    }
    set validInfluencerNickName(value: boolean) {
        this._validInfluencerNickName = value;
    }
    get validCouponCode(): boolean {
        return this._validCouponCode;
    }
    set validCouponCode(value: boolean) {
        this._validCouponCode = value;
    }
    get validCouponName(): boolean {
        return this._validCouponName;
    }
    set validCouponName(value: boolean) {
        this._validCouponName = value;
    }
    get validPaimentInfluencerStateCode(): boolean {
        return this._validPaimentInfluencerStateCode;
    }
    set validPaimentInfluencerStateCode(value: boolean) {
        this._validPaimentInfluencerStateCode = value;
    }


    get items(): Array<PaimentInfluencerDto> {
        return this.service.items;
    }

    set items(value: Array<PaimentInfluencerDto>) {
        this.service.items = value;
    }

    get item(): PaimentInfluencerDto {
        return this.service.item;
    }

    set item(value: PaimentInfluencerDto) {
        this.service.item = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get criteria(): PaimentInfluencerCriteria {
        return this.service.criteria;
    }

    set criteria(value: PaimentInfluencerCriteria) {
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
