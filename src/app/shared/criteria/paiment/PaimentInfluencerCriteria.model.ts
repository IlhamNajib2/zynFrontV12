import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {CouponCriteria} from '../coupon/CouponCriteria.model';
import {InfluencerCriteria} from '../coupon/InfluencerCriteria.model';
import {PaimentInfluencerStateCriteria} from '../project/PaimentInfluencerStateCriteria.model';

export class PaimentInfluencerCriteria  extends BaseCriteria  {

    public id: number;
    public name: string;
    public nameLike: string;
    public description: string;
    public descriptionLike: string;
    public code: string;
    public codeLike: string;
     public total: number;
     public totalMin: number;
     public totalMax: number;
     public nbrUtilisation: number;
     public nbrUtilisationMin: number;
     public nbrUtilisationMax: number;
    public datePaiement: Date;
    public datePaiementFrom: Date;
    public datePaiementTo: Date;
  public influencer: InfluencerCriteria ;
  public influencers: Array<InfluencerCriteria> ;
  public coupon: CouponCriteria ;
  public coupons: Array<CouponCriteria> ;

}
