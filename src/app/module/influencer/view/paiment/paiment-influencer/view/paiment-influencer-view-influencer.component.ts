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


import {PaimentInfluencerInfluencerService} from 'src/app/shared/service/influencer/paiment/PaimentInfluencerInfluencer.service';
import {PaimentInfluencerDto} from 'src/app/shared/model/paiment/PaimentInfluencer.model';
import {PaimentInfluencerCriteria} from 'src/app/shared/criteria/paiment/PaimentInfluencerCriteria.model';

import {CouponDto} from 'src/app/shared/model/coupon/Coupon.model';
import {CouponInfluencerService} from 'src/app/shared/service/influencer/coupon/CouponInfluencer.service';
import {InfluencerDto} from 'src/app/shared/model/coupon/Influencer.model';
import {InfluencerInfluencerService} from 'src/app/shared/service/influencer/coupon/InfluencerInfluencer.service';
import {PaimentInfluencerStateDto} from 'src/app/shared/model/project/PaimentInfluencerState.model';
import {PaimentInfluencerStateInfluencerService} from 'src/app/shared/service/influencer/project/PaimentInfluencerStateInfluencer.service';
@Component({
  selector: 'app-paiment-influencer-view-influencer',
  templateUrl: './paiment-influencer-view-influencer.component.html'
})
export class PaimentInfluencerViewInfluencerComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: PaimentInfluencerInfluencerService, private couponService: CouponInfluencerService, private influencerService: InfluencerInfluencerService, private paimentInfluencerStateService: PaimentInfluencerStateInfluencerService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
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

    public hideViewDialog() {
        this.viewDialog = false;
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

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): PaimentInfluencerCriteria {
        return this.service.criteria;
    }

    set criteria(value: PaimentInfluencerCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
