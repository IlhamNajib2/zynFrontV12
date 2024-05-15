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



import {TemplateCollaboratorService} from 'src/app/shared/service/collaborator/template/TemplateCollaborator.service';
import {TemplateDto} from 'src/app/shared/model/template/Template.model';
import {TemplateCriteria} from 'src/app/shared/criteria/template/TemplateCriteria.model';
import {CategoryTemplateDto} from 'src/app/shared/model/template/CategoryTemplate.model';
import {CategoryTemplateCollaboratorService} from 'src/app/shared/service/collaborator/template/CategoryTemplateCollaborator.service';
import {TechnologyDto} from 'src/app/shared/model/template/Technology.model';
import {TechnologyCollaboratorService} from 'src/app/shared/service/collaborator/template/TechnologyCollaborator.service';
import {LevelTemplateDto} from 'src/app/shared/model/template/LevelTemplate.model';
import {LevelTemplateCollaboratorService} from 'src/app/shared/service/collaborator/template/LevelTemplateCollaborator.service';
import {TypeTemplateDto} from 'src/app/shared/model/template/TypeTemplate.model';
import {TypeTemplateCollaboratorService} from 'src/app/shared/service/collaborator/template/TypeTemplateCollaborator.service';
import {DomainTemplateDto} from 'src/app/shared/model/template/DomainTemplate.model';
import {DomainTemplateCollaboratorService} from 'src/app/shared/service/collaborator/template/DomainTemplateCollaborator.service';
import {MemberDto} from 'src/app/shared/model/collaborator/Member.model';
import {MemberCollaboratorService} from 'src/app/shared/service/collaborator/collaborator/MemberCollaborator.service';
@Component({
  selector: 'app-template-create-collaborator',
  templateUrl: './template-create-collaborator.component.html'
})
export class TemplateCreateCollaboratorComponent  implements OnInit {

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



   private _validTemplateCode = true;
   private _validTemplateName = true;
    private _validCategoryTemplateCode = true;
    private _validCategoryTemplateName = true;
    private _validTypeTemplateCode = true;
    private _validTypeTemplateName = true;
    private _validLevelTemplateCode = true;
    private _validLevelTemplateName = true;
    private _validDomainTemplateCode = true;
    private _validDomainTemplateName = true;
    private _validTechnologyCode = true;
    private _validTechnologyName = true;

