import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {CategoryPackagingDto} from '../category/CategoryPackaging.model';

export class PackagingDto extends BaseDto{

    public name: string;

    public code: string;

    public description: string;

   public dateStart: Date;

   public dateEnd: Date;

    public price: null | number;

    public maxEntity: null | number;

    public maxProjet: null | number;

    public maxAttribut: null | number;

    public maxIndicator: null | number;

    public categoryPackaging: CategoryPackagingDto ;
    

    constructor() {
        super();

        this.name = '';
        this.code = '';
        this.description = '';
        this.dateStart = null;
        this.dateEnd = null;
        this.price = null;
        this.maxEntity = null;
        this.maxProjet = null;
        this.maxAttribut = null;
        this.maxIndicator = null;

        }

}
