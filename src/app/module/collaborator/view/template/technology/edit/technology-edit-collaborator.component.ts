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




import {TechnologyCollaboratorService} from 'src/app/shared/service/collaborator/template/TechnologyCollaborator.service';
import {TechnologyDto} from 'src/app/shared/model/template/Technology.model';
import {TechnologyCriteria} from 'src/app/shared/criteria/template/TechnologyCriteria.model';


import {TypeTemplateDto} from 'src/app/shared/model/template/TypeTemplate.model';
import {TypeTemplateCollaboratorService} from 'src/app/shared/service/collaborator/template/TypeTemplateCollaborator.service';

@Component({
  selector: 'app-technology-edit-collaborator',
  templateUrl: './technology-edit-collaborator.component.html'
})
export class TechnologyEditCollaboratorComponent implements OnInit {

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



    private _validTechnologyCode = true;
    private _validTechnologyName = true;

    private _validTypeTemplateCode = true;
    private _validTypeTemplateName = true;



    constructor(private service: TechnologyCollaboratorService , private typeTemplateService: TypeTemplateCollaboratorService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.typeTemplateService.findAll().subscribe((data) => this.typeTemplates = data);
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
            this.item = new TechnologyDto();
        } , error =>{
            console.log(error);
        });
    }



    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }





    public setValidation(value: boolean){
        this.validTechnologyCode = value;
        this.validTechnologyName = value;
    }

    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTechnologyCode();
        this.validateTechnologyName();
    }

    public validateTechnologyCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validTechnologyCode = false;
        } else {
            this.validTechnologyCode = true;
        }
    }

    public validateTechnologyName(){
        if (this.stringUtilService.isEmpty(this.item.name)) {
            this.errorMessages.push('Name non valide');
            this.validTechnologyName = false;
        } else {
            this.validTechnologyName = true;
        }
    }




   public async openCreateTypeTemplate(typeTemplate: string) {
        const isPermistted = await this.roleService.isPermitted('TypeTemplate', 'edit');
        if (isPermistted) {
             this.typeTemplate = new TypeTemplateDto();
             this.createTypeTemplateDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    get typeTemplate(): TypeTemplateDto {
        return this.typeTemplateService.item;
    }
    set typeTemplate(value: TypeTemplateDto) {
        this.typeTemplateService.item = value;
    }
    get typeTemplates(): Array<TypeTemplateDto> {
        return this.typeTemplateService.items;
    }
    set typeTemplates(value: Array<TypeTemplateDto>) {
        this.typeTemplateService.items = value;
    }
    get createTypeTemplateDialog(): boolean {
        return this.typeTemplateService.createDialog;
    }
    set createTypeTemplateDialog(value: boolean) {
        this.typeTemplateService.createDialog= value;
    }


    get validTechnologyCode(): boolean {
        return this._validTechnologyCode;
    }
    set validTechnologyCode(value: boolean) {
        this._validTechnologyCode = value;
    }
    get validTechnologyName(): boolean {
        return this._validTechnologyName;
    }
    set validTechnologyName(value: boolean) {
        this._validTechnologyName = value;
    }

    get validTypeTemplateCode(): boolean {
        return this._validTypeTemplateCode;
    }
    set validTypeTemplateCode(value: boolean) {
        this._validTypeTemplateCode = value;
    }
    get validTypeTemplateName(): boolean {
        return this._validTypeTemplateName;
    }
    set validTypeTemplateName(value: boolean) {
        this._validTypeTemplateName = value;
    }

	get items(): Array<TechnologyDto> {
        return this.service.items;
    }

    set items(value: Array<TechnologyDto>) {
        this.service.items = value;
    }

    get item(): TechnologyDto {
        return this.service.item;
    }

    set item(value: TechnologyDto) {
        this.service.item = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): TechnologyCriteria {
        return this.service.criteria;
    }

    set criteria(value: TechnologyCriteria) {
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
