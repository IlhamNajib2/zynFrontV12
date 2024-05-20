import {Component, OnInit} from '@angular/core';

import {TranslateService} from "@ngx-translate/core";
import {LayoutService} from "../../../layout/service/app.layout.service";
import {AppComponent} from "../../../app.component";
import {AppLayoutCollaboratorComponent} from "../../app.layoutCollaborator.component";
import {AuthService} from "../../../zynerator/security/shared/service/Auth.service";
import {UserService} from "../../../zynerator/security/shared/service/User.service";




@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit{
    onSearchInput(event: any) {
        const searchTerm = event.target.value;
        // Handle search input here
        console.log('Search term:', searchTerm);
    }


    constructor(public  layoutService:LayoutService , public app: AppComponent, public appMain: AppLayoutCollaboratorComponent, private authService: AuthService, private translateService: TranslateService, private userService: UserService) {

    }
    ngOnInit(): void {
    }
    pricingPlans = [

        {
            title: 'Starts from 2,000/month',
            users: 'Up to 3',
            connections: 'Unlimited',
            newConnectionRequests: '',
            aaa:'✓',
            bbb:'✓',
            ccc:'✓',
            ddd:'✓',
        },
        {
            title: 'Starts from 5,000/month',
            users: 'Unlimited',
            connections: 'Unlimited',
            newConnectionRequests: 'Available',
            aaa:'✓',
            bbb:'✓',
            ccc:'✓',
            ddd:'✓',
        },
        {
            title: 'Custom',
            users: 'Unlimited',
            connections: 'Unlimited',
            newConnectionRequests: 'Prioritized',
            aaa:'',
            bbb:'',
            ccc:'',
            ddd:'',

        },
    ];
    pricingP = [

        {
            title: 'Starts from 2,000/month',
            users: 'Up to 3',
            connections: 'Unlimited',
            newConnectionRequests: '',
        },
        {
            title: 'Starts from 5,000/month',
            users: 'Unlimited',
            connections: 'Unlimited',
            newConnectionRequests: 'Available',

        },
        {
            title: 'Custom',
            users: 'Unlimited',
            connections: 'Unlimited',
            newConnectionRequests: 'Prioritized',

        },
    ];
    pricing = [

        {
            title: 'Starts from 2,000/month',
            users: 'Up to 3',
            connections: 'Unlimited',
            newConnectionRequests: '',

        },
        {
            title: 'Starts from 5,000/month',
            users: 'Unlimited',
            connections: 'Unlimited',
            newConnectionRequests: 'Available',

        },
        {
            title: 'Custom',
            users: 'Unlimited',
            connections: 'Unlimited',
            newConnectionRequests: 'Prioritized',


        },
    ];
}
