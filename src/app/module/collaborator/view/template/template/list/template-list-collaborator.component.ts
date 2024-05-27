import {Component, OnInit} from '@angular/core';
import {TemplateCollaboratorService} from 'src/app/shared/service/collaborator/template/TemplateCollaborator.service';
import {TemplateDto} from 'src/app/shared/model/template/Template.model';
import {TemplateCriteria} from 'src/app/shared/criteria/template/TemplateCriteria.model';

import {ConfirmationService, MessageService,MenuItem} from 'primeng/api';
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

import {AuthService} from 'src/app/zynerator/security/shared/service/Auth.service';
import {ExportService} from 'src/app/zynerator/util/Export.service';


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
import {ChartType} from "chart.js";
import {ProjectDto} from "../../../../../../shared/model/project/Project.model";


@Component({
    selector: 'app-template-list-collaborator',
    templateUrl: './template-list-collaborator.component.html',
    styleUrls:['./template-list-collaborator.component.scss']
})
export class TemplateListCollaboratorComponent implements OnInit {
    visible: boolean = false;
    showYamlDialogVisible: boolean = false;
    separateContent: string = '';
    value!: number;
    protected _submitted = false;
    protected _errorMessages = new Array<string>();
    public domainTemplate: DomainTemplateDto ;
    public member: MemberDto ;
    selectedProjectTemplate:string='Public';
    showProjectTemplateDetails : boolean=false;

    showDefaultView: boolean = true;
    showTemplateView: boolean = false;
    showMyView: boolean = false;
    protected fileName = 'Template';

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


    categoryTemplates: Array<CategoryTemplateDto>;
    typeTemplates: Array<TypeTemplateDto>;
    levelTemplates: Array<LevelTemplateDto>;
    domainTemplates: Array<DomainTemplateDto>;
    members: Array<MemberDto>;
    technologys: Array<TechnologyDto>;

    private _validTemplateCode = true;
    private _validTemplateName = true;



