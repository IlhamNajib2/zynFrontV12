import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {CategoryTemplateCriteria} from './CategoryTemplateCriteria.model';
import {TechnologyCriteria} from './TechnologyCriteria.model';
import {LevelTemplateCriteria} from './LevelTemplateCriteria.model';
import {TypeTemplateCriteria} from './TypeTemplateCriteria.model';
import {DomainTemplateCriteria} from './DomainTemplateCriteria.model';
import {MemberCriteria} from '../collaborator/MemberCriteria.model';

export class TemplateCriteria  extends BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public name: string;
    public nameLike: string;
    public description: string;
    public descriptionLike: string;
    public addingDate: Date;
    public addingDateFrom: Date;
    public addingDateTo: Date;
    public lastUpdateDate: Date;
    public lastUpdateDateFrom: Date;
    public lastUpdateDateTo: Date;
    public templateTags: string;
    public templateTagsLike: string;
     public price: number;
     public priceMin: number;
     public priceMax: number;
  public categoryTemplate: CategoryTemplateCriteria ;
  public categoryTemplates: Array<CategoryTemplateCriteria> ;
  public typeTemplate: TypeTemplateCriteria ;
  public typeTemplates: Array<TypeTemplateCriteria> ;
  public levelTemplate: LevelTemplateCriteria ;
  public levelTemplates: Array<LevelTemplateCriteria> ;
  public domainTemplate: DomainTemplateCriteria ;
  public domainTemplates: Array<DomainTemplateCriteria> ;
  public member: MemberCriteria ;
  public members: Array<MemberCriteria> ;
  public technology: TechnologyCriteria ;
  public technologys: Array<TechnologyCriteria> ;

}
