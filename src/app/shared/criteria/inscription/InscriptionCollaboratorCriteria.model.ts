import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {CollaboratorCriteria} from '../collaborator/CollaboratorCriteria.model';
import {InscriptionMembreCriteria} from './InscriptionMembreCriteria.model';
import {InscriptionCollaboratorTypeCriteria} from './InscriptionCollaboratorTypeCriteria.model';
import {PackagingCriteria} from '../packaging/PackagingCriteria.model';
import {InscriptionCollaboratorStateCriteria} from './InscriptionCollaboratorStateCriteria.model';

export class InscriptionCollaboratorCriteria  extends BaseCriteria  {

    public id: number;
    public startDate: Date;
    public startDateFrom: Date;
    public startDateTo: Date;
    public endDate: Date;
    public endDateFrom: Date;
    public endDateTo: Date;
    public renewDate: Date;
    public renewDateFrom: Date;
    public renewDateTo: Date;
     public consumedEntity: number;
     public consumedEntityMin: number;
     public consumedEntityMax: number;
     public consumedProjet: number;
     public consumedProjetMin: number;
     public consumedProjetMax: number;
     public consumedAttribut: number;
     public consumedAttributMin: number;
     public consumedAttributMax: number;
     public consumedIndicator: number;
     public consumedIndicatorMin: number;
     public consumedIndicatorMax: number;
      public inscriptionMembres: Array<InscriptionMembreCriteria>;

}
