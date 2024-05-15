import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {TypeTemplateDto} from './TypeTemplate.model';

export class TechnologyDto extends BaseDto{

    public code: string;

    public name: string;

    public logo: string;

    public typeTemplate: TypeTemplateDto ;
    

    constructor() {
        super();

        this.code = '';
        this.name = '';
        this.logo = '';
        this.typeTemplate = new TypeTemplateDto() ;

        }

}
