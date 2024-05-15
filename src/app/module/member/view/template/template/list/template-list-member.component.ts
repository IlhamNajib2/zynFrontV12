import {Component, OnInit} from '@angular/core';
import {TemplateMemberService} from 'src/app/shared/service/member/template/TemplateMember.service';
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
import {CategoryTemplateMemberService} from 'src/app/shared/service/member/template/CategoryTemplateMember.service';
import {TechnologyDto} from 'src/app/shared/model/template/Technology.model';
import {TechnologyMemberService} from 'src/app/shared/service/member/template/TechnologyMember.service';
import {LevelTemplateDto} from 'src/app/shared/model/template/LevelTemplate.model';
import {LevelTemplateMemberService} from 'src/app/shared/service/member/template/LevelTemplateMember.service';
import {TypeTemplateDto} from 'src/app/shared/model/template/TypeTemplate.model';
import {TypeTemplateMemberService} from 'src/app/shared/service/member/template/TypeTemplateMember.service';
import {DomainTemplateDto} from 'src/app/shared/model/template/DomainTemplate.model';
import {DomainTemplateMemberService} from 'src/app/shared/service/member/template/DomainTemplateMember.service';
import {MemberDto} from 'src/app/shared/model/collaborator/Member.model';
import {MemberMemberService} from 'src/app/shared/service/member/collaborator/MemberMember.service';


@Component({
  selector: 'app-template-list-member',
  templateUrl: './template-list-member.component.html'
})
export class TemplateListMemberComponent implements OnInit {

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


    constructor( private service: TemplateMemberService  , private categoryTemplateService: CategoryTemplateMemberService, private technologyService: TechnologyMemberService, private levelTemplateService: LevelTemplateMemberService, private typeTemplateService: TypeTemplateMemberService, private domainTemplateService: DomainTemplateMemberService, private memberService: MemberMemberService, @Inject(PLATFORM_ID) private platformId?) {
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
}
