import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';

export class TypeTemplateCriteria  extends BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public name: string;
    public nameLike: string;

}
