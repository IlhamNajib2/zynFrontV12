import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {CouponDetailDto} from './CouponDetail.model';
import {InfluencerDto} from './Influencer.model';

export class CouponDto extends BaseDto{

    public code: string;

   public dateStart: Date;

   public dateEnd: Date;

    public name: string;

    public influencer: InfluencerDto ;
     public couponDetails: Array<CouponDetailDto>;
    

    constructor() {
        super();

        this.code = '';
        this.dateStart = null;
        this.dateEnd = null;
        this.name = '';
        this.influencer = new InfluencerDto() ;
        this.couponDetails = new Array<CouponDetailDto>();

        }

}
