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



import {CategoryTemplateMemberService} from 'src/app/shared/service/member/template/CategoryTemplateMember.service';
import {CategoryTemplateDto} from 'src/app/shared/model/template/CategoryTemplate.model';
import {CategoryTemplateCriteria} from 'src/app/shared/criteria/template/CategoryTemplateCriteria.model';
@Component({
  selector: 'app-category-template-create-member',
  templateUrl: './category-template-create-member.component.html'
})
export class CategoryTemplateCreateMemberComponent  implements OnInit {

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



   private _validCategoryTemplateCode = true;
   private _validCategoryTemplateName = true;

	constructor(private service: CategoryTemplateMemberService , @Inject(PLATFORM_ID) private platformId? ) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
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
                this.item = new CategoryTemplateDto();
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
        this.validCategoryTemplateCode = value;
        this.validCategoryTemplateName = value;
    }



    public  validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateCategoryTemplateCode();
        this.validateCategoryTemplateName();
    }

    public validateCategoryTemplateCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validCategoryTemplateCode = false;
        } else {
            this.validCategoryTemplateCode = true;
        }
    }
    public validateCategoryTemplateName(){
        if (this.stringUtilService.isEmpty(this.item.name)) {
        this.errorMessages.push('Name non valide');
        this.validCategoryTemplateName = false;
        } else {
            this.validCategoryTemplateName = true;
        }
    }






    get validCategoryTemplateCode(): boolean {
        return this._validCategoryTemplateCode;
    }

    set validCategoryTemplateCode(value: boolean) {
         this._validCategoryTemplateCode = value;
    }
    get validCategoryTemplateName(): boolean {
        return this._validCategoryTemplateName;
    }

    set validCategoryTemplateName(value: boolean) {
         this._validCategoryTemplateName = value;
    }



    get items(): Array<CategoryTemplateDto> {
        return this.service.items;
    }

    set items(value: Array<CategoryTemplateDto>) {
        this.service.items = value;
    }

    get item(): CategoryTemplateDto {
        return this.service.item;
    }

    set item(value: CategoryTemplateDto) {
        this.service.item = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get criteria(): CategoryTemplateCriteria {
        return this.service.criteria;
    }

    set criteria(value: CategoryTemplateCriteria) {
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
