import {Component, OnInit} from '@angular/core';
import {ProjectCollaboratorService} from 'src/app/shared/service/collaborator/project/ProjectCollaborator.service';
import {ProjectDto} from 'src/app/shared/model/project/Project.model';
import {ProjectCriteria} from 'src/app/shared/criteria/project/ProjectCriteria.model';


import {ConfirmationService, MessageService,MenuItem} from 'primeng/api';
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

import {AuthService} from 'src/app/zynerator/security/shared/service/Auth.service';
import {ExportService} from 'src/app/zynerator/util/Export.service';


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
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {color} from "chart.js/helpers";






@Component({
    selector: 'app-project-list-collaborator',
    templateUrl: './project-list-collaborator.component.html',
    styleUrls:['./project-list-collaborator.component.scss']
})
export class ProjectListCollaboratorComponent implements OnInit {

    protected fileName = 'Project';

    protected findByCriteriaShow = false;
    protected cols: any[] = [];
    protected excelPdfButons: MenuItem[];
    protected exportData: any[] = [];
    protected criteriaData: any[] = [];
    protected _totalRecords = 0;
    private _pdfName: string;


    protected datePipe: DatePipe;
    protected messageService: MessageService;
    protected confirmationService: ConfirmationService;
    protected roleService: RoleService;
    protected router: Router;
    protected stringUtilService: StringUtilService;
    protected authService: AuthService;
    protected exportService: ExportService;
    protected excelFile: File | undefined;
    protected enableSecurity = false;


    projectStates: Array<ProjectStateDto>;
    inscriptionMembres: Array<InscriptionMembreDto>;
    domainTemplates: Array<DomainTemplateDto>;


    constructor(private templateService:TemplateCollaboratorService,private projectCollaboratorService:ProjectCollaboratorService,private httpClient :HttpClient,private fb:FormBuilder,private service: ProjectCollaboratorService, private inscriptionMembreService: InscriptionMembreCollaboratorService, private projectStateService: ProjectStateCollaboratorService, private domainTemplateService: DomainTemplateCollaboratorService, private projectTemplateService: ProjectTemplateCollaboratorService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.authService = ServiceLocator.injector.get(AuthService);
        this.exportService = ServiceLocator.injector.get(ExportService);
    }

    ngOnInit(): void {
        this.findPaginatedByCriteria();
        this.initExport();
        this.initCol();
        this.loadProjectState();
        this.loadInscriptionMembre();
        this.loadDomainTemplate();


        this.service.getAllProject().subscribe(projectData => {
            this.projectData = projectData;
        });

        this.queryFormGroup=this.fb.group({
            query:this.fb.control("")
        })

        this.loadTemplates();
    }





