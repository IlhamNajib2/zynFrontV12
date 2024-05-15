import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {InscriptionMembreStateCriteria} from './InscriptionMembreStateCriteria.model';
import {InscriptionCollaboratorCriteria} from './InscriptionCollaboratorCriteria.model';
import {MemberCriteria} from '../collaborator/MemberCriteria.model';

export class InscriptionMembreCriteria  extends BaseCriteria  {

    public id: number;
    public inscriptionDate: Date;
    public inscriptionDateFrom: Date;
    public inscriptionDateTo: Date;
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
     public affectedEntity: number;
     public affectedEntityMin: number;
     public affectedEntityMax: number;
     public affectedProjet: number;
     public affectedProjetMin: number;
     public affectedProjetMax: number;
     public affectedAttribut: number;
     public affectedAttributMin: number;
     public affectedAttributMax: number;
     public affectedIndicator: number;
     public affectedIndicatorMin: number;
     public affectedIndicatorMax: number;
  public member: MemberCriteria ;
  public members: Array<MemberCriteria> ;
  public inscriptionMembreState: InscriptionMembreStateCriteria ;
  public inscriptionMembreStates: Array<InscriptionMembreStateCriteria> ;
  public inscriptionCollaborator: InscriptionCollaboratorCriteria ;
  public inscriptionCollaborators: Array<InscriptionCollaboratorCriteria> ;

}
