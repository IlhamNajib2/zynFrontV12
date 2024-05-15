import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {CouponDetailCriteria} from '../coupon/CouponDetailCriteria.model';
import {PaimentCollaboratorStateCriteria} from '../project/PaimentCollaboratorStateCriteria.model';
import {InscriptionCollaboratorCriteria} from '../inscription/InscriptionCollaboratorCriteria.model';

export class PaimentCollaboratorCriteria  extends BaseCriteria  {

    public id: number;
    public name: string;
    public nameLike: string;
    public description: string;
    public descriptionLike: string;
    public code: string;
    public codeLike: string;
     public amountToPaid: number;
     public amountToPaidMin: number;
     public amountToPaidMax: number;
     public total: number;
     public totalMin: number;
     public totalMax: number;
     public discount: number;
     public discountMin: number;
     public discountMax: number;
     public remaining: number;
     public remainingMin: number;
     public remainingMax: number;
    public paiementDate: Date;
    public paiementDateFrom: Date;
    public paiementDateTo: Date;
  public inscriptionCollaborator: InscriptionCollaboratorCriteria ;
  public inscriptionCollaborators: Array<InscriptionCollaboratorCriteria> ;
  public paimentCollaboratorState: PaimentCollaboratorStateCriteria ;
  public paimentCollaboratorStates: Array<PaimentCollaboratorStateCriteria> ;

}
