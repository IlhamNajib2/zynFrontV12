import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {CouponDto} from '../coupon/Coupon.model';
import {InfluencerDto} from '../coupon/Influencer.model';
import {PaimentInfluencerStateDto} from '../project/PaimentInfluencerState.model';

export class PaimentInfluencerDto extends BaseDto{

    public name: string;

    public description: string;

    public code: string;

    public total: null | number;

    public nbrUtilisation: null | number;

   public datePaiement: Date;

    public influencer: InfluencerDto ;
    public coupon: CouponDto ;
    public paimentInfluencerState: PaimentInfluencerStateDto ;
    

    constructor() {
        super();

        this.name = '';
        this.description = '';
        this.code = '';
        this.total = null;
        this.nbrUtilisation = null;
        this.datePaiement = null;
        this.influencer = new InfluencerDto() ;
        this.coupon = new CouponDto() ;

        }

}
