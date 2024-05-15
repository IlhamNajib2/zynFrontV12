import {Component, OnInit} from '@angular/core';
import {PaimentCollaboratorCollaboratorService} from 'src/app/shared/service/collaborator/paiment/PaimentCollaboratorCollaborator.service';
import {PaimentCollaboratorDto} from 'src/app/shared/model/paiment/PaimentCollaborator.model';
import {PaimentCollaboratorCriteria} from 'src/app/shared/criteria/paiment/PaimentCollaboratorCriteria.model';


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


import {CouponDetailDto} from 'src/app/shared/model/coupon/CouponDetail.model';
import {CouponDetailCollaboratorService} from 'src/app/shared/service/collaborator/coupon/CouponDetailCollaborator.service';
import {PaimentCollaboratorStateDto} from 'src/app/shared/model/project/PaimentCollaboratorState.model';
import {PaimentCollaboratorStateCollaboratorService} from 'src/app/shared/service/collaborator/project/PaimentCollaboratorStateCollaborator.service';
import {InscriptionCollaboratorDto} from 'src/app/shared/model/inscription/InscriptionCollaborator.model';
import {InscriptionCollaboratorCollaboratorService} from 'src/app/shared/service/collaborator/inscription/InscriptionCollaboratorCollaborator.service';


@Component({
  selector: 'app-paiment-collaborator-list-collaborator',
  templateUrl: './paiment-collaborator-list-collaborator.component.html'
})
export class PaimentCollaboratorListCollaboratorComponent implements OnInit {

    protected fileName = 'PaimentCollaborator';

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


    couponDetails: Array<CouponDetailDto>;
    inscriptionCollaborators: Array<InscriptionCollaboratorDto>;
    paimentCollaboratorStates: Array<PaimentCollaboratorStateDto>;


