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


import {CouponDetailAdminService} from 'src/app/shared/service/admin/coupon/CouponDetailAdmin.service';
import {CouponDetailDto} from 'src/app/shared/model/coupon/CouponDetail.model';
import {CouponDetailCriteria} from 'src/app/shared/criteria/coupon/CouponDetailCriteria.model';

import {CouponDto} from 'src/app/shared/model/coupon/Coupon.model';
import {CouponAdminService} from 'src/app/shared/service/admin/coupon/CouponAdmin.service';
import {PackagingDto} from 'src/app/shared/model/packaging/Packaging.model';
import {PackagingAdminService} from 'src/app/shared/service/admin/packaging/PackagingAdmin.service';
@Component({
  selector: 'app-coupon-detail-view-admin',
  templateUrl: './coupon-detail-view-admin.component.html'
})
export class CouponDetailViewAdminComponent implements OnInit {


	protected _submitted = false;
    protected _errorMessages = new Array<string>();

    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;



    constructor(private service: CouponDetailAdminService, private couponService: CouponAdminService, private packagingService: PackagingAdminService){
		this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
	}

    ngOnInit(): void {
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

    get items(): Array<CouponDetailDto> {
        return this.service.items;
    }

    set items(value: Array<CouponDetailDto>) {
        this.service.items = value;
    }

    get item(): CouponDetailDto {
        return this.service.item;
    }

    set item(value: CouponDetailDto) {
        this.service.item = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): CouponDetailCriteria {
        return this.service.criteria;
    }

    set criteria(value: CouponDetailCriteria) {
        this.service.criteria = value;
    }

    get dateFormat(){
        return environment.dateFormatView;
    }

    get dateFormatColumn(){
        return environment.dateFormatList;
    }


}
