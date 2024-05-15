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




import {ProjectCollaboratorService} from 'src/app/shared/service/collaborator/project/ProjectCollaborator.service';
import {ProjectDto} from 'src/app/shared/model/project/Project.model';
import {ProjectCriteria} from 'src/app/shared/criteria/project/ProjectCriteria.model';


import {InscriptionMembreDto} from 'src/app/shared/model/inscription/InscriptionMembre.model';
import {InscriptionMembreCollaboratorService} from 'src/app/shared/service/collaborator/inscription/InscriptionMembreCollaborator.service';
import {ProjectStateDto} from 'src/app/shared/model/project/ProjectState.model';
import {ProjectStateCollaboratorService} from 'src/app/shared/service/collaborator/project/ProjectStateCollaborator.service';
import {TemplateDto} from 'src/app/shared/model/template/Template.model';
import {TemplateCollaboratorService} from 'src/app/shared/service/collaborator/template/TemplateCollaborator.service';
import {DomainTemplateDto} from 'src/app/shared/model/template/DomainTemplate.model';
import {DomainTemplateCollaboratorService} from 'src/app/shared/service/collaborator/template/DomainTemplateCollaborator.service';
import {ProjectTemplateDto} from 'src/app/shared/model/template/ProjectTemplate.model';
import {ProjectTemplateCollaboratorService} from 'src/app/shared/service/collaborator/template/ProjectTemplateCollaborator.service';

@Component({
  selector: 'app-project-edit-collaborator',
  templateUrl: './project-edit-collaborator.component.html'
})
export class ProjectEditCollaboratorComponent implements OnInit {

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


    private _projectTemplatesElement = new ProjectTemplateDto();

    private _validProjectCode = true;

    private _validProjectStateCode = true;
    private _validDomainTemplateCode = true;
    private _validDomainTemplateName = true;


    private _projectTemplates: Array<ProjectTemplateDto> = [];

    constructor(private service: ProjectCollaboratorService , private inscriptionMembreService: InscriptionMembreCollaboratorService, private projectStateService: ProjectStateCollaboratorService, private templateService: TemplateCollaboratorService, private domainTemplateService: DomainTemplateCollaboratorService, private projectTemplateService: ProjectTemplateCollaboratorService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
        this.templateService.findAll().subscribe(data => this.prepareProjectTemplates(data));
        this.projectTemplatesElement.template = new TemplateDto();
        this.templateService.findAll().subscribe((data) => this.templates = data);

        this.projectStateService.findAll().subscribe((data) => this.projectStates = data);
        this.inscriptionMembreService.findAll().subscribe((data) => this.inscriptionMembres = data);
        this.domainTemplateService.findAll().subscribe((data) => this.domainTemplates = data);
    }

    public prepareEdit() {
        this.item.generatedDate = this.service.format(this.item.generatedDate);
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
            this.item = new ProjectDto();
        } , error =>{
            console.log(error);
        });
    }



    public hideEditDialog() {
        this.editDialog = false;
        this.setValidation(true);
    }




    prepareProjectTemplates(templates: Array<TemplateDto>): void{
        if( templates != null){
            templates.forEach(e => {
                const projectTemplate = new ProjectTemplateDto();
                projectTemplate.template = e;
                this.projectTemplates.push(projectTemplate);
            });
        }
    }

    public setValidation(value: boolean){
        this.validProjectCode = value;
    }

    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateProjectCode();
    }

    public validateProjectCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validProjectCode = false;
        } else {
            this.validProjectCode = true;
        }
    }




   public async openCreateProjectState(projectState: string) {
        const isPermistted = await this.roleService.isPermitted('ProjectState', 'edit');
        if (isPermistted) {
             this.projectState = new ProjectStateDto();
             this.createProjectStateDialog = true;
        }else {
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    get template(): TemplateDto {
        return this.templateService.item;
    }
    set template(value: TemplateDto) {
        this.templateService.item = value;
    }
    get templates(): Array<TemplateDto> {
        return this.templateService.items;
    }
    set templates(value: Array<TemplateDto>) {
        this.templateService.items = value;
    }
    get createTemplateDialog(): boolean {
        return this.templateService.createDialog;
    }
    set createTemplateDialog(value: boolean) {
        this.templateService.createDialog= value;
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
    get inscriptionMembre(): InscriptionMembreDto {
        return this.inscriptionMembreService.item;
    }
    set inscriptionMembre(value: InscriptionMembreDto) {
        this.inscriptionMembreService.item = value;
    }
    get inscriptionMembres(): Array<InscriptionMembreDto> {
        return this.inscriptionMembreService.items;
    }
    set inscriptionMembres(value: Array<InscriptionMembreDto>) {
        this.inscriptionMembreService.items = value;
    }
    get createInscriptionMembreDialog(): boolean {
        return this.inscriptionMembreService.createDialog;
    }
    set createInscriptionMembreDialog(value: boolean) {
        this.inscriptionMembreService.createDialog= value;
    }
    get projectState(): ProjectStateDto {
        return this.projectStateService.item;
    }
    set projectState(value: ProjectStateDto) {
        this.projectStateService.item = value;
    }
    get projectStates(): Array<ProjectStateDto> {
        return this.projectStateService.items;
    }
    set projectStates(value: Array<ProjectStateDto>) {
        this.projectStateService.items = value;
    }
    get createProjectStateDialog(): boolean {
        return this.projectStateService.createDialog;
    }
    set createProjectStateDialog(value: boolean) {
        this.projectStateService.createDialog= value;
    }

    get projectTemplates(): Array<ProjectTemplateDto> {
        if( this._projectTemplates == null )
            this._projectTemplates = new Array();
         return this._projectTemplates;
    }

    set projectTemplates(value: Array<ProjectTemplateDto>) {
        this._projectTemplates = value;
    }
    get projectTemplatesElement(): ProjectTemplateDto {
        if( this._projectTemplatesElement == null )
            this._projectTemplatesElement = new ProjectTemplateDto();
         return this._projectTemplatesElement;
    }

    set projectTemplatesElement(value: ProjectTemplateDto) {
        this._projectTemplatesElement = value;
    }

    get validProjectCode(): boolean {
        return this._validProjectCode;
    }
    set validProjectCode(value: boolean) {
        this._validProjectCode = value;
    }

    get validProjectStateCode(): boolean {
        return this._validProjectStateCode;
    }
    set validProjectStateCode(value: boolean) {
        this._validProjectStateCode = value;
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

	get items(): Array<ProjectDto> {
        return this.service.items;
    }

    set items(value: Array<ProjectDto>) {
        this.service.items = value;
    }

    get item(): ProjectDto {
        return this.service.item;
    }

    set item(value: ProjectDto) {
        this.service.item = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get criteria(): ProjectCriteria {
        return this.service.criteria;
    }

    set criteria(value: ProjectCriteria) {
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
