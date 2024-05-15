import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {CouponDetailCriteria} from './CouponDetailCriteria.model';
import {InfluencerCriteria} from './InfluencerCriteria.model';

export class CouponCriteria  extends BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public dateStart: Date;
    public dateStartFrom: Date;
    public dateStartTo: Date;
    public dateEnd: Date;
    public dateEndFrom: Date;
    public dateEndTo: Date;
    public name: string;
    public nameLike: string;
  public influencer: InfluencerCriteria ;
  public influencers: Array<InfluencerCriteria> ;
      public couponDetails: Array<CouponDetailCriteria>;

}
