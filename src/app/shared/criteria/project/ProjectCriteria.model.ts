import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {InscriptionMembreCriteria} from '../inscription/InscriptionMembreCriteria.model';
import {ProjectStateCriteria} from './ProjectStateCriteria.model';
import {DomainTemplateCriteria} from '../template/DomainTemplateCriteria.model';
import {ProjectTemplateCriteria} from '../template/ProjectTemplateCriteria.model';

export class ProjectCriteria  extends BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public name: string;
    public nameLike: string;
    public generatedDate: Date;
    public generatedDateFrom: Date;
    public generatedDateTo: Date;
    public yaml: string;
    public yamlLike: string;
  public projectState: ProjectStateCriteria ;
  public projectStates: Array<ProjectStateCriteria> ;
  public inscriptionMembre: InscriptionMembreCriteria ;
  public inscriptionMembres: Array<InscriptionMembreCriteria> ;
  public domainTemplate: DomainTemplateCriteria ;
  public domainTemplates: Array<DomainTemplateCriteria> ;
      public projectTemplates: Array<ProjectTemplateCriteria>;

}