    public onExcelFileSelected(event: any): void {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            this.excelFile = input.files[0];
        }
    }

    public importExcel(): void {
        if (this.excelFile) {
            this.service.importExcel(this.excelFile).subscribe(
                response => {
                    console.log('File uploaded successfully!', response);
                },
                error => {
                    console.error('Error uploading file:', error);
                }
            );
        }
    }

    public findPaginatedByCriteria() {
        this.service.findPaginatedByCriteria(this.criteria).subscribe(paginatedItems => {
            this.items = paginatedItems.list;
            this.totalRecords = paginatedItems.dataSize;
            this.selections = new Array<ProjectDto>();
        }, error => console.log(error));
    }

    public onPage(event: any) {
        this.criteria.page = event.page;
        this.criteria.maxResults = event.rows;
        this.findPaginatedByCriteria();
    }

    public async edit(dto: ProjectDto) {
        this.service.findByIdWithAssociatedList(dto).subscribe(res => {
            this.item = res;
            console.log(res);
            this.editDialog = true;
        });

    }

    public async view(dto: ProjectDto) {
        this.service.findByIdWithAssociatedList(dto).subscribe(res => {
            this.item = res;
            this.viewDialog = true;
        });
    }

    public async openCreate() {
        this.item = new ProjectDto();
        this.createDialog = true;
    }

    public async deleteMultiple() {
        this.confirmationService.confirm({
            message: 'Voulez-vous supprimer ces éléments ?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteMultiple().subscribe(() => {
                    this.items = this.items.filter(item => !this.selections.includes(item));
                    this.selections = new Array<ProjectDto>();
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Les éléments sélectionnés ont été supprimés',
                        life: 3000
                    });

                }, error => console.log(error));
            }
        });
    }


    public isSelectionDisabled(): boolean {
        return this.selections == null || this.selections.length == 0;
    }


    public async delete(dto: ProjectDto) {

        this.confirmationService.confirm({
            message: 'Voulez-vous supprimer cet élément ?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.delete(dto).subscribe(status => {
                    if (status > 0) {
                        const position = this.items.indexOf(dto);
                        position > -1 ? this.items.splice(position, 1) : false;
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Succès',
                            detail: 'Element Supprimé',
                            life: 3000
                        });
                    }

                }, error => console.log(error));
            }
        });

    }

    public async duplicate(dto: ProjectDto) {
        this.service.findByIdWithAssociatedList(dto).subscribe(
            res => {
                this.initDuplicate(res);
                this.item = res;
                this.item.id = null;
                this.createDialog = true;
            });
    }

    // TODO : check if correct
    public initExport(): void {
        this.excelPdfButons = [
            {
                label: 'CSV', icon: 'pi pi-file', command: () => {
                    this.prepareColumnExport();
                    this.exportService.exporterCSV(this.criteriaData, this.exportData, this.fileName);
                }
            },
            {
                label: 'XLS', icon: 'pi pi-file-excel', command: () => {
                    this.prepareColumnExport();
                    this.exportService.exporterExcel(this.criteriaData, this.exportData, this.fileName);
                }
            },
            {
                label: 'PDF', icon: 'pi pi-file-pdf', command: () => {
                    this.prepareColumnExport();
                    this.exportService.exporterPdf(this.criteriaData, this.exportData, this.fileName);
                }
            }
        ];
    }

    public exportPdf(dto: ProjectDto): void {
        this.service.exportPdf(dto).subscribe((data: ArrayBuffer) => {
            const blob = new Blob([data], {type: 'application/pdf'});
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = this.pdfName;
            link.setAttribute('target', '_blank'); // open link in new tab
            link.click();
            window.URL.revokeObjectURL(url);
        }, (error) => {
            console.error(error); // handle any errors that occur
        });
    }

    public showSearch(): void {
        this.findByCriteriaShow = !this.findByCriteriaShow;
    }


    update() {
        this.service.edit().subscribe(data => {
            const myIndex = this.items.findIndex(e => e.id === this.item.id);
            this.items[myIndex] = data;
            this.editDialog = false;
            this.item = new ProjectDto();
        }, error => {
            console.log(error);
        });
    }

    //public save() {
        //this.service.save().subscribe(item => {
      //      if (item != null) {
    //            this.items.push({...item});
  //              this.createDialog = false;
//
//
              //  this.item = new ProjectDto();
            //} else {
           //     this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Element existant'});
         //   }
       // }, error => {
         //   console.log(error);
        //});
    //}

