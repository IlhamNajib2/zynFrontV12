import {Component, OnInit} from '@angular/core';
import {PackagingCollaboratorService} from 'src/app/shared/service/collaborator/packaging/PackagingCollaborator.service';
import {PackagingDto} from 'src/app/shared/model/packaging/Packaging.model';
import {PackagingCriteria} from 'src/app/shared/criteria/packaging/PackagingCriteria.model';


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


import {CategoryPackagingDto} from 'src/app/shared/model/category/CategoryPackaging.model';
import {CategoryPackagingCollaboratorService} from 'src/app/shared/service/collaborator/category/CategoryPackagingCollaborator.service';
import {catchError, forkJoin, of, tap} from "rxjs";


@Component({
  selector: 'app-packaging-list-collaborator',
  templateUrl: './packaging-list-collaborator.component.html',
    styleUrls:['./packaging-list-collaborator.component.scss']
})
export class PackagingListCollaboratorComponent implements OnInit {



    showPackageDetailsFlag: boolean = false;
    selectedCategory: string = 'Free';
    fileName = 'Packaging';

    selectCategory(category: string) {
        this.selectedCategory = category;
        this.showPackageDetailsFlag = true;
    }


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


    categoryPackagings: Array<CategoryPackagingDto>;


    constructor( private packagingService: PackagingCollaboratorService, private categoryPackagingService: CategoryPackagingCollaboratorService, @Inject(PLATFORM_ID) private platformId?) {
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
        this.loadCategoryPackaging();
        this.packagingService.getAllPackagesData().subscribe(packagesData => {
            this.packagesData = packagesData.map(packageData => {
                return {
                    ...packageData,
                    descriptionLines: this.packagingService.splitDescriptionIntoLines(packageData.description)
                };
            });
        });
        this.packagingService.getAllPackagesData().subscribe(packagesData => {
            this.packagesData = packagesData;
        });

        // this.packagingService.getAllPackagesData().subscribe(packagesData => {
        //this.packagesData = packagesData.map(packageData => {
        // return {
        //         ...packageData,
        //       descriptionLines: this.packagingService.splitDescriptionIntoLines(packageData.description)
        // };
        // });
        //});
        // Appelez le service pour récupérer les données de tous les packages

        this.packagingService.getAllPackagesData().subscribe(data => {
            this.packagesData = data;
        });
        //  this.loadPackagingById('1');
        this.activateSecurityConstraint('Packaging').subscribe(() => {
            if (true || this.listActionIsValid) {
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadCategoryPackaging();
            }
        });
        this.selectedCategory === 'Free';
        this.showPackageDetailsFlag = true;
    }




    onSearchInput(event: any) {
        const searchTerm = event.target.value;
        // Handle search input here
        console.log('Search term:', searchTerm);
    }



    packagesData: PackagingDto[];
    visible: boolean = false;





    login: boolean=false;

    public async loadCategoryPackaging(){
        this.categoryPackagingService.findAllOptimized().subscribe(categoryPackagings => this.categoryPackagings = categoryPackagings, error => console.log(error))
    }





