import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {CouponCriteria} from './CouponCriteria.model';
import {PackagingCriteria} from '../packaging/PackagingCriteria.model';

export class CouponDetailCriteria  extends BaseCriteria  {

    public id: number;
     public discount: number;
     public discountMin: number;
     public discountMax: number;
     public amountGivenInfluencer: number;
     public amountGivenInfluencerMin: number;
     public amountGivenInfluencerMax: number;
     public usingNumber: number;
     public usingNumberMin: number;
     public usingNumberMax: number;
     public maxUsingNumber: number;
     public maxUsingNumberMin: number;
     public maxUsingNumberMax: number;
  public packaging: PackagingCriteria ;
  public packagings: Array<PackagingCriteria> ;
  public coupon: CouponCriteria ;
  public coupons: Array<CouponCriteria> ;

}
