import {Component, OnInit} from '@angular/core';
import {ProjectAdminService} from 'src/app/shared/service/admin/project/ProjectAdmin.service';
import {ProjectDto} from 'src/app/shared/model/project/Project.model';
import {ProjectCriteria} from 'src/app/shared/criteria/project/ProjectCriteria.model';
import { ChartModule } from 'primeng/chart';

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


import {InscriptionMembreDto} from 'src/app/shared/model/inscription/InscriptionMembre.model';
import {InscriptionMembreAdminService} from 'src/app/shared/service/admin/inscription/InscriptionMembreAdmin.service';
import {ProjectStateDto} from 'src/app/shared/model/project/ProjectState.model';
import {ProjectStateAdminService} from 'src/app/shared/service/admin/project/ProjectStateAdmin.service';
import {TemplateDto} from 'src/app/shared/model/template/Template.model';
import {TemplateAdminService} from 'src/app/shared/service/admin/template/TemplateAdmin.service';
import {DomainTemplateDto} from 'src/app/shared/model/template/DomainTemplate.model';
import {DomainTemplateAdminService} from 'src/app/shared/service/admin/template/DomainTemplateAdmin.service';
import {ProjectTemplateDto} from 'src/app/shared/model/template/ProjectTemplate.model';
import {ProjectTemplateAdminService} from 'src/app/shared/service/admin/template/ProjectTemplateAdmin.service';
import {Subscription} from "rxjs";
import {
    InscriptionCollaboratorAdminService
} from "../../../../../shared/service/admin/inscription/InscriptionCollaboratorAdmin.service";
import {
    PaimentCollaboratorAdminService
} from "../../../../../shared/service/admin/paiment/PaimentCollaboratorAdmin.service";
//import {dt} from "@fullcalendar/core/internal-common";
//import "primeicons/primeicons.css";

@Component({
  selector: 'app-analytics-admin',
  templateUrl: './project-analytics.component.html',
    styleUrls:['./project-analytics.component.css']
})
export class AnalyticsAdminComponent implements OnInit {

    protected fileName = 'Project';
    countByDay: number;
    countByWeek: number;
    countByMonth: number;
    countByYear: number;

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
    project: ({ generatedDate: string }) [];
    private countsSubscription: Subscription;
    basicData: any;
    basicOptions: any;
    years: { label: string, value: number }[] = [];
    selectedYear: number;
    inscriptionCounts: { day: number, week: number, month: number, year: number } = { day: 0, week: 0, month: 0, year: 0 };
    paymentSums: { day: number, week: number, month: number, year: number } = { day: 0, week: 0, month: 0, year: 0 };


    constructor( private service: ProjectAdminService  , private inscriptionMembreService: InscriptionMembreAdminService,private  paimentService: PaimentCollaboratorAdminService, private projectStateService: ProjectStateAdminService, private templateService: TemplateAdminService, private domainTemplateService: DomainTemplateAdminService, private projectTemplateService: ProjectTemplateAdminService,private inscriptionService: InscriptionCollaboratorAdminService,@Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.authService = ServiceLocator.injector.get(AuthService);
        this.exportService = ServiceLocator.injector.get(ExportService);
    }

    //


    ngOnInit(): void {
        const currentYear = new Date().getFullYear();
        this.generateYearsList();
        this.selectedYear = currentYear;
        this.getProjectData(this.selectedYear);
        this.findPaginatedByCriteria();
        this.initExport();
        this.initCol();
        this.loadProjectState();
        this.loadInscriptionMembre();
        this.loadDomainTemplate();
        this.refreshCounts();
        this.countsSubscription = this.service.getCountsUpdated().subscribe(() => {
            this.refreshCounts();
        });

        // Example: Trigger counts update every minute
        setInterval(() => {
            this.service.triggerCountsUpdate();
        }, 60000);
        const today = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD


        this.loadInscriptionCounts(today);
        this.loadPaymentSums(today);

    }

    getProjectData(year: number): void {
        this.service.getProjectsByMonth(year)
            .subscribe(data => {

                const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                const projectData = months.map(month => data[month.toUpperCase()] || 0);

                this.updateChart(projectData, months);
            });
    }


    onYearChange(year: number): void {
        this.selectedYear = year;
        this.getProjectData(year);
    }

    generateYearsList(): void {
        const currentYear = new Date().getFullYear();
        for (let year = currentYear; year >= currentYear - 1; year--) {
            this.years.push({ label: year.toString(), value: year });
        }
    }

