import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {CategoryPackagingCriteria} from '../category/CategoryPackagingCriteria.model';

export class PackagingCriteria  extends BaseCriteria  {

    public id: number;
    public name: string;
    public nameLike: string;
    public code: string;
    public codeLike: string;
    public description: string;
    public descriptionLike: string;
    public dateStart: Date;
    public dateStartFrom: Date;
    public dateStartTo: Date;
    public dateEnd: Date;
    public dateEndFrom: Date;
    public dateEndTo: Date;
     public price: number;
     public priceMin: number;
     public priceMax: number;
     public maxEntity: number;
     public maxEntityMin: number;
     public maxEntityMax: number;
     public maxProjet: number;
     public maxProjetMin: number;
     public maxProjetMax: number;
     public maxAttribut: number;
     public maxAttributMin: number;
     public maxAttributMax: number;
     public maxIndicator: number;
     public maxIndicatorMin: number;
     public maxIndicatorMax: number;

}