	constructor(private service: TemplateCollaboratorService , private categoryTemplateService: CategoryTemplateCollaboratorService, private technologyService: TechnologyCollaboratorService, private levelTemplateService: LevelTemplateCollaboratorService, private typeTemplateService: TypeTemplateCollaboratorService, private domainTemplateService: DomainTemplateCollaboratorService, private memberService: MemberCollaboratorService, @Inject(PLATFORM_ID) private platformId? ) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.categoryTemplateService.findAll().subscribe((data) => this.categoryTemplates = data);
        this.typeTemplateService.findAll().subscribe((data) => this.typeTemplates = data);
        this.levelTemplateService.findAll().subscribe((data) => this.levelTemplates = data);
        this.domainTemplateService.findAll().subscribe((data) => this.domainTemplates = data);
        this.memberService.findAll().subscribe((data) => this.members = data);
        this.technologyService.findAll().subscribe((data) => this.technologys = data);
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
                this.item = new TemplateDto();
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
        this.validTemplateCode = value;
        this.validTemplateName = value;
    }



    public  validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTemplateCode();
        this.validateTemplateName();
    }

    public validateTemplateCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validTemplateCode = false;
        } else {
            this.validTemplateCode = true;
        }
    }
    public validateTemplateName(){
        if (this.stringUtilService.isEmpty(this.item.name)) {
        this.errorMessages.push('Name non valide');
        this.validTemplateName = false;
        } else {
            this.validTemplateName = true;
        }
    }


    public async openCreateLevelTemplate(levelTemplate: string) {
    const isPermistted = await this.roleService.isPermitted('LevelTemplate', 'add');
    if(isPermistted) {
         this.levelTemplate = new LevelTemplateDto();
         this.createLevelTemplateDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateTechnology(technology: string) {
    const isPermistted = await this.roleService.isPermitted('Technology', 'add');
    if(isPermistted) {
         this.technology = new TechnologyDto();
         this.createTechnologyDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateCategoryTemplate(categoryTemplate: string) {
    const isPermistted = await this.roleService.isPermitted('CategoryTemplate', 'add');
    if(isPermistted) {
         this.categoryTemplate = new CategoryTemplateDto();
         this.createCategoryTemplateDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateDomainTemplate(domainTemplate: string) {
    const isPermistted = await this.roleService.isPermitted('DomainTemplate', 'add');
    if(isPermistted) {
         this.domainTemplate = new DomainTemplateDto();
         this.createDomainTemplateDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateTypeTemplate(typeTemplate: string) {
    const isPermistted = await this.roleService.isPermitted('TypeTemplate', 'add');
    if(isPermistted) {
         this.typeTemplate = new TypeTemplateDto();
         this.createTypeTemplateDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get levelTemplate(): LevelTemplateDto {
        return this.levelTemplateService.item;
    }
    set levelTemplate(value: LevelTemplateDto) {
        this.levelTemplateService.item = value;
    }
    get levelTemplates(): Array<LevelTemplateDto> {
        return this.levelTemplateService.items;
    }
    set levelTemplates(value: Array<LevelTemplateDto>) {
        this.levelTemplateService.items = value;
    }
    get createLevelTemplateDialog(): boolean {
        return this.levelTemplateService.createDialog;
    }
    set createLevelTemplateDialog(value: boolean) {
        this.levelTemplateService.createDialog= value;
    }
    get technology(): TechnologyDto {
        return this.technologyService.item;
    }
    set technology(value: TechnologyDto) {
        this.technologyService.item = value;
    }
    get technologys(): Array<TechnologyDto> {
        return this.technologyService.items;
    }
    set technologys(value: Array<TechnologyDto>) {
        this.technologyService.items = value;
    }
    get createTechnologyDialog(): boolean {
        return this.technologyService.createDialog;
    }
    set createTechnologyDialog(value: boolean) {
        this.technologyService.createDialog= value;
    }
    get categoryTemplate(): CategoryTemplateDto {
        return this.categoryTemplateService.item;
    }
    set categoryTemplate(value: CategoryTemplateDto) {
        this.categoryTemplateService.item = value;
    }
    get categoryTemplates(): Array<CategoryTemplateDto> {
        return this.categoryTemplateService.items;
    }
    set categoryTemplates(value: Array<CategoryTemplateDto>) {
        this.categoryTemplateService.items = value;
    }
    get createCategoryTemplateDialog(): boolean {
        return this.categoryTemplateService.createDialog;
    }
    set createCategoryTemplateDialog(value: boolean) {
        this.categoryTemplateService.createDialog= value;
    }
    get domainTemplate(): DomainTemplateDto {
        return this.domainTemplateService.item;
    }
    set domainTemplate(value: DomainTemplateDto) {
        this.domainTemplateService.item = value;
    }
    get domainTemplates(): Array<DomainTemplateDto> {
        return this.domainTemplateService.items;
    }
    set domainTemplates(value: Array<DomainTemplateDto>) {
        this.domainTemplateService.items = value;
    }
    get createDomainTemplateDialog(): boolean {
        return this.domainTemplateService.createDialog;
    }
    set createDomainTemplateDialog(value: boolean) {
        this.domainTemplateService.createDialog= value;
    }
    get member(): MemberDto {
        return this.memberService.item;
    }
    set member(value: MemberDto) {
        this.memberService.item = value;
    }
    get members(): Array<MemberDto> {
        return this.memberService.items;
    }
    set members(value: Array<MemberDto>) {
        this.memberService.items = value;
    }
    get createMemberDialog(): boolean {
        return this.memberService.createDialog;
    }
    set createMemberDialog(value: boolean) {
        this.memberService.createDialog= value;
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



    get validTemplateCode(): boolean {
        return this._validTemplateCode;
    }

    set validTemplateCode(value: boolean) {
         this._validTemplateCode = value;
    }
    get validTemplateName(): boolean {
        return this._validTemplateName;
    }

    set validTemplateName(value: boolean) {
         this._validTemplateName = value;
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
    get validLevelTemplateCode(): boolean {
        return this._validLevelTemplateCode;
    }
    set validLevelTemplateCode(value: boolean) {
        this._validLevelTemplateCode = value;
    }
    get validLevelTemplateName(): boolean {
        return this._validLevelTemplateName;
    }
    set validLevelTemplateName(value: boolean) {
        this._validLevelTemplateName = value;
    }
    get validDomainTemplateCode(): boolean {
        return this._validDomainTemplateCode;
    }
    set validDomainTemplateCode(value: boolean) {
        this._validDomainTemplateCode = value;
    }
    get validDomainTemplateName(): boolean {
        return this._validDomainTemplateName;
    }
    set validDomainTemplateName(value: boolean) {
        this._validDomainTemplateName = value;
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


    get items(): Array<TemplateDto> {
        return this.service.items;
    }

    set items(value: Array<TemplateDto>) {
        this.service.items = value;
    }

    get item(): TemplateDto {
        return this.service.item;
    }

    set item(value: TemplateDto) {
        this.service.item = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get criteria(): TemplateCriteria {
        return this.service.criteria;
    }

    set criteria(value: TemplateCriteria) {
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
