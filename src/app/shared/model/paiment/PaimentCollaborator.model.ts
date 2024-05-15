import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {CouponDetailDto} from '../coupon/CouponDetail.model';
import {PaimentCollaboratorStateDto} from '../project/PaimentCollaboratorState.model';
import {InscriptionCollaboratorDto} from '../inscription/InscriptionCollaborator.model';

export class PaimentCollaboratorDto extends BaseDto{

    public name: string;

    public description: string;

    public code: string;

    public amountToPaid: null | number;

    public total: null | number;

    public discount: null | number;

    public remaining: null | number;

   public paiementDate: Date;

    public couponDetail: CouponDetailDto ;
    public inscriptionCollaborator: InscriptionCollaboratorDto ;
    public paimentCollaboratorState: PaimentCollaboratorStateDto ;
    

    constructor() {
        super();

        this.name = '';
        this.description = '';
        this.code = '';
        this.amountToPaid = null;
        this.total = null;
        this.discount = null;
        this.remaining = null;
        this.paiementDate = null;
        this.inscriptionCollaborator = new InscriptionCollaboratorDto() ;
        this.paimentCollaboratorState = new PaimentCollaboratorStateDto() ;

        }

}
