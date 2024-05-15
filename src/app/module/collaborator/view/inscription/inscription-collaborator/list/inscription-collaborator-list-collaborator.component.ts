import {Component, OnInit} from '@angular/core';
import {InscriptionCollaboratorCollaboratorService} from 'src/app/shared/service/collaborator/inscription/InscriptionCollaboratorCollaborator.service';
import {InscriptionCollaboratorDto} from 'src/app/shared/model/inscription/InscriptionCollaborator.model';
import {InscriptionCollaboratorCriteria} from 'src/app/shared/criteria/inscription/InscriptionCollaboratorCriteria.model';


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


import {CollaboratorDto} from 'src/app/shared/model/collaborator/Collaborator.model';
import {CollaboratorCollaboratorService} from 'src/app/shared/service/collaborator/collaborator/CollaboratorCollaborator.service';
import {InscriptionMembreDto} from 'src/app/shared/model/inscription/InscriptionMembre.model';
import {InscriptionMembreCollaboratorService} from 'src/app/shared/service/collaborator/inscription/InscriptionMembreCollaborator.service';
import {InscriptionCollaboratorTypeDto} from 'src/app/shared/model/inscription/InscriptionCollaboratorType.model';
import {InscriptionCollaboratorTypeCollaboratorService} from 'src/app/shared/service/collaborator/inscription/InscriptionCollaboratorTypeCollaborator.service';
import {InscriptionMembreStateDto} from 'src/app/shared/model/inscription/InscriptionMembreState.model';
import {InscriptionMembreStateCollaboratorService} from 'src/app/shared/service/collaborator/inscription/InscriptionMembreStateCollaborator.service';
import {PackagingDto} from 'src/app/shared/model/packaging/Packaging.model';
import {PackagingCollaboratorService} from 'src/app/shared/service/collaborator/packaging/PackagingCollaborator.service';
import {InscriptionCollaboratorStateDto} from 'src/app/shared/model/inscription/InscriptionCollaboratorState.model';
import {InscriptionCollaboratorStateCollaboratorService} from 'src/app/shared/service/collaborator/inscription/InscriptionCollaboratorStateCollaborator.service';
import {MemberDto} from 'src/app/shared/model/collaborator/Member.model';
import {MemberCollaboratorService} from 'src/app/shared/service/collaborator/collaborator/MemberCollaborator.service';


@Component({
  selector: 'app-inscription-collaborator-list-collaborator',
  templateUrl: './inscription-collaborator-list-collaborator.component.html'
})
export class InscriptionCollaboratorListCollaboratorComponent implements OnInit {

    protected fileName = 'InscriptionCollaborator';

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


    packagings: Array<PackagingDto>;
    collaborators: Array<CollaboratorDto>;
    inscriptionCollaboratorStates: Array<InscriptionCollaboratorStateDto>;
    inscriptionCollaboratorTypes: Array<InscriptionCollaboratorTypeDto>;


