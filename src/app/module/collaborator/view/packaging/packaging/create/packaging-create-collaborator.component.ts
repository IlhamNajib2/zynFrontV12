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



import {PackagingCollaboratorService} from 'src/app/shared/service/collaborator/packaging/PackagingCollaborator.service';
import {PackagingDto} from 'src/app/shared/model/packaging/Packaging.model';
import {PackagingCriteria} from 'src/app/shared/criteria/packaging/PackagingCriteria.model';
import {CategoryPackagingDto} from 'src/app/shared/model/category/CategoryPackaging.model';
import {CategoryPackagingCollaboratorService} from 'src/app/shared/service/collaborator/category/CategoryPackagingCollaborator.service';
@Component({
  selector: 'app-packaging-create-collaborator',
  templateUrl: './packaging-create-collaborator.component.html'
})
export class PackagingCreateCollaboratorComponent  implements OnInit {

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



   private _validPackagingCode = true;
    private _validCategoryPackagingCode = true;
    private _validCategoryPackagingName = true;

	constructor(private service: PackagingCollaboratorService , private categoryPackagingService: CategoryPackagingCollaboratorService, @Inject(PLATFORM_ID) private platformId? ) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.categoryPackagingService.findAll().subscribe((data) => this.categoryPackagings = data);
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
                this.item = new PackagingDto();
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
        this.validPackagingCode = value;
    }



    public  validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validatePackagingCode();
    }

    public validatePackagingCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validPackagingCode = false;
        } else {
            this.validPackagingCode = true;
        }
    }



    get categoryPackaging(): CategoryPackagingDto {
        return this.categoryPackagingService.item;
    }
    set categoryPackaging(value: CategoryPackagingDto) {
        this.categoryPackagingService.item = value;
    }
    get categoryPackagings(): Array<CategoryPackagingDto> {
        return this.categoryPackagingService.items;
    }
    set categoryPackagings(value: Array<CategoryPackagingDto>) {
        this.categoryPackagingService.items = value;
    }
    get createCategoryPackagingDialog(): boolean {
        return this.categoryPackagingService.createDialog;
    }
    set createCategoryPackagingDialog(value: boolean) {
        this.categoryPackagingService.createDialog= value;
    }



    get validPackagingCode(): boolean {
        return this._validPackagingCode;
    }

    set validPackagingCode(value: boolean) {
         this._validPackagingCode = value;
    }

    get validCategoryPackagingCode(): boolean {
        return this._validCategoryPackagingCode;
    }
    set validCategoryPackagingCode(value: boolean) {
        this._validCategoryPackagingCode = value;
    }
    get validCategoryPackagingName(): boolean {
        return this._validCategoryPackagingName;
    }
    set validCategoryPackagingName(value: boolean) {
        this._validCategoryPackagingName = value;
    }


    get items(): Array<PackagingDto> {
        return this.service.items;
    }

    set items(value: Array<PackagingDto>) {
        this.service.items = value;
    }

    get item(): PackagingDto {
        return this.service.item;
    }

    set item(value: PackagingDto) {
        this.service.item = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get criteria(): PackagingCriteria {
        return this.service.criteria;
    }

    set criteria(value: PackagingCriteria) {
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
