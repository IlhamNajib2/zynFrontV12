import {Component, OnInit} from '@angular/core';
import {InscriptionMembreCollaboratorService} from 'src/app/shared/service/collaborator/inscription/InscriptionMembreCollaborator.service';
import {InscriptionMembreDto} from 'src/app/shared/model/inscription/InscriptionMembre.model';
import {InscriptionMembreCriteria} from 'src/app/shared/criteria/inscription/InscriptionMembreCriteria.model';


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


import {InscriptionMembreStateDto} from 'src/app/shared/model/inscription/InscriptionMembreState.model';
import {InscriptionMembreStateCollaboratorService} from 'src/app/shared/service/collaborator/inscription/InscriptionMembreStateCollaborator.service';
import {InscriptionCollaboratorDto} from 'src/app/shared/model/inscription/InscriptionCollaborator.model';
import {InscriptionCollaboratorCollaboratorService} from 'src/app/shared/service/collaborator/inscription/InscriptionCollaboratorCollaborator.service';
import {MemberDto} from 'src/app/shared/model/collaborator/Member.model';
import {MemberCollaboratorService} from 'src/app/shared/service/collaborator/collaborator/MemberCollaborator.service';


@Component({
  selector: 'app-inscription-membre-list-collaborator',
  templateUrl: './inscription-membre-list-collaborator.component.html'
})
export class InscriptionMembreListCollaboratorComponent implements OnInit {

    protected fileName = 'InscriptionMembre';

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


    members: Array<MemberDto>;
    inscriptionMembreStates: Array<InscriptionMembreStateDto>;
    inscriptionCollaborators: Array<InscriptionCollaboratorDto>;


