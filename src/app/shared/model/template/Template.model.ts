import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {CategoryTemplateDto} from './CategoryTemplate.model';
import {TechnologyDto} from './Technology.model';
import {LevelTemplateDto} from './LevelTemplate.model';
import {TypeTemplateDto} from './TypeTemplate.model';
import {DomainTemplateDto} from './DomainTemplate.model';
import {MemberDto} from '../collaborator/Member.model';

export class TemplateDto extends BaseDto{

    public code: string;

    public name: string;

    public description: string;

   public addingDate: Date;

   public lastUpdateDate: Date;

    public templateTags: string;

    public price: null | number;

    public categoryTemplate: CategoryTemplateDto ;
    public typeTemplate: TypeTemplateDto ;
    public levelTemplate: LevelTemplateDto ;
    public domainTemplate: DomainTemplateDto ;
    public member: MemberDto ;
    public technology: TechnologyDto ;
    

    constructor() {
        super();

        this.code = '';
        this.name = '';
        this.description = '';
        this.addingDate = null;
        this.lastUpdateDate = null;
        this.templateTags = '';
        this.price = null;
        this.categoryTemplate = new CategoryTemplateDto() ;
        this.typeTemplate = new TypeTemplateDto() ;
        this.levelTemplate = new LevelTemplateDto() ;
        this.domainTemplate = new DomainTemplateDto() ;
        this.member = new MemberDto() ;
        this.technology = new TechnologyDto() ;

        }

}