// add


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'name', header: 'Name'},
            {field: 'generatedDate', header: 'Generated date'},
            {field: 'projectState?.code', header: 'Project state'},
            {field: 'inscriptionMembre?.id', header: 'Inscription membre'},
            {field: 'domainTemplate?.name', header: 'Domain template'},
        ];
    }


    public async loadProjectState() {
        this.projectStateService.findAllOptimized().subscribe(projectStates => this.projectStates = projectStates, error => console.log(error))
    }

    public async loadInscriptionMembre() {
        this.inscriptionMembreService.findAll().subscribe(inscriptionMembres => this.inscriptionMembres = inscriptionMembres, error => console.log(error))
    }

    public async loadDomainTemplate() {
        this.domainTemplateService.findAllOptimized().subscribe(domainTemplates => this.domainTemplates = domainTemplates, error => console.log(error))
    }


    public initDuplicate(res: ProjectDto) {
        if (res.projectTemplates != null) {
            res.projectTemplates.forEach(d => {
                d.project = null;
                d.id = null;
            });
        }
    }


    public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Code': e.code,
                'Name': e.name,
                'Generated date': this.datePipe.transform(e.generatedDate, 'dd/MM/yyyy hh:mm'),
                'Yaml': e.yaml,
                'Project state': e.projectState?.code,
                'Inscription membre': e.inscriptionMembre?.id,
                'Domain template': e.domainTemplate?.name,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport,
            'Name': this.criteria.name ? this.criteria.name : environment.emptyForExport,
            'Generated date Min': this.criteria.generatedDateFrom ? this.datePipe.transform(this.criteria.generatedDateFrom, this.dateFormat) : environment.emptyForExport,
            'Generated date Max': this.criteria.generatedDateTo ? this.datePipe.transform(this.criteria.generatedDateTo, this.dateFormat) : environment.emptyForExport,
            'Yaml': this.criteria.yaml ? this.criteria.yaml : environment.emptyForExport,
            //'Project state': this.criteria.projectState?.code ? this.criteria.projectState?.code : environment.emptyForExport ,
            //'Inscription membre': this.criteria.inscriptionMembre?.id ? this.criteria.inscriptionMembre?.id : environment.emptyForExport ,
            //'Domain template': this.criteria.domainTemplate?.name ? this.criteria.domainTemplate?.name : environment.emptyForExport ,
        }];
    }


    get items(): Array<ProjectDto> {
        return this.service.items;
    }

    set items(value: Array<ProjectDto>) {
        this.service.items = value;
    }

    get selections(): Array<ProjectDto> {
        return this.service.selections;
    }

    set selections(value: Array<ProjectDto>) {
        this.service.selections = value;
    }

    get item(): ProjectDto {
        return this.service.item;
    }

    set item(value: ProjectDto) {
        this.service.item = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get editDialog(): boolean {
        return this.service.editDialog;
    }

    set editDialog(value: boolean) {
        this.service.editDialog = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

    get criteria(): ProjectCriteria {
        return this.service.criteria;
    }

    set criteria(value: ProjectCriteria) {
        this.service.criteria = value;
    }

    get dateFormat() {
        return environment.dateFormatList;
    }


    get totalRecords(): number {
        return this._totalRecords;
    }

    set totalRecords(value: number) {
        this._totalRecords = value;
    }

    get pdfName(): string {
        return this._pdfName;
    }

    set pdfName(value: string) {
        this._pdfName = value;
    }

    get createActionIsValid(): boolean {
        return this.service.createActionIsValid;
    }

    set createActionIsValid(value: boolean) {
        this.service.createActionIsValid = value;
    }


    get editActionIsValid(): boolean {
        return this.service.editActionIsValid;
    }

    set editActionIsValid(value: boolean) {
        this.service.editActionIsValid = value;
    }

    get listActionIsValid(): boolean {
        return this.service.listActionIsValid;
    }

    set listActionIsValid(value: boolean) {
        this.service.listActionIsValid = value;
    }

    get deleteActionIsValid(): boolean {
        return this.service.deleteActionIsValid;
    }

    set deleteActionIsValid(value: boolean) {
        this.service.deleteActionIsValid = value;
    }


    get viewActionIsValid(): boolean {
        return this.service.viewActionIsValid;
    }

    set viewActionIsValid(value: boolean) {
        this.service.viewActionIsValid = value;
    }

    get duplicateActionIsValid(): boolean {
        return this.service.duplicateActionIsValid;
    }

    set duplicateActionIsValid(value: boolean) {
        this.service.duplicateActionIsValid = value;
    }

    get createAction(): string {
        return this.service.createAction;
    }

    set createAction(value: string) {
        this.service.createAction = value;
    }

    get listAction(): string {
        return this.service.listAction;
    }

    set listAction(value: string) {
        this.service.listAction = value;
    }

    get editAction(): string {
        return this.service.editAction;
    }

    set editAction(value: string) {
        this.service.editAction = value;
    }

    get deleteAction(): string {
        return this.service.deleteAction;
    }

    set deleteAction(value: string) {
        this.service.deleteAction = value;
    }

    get viewAction(): string {
        return this.service.viewAction;
    }

    set viewAction(value: string) {
        this.service.viewAction = value;
    }

    get duplicateAction(): string {
        return this.service.duplicateAction;
    }

    set duplicateAction(value: string) {
        this.service.duplicateAction = value;
    }

    get entityName(): string {
        return this.service.entityName;
    }

    set entityName(value: string) {
        this.service.entityName = value;
    }




    showYamlDialogVisible: boolean = false;
    separateContent: string = '';

    showYamlDialog(yamlContent: string): void {
        this.setView('yaml');
        this.separateContent = yamlContent; // Set content for the dialog
        this.showYamlDialogVisible = true; // Show the dialog
    }

    projectData: ProjectDto[] = [];

    protected readonly TemplateDto = TemplateDto;
    visible: boolean = false;

    showDialog() {
        // Vous pouvez ajouter ici la logique supplémentaire avant de naviguer, si nécessaire
        this.router.navigate(['/app/collaborator/template/template/list']);
    }


    show() {
        this.visible = true;
    }
    queryFormGroup!:FormGroup;
    messages=[{role:"system", content:"You are a helpful assistant."}];
    result:any;
    handleAskGPT() {
        let url='https://api.openai.com/v1/chat/completions';
        let httpHeaders=new HttpHeaders().set("Authorization","Bearer sk-proj-BOM7Krc0ENi0UijiiUvNT3BlbkFJN4WansIvuuQ6y2inXZX4");
        let payload={
            model:'gpt-3.5-turbo',
            messages:this.messages
        }
        this.messages.push({
            role:"user" , content:this.queryFormGroup.value.query
        })
        this.httpClient.post(url,payload,{headers:httpHeaders})
            .subscribe({
                next:(resp)=>{
                    this.result=resp;
                },
                error:(err)=>{
                    prompt("error",err);
                }

            })
    }

    showSidebar: boolean = false;

    toggleSidebar() {
        this.showSidebar = !this.showSidebar;
    }

    attributes: string = '';



    //format(): void {
    //const attributesArray = this.attributes.split(',').map(attr => attr.trim());
    //this.projectCollaboratorService.formatClassAttributes(this.className, attributesArray).subscribe(
    //  (data) => this.result = data,
    //(error) => this.resultt = 'Error formatting attributes'
    //);
    //}
    showCodePart: string = '';
    // Dans votre composant TypeScript

    showContentDefault: boolean = true;
    showDefaultView: boolean = true;
    showProjectView: boolean = false;
    showYmlView: boolean= false;
    showPrjctView: boolean= false;
    setView(view: string) {
        this.showDefaultView = view === 'default';
        this.showProjectView = view === 'project';
        this.showYmlView= view==='yaml';
        this.showPrjctView= view==='prjct';
        // Enregistrer l'état de la vue dans le stockage local
        localStorage.setItem('currentView', view);
    }

    showDefault() {
        this.setView('default');
        !this.selectedProject;
        this.showProjectDialogVisible = false;
    }

    showProject() {
        this.setView('project');
        !this.selecteddProject;
        this.showProjecttDialogVisible = false;
    }
    showYmll(){
        this.setView('yaml')
    }





    selectedTemplate: TemplateDto | null = null;
    templates: TemplateDto[] = [];
    displayDialog: boolean = false;
    loadTemplates(): void {
        this.templateService.getTemplates().subscribe((data: TemplateDto[]) => {
            this.templates = data;
        });
    }

    showTemplateDetails(template: TemplateDto): void {
        this.selectedTemplate = template;
        this.displayDialog = true;
    }
    projects: ProjectDto[] = [];
    selectedProject: ProjectDto | null = null;
    selecteddProject: ProjectDto | null = null;
    showProjectDialogVisible: boolean = false;
    showProjecttDialogVisible: boolean = false;


    showw(project: ProjectDto) {
        this.selectedProject = project;
        this.setView('prjct');
        this.showProjectDialogVisible = true;
    }
    showYamllDialog(project: ProjectDto): void {
        this.selecteddProject = project;
        this.setView('prjct');
        this.showProjecttDialogVisible = true;// Show the dialog
    }


    //save
    get submitted(): boolean {
        return this._submitted;
    }

    set submitted(value: boolean) {
        this._submitted = value;
    }
    protected _submitted = false;
    protected _errorMessages = new Array<string>();
    get errorMessages(): string[] {
        if (this._errorMessages == null) {
            this._errorMessages = new Array<string>();
        }
        return this._errorMessages;
    }

    set errorMessages(value: string[]) {
        this._errorMessages = value;
    }
    public  validateForm(): void{
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
    get validProjectCode(): boolean {
        return this._validProjectCode;
    }

    set validProjectCode(value: boolean) {
        this._validProjectCode = value;
    }
    private _validProjectCode = true;
    public saveWithShowOption(showList: boolean) {
        this.service.save().subscribe(item => {
            if (item != null) {
                this.items.push({...item});
                this.createDialog = false;
                this.submitted = false;
                this.item = new ProjectDto();
            } else {
                this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Element existant'});
            }

        }, error => {
            console.log(error);
        });
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

    protected readonly color = color;
    copyToClipboard() {
        const yamlText = document.getElementById('yamlText').innerText;
        const textarea = document.createElement('textarea');
        textarea.value = yamlText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Text copied to clipboard!');
    }


}
