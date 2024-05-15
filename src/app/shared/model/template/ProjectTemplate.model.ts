import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ProjectDto} from '../project/Project.model';
import {TemplateDto} from './Template.model';

export class ProjectTemplateDto extends BaseDto{

    public template: TemplateDto ;
    public project: ProjectDto ;
    

    constructor() {
        super();


        }

}
