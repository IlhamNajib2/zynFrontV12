import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {TypeTemplateCriteria} from './TypeTemplateCriteria.model';

export class TechnologyCriteria  extends BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public name: string;
    public nameLike: string;
    public logo: string;
    public logoLike: string;
  public typeTemplate: TypeTemplateCriteria ;
  public typeTemplates: Array<TypeTemplateCriteria> ;

}