    public onExcelFileSelected(event: any): void {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            this.excelFile = input.files[0];
        }
    }

    public importExcel(): void {
        if (this.excelFile) {
            this.packagingService.importExcel(this.excelFile).subscribe(
                response => {
                    console.log('File uploaded successfully!', response);
                },
                error => {
                    console.error('Error uploading file:', error);
                }
            );
        }
    }

    public submit(package1:PackagingDto){
        //[routerLink]="['/inscription-collaborator/list']"
        this.item=package1;
        console.log(this.item);
        this.router.navigate(['/app/collaborator/inscription/inscription-collaborator/list/']);

    }
    public submit1(package1:PackagingDto){
        //[routerLink]="['/inscription-collaborator/list']"
        this.item=package1;
        console.log(this.item);
        this.router.navigate(['/app/collaborator/project/project/list/']);

    }


    public findPaginatedByCriteria() {
        this.packagingService.findPaginatedByCriteria(this.criteria).subscribe(paginatedItems => {
            this.items = paginatedItems.list;
            this.totalRecords = paginatedItems.dataSize;
            this.selections = new Array<PackagingDto>();
        }, error => console.log(error));
    }

    public onPage(event: any) {
        this.criteria.page = event.page;
        this.criteria.maxResults = event.rows;
        this.findPaginatedByCriteria();
    }

    public async edit(dto: PackagingDto) {
        this.packagingService.findByIdWithAssociatedList(dto).subscribe(res => {
            this.item = res;
            console.log(res);
            this.editDialog = true;
        });

    }

    public async view(dto: PackagingDto) {
        this.packagingService.findByIdWithAssociatedList(dto).subscribe(res => {
            this.item = res;
            this.viewDialog = true;
        });
    }

    public async openCreate() {
        this.item = new PackagingDto();
        this.createDialog = true;
    }

    public async deleteMultiple() {
        this.confirmationService.confirm({
            message: 'Voulez-vous supprimer ces éléments ?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.packagingService.deleteMultiple().subscribe(() => {
                    this.items = this.items.filter(item => !this.selections.includes(item));
                    this.selections = new Array<PackagingDto>();
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


    public async delete(dto: PackagingDto) {

        this.confirmationService.confirm({
            message: 'Voulez-vous supprimer cet élément ?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.packagingService.delete(dto).subscribe(status => {
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

    public async duplicate(dto: PackagingDto) {
        this.packagingService.findByIdWithAssociatedList(dto).subscribe(
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

    public exportPdf(dto: PackagingDto): void {
        this.packagingService.exportPdf(dto).subscribe((data: ArrayBuffer) => {
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
        this.packagingService.edit().subscribe(data => {
            const myIndex = this.items.findIndex(e => e.id === this.item.id);
            this.items[myIndex] = data;
            this.editDialog = false;
            this.item = new PackagingDto();
        } , error => {
            console.log(error);
        });
    }
    public activateSecurityConstraint(entityName: string) {
        this.entityName = entityName;
        let createActionPermission = of(true);
        let editActionPermission = of(true);
        let deleteActionPermission = of(true);
        let listActionPermission = of(true);
        let duplicateActionPermission = of(true);
        let viewActionPermission = of(true);
        if (this.enableSecurity){
            createActionPermission = this.hasCreateActionPermission(this.createAction);
            editActionPermission = this.hasEditeActionPermission(this.editAction);
            deleteActionPermission = this.hasDeleteActionPermission(this.deleteAction);
            listActionPermission = this.hasListActionPermission(this.listAction);
            duplicateActionPermission = this.hasDuplicateActionPermission(this.duplicateAction);
            viewActionPermission = this.hasViewActionPermission(this.viewAction);
        }
        else {
            this.createActionIsValid= true;
            this.editActionIsValid= true;
            this.deleteActionIsValid= true;
            this.listActionIsValid= true;
            this.duplicateActionIsValid= true;
            this.viewActionIsValid= true;
        }
        return forkJoin([
            createActionPermission,
            editActionPermission,
            deleteActionPermission,
            listActionPermission,
            duplicateActionPermission,
            viewActionPermission
        ]);
    }

    public hasCreateActionPermission(action: string) {
        const username = this.authService.authenticatedUser.username;
        return this.packagingService.hasActionPermission(username, action).pipe(
            tap(data => this.createActionIsValid = data),
            catchError(error => {
                console.log(error);
                return of(null);
            })
        );
    }
    public hasEditeActionPermission(action: string) {
        const username = this.authService.authenticatedUser.username;
        return this.packagingService.hasActionPermission(username, action).pipe(
            tap(data => this.editActionIsValid = data),
            catchError(error => {
                console.log(error);
                return of(null);
            })
        );
    }

    public hasDeleteActionPermission(action: string) {
        const username = this.authService.authenticatedUser.username;
        return this.packagingService.hasActionPermission(username, action).pipe(
            tap(data => this.deleteActionIsValid = data),
            catchError(error => {
                console.log(error);
                return of(null);
            })
        );
    }

    public hasListActionPermission(action: string) {
        const username = this.authService.authenticatedUser.username;
        return this.packagingService.hasActionPermission(username, action).pipe(
            tap(data => this.listActionIsValid = data),
            catchError(error => {
                console.log(error);
                return of(null);
            })
        );
    }

    public hasDuplicateActionPermission(action: string) {
        const username = this.authService.authenticatedUser.username;
        return this.packagingService.hasActionPermission(username, action).pipe(
            tap(data => this.duplicateActionIsValid = data),
            catchError(error => {
                console.log(error);
                return of(null);
            })
        );
    }

    public hasViewActionPermission(action: string) {
        const username = this.authService.authenticatedUser.username;
        return this.packagingService.hasActionPermission(username, action).pipe(
            tap(data => this.viewActionIsValid = data),
            catchError(error => {
                console.log(error);
                return of(null);
            })
        );
    }



    public save() {
        this.packagingService.save().subscribe(item => {
            if (item != null) {
                this.items.push({...item});
                this.createDialog = false;


                this.item = new PackagingDto();
            } else {
                this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Element existant'});
            }
        }, error => {
            console.log(error);
        });
    }




    public initCol() {
        this.cols = [
            {field: 'name', header: 'Name'},
            {field: 'code', header: 'Code'},
            {field: 'dateStart', header: 'Date start'},
            {field: 'dateEnd', header: 'Date end'},
            {field: 'price', header: 'Price'},
            {field: 'maxEntity', header: 'Max entity'},
            {field: 'maxProjet', header: 'Max projet'},
            {field: 'maxAttribut', header: 'Max attribut'},
            {field: 'maxIndicator', header: 'Max indicator'},
            {field: 'categoryPackaging?.name', header: 'Category packaging'},
        ];
    }




	public initDuplicate(res: PackagingDto) {
	}



   public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Name': e.name ,
                 'Code': e.code ,
                 'Description': e.description ,
                'Date start': this.datePipe.transform(e.dateStart , 'dd/MM/yyyy hh:mm'),
                'Date end': this.datePipe.transform(e.dateEnd , 'dd/MM/yyyy hh:mm'),
                 'Price': e.price ,
                 'Max entity': e.maxEntity ,
                 'Max projet': e.maxProjet ,
                 'Max attribut': e.maxAttribut ,
                 'Max indicator': e.maxIndicator ,
                'Category packaging': e.categoryPackaging?.name ,
            }
        });

        this.criteriaData = [{
            'Name': this.criteria.name ? this.criteria.name : environment.emptyForExport ,
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
            'Date start Min': this.criteria.dateStartFrom ? this.datePipe.transform(this.criteria.dateStartFrom , this.dateFormat) : environment.emptyForExport ,
            'Date start Max': this.criteria.dateStartTo ? this.datePipe.transform(this.criteria.dateStartTo , this.dateFormat) : environment.emptyForExport ,
            'Date end Min': this.criteria.dateEndFrom ? this.datePipe.transform(this.criteria.dateEndFrom , this.dateFormat) : environment.emptyForExport ,
            'Date end Max': this.criteria.dateEndTo ? this.datePipe.transform(this.criteria.dateEndTo , this.dateFormat) : environment.emptyForExport ,
            'Price Min': this.criteria.priceMin ? this.criteria.priceMin : environment.emptyForExport ,
            'Price Max': this.criteria.priceMax ? this.criteria.priceMax : environment.emptyForExport ,
            'Max entity Min': this.criteria.maxEntityMin ? this.criteria.maxEntityMin : environment.emptyForExport ,
            'Max entity Max': this.criteria.maxEntityMax ? this.criteria.maxEntityMax : environment.emptyForExport ,
            'Max projet Min': this.criteria.maxProjetMin ? this.criteria.maxProjetMin : environment.emptyForExport ,
            'Max projet Max': this.criteria.maxProjetMax ? this.criteria.maxProjetMax : environment.emptyForExport ,
            'Max attribut Min': this.criteria.maxAttributMin ? this.criteria.maxAttributMin : environment.emptyForExport ,
            'Max attribut Max': this.criteria.maxAttributMax ? this.criteria.maxAttributMax : environment.emptyForExport ,
            'Max indicator Min': this.criteria.maxIndicatorMin ? this.criteria.maxIndicatorMin : environment.emptyForExport ,
            'Max indicator Max': this.criteria.maxIndicatorMax ? this.criteria.maxIndicatorMax : environment.emptyForExport ,
        //'Category packaging': this.criteria.categoryPackaging?.name ? this.criteria.categoryPackaging?.name : environment.emptyForExport ,
        }];
      }



    get items(): Array<PackagingDto> {
        return this.packagingService.items;
    }

    set items(value: Array<PackagingDto>) {
        this.packagingService.items = value;
    }

    get selections(): Array<PackagingDto> {
        return this.packagingService.selections;
    }

    set selections(value: Array<PackagingDto>) {
        this.packagingService.selections = value;
    }

    get item(): PackagingDto {
        return this.packagingService.item;
    }

    set item(value: PackagingDto) {
        this.packagingService.item = value;
    }

    get createDialog(): boolean {
        return this.packagingService.createDialog;
    }

    set createDialog(value: boolean) {
        this.packagingService.createDialog = value;
    }

    get editDialog(): boolean {
        return this.packagingService.editDialog;
    }

    set editDialog(value: boolean) {
        this.packagingService.editDialog = value;
    }

    get viewDialog(): boolean {
        return this.packagingService.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.packagingService.viewDialog = value;
    }

    get criteria(): PackagingCriteria {
        return this.packagingService.criteria;
    }

    set criteria(value: PackagingCriteria) {
        this.packagingService.criteria = value;
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
        return this.packagingService.createActionIsValid;
    }

    set createActionIsValid(value: boolean) {
        this.packagingService.createActionIsValid = value;
    }


    get editActionIsValid(): boolean {
        return this.packagingService.editActionIsValid;
    }

    set editActionIsValid(value: boolean) {
        this.packagingService.editActionIsValid = value;
    }

    get listActionIsValid(): boolean {
        return this.packagingService.listActionIsValid;
    }

    set listActionIsValid(value: boolean) {
        this.packagingService.listActionIsValid = value;
    }

    get deleteActionIsValid(): boolean {
        return this.packagingService.deleteActionIsValid;
    }

    set deleteActionIsValid(value: boolean) {
        this.packagingService.deleteActionIsValid = value;
    }


    get viewActionIsValid(): boolean {
        return this.packagingService.viewActionIsValid;
    }

    set viewActionIsValid(value: boolean) {
        this.packagingService.viewActionIsValid = value;
    }

    get duplicateActionIsValid(): boolean {
        return this.packagingService.duplicateActionIsValid;
    }

    set duplicateActionIsValid(value: boolean) {
        this.packagingService.duplicateActionIsValid = value;
    }

    get createAction(): string {
        return this.packagingService.createAction;
    }

    set createAction(value: string) {
        this.packagingService.createAction = value;
    }

    get listAction(): string {
        return this.packagingService.listAction;
    }

    set listAction(value: string) {
        this.packagingService.listAction = value;
    }

    get editAction(): string {
        return this.packagingService.editAction;
    }

    set editAction(value: string) {
        this.packagingService.editAction = value;
    }

    get deleteAction(): string {
        return this.packagingService.deleteAction;
    }

    set deleteAction(value: string) {
        this.packagingService.deleteAction = value;
    }

    get viewAction(): string {
        return this.packagingService.viewAction;
    }

    set viewAction(value: string) {
        this.packagingService.viewAction = value;
    }

    get duplicateAction(): string {
        return this.packagingService.duplicateAction;
    }

    set duplicateAction(value: string) {
        this.packagingService.duplicateAction = value;
    }

    get entityName(): string {
        return this.packagingService.entityName;
    }

    set entityName(value: string) {
        this.packagingService.entityName = value;
    }
}