    constructor( private service: PaimentCollaboratorCollaboratorService  , private couponDetailService: CouponDetailCollaboratorService, private paimentCollaboratorStateService: PaimentCollaboratorStateCollaboratorService, private inscriptionCollaboratorService: InscriptionCollaboratorCollaboratorService, @Inject(PLATFORM_ID) private platformId?) {
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
        this.loadCouponDetail();
        this.loadInscriptionCollaborator();
        this.loadPaimentCollaboratorState();

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
            this.selections = new Array<PaimentCollaboratorDto>();
        }, error => console.log(error));
    }

    public onPage(event: any) {
        this.criteria.page = event.page;
        this.criteria.maxResults = event.rows;
        this.findPaginatedByCriteria();
    }

    public async edit(dto: PaimentCollaboratorDto) {
        this.service.findByIdWithAssociatedList(dto).subscribe(res => {
            this.item = res;
            console.log(res);
            this.editDialog = true;
        });

    }

    public async view(dto: PaimentCollaboratorDto) {
        this.service.findByIdWithAssociatedList(dto).subscribe(res => {
            this.item = res;
            this.viewDialog = true;
        });
    }

    public async openCreate() {
        this.item = new PaimentCollaboratorDto();
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
                    this.selections = new Array<PaimentCollaboratorDto>();
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


    public async delete(dto: PaimentCollaboratorDto) {

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

    public async duplicate(dto: PaimentCollaboratorDto) {
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

    public exportPdf(dto: PaimentCollaboratorDto): void {
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
            this.item = new PaimentCollaboratorDto();
        } , error => {
            console.log(error);
        });
    }

    public save() {
        this.service.save().subscribe(item => {
            if (item != null) {
                this.items.push({...item});
                this.createDialog = false;


                this.item = new PaimentCollaboratorDto();
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
            {field: 'name', header: 'Name'},
            {field: 'code', header: 'Code'},
            {field: 'couponDetail?.id', header: 'Coupon detail'},
            {field: 'amountToPaid', header: 'Amount to paid'},
            {field: 'total', header: 'Total'},
            {field: 'discount', header: 'Discount'},
            {field: 'remaining', header: 'Remaining'},
            {field: 'paiementDate', header: 'Paiement date'},
            {field: 'inscriptionCollaborator?.id', header: 'Inscription collaborator'},
            {field: 'paimentCollaboratorState?.code', header: 'Paiment collaborator state'},
        ];
    }


    public async loadCouponDetail(){
        this.couponDetailService.findAll().subscribe(couponDetails => this.couponDetails = couponDetails, error => console.log(error))
    }
    public async loadInscriptionCollaborator(){
        this.inscriptionCollaboratorService.findAll().subscribe(inscriptionCollaborators => this.inscriptionCollaborators = inscriptionCollaborators, error => console.log(error))
    }
    public async loadPaimentCollaboratorState(){
        this.paimentCollaboratorStateService.findAllOptimized().subscribe(paimentCollaboratorStates => this.paimentCollaboratorStates = paimentCollaboratorStates, error => console.log(error))
    }


	public initDuplicate(res: PaimentCollaboratorDto) {
	}



   public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Name': e.name ,
                 'Description': e.description ,
                 'Code': e.code ,
                'Coupon detail': e.couponDetail?.id ,
                 'Amount to paid': e.amountToPaid ,
                 'Total': e.total ,
                 'Discount': e.discount ,
                 'Remaining': e.remaining ,
                'Paiement date': this.datePipe.transform(e.paiementDate , 'dd/MM/yyyy hh:mm'),
                'Inscription collaborator': e.inscriptionCollaborator?.id ,
                'Paiment collaborator state': e.paimentCollaboratorState?.code ,
            }
        });

        this.criteriaData = [{
            'Name': this.criteria.name ? this.criteria.name : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
        //'Coupon detail': this.criteria.couponDetail?.id ? this.criteria.couponDetail?.id : environment.emptyForExport ,
            'Amount to paid Min': this.criteria.amountToPaidMin ? this.criteria.amountToPaidMin : environment.emptyForExport ,
            'Amount to paid Max': this.criteria.amountToPaidMax ? this.criteria.amountToPaidMax : environment.emptyForExport ,
            'Total Min': this.criteria.totalMin ? this.criteria.totalMin : environment.emptyForExport ,
            'Total Max': this.criteria.totalMax ? this.criteria.totalMax : environment.emptyForExport ,
            'Discount Min': this.criteria.discountMin ? this.criteria.discountMin : environment.emptyForExport ,
            'Discount Max': this.criteria.discountMax ? this.criteria.discountMax : environment.emptyForExport ,
            'Remaining Min': this.criteria.remainingMin ? this.criteria.remainingMin : environment.emptyForExport ,
            'Remaining Max': this.criteria.remainingMax ? this.criteria.remainingMax : environment.emptyForExport ,
            'Paiement date Min': this.criteria.paiementDateFrom ? this.datePipe.transform(this.criteria.paiementDateFrom , this.dateFormat) : environment.emptyForExport ,
            'Paiement date Max': this.criteria.paiementDateTo ? this.datePipe.transform(this.criteria.paiementDateTo , this.dateFormat) : environment.emptyForExport ,
        //'Inscription collaborator': this.criteria.inscriptionCollaborator?.id ? this.criteria.inscriptionCollaborator?.id : environment.emptyForExport ,
        //'Paiment collaborator state': this.criteria.paimentCollaboratorState?.code ? this.criteria.paimentCollaboratorState?.code : environment.emptyForExport ,
        }];
      }



    get items(): Array<PaimentCollaboratorDto> {
        return this.service.items;
    }

    set items(value: Array<PaimentCollaboratorDto>) {
        this.service.items = value;
    }

    get selections(): Array<PaimentCollaboratorDto> {
        return this.service.selections;
    }

    set selections(value: Array<PaimentCollaboratorDto>) {
        this.service.selections = value;
    }

    get item(): PaimentCollaboratorDto {
        return this.service.item;
    }

    set item(value: PaimentCollaboratorDto) {
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

    get criteria(): PaimentCollaboratorCriteria {
        return this.service.criteria;
    }

    set criteria(value: PaimentCollaboratorCriteria) {
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
