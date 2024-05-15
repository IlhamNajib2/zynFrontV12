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


import {CouponMemberService} from 'src/app/shared/service/member/coupon/CouponMember.service';
import {CouponDto} from 'src/app/shared/model/coupon/Coupon.model';
import {CouponCriteria} from 'src/app/shared/criteria/coupon/CouponCriteria.model';

import {CouponDetailDto} from 'src/app/shared/model/coupon/CouponDetail.model';
import {CouponDetailMemberService} from 'src/app/shared/service/member/coupon/CouponDetailMember.service';
import {InfluencerDto} from 'src/app/shared/model/coupon/Influencer.model';
import {InfluencerMemberService} from 'src/app/shared/service/member/coupon/InfluencerMember.service';
import {PackagingDto} from 'src/app/shared/model/packaging/Packaging.model';
import {PackagingMemberService} from 'src/app/shared/service/member/packaging/PackagingMember.service';
@Component({
  selector: 'app-coupon-view-member',
  templateUrl: './coupon-view-member.component.html'
})
export class CouponViewMemberComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;


    couponDetails = new CouponDetailDto();
    couponDetailss: Array<CouponDetailDto> = [];

    constructor(private service: CouponMemberService, private couponDetailService: CouponDetailMemberService, private influencerService: InfluencerMemberService, private packagingService: PackagingMemberService){
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

    public hideViewDialog() {
        this.viewDialog = false;
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

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): CouponCriteria {
        return this.service.criteria;
    }

    set criteria(value: CouponCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
