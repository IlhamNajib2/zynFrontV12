import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class InscriptionCollaboratorStateDto extends BaseDto{

    public code: string;

    public name: string;

    

    constructor() {
        super();

        this.code = '';
        this.name = '';

        }

}
