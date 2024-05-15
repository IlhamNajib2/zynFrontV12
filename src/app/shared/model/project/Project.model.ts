import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {InscriptionMembreDto} from '../inscription/InscriptionMembre.model';
import {ProjectStateDto} from './ProjectState.model';
import {DomainTemplateDto} from '../template/DomainTemplate.model';
import {ProjectTemplateDto} from '../template/ProjectTemplate.model';

export class ProjectDto extends BaseDto{

    public code: string;

    public name: string;

   public generatedDate: Date;

    public yaml: string;

    public projectState: ProjectStateDto ;
    public inscriptionMembre: InscriptionMembreDto ;
    public domainTemplate: DomainTemplateDto ;
     public projectTemplates: Array<ProjectTemplateDto>;
    

    constructor() {
        super();

        this.code = '';
        this.name = '';
        this.generatedDate = null;
        this.yaml = '';
        this.projectState = new ProjectStateDto() ;
        this.inscriptionMembre = new InscriptionMembreDto() ;
        this.domainTemplate = new DomainTemplateDto() ;
        this.projectTemplates = new Array<ProjectTemplateDto>();

        }

}
