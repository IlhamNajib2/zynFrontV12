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



import {CouponInfluencerService} from 'src/app/shared/service/influencer/coupon/CouponInfluencer.service';
import {CouponDto} from 'src/app/shared/model/coupon/Coupon.model';
import {CouponCriteria} from 'src/app/shared/criteria/coupon/CouponCriteria.model';
import {CouponDetailDto} from 'src/app/shared/model/coupon/CouponDetail.model';
import {CouponDetailInfluencerService} from 'src/app/shared/service/influencer/coupon/CouponDetailInfluencer.service';
import {InfluencerDto} from 'src/app/shared/model/coupon/Influencer.model';
import {InfluencerInfluencerService} from 'src/app/shared/service/influencer/coupon/InfluencerInfluencer.service';
import {PackagingDto} from 'src/app/shared/model/packaging/Packaging.model';
import {PackagingInfluencerService} from 'src/app/shared/service/influencer/packaging/PackagingInfluencer.service';
@Component({
  selector: 'app-coupon-create-influencer',
  templateUrl: './coupon-create-influencer.component.html'
})
export class CouponCreateInfluencerComponent  implements OnInit {

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

    private _couponDetailsElement = new CouponDetailDto();


   private _validCouponCode = true;
   private _validCouponName = true;
    private _validInfluencerNickName = true;

	constructor(private service: CouponInfluencerService , private couponDetailService: CouponDetailInfluencerService, private influencerService: InfluencerInfluencerService, private packagingService: PackagingInfluencerService, @Inject(PLATFORM_ID) private platformId? ) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.couponDetailsElement.packaging = new PackagingDto();
        this.packagingService.findAll().subscribe((data) => this.packagings = data);
        this.influencerService.findAll().subscribe((data) => this.influencers = data);
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
                this.item = new CouponDto();
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



    validateCouponDetails(){
        this.errorMessages = new Array();
    }


    public  setValidation(value: boolean){
        this.validCouponCode = value;
        this.validCouponName = value;
    }

    public addCouponDetails() {
        if( this.item.couponDetails == null )
            this.item.couponDetails = new Array<CouponDetailDto>();
       this.validateCouponDetails();
       if (this.errorMessages.length === 0) {
              this.item.couponDetails.push({... this.couponDetailsElement});
              this.couponDetailsElement = new CouponDetailDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deletecouponDetails(p: CouponDetailDto) {
        this.item.couponDetails.forEach((element, index) => {
            if (element === p) { this.item.couponDetails.splice(index, 1); }
        });
    }

    public editcouponDetails(p: CouponDetailDto) {
        this.couponDetailsElement = {... p};
        this.activeTab = 0;
    }


    public  validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateCouponCode();
        this.validateCouponName();
    }

    public validateCouponCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validCouponCode = false;
        } else {
            this.validCouponCode = true;
        }
    }
    public validateCouponName(){
        if (this.stringUtilService.isEmpty(this.item.name)) {
        this.errorMessages.push('Name non valide');
        this.validCouponName = false;
        } else {
            this.validCouponName = true;
        }
    }


    public async openCreateInfluencer(influencer: string) {
    const isPermistted = await this.roleService.isPermitted('Influencer', 'add');
    if(isPermistted) {
         this.influencer = new InfluencerDto();
         this.createInfluencerDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
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

    get validInfluencerNickName(): boolean {
        return this._validInfluencerNickName;
    }
    set validInfluencerNickName(value: boolean) {
        this._validInfluencerNickName = value;
    }

    get couponDetailsElement(): CouponDetailDto {
        if( this._couponDetailsElement == null )
            this._couponDetailsElement = new CouponDetailDto();
        return this._couponDetailsElement;
    }

    set couponDetailsElement(value: CouponDetailDto) {
        this._couponDetailsElement = value;
    }

    get items(): Array<CouponDto> {
        return this.service.items;
    }

    set items(value: Array<CouponDto>) {
        this.service.items = value;
    }

    get item(): CouponDto {
        return this.service.item;
    }

    set item(value: CouponDto) {
        this.service.item = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get criteria(): CouponCriteria {
        return this.service.criteria;
    }

    set criteria(value: CouponCriteria) {
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
