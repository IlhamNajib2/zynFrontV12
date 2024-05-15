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



import {PaimentInfluencerStateMemberService} from 'src/app/shared/service/member/project/PaimentInfluencerStateMember.service';
import {PaimentInfluencerStateDto} from 'src/app/shared/model/project/PaimentInfluencerState.model';
import {PaimentInfluencerStateCriteria} from 'src/app/shared/criteria/project/PaimentInfluencerStateCriteria.model';
@Component({
  selector: 'app-paiment-influencer-state-create-member',
  templateUrl: './paiment-influencer-state-create-member.component.html'
})
export class PaimentInfluencerStateCreateMemberComponent  implements OnInit {

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



   private _validPaimentInfluencerStateCode = true;

	constructor(private service: PaimentInfluencerStateMemberService , @Inject(PLATFORM_ID) private platformId? ) {
        this.datePipe = ServiceLocator.injector.get(DatePipe);
        this.messageService = ServiceLocator.injector.get(MessageService);
        this.confirmationService = ServiceLocator.injector.get(ConfirmationService);
        this.roleService = ServiceLocator.injector.get(RoleService);
        this.router = ServiceLocator.injector.get(Router);
        this.stringUtilService = ServiceLocator.injector.get(StringUtilService);
    }

    ngOnInit(): void {
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

    public saveWithShowOption(showList: boolean) {
        this.service.save().subscribe(item => {
            if (item != null) {
                this.items.push({...item});
                this.createDialog = false;
                this.submitted = false;
                this.item = new PaimentInfluencerStateDto();
            } else {
                this.messageService.add({severity: 'error', summary: 'Erreurs', detail: 'Element existant'});
            }

        }, error => {
            console.log(error);
        });
    }


    public hideCreateDialog() {
        this.createDialog = false;
        this.setValidation(true);
    }





    public  setValidation(value: boolean){
        this.validPaimentInfluencerStateCode = value;
    }



    public  validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validatePaimentInfluencerStateCode();
    }

    public validatePaimentInfluencerStateCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validPaimentInfluencerStateCode = false;
        } else {
            this.validPaimentInfluencerStateCode = true;
        }
    }






    get validPaimentInfluencerStateCode(): boolean {
        return this._validPaimentInfluencerStateCode;
    }

    set validPaimentInfluencerStateCode(value: boolean) {
         this._validPaimentInfluencerStateCode = value;
    }



    get items(): Array<PaimentInfluencerStateDto> {
        return this.service.items;
    }

    set items(value: Array<PaimentInfluencerStateDto>) {
        this.service.items = value;
    }

    get item(): PaimentInfluencerStateDto {
        return this.service.item;
    }

    set item(value: PaimentInfluencerStateDto) {
        this.service.item = value;
    }

    get createDialog(): boolean {
        return this.service.createDialog;
    }

    set createDialog(value: boolean) {
        this.service.createDialog = value;
    }

    get criteria(): PaimentInfluencerStateCriteria {
        return this.service.criteria;
    }

    set criteria(value: PaimentInfluencerStateCriteria) {
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
