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
import {ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CouponDetailDto } from 'src/app/shared/model/coupon/CouponDetail.model';
import {PaimentCollaboratorDto} from "../../../../shared/model/paiment/PaimentCollaborator.model";
import {CouponDto} from "../../../../shared/model/coupon/Coupon.model";
import {CategoryPackagingDto} from "../../../../shared/model/category/CategoryPackaging.model";


@Component({
  selector: 'app-inscription-collaborator',
  templateUrl: './inscription.component.html',
    styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

    protected fileName = 'InscriptionCollaborator';

    protected findByCriteriaShow = false;
    protected cols: any[] = [];
    protected excelPdfButons: MenuItem[];
    protected exportData: any[] = [];
    protected criteriaData: any[] = [];
    protected _totalRecords = 0;
    private _pdfName: string;
    private _email: string;


    protected _errorMessages = new Array<string>();



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
    private _activeTab = 0;

    isIndividual: boolean = false;
    activeIndex: number = 0;
    activeIndex1: number;
    confirmed = false;
    totalCalcule: boolean = false;
    packagings: Array<PackagingDto>;
    collaborators: Array<CollaboratorDto>;
    inscriptionCollaboratorStates: Array<InscriptionCollaboratorStateDto>;
    inscriptionCollaboratorTypes: Array<InscriptionCollaboratorTypeDto>;
    private _inscriptionCollaborator: InscriptionCollaboratorDto = new InscriptionCollaboratorDto();




    private _inscriptionMembresElement = new InscriptionMembreDto();
    private _inscriptionMembresElements = new Array<InscriptionMembreDto>();
    private _paiment: PaimentCollaboratorDto = new PaimentCollaboratorDto();
    private _packaging: PackagingDto = new PackagingDto();
    private _b: InscriptionMembreDto = new InscriptionMembreDto();
    private _validPackagingCode = true;
    private _validCollaboratorDescription = true;
    private _validInscriptionCollaboratorStateCode = true;
    private _validInscriptionCollaboratorTypeCode = true;
    protected _validPaimentCollaboratorName: boolean = true;
    protected _validPaimentCollaboratorCode: boolean = true;
    private _validInscriptionCollaboratorStateName = true;
    private _validInscriptionCollaboratorTypeName = true;
    validCollaboratorDescription: any;
    dateFormatColumn: string;
    inscriptionCollaboratorType:InscriptionCollaboratorTypeDto=new InscriptionCollaboratorTypeDto();
    inscriptionCollaboratorState:InscriptionCollaboratorStateDto=new InscriptionCollaboratorStateDto();



    private _inscribe: InscriptionCollaboratorDto = new InscriptionCollaboratorDto();

    @ViewChild('myElement') myElementRef!: ElementRef;

    ngAfterViewInit() {
        // Accédez à nativeElement ici
        const nativeElement = this.myElementRef.nativeElement;
        console.log(nativeElement);
    }


    constructor( private service: InscriptionCollaboratorCollaboratorService  , private collaboratorService: CollaboratorCollaboratorService, private inscriptionMembreService: InscriptionMembreCollaboratorService, private inscriptionCollaboratorTypeService: InscriptionCollaboratorTypeCollaboratorService, private inscriptionMembreStateService: InscriptionMembreStateCollaboratorService, private packagingService: PackagingCollaboratorService, private inscriptionCollaboratorStateService: InscriptionCollaboratorStateCollaboratorService, private memberService: MemberCollaboratorService, @Inject(PLATFORM_ID) private platformId?) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.authService = ServiceLocator.injector.get(AuthService);
        this.exportService = ServiceLocator.injector.get(ExportService);
        this.updateItemsMenu();
    }

    ngOnInit(): void {
        this.item=new InscriptionCollaboratorDto();
        this.item.collaborator =  new CollaboratorDto();
        this.item.inscriptionCollaboratorType =  new InscriptionCollaboratorTypeDto();

        this.paiment=new  PaimentCollaboratorDto();
        this.paiment.couponDetail=new CouponDetailDto();
        this.paiment.couponDetail.coupon=new CouponDto();
        this.inscriptionMembresElement= new InscriptionMembreDto();
        this.inscriptionMembresElement.member= new MemberDto();
        this.inscriptionMembresElements= new Array<InscriptionMembreDto>;
        this.memberService.findAll().subscribe((data) => this.members = data);
        this.inscriptionMembresElement.inscriptionMembreState = new InscriptionMembreStateDto();
        this.inscriptionMembreStateService.findAll().subscribe((data) => this.inscriptionMembreStates = data);
        this.packagingService.findAll().subscribe((data) => this.packagings = data);
        this.collaboratorService.findAll().subscribe((data) => this.collaborators = data);
        this.inscriptionCollaboratorStateService.findAll().subscribe((data) => this.inscriptionCollaboratorStates = data);
        this.inscriptionCollaboratorTypeService.findAll().subscribe((data) => this.inscriptionCollaboratorTypes = data);

        this.findPaginatedByCriteria();
        this.initExport();
        this.initCol();
        this.loadPackaging();
        this.loadCollaborator();
        this.loadInscriptionCollaboratorState();
        this.loadInscriptionCollaboratorType();
        this.isIndividual = true;
        console.log(this.packagingService.item);
    }



    itemsMenu = [
        {label: 'Collaborator'},
        {label: 'Payment'},
        {label: 'Confirmation'},
    ];





    public async delete1(dto: InscriptionMembreDto) {

        this.confirmationService.confirm({
            message: 'Voulez-vous supprimer cet élément ?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.inscriptionMembreService.delete(dto).subscribe(status => {
                    if (status > 0) {
                        const position = this.inscriptionMembresElements.indexOf(dto);
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


    public addInscriptionMembres() {
        if (this.errorMessages.length === 0) {
            this.item.inscriptionMembres.push({... this.inscriptionMembresElement});
            this.inscriptionMembresElement = new InscriptionMembreDto();
        }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
    }

    public async edit1(dto: InscriptionMembreDto) {
        this.inscriptionMembreService.findByIdWithAssociatedList(dto).subscribe(res => {
            this.inscriptionMembresElement = res;
            this.editDialog = true;
        });

    }


    saveCollaborator(): void {
        const email: string = this.email;
        this.item.packaging=this.packagingService.item;
        this.paiment.inscriptionCollaborator=this.item;
        console.log("paiemnt"+this.paiment.name)
        console.log("paiemnt"+this.paiment.inscriptionCollaborator.packaging.name)
        console.log("paiemnt"+this.paiment.amountToPaid)
        console.log("paiemnt"+this.paiment.couponDetail.coupon.name)
        this.authService.saveCollaborator(email,this.paiment).subscribe(
            response => {
                console.log('Inscription réussie :', response);
            },
            error => {
                console.error('Erreur lors de l\'inscription :', error);

            }
        );
    }


    action1() {
        this.updateItemsMenu();
    }

    protected readonly Date = Date;

    public CalcultotalRestant(couponName: string, total: number): number {
        let result = null;
        if (this.errorMessages.length === 0) {
            result = this.service.CalcultotalRestant(couponName, total);
            this.paiment.remaining = result;
            this.totalCalcule = true;
        } else {
            this.messageService.add({
                severity: 'error',
                summary: 'Erreurs',
                detail: 'Merci de verifier votre coupon '
            });


        }
        return result;
    }

    public hideCreateDialog() {
        this.createDialog = false;
        this.setValidation(true);
    }

    public setValidation(value: boolean) {
    }

/*
 if (!this.inscription || !this.inscription.inscriptionCollaboratorType) {

            this.inscription = new InscriptionCollaboratorDto();
            this.inscription.inscriptionCollaboratorType= new InscriptionCollaboratorTypeDto();
        }
 */
    updateItemsMenu() {
        if (!this.item || !this.item.inscriptionCollaboratorType) {

            this.item = new InscriptionCollaboratorDto();
            this.item.inscriptionCollaboratorType= new InscriptionCollaboratorTypeDto();
        }
        if (this.item.inscriptionCollaboratorType.name === 'company') {
            this.itemsMenu.splice(1, 0, {label: 'Member'});
        } else {
            this.removeItem('Member');
            this.isIndividual = true;
            this.activeIndex = 0;
        }
    }




    removeItem(label: string) {
        const index = this.itemsMenu.findIndex(item => item.label === label);
        if (index !== -1) {
            this.itemsMenu.splice(index, 1);
        }
    }

    action() {

        if (!this.item || !this.item.inscriptionCollaboratorType) {

            this.item = new InscriptionCollaboratorDto();
            this.item.inscriptionCollaboratorType= new InscriptionCollaboratorTypeDto();
        }
        if (this.item.inscriptionCollaboratorType.name === 'company') {
            this.changeActiveIndexes();
            this.isIndividual = false;
        }
        this.updateItemsMenu();
    }

    changeActiveIndexes() {
        this.activeIndex1 = 0;
    }
    nextb() {
        if (!this.item || !this.item.inscriptionCollaboratorType) {

            this.item = new InscriptionCollaboratorDto();
            this.item.inscriptionCollaboratorType= new InscriptionCollaboratorTypeDto();
        }
        let validationPassed = false;
        if (this.item.inscriptionCollaboratorType.name === 'Individual') {
            validationPassed = this.validateStepMember(this.activeIndex);
        } else if (this.item.inscriptionCollaboratorType.name === 'company') {
            validationPassed = this.validateStepMember(this.activeIndex1);
        }

        if (validationPassed) {
            if (this.item.inscriptionCollaboratorType.name === 'Individual') {
                if (this.activeIndex < 2) { // Assuming there are 3 steps in total for individual
                    this.activeIndex++;
                }
            } else if (this.item.inscriptionCollaboratorType.name === 'company') {
                if (this.activeIndex1 < 3) { // Assuming there are 4 steps in total for company
                    if (this.activeIndex1 === 0) {
                        this.activeIndex1 = 1;
                    } else if (this.activeIndex1 === 1) {
                        this.activeIndex1 = 2; // Skip the member step
                    } else if (this.activeIndex1 === 2) {
                        this.activeIndex1 = 3;
                    }
                }
            }
        } else {
            this.activeIndex++;
        }
    }


    validateStepMember(index: number) {
        switch (index) {
            case 0:
                if (!this.validateCollaborator()) {
                    return true;
                }
                break;
            case 1:
                if (!this.validateMembers()) {
                    return true;
                }
                break;
            case 2:
                if (!this.validatePayment()) {
                    return true;
                }
                break;
            default:
                return true;
        }
        return true;
    }


    prev() {
        if (this.activeIndex != 0 || this.activeIndex1 != 0) {
            this.activeIndex1--;
            this.activeIndex--;
        }

    }


    validateCollaborator(): boolean {
        if (
            this.collaborator.description &&
            this.collaborator.username &&
            this.collaborator.password

        ) {
            return true;
        }
        return false;
    }

    validateMembers(): boolean {
        if (this.inscriptionMembresElement.member.username && this.inscriptionMembresElement.member.password) {
            return true;
        }
        return false;
    }

    validatePayment(): boolean {
        if (
            this.paiment.name &&
            this.paiment.description &&
            this.paiment.code &&
            this.paiment.couponDetail
        ) {
            return true;
        }
        return false;
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
       this.item.packaging= this.packagingService.item;
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





    get inscription(): InscriptionCollaboratorDto {
        return this._inscribe;
    }

    set inscription(value: InscriptionCollaboratorDto) {
        this._inscribe = value;
    }


    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }


    get activeTab(): number {
        return this._activeTab;
    }

    set activeTab(value: number) {
        this._activeTab = value;
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

    get inscriptionMembresElement(): InscriptionMembreDto {
        if (this._inscriptionMembresElement == null)
            this._inscriptionMembresElement = new InscriptionMembreDto();
        return this._inscriptionMembresElement;
    }

    set inscriptionMembresElement(value: InscriptionMembreDto) {
        this._inscriptionMembresElement = value;
    }


    get inscriptionMembresElements(): InscriptionMembreDto[] {
        return this._inscriptionMembresElements;
    }

    set inscriptionMembresElements(value: InscriptionMembreDto[]) {
        this._inscriptionMembresElements = value;
    }

    get paiment(): PaimentCollaboratorDto {
        return this._paiment;
    }

    set paiment(value: PaimentCollaboratorDto) {
        this._paiment = value;
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

    get collaborator(): CollaboratorDto {
        return this.collaboratorService.item;
    }

    set collaborator(value: CollaboratorDto) {
        this.collaboratorService.item = value;
    }



    get inscriptionMembreStates(): Array<InscriptionMembreStateDto> {
        return this.inscriptionMembreStateService.items;
    }

    set inscriptionMembreStates(value: Array<InscriptionMembreStateDto>) {
        this.inscriptionMembreStateService.items = value;
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