    updateChart(projectData: number[], months: string[]): void {
        const backgroundColors = [];
        const borderColors = [];
        for (let i = 0; i < months.length; i++) {
            const color = this.getRandomColor();
            backgroundColors.push(`rgba(${color.r}, ${color.g}, ${color.b}, 0.2)`);
            borderColors.push(`rgb(${color.r}, ${color.g}, ${color.b})`);
        }

        const chartData = {
            labels: months,
            datasets: [
                {
                    label: 'Generated Project',
                    data: projectData,
                    backgroundColor: backgroundColors,
                    borderColor: borderColors,
                    borderWidth: 1
                }
            ]
        };

        this.basicData = chartData;

        this.basicOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--text-color')
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    min: 0, // Set the minimum value for the y-axis
                    max: 20, // Set the maximum value for the y-axis
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--text-color-secondary')
                    },
                    grid: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--surface-border'),
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--text-color-secondary')
                    },
                    grid: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--surface-border'),
                        drawBorder: false
                    }
                }
            }
        };
    }


    getRandomColor(): { r: number, g: number, b: number } {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return { r, g, b };
    }



    ngOnDestroy(): void {
        if (this.countsSubscription) {
            this.countsSubscription.unsubscribe();
        }
    }






    refreshCounts(): void {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0]; // yyyy-MM-dd

        this.getCountByDay(formattedDate);
        this.getCountByWeek(formattedDate);
        this.getCountByMonth(formattedDate);
        this.getCountByYear(formattedDate);
    }


    loadInscriptionCounts(date: string): void {
        this.inscriptionService.countInscriptionsByDay(date).subscribe(count => this.inscriptionCounts.day = count);
        this.inscriptionService.countInscriptionsByWeek(date).subscribe(count => this.inscriptionCounts.week = count);
        this.inscriptionService.countInscriptionsByMonth(date).subscribe(count => this.inscriptionCounts.month = count);
        this.inscriptionService.countInscriptionsByYear(date).subscribe(count => this.inscriptionCounts.year = count);
    }

    loadPaymentSums(date: string): void {
        this.paimentService.sumPaymentsByDay(date).subscribe(sum => this.paymentSums.day = sum);
        this.paimentService.sumPaymentsByWeek(date).subscribe(sum => this.paymentSums.week = sum);
        this.paimentService.sumPaymentsByMonth(date).subscribe(sum => this.paymentSums.month = sum);
        this.paimentService.sumPaymentsByYear(date).subscribe(sum => this.paymentSums.year = sum);
    }

    getCountByDay(date: string): void {
        this.service.countProjectsByDay(date).subscribe(count => {
            this.countByDay = count;
        });
    }

    getCountByWeek(date: string): void {
        this.service.countProjectsByWeek(date).subscribe(count => {
            this.countByWeek = count;
        });
    }

    getCountByMonth(date: string): void {
        this.service.countProjectsByMonth(date).subscribe(count => {
            this.countByMonth = count;
        });
    }

    getCountByYear(date: string): void {
        this.service.countProjectsByYear(date).subscribe(count => {
            this.countByYear = count;
        });
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
        } , error => {
            console.log(error);
        });
    }

    public save() {
        this.service.save().subscribe(item => {
            if (item != null) {
                this.items.push({...item});
                this.createDialog = false;


                this.item = new ProjectDto();
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
            {field: 'generatedDate', header: 'Generated date'},
            {field: 'projectState?.code', header: 'Project state'},
            {field: 'inscriptionMembre?.id', header: 'Inscription membre'},
            {field: 'domainTemplate?.name', header: 'Domain template'},
        ];
    }


    public async loadProjectState(){
        this.projectStateService.findAllOptimized().subscribe(projectStates => this.projectStates = projectStates, error => console.log(error))
    }
    public async loadInscriptionMembre(){
        this.inscriptionMembreService.findAll().subscribe(inscriptionMembres => this.inscriptionMembres = inscriptionMembres, error => console.log(error))
    }
    public async loadDomainTemplate(){
        this.domainTemplateService.findAllOptimized().subscribe(domainTemplates => this.domainTemplates = domainTemplates, error => console.log(error))
    }


	public initDuplicate(res: ProjectDto) {
        if (res.projectTemplates != null) {
             res.projectTemplates.forEach(d => { d.project = null; d.id = null; });
        }
	}



   public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Name': e.name ,
                'Generated date': this.datePipe.transform(e.generatedDate , 'dd/MM/yyyy hh:mm'),
                 'Yaml': e.yaml ,
                'Project state': e.projectState?.code ,
                'Inscription membre': e.inscriptionMembre?.id ,
                'Domain template': e.domainTemplate?.name ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Name': this.criteria.name ? this.criteria.name : environment.emptyForExport ,
            'Generated date Min': this.criteria.generatedDateFrom ? this.datePipe.transform(this.criteria.generatedDateFrom , this.dateFormat) : environment.emptyForExport ,
            'Generated date Max': this.criteria.generatedDateTo ? this.datePipe.transform(this.criteria.generatedDateTo , this.dateFormat) : environment.emptyForExport ,
            'Yaml': this.criteria.yaml ? this.criteria.yaml : environment.emptyForExport ,
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

}
