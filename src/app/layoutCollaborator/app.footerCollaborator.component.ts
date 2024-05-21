import { Component } from '@angular/core';
import { LayoutService } from "./service/app.layoutCollaborator.service";

@Component({
    selector: 'app-footerCollaborator',
    templateUrl: './app.footerCollaborator.component.html',
    styleUrls:['./app.footerCollaborator.component.css']
})
export class AppFooterCollaboratorComponent {
    constructor(public layoutService: LayoutService) { }
}