    constructor( private service: InscriptionCollaboratorCollaboratorService  , private collaboratorService: CollaboratorCollaboratorService, private inscriptionMembreService: InscriptionMembreCollaboratorService, private inscriptionCollaboratorTypeService: InscriptionCollaboratorTypeCollaboratorService, private inscriptionMembreStateService: InscriptionMembreStateCollaboratorService, private packagingService: PackagingCollaboratorService, private inscriptionCollaboratorStateService: InscriptionCollaboratorStateCollaboratorService, private memberService: MemberCollaboratorService, @Inject(PLATFORM_ID) private platformId?) {
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
        this.loadPackaging();
        this.loadCollaborator();
        this.loadInscriptionCollaboratorState();
        this.loadInscriptionCollaboratorType();

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
            this.selections = new Array<InscriptionCollaboratorDto>();
        }, error => console.log(error));
    }

    public onPage(event: any) {
        this.criteria.page = event.page;
        this.criteria.maxResults = event.rows;
        this.findPaginatedByCriteria();
    }

    public async edit(dto: InscriptionCollaboratorDto) {
        this.service.findByIdWithAssociatedList(dto).subscribe(res => {
            this.item = res;
            console.log(res);
            this.editDialog = true;
        });

    }

    public async view(dto: InscriptionCollaboratorDto) {
        this.service.findByIdWithAssociatedList(dto).subscribe(res => {
            this.item = res;
            this.viewDialog = true;
        });
    }

    public async openCreate() {
        this.item = new InscriptionCollaboratorDto();
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
                    this.selections = new Array<InscriptionCollaboratorDto>();
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


    public async delete(dto: InscriptionCollaboratorDto) {

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

    public async duplicate(dto: InscriptionCollaboratorDto) {
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

    public exportPdf(dto: InscriptionCollaboratorDto): void {
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
            this.item = new InscriptionCollaboratorDto();
        } , error => {
            console.log(error);
        });
    }

    public save() {
        this.service.save().subscribe(item => {
            if (item != null) {
                this.items.push({...item});
                this.createDialog = false;


                this.item = new InscriptionCollaboratorDto();
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
            {field: 'startDate', header: 'Start date'},
            {field: 'endDate', header: 'End date'},
            {field: 'renewDate', header: 'Renew date'},
            {field: 'packaging?.id', header: 'Packaging'},
            {field: 'consumedEntity', header: 'Consumed entity'},
            {field: 'consumedProjet', header: 'Consumed projet'},
            {field: 'consumedAttribut', header: 'Consumed attribut'},
            {field: 'consumedIndicator', header: 'Consumed indicator'},
            {field: 'collaborator?.description', header: 'Collaborator'},
            {field: 'inscriptionCollaboratorState?.name', header: 'Inscription collaborator state'},
            {field: 'inscriptionCollaboratorType?.name', header: 'Inscription collaborator type'},
        ];
    }


    public async loadPackaging(){
        this.packagingService.findAll().subscribe(packagings => this.packagings = packagings, error => console.log(error))
    }
    public async loadCollaborator(){
        this.collaboratorService.findAllOptimized().subscribe(collaborators => this.collaborators = collaborators, error => console.log(error))
    }
    public async loadInscriptionCollaboratorState(){
        this.inscriptionCollaboratorStateService.findAllOptimized().subscribe(inscriptionCollaboratorStates => this.inscriptionCollaboratorStates = inscriptionCollaboratorStates, error => console.log(error))
    }
    public async loadInscriptionCollaboratorType(){
        this.inscriptionCollaboratorTypeService.findAllOptimized().subscribe(inscriptionCollaboratorTypes => this.inscriptionCollaboratorTypes = inscriptionCollaboratorTypes, error => console.log(error))
    }


	public initDuplicate(res: InscriptionCollaboratorDto) {
        if (res.inscriptionMembres != null) {
             res.inscriptionMembres.forEach(d => { d.inscriptionCollaborator = null; d.id = null; });
        }
	}



   public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Start date': this.datePipe.transform(e.startDate , 'dd/MM/yyyy hh:mm'),
                'End date': this.datePipe.transform(e.endDate , 'dd/MM/yyyy hh:mm'),
                'Renew date': this.datePipe.transform(e.renewDate , 'dd/MM/yyyy hh:mm'),
                'Packaging': e.packaging?.id ,
                 'Consumed entity': e.consumedEntity ,
                 'Consumed projet': e.consumedProjet ,
                 'Consumed attribut': e.consumedAttribut ,
                 'Consumed indicator': e.consumedIndicator ,
                'Collaborator': e.collaborator?.description ,
                'Inscription collaborator state': e.inscriptionCollaboratorState?.name ,
                'Inscription collaborator type': e.inscriptionCollaboratorType?.name ,
            }
        });

        this.criteriaData = [{
            'Start date Min': this.criteria.startDateFrom ? this.datePipe.transform(this.criteria.startDateFrom , this.dateFormat) : environment.emptyForExport ,
            'Start date Max': this.criteria.startDateTo ? this.datePipe.transform(this.criteria.startDateTo , this.dateFormat) : environment.emptyForExport ,
            'End date Min': this.criteria.endDateFrom ? this.datePipe.transform(this.criteria.endDateFrom , this.dateFormat) : environment.emptyForExport ,
            'End date Max': this.criteria.endDateTo ? this.datePipe.transform(this.criteria.endDateTo , this.dateFormat) : environment.emptyForExport ,
            'Renew date Min': this.criteria.renewDateFrom ? this.datePipe.transform(this.criteria.renewDateFrom , this.dateFormat) : environment.emptyForExport ,
            'Renew date Max': this.criteria.renewDateTo ? this.datePipe.transform(this.criteria.renewDateTo , this.dateFormat) : environment.emptyForExport ,
        //'Packaging': this.criteria.packaging?.id ? this.criteria.packaging?.id : environment.emptyForExport ,
            'Consumed entity Min': this.criteria.consumedEntityMin ? this.criteria.consumedEntityMin : environment.emptyForExport ,
            'Consumed entity Max': this.criteria.consumedEntityMax ? this.criteria.consumedEntityMax : environment.emptyForExport ,
            'Consumed projet Min': this.criteria.consumedProjetMin ? this.criteria.consumedProjetMin : environment.emptyForExport ,
            'Consumed projet Max': this.criteria.consumedProjetMax ? this.criteria.consumedProjetMax : environment.emptyForExport ,
            'Consumed attribut Min': this.criteria.consumedAttributMin ? this.criteria.consumedAttributMin : environment.emptyForExport ,
            'Consumed attribut Max': this.criteria.consumedAttributMax ? this.criteria.consumedAttributMax : environment.emptyForExport ,
            'Consumed indicator Min': this.criteria.consumedIndicatorMin ? this.criteria.consumedIndicatorMin : environment.emptyForExport ,
            'Consumed indicator Max': this.criteria.consumedIndicatorMax ? this.criteria.consumedIndicatorMax : environment.emptyForExport ,
        //'Collaborator': this.criteria.collaborator?.description ? this.criteria.collaborator?.description : environment.emptyForExport ,
        //'Inscription collaborator state': this.criteria.inscriptionCollaboratorState?.name ? this.criteria.inscriptionCollaboratorState?.name : environment.emptyForExport ,
        //'Inscription collaborator type': this.criteria.inscriptionCollaboratorType?.name ? this.criteria.inscriptionCollaboratorType?.name : environment.emptyForExport ,
        }];
      }



    get items(): Array<InscriptionCollaboratorDto> {
        return this.service.items;
    }

    set items(value: Array<InscriptionCollaboratorDto>) {
        this.service.items = value;
    }

    get selections(): Array<InscriptionCollaboratorDto> {
        return this.service.selections;
    }

    set selections(value: Array<InscriptionCollaboratorDto>) {
        this.service.selections = value;
    }

    get item(): InscriptionCollaboratorDto {
        return this.service.item;
    }

    set item(value: InscriptionCollaboratorDto) {
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

    get criteria(): InscriptionCollaboratorCriteria {
        return this.service.criteria;
    }

    set criteria(value: InscriptionCollaboratorCriteria) {
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
