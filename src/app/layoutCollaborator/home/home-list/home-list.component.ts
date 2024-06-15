import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {TranslateService} from "@ngx-translate/core";
import {LayoutService} from "../../../layout/service/app.layout.service";
import {AppLayoutCollaboratorComponent} from "../../app.layoutCollaborator.component";
import {AppComponent} from "../../../app.component";
import {AuthService} from "../../../zynerator/security/shared/service/Auth.service";
import {UserService} from "../../../zynerator/security/shared/service/User.service";





@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit{
    @ViewChild('videoPlayer', { static: false }) videoPlayer: ElementRef;
    onSearchInput(event: any) {
        const searchTerm = event.target.value;
        // Handle search input here
        console.log('Search term:', searchTerm);
    }


    constructor(public  layoutService:LayoutService , public app: AppComponent, public appMain: AppLayoutCollaboratorComponent, private authService: AuthService, private translateService: TranslateService, private userService: UserService) {

    }
    ngOnInit(): void {
    }

    playVideo() {
        const video: HTMLVideoElement = this.videoPlayer.nativeElement;
        video.play();
    }
}