    constructor( private service: TemplateCollaboratorService  , private categoryTemplateService: CategoryTemplateCollaboratorService, private technologyService: TechnologyCollaboratorService, private levelTemplateService: LevelTemplateCollaboratorService, private typeTemplateService: TypeTemplateCollaboratorService, private domainTemplateService: DomainTemplateCollaboratorService, private memberService: MemberCollaboratorService, @Inject(PLATFORM_ID) private platformId?) {
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
        this.loadCategoryTemplate();
        this.loadTypeTemplate();
        this.loadLevelTemplate();
        this.loadDomainTemplate();
        this.loadMember();
        this.loadTechnology();
        this.selectedProjectTemplate === 'public';
        this.showProjectTemplateDetails = true;

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
            this.selections = new Array<TemplateDto>();
        }, error => console.log(error));
    }

    public onPage(event: any) {
        this.criteria.page = event.page;
        this.criteria.maxResults = event.rows;
        this.findPaginatedByCriteria();
    }

    public async edit(dto: TemplateDto) {
        this.service.findByIdWithAssociatedList(dto).subscribe(res => {
            this.item = res;
            console.log(res);
            this.editDialog = true;
        });

    }

    public async view(dto: TemplateDto) {
        this.service.findByIdWithAssociatedList(dto).subscribe(res => {
            this.item = res;
            this.viewDialog = true;
        });
    }

    public async openCreate() {
        this.item = new TemplateDto();
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
                    this.selections = new Array<TemplateDto>();
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


    public async delete(dto: TemplateDto) {

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

    public async duplicate(dto: TemplateDto) {
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

    public exportPdf(dto: TemplateDto): void {
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
            this.item = new TemplateDto();
        } , error => {
            console.log(error);
        });
    }
    /*
        public save() {
            this.service.save().subscribe(item => {
                if (item != null) {
                    this.items.push({...item});
                    this.createDialog = false;


                    this.item = new TemplateDto();
                } else {
                    this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Element existant'});
                }
            }, error => {
                console.log(error);
            });
        }
    */
// add


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'name', header: 'Name'},
            {field: 'addingDate', header: 'Adding date'},
            {field: 'lastUpdateDate', header: 'Last update date'},
            {field: 'categoryTemplate?.name', header: 'Category template'},
            {field: 'typeTemplate?.name', header: 'Type template'},
            {field: 'levelTemplate?.name', header: 'Level template'},
            {field: 'templateTags', header: 'Template tags'},
            {field: 'domainTemplate?.name', header: 'Domain template'},
            {field: 'price', header: 'Price'},
            {field: 'member?.id', header: 'Member'},
            {field: 'technology?.name', header: 'Technology'},
        ];
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
    public save(): void {
        this.submitted = true;
        this.validateForm();

        console.log(this.errorMessages)
        if (this.errorMessages.length === 0) {
            this.saveWithShowOption(false);
        } else {
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs sur le formulaire'});
        }
    }

    selecteProjectTemplate(category:string):void{
        this.showDefault();
        this.selectedProjectTemplate=category;
        this.showProjectTemplateDetails=true;
    }

    setView(view: string) {
        this.showDefaultView = view === 'default';
        this.showTemplateView = view === 'template';
        this.showMyView = view === 'my';
        // Enregistrer l'état de la vue dans le stockage local
        localStorage.setItem('currentView', view);
    }

    showDefault() {
        this.setView('default');
    }

    showTemplate() {
        this.setView('template');
    }
    showMy() {
        this.setView('my');
    }


    getTechnologyLogo(technologyName: string | undefined): string {
        if (!technologyName) {
            return 'assets/layout/images/default-logo.svg'; // Default logo if no technology is selected
        }

        switch (technologyName.toLowerCase()) {
            case 'spring':
                return 'assets/layout/images/spring.svg';
            case 'angular':
                return 'assets/layout/images/Angular.svg';
            case 'react':
                return 'assets/layout/images/tcaer.svg';
            case 'dotnet':
                return 'assets/layout/images/dotnet.svg';
            case 'r-native':
                return 'assets/layout/images/reactjs-ar21.svg';
            case 'laravel':
                return 'assets/layout/images/Laravel.svg';
            case 'next-js':
                return 'assets/layout/images/nextjs.svg';
            case 'nestjs':
                return 'assets/layout/images/nestjs.svg';
            // Add more cases for other technologies
            default:
                return 'assets/layout/images/default-logo.svg'; // Default logo if technology is not recognized
        }
    }

    showDialog() {
        this.visible = true;
    }

    use() {
        // Vous pouvez ajouter ici la logique supplémentaire avant de naviguer, si nécessaire
        this.router.navigate(['/app/collaborator/project/project/list']);
    }
    showYamlDialog(yamlContent: string): void {
        this.separateContent = yamlContent;
        this.showYamlDialogVisible = true;
    }
    copyYaml() {
        const textField = document.createElement('textarea');
        textField.value = this.separateContent;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
    }

    public async loadCategoryTemplate(){
        this.categoryTemplateService.findAllOptimized().subscribe(categoryTemplates => this.categoryTemplates = categoryTemplates, error => console.log(error))
    }
    public async loadTypeTemplate(){
        this.typeTemplateService.findAllOptimized().subscribe(typeTemplates => this.typeTemplates = typeTemplates, error => console.log(error))
    }
    public async loadLevelTemplate(){
        this.levelTemplateService.findAllOptimized().subscribe(levelTemplates => this.levelTemplates = levelTemplates, error => console.log(error))
    }
    public async loadDomainTemplate(){
        this.domainTemplateService.findAllOptimized().subscribe(domainTemplates => this.domainTemplates = domainTemplates, error => console.log(error))
    }
    public async loadMember(){
        this.memberService.findAll().subscribe(members => this.members = members, error => console.log(error))
    }
    public async loadTechnology(){
        this.technologyService.findAllOptimized().subscribe(technologys => this.technologys = technologys, error => console.log(error))
    }


    public initDuplicate(res: TemplateDto) {
    }



    public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Code': e.code ,
                'Name': e.name ,
                'Description': e.description ,
                'Adding date': this.datePipe.transform(e.addingDate , 'dd/MM/yyyy hh:mm'),
                'Last update date': this.datePipe.transform(e.lastUpdateDate , 'dd/MM/yyyy hh:mm'),
                'Category template': e.categoryTemplate?.name ,
                'Type template': e.typeTemplate?.name ,
                'Level template': e.levelTemplate?.name ,
                'Template tags': e.templateTags ,
                'Domain template': e.domainTemplate?.name ,
                'Price': e.price ,
                'Member': e.member?.id ,
                'Technology': e.technology?.name ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Name': this.criteria.name ? this.criteria.name : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
            'Adding date Min': this.criteria.addingDateFrom ? this.datePipe.transform(this.criteria.addingDateFrom , this.dateFormat) : environment.emptyForExport ,
            'Adding date Max': this.criteria.addingDateTo ? this.datePipe.transform(this.criteria.addingDateTo , this.dateFormat) : environment.emptyForExport ,
            'Last update date Min': this.criteria.lastUpdateDateFrom ? this.datePipe.transform(this.criteria.lastUpdateDateFrom , this.dateFormat) : environment.emptyForExport ,
            'Last update date Max': this.criteria.lastUpdateDateTo ? this.datePipe.transform(this.criteria.lastUpdateDateTo , this.dateFormat) : environment.emptyForExport ,
            //'Category template': this.criteria.categoryTemplate?.name ? this.criteria.categoryTemplate?.name : environment.emptyForExport ,
            //'Type template': this.criteria.typeTemplate?.name ? this.criteria.typeTemplate?.name : environment.emptyForExport ,
            //'Level template': this.criteria.levelTemplate?.name ? this.criteria.levelTemplate?.name : environment.emptyForExport ,
            'Template tags': this.criteria.templateTags ? this.criteria.templateTags : environment.emptyForExport ,
            //'Domain template': this.criteria.domainTemplate?.name ? this.criteria.domainTemplate?.name : environment.emptyForExport ,
            'Price Min': this.criteria.priceMin ? this.criteria.priceMin : environment.emptyForExport ,
            'Price Max': this.criteria.priceMax ? this.criteria.priceMax : environment.emptyForExport ,
            //'Member': this.criteria.member?.id ? this.criteria.member?.id : environment.emptyForExport ,
            //'Technology': this.criteria.technology?.name ? this.criteria.technology?.name : environment.emptyForExport ,
        }];
    }



    get items(): Array<TemplateDto> {
        return this.service.items;
    }

    set items(value: Array<TemplateDto>) {
        this.service.items = value;
    }

    get selections(): Array<TemplateDto> {
        return this.service.selections;
    }

    set selections(value: Array<TemplateDto>) {
        this.service.selections = value;
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

    get criteria(): TemplateCriteria {
        return this.service.criteria;
    }

    set criteria(value: TemplateCriteria) {
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






    get validTemplateCode(): boolean {
        return this._validTemplateCode;
    }

    set validTemplateCode(value: boolean) {
        this._validTemplateCode = value;
    }
    get validTemplateName(): boolean {
        return this._validTemplateName;
    }
    public  setValidation(value: boolean){
        this.validTemplateCode = value;
        this.validTemplateName = value;
    }
    set validTemplateName(value: boolean) {
        this._validTemplateName = value;
    }
    public hideCreateDialog() {
        this.createDialog = false;
        this.setValidation(true);
    }
    public  validateForm(): void{
        this.errorMessages = new Array<string>();
        //this.validateTemplateName();
    }

    public validateTemplateName(){
        if (this.item.name!=null) {
            this.errorMessages.push('Name non valide');
            this.validTemplateName = false;
        } else {
            this.validTemplateName = true;
        }
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

}