    constructor( private service: InscriptionMembreCollaboratorService  , private inscriptionMembreStateService: InscriptionMembreStateCollaboratorService, private inscriptionCollaboratorService: InscriptionCollaboratorCollaboratorService, private memberService: MemberCollaboratorService, @Inject(PLATFORM_ID) private platformId?) {
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
        this.loadMember();
        this.loadInscriptionMembreState();
        this.loadInscriptionCollaborator();

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
            this.selections = new Array<InscriptionMembreDto>();
        }, error => console.log(error));
    }

    public onPage(event: any) {
        this.criteria.page = event.page;
        this.criteria.maxResults = event.rows;
        this.findPaginatedByCriteria();
    }

    public async edit(dto: InscriptionMembreDto) {
        this.service.findByIdWithAssociatedList(dto).subscribe(res => {
            this.item = res;
            console.log(res);
            this.editDialog = true;
        });

    }

    public async view(dto: InscriptionMembreDto) {
        this.service.findByIdWithAssociatedList(dto).subscribe(res => {
            this.item = res;
            this.viewDialog = true;
        });
    }

    public async openCreate() {
        this.item = new InscriptionMembreDto();
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
                    this.selections = new Array<InscriptionMembreDto>();
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


    public async delete(dto: InscriptionMembreDto) {

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

    public async duplicate(dto: InscriptionMembreDto) {
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

    public exportPdf(dto: InscriptionMembreDto): void {
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
            this.item = new InscriptionMembreDto();
        } , error => {
            console.log(error);
        });
    }

    public save() {
        this.service.save().subscribe(item => {
            if (item != null) {
                this.items.push({...item});
                this.createDialog = false;


                this.item = new InscriptionMembreDto();
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
            {field: 'inscriptionDate', header: 'Inscription date'},
            {field: 'member?.id', header: 'Member'},
            {field: 'inscriptionMembreState?.name', header: 'Inscription membre state'},
            {field: 'inscriptionCollaborator?.id', header: 'Inscription collaborator'},
            {field: 'consumedEntity', header: 'Consumed entity'},
            {field: 'consumedProjet', header: 'Consumed projet'},
            {field: 'consumedAttribut', header: 'Consumed attribut'},
            {field: 'consumedIndicator', header: 'Consumed indicator'},
            {field: 'affectedEntity', header: 'Affected entity'},
            {field: 'affectedProjet', header: 'Affected projet'},
            {field: 'affectedAttribut', header: 'Affected attribut'},
            {field: 'affectedIndicator', header: 'Affected indicator'},
        ];
    }


    public async loadMember(){
        this.memberService.findAll().subscribe(members => this.members = members, error => console.log(error))
    }
    public async loadInscriptionMembreState(){
        this.inscriptionMembreStateService.findAllOptimized().subscribe(inscriptionMembreStates => this.inscriptionMembreStates = inscriptionMembreStates, error => console.log(error))
    }
    public async loadInscriptionCollaborator(){
        this.inscriptionCollaboratorService.findAll().subscribe(inscriptionCollaborators => this.inscriptionCollaborators = inscriptionCollaborators, error => console.log(error))
    }


	public initDuplicate(res: InscriptionMembreDto) {
	}



   public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Inscription date': this.datePipe.transform(e.inscriptionDate , 'dd/MM/yyyy hh:mm'),
                'Member': e.member?.id ,
                'Inscription membre state': e.inscriptionMembreState?.name ,
                'Inscription collaborator': e.inscriptionCollaborator?.id ,
                 'Consumed entity': e.consumedEntity ,
                 'Consumed projet': e.consumedProjet ,
                 'Consumed attribut': e.consumedAttribut ,
                 'Consumed indicator': e.consumedIndicator ,
                 'Affected entity': e.affectedEntity ,
                 'Affected projet': e.affectedProjet ,
                 'Affected attribut': e.affectedAttribut ,
                 'Affected indicator': e.affectedIndicator ,
            }
        });

        this.criteriaData = [{
            'Inscription date Min': this.criteria.inscriptionDateFrom ? this.datePipe.transform(this.criteria.inscriptionDateFrom , this.dateFormat) : environment.emptyForExport ,
            'Inscription date Max': this.criteria.inscriptionDateTo ? this.datePipe.transform(this.criteria.inscriptionDateTo , this.dateFormat) : environment.emptyForExport ,
        //'Member': this.criteria.member?.id ? this.criteria.member?.id : environment.emptyForExport ,
        //'Inscription membre state': this.criteria.inscriptionMembreState?.name ? this.criteria.inscriptionMembreState?.name : environment.emptyForExport ,
        //'Inscription collaborator': this.criteria.inscriptionCollaborator?.id ? this.criteria.inscriptionCollaborator?.id : environment.emptyForExport ,
            'Consumed entity Min': this.criteria.consumedEntityMin ? this.criteria.consumedEntityMin : environment.emptyForExport ,
            'Consumed entity Max': this.criteria.consumedEntityMax ? this.criteria.consumedEntityMax : environment.emptyForExport ,
            'Consumed projet Min': this.criteria.consumedProjetMin ? this.criteria.consumedProjetMin : environment.emptyForExport ,
            'Consumed projet Max': this.criteria.consumedProjetMax ? this.criteria.consumedProjetMax : environment.emptyForExport ,
            'Consumed attribut Min': this.criteria.consumedAttributMin ? this.criteria.consumedAttributMin : environment.emptyForExport ,
            'Consumed attribut Max': this.criteria.consumedAttributMax ? this.criteria.consumedAttributMax : environment.emptyForExport ,
            'Consumed indicator Min': this.criteria.consumedIndicatorMin ? this.criteria.consumedIndicatorMin : environment.emptyForExport ,
            'Consumed indicator Max': this.criteria.consumedIndicatorMax ? this.criteria.consumedIndicatorMax : environment.emptyForExport ,
            'Affected entity Min': this.criteria.affectedEntityMin ? this.criteria.affectedEntityMin : environment.emptyForExport ,
            'Affected entity Max': this.criteria.affectedEntityMax ? this.criteria.affectedEntityMax : environment.emptyForExport ,
            'Affected projet Min': this.criteria.affectedProjetMin ? this.criteria.affectedProjetMin : environment.emptyForExport ,
            'Affected projet Max': this.criteria.affectedProjetMax ? this.criteria.affectedProjetMax : environment.emptyForExport ,
            'Affected attribut Min': this.criteria.affectedAttributMin ? this.criteria.affectedAttributMin : environment.emptyForExport ,
            'Affected attribut Max': this.criteria.affectedAttributMax ? this.criteria.affectedAttributMax : environment.emptyForExport ,
            'Affected indicator Min': this.criteria.affectedIndicatorMin ? this.criteria.affectedIndicatorMin : environment.emptyForExport ,
            'Affected indicator Max': this.criteria.affectedIndicatorMax ? this.criteria.affectedIndicatorMax : environment.emptyForExport ,
        }];
      }



    get items(): Array<InscriptionMembreDto> {
        return this.service.items;
    }

    set items(value: Array<InscriptionMembreDto>) {
        this.service.items = value;
    }

    get selections(): Array<InscriptionMembreDto> {
        return this.service.selections;
    }

    set selections(value: Array<InscriptionMembreDto>) {
        this.service.selections = value;
    }

    get item(): InscriptionMembreDto {
        return this.service.item;
    }

    set item(value: InscriptionMembreDto) {
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

    get criteria(): InscriptionMembreCriteria {
        return this.service.criteria;
    }

    set criteria(value: InscriptionMembreCriteria) {
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
