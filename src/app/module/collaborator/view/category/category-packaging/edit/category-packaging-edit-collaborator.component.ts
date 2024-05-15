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




import {CategoryPackagingCollaboratorService} from 'src/app/shared/service/collaborator/category/CategoryPackagingCollaborator.service';
import {CategoryPackagingDto} from 'src/app/shared/model/category/CategoryPackaging.model';
import {CategoryPackagingCriteria} from 'src/app/shared/criteria/category/CategoryPackagingCriteria.model';



@Component({
  selector: 'app-category-packaging-edit-collaborator',
  templateUrl: './category-packaging-edit-collaborator.component.html'
})
export class CategoryPackagingEditCollaboratorComponent implements OnInit {

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



    private _validCategoryPackagingCode = true;
    private _validCategoryPackagingName = true;




    constructor(private service: CategoryPackagingCollaboratorService , @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
    }

    public prepareEdit() {
    }



 public edit(): void {
        this.submitted = true;
        this.prepareEdit();
        this.validateForm();
        if (this.errorMessages.length === 0) {
            this.editWithShowOption(false);
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de corrigé les erreurs sur le formulaire'
            });
        }
    }

    public editWithShowOption(showList: boolean) {
        this.service.edit().subscribe(religion=>{
            const myIndex = this.items.findIndex(e => e.id === this.item.id);
            this.items[myIndex] = religion;
            this.editDialog = false;
            this.submitted = false;
            this.item = new CategoryPackagingDto();
        } , error =>{
            console.log(error);
        });
    }



    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public setValidation(value: boolean){
        this.validCategoryPackagingCode = value;
        this.validCategoryPackagingName = value;
    }

    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateCategoryPackagingCode();
        this.validateCategoryPackagingName();
    }

    public validateCategoryPackagingCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validCategoryPackagingCode = false;
        } else {
            this.validCategoryPackagingCode = true;
        }
    }

    public validateCategoryPackagingName(){
        if (this.stringUtilService.isEmpty(this.item.name)) {
            this.errorMessages.push('Name non valide');
            this.validCategoryPackagingName = false;
        } else {
            this.validCategoryPackagingName = true;
        }
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


	get items(): Array<CategoryPackagingDto> {
        return this.service.items;
    }

    set items(value: Array<CategoryPackagingDto>) {
        this.service.items = value;
    }

    get item(): CategoryPackagingDto {
        return this.service.item;
    }

    set item(value: CategoryPackagingDto) {
        this.service.item = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): CategoryPackagingCriteria {
        return this.service.criteria;
    }

    set criteria(value: CategoryPackagingCriteria) {
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
