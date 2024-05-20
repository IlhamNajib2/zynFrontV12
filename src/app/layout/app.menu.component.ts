import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import {RoleService} from "../zynerator/security/shared/service/Role.service";
import {AppComponent} from "../app.component";
import {AuthService} from "../zynerator/security/shared/service/Auth.service";
import {Router} from "@angular/router";
import {AppLayoutComponent} from "./app.layout.component";

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {
  model: any[];
  modelanonymous: any[];
    modelAdmin: any[];
  modelCollaborator: any[];
  modelMember: any[];
  modelInfluencer: any[];
constructor(public layoutService: LayoutService, public app: AppComponent, public appMain: AppLayoutComponent, private roleService: RoleService, private authService: AuthService, private router: Router) { }
  ngOnInit() {
    this.modelAdmin =
      [

				{
                    label: '',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [

                        {
                            label: 'Project Analytics ',
                            icon: 'pi pi-chart-bar',
                            routerLink: ['/app/admin/project/project/list']
                        },
                        {
                            label: 'Packaging ',
                            icon: 'pi pi-images',
                            routerLink: ['/app/admin/packaging/packaging/list']
                        },
					  {
						label: 'Category Packaging',
						icon: 'pi pi-wallet',
                        routerLink: ['/app/admin/category/category-packaging/list']
					  },
                      {
                            label: 'Collaborators ',
                            icon: 'pi pi-users',
                            routerLink: ['/app/admin/collaborator/collaborator/list']
                      },
                      {
                            label: 'Members ',
                            icon: 'pi pi-users',
                            routerLink: ['/app/admin/collaborator/member/list']

                      },
                      {
                            label: 'influencers',
                            icon: 'pi pi-users',
                            routerLink: ['/app/admin/coupon/influencer/list']
                      },
					  {
						label: 'Templates',
						icon: 'pi pi-images',
						items: [
								  {
									label: 'category template',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/template/category-template/list']
								  },
								  {
									label: ' type template',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/template/type-template/list']
								  },
								  {
									label: ' domain template',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/template/domain-template/list']
								  },
								  {
									label: ' level template',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/template/level-template/list']
								  },
								  {
									label: ' technology',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/template/technology/list']
								  },
								  {
									label: ' template',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/template/template/list']
								  },
						]
					  },
					  {
						label: 'Paiment ',
						icon: 'pi pi-dollar',
						items: [
								  {
									label: ' paiment influencer',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/paiment/paiment-influencer/list']
								  },
								  {
									label: ' paiment collaborator',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/paiment/paiment-collaborator/list']
								  },
						]
					  },

					  {
						label: 'Inscriptions',
						icon: 'pi pi-bookmark-fill',
						items: [
								  {
									label: 'inscription collaborators',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/inscription/inscription-collaborator/list']
								  },
								  {
									label: ' inscription membres',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/inscription/inscription-membre/list']
								  },

						]
					  },

					  {
						label: 'Coupon',
						icon: 'pi pi-tags',
						items: [

								  {
									label: 'coupons',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/coupon/coupon/list']
								  },
								  {
									label: 'coupons details',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/admin/coupon/coupon-detail/list']
								  },
						]
					  }

			]
	    }
    ];
    this.modelCollaborator =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [
					  {
						label: 'Category Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste category packaging',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/category/category-packaging/list']
								  },
						]
					  },
					  {
						label: 'Template Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste category template',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/template/category-template/list']
								  },
								  {
									label: 'Liste type template',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/template/type-template/list']
								  },
								  {
									label: 'Liste domain template',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/template/domain-template/list']
								  },
								  {
									label: 'Liste level template',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/template/level-template/list']
								  },
								  {
									label: 'Liste technology',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/template/technology/list']
								  },
								  {
									label: 'Liste template',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/template/template/list']
								  },
						]
					  },
					  {
						label: 'Paiment Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste paiment influencer',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/paiment/paiment-influencer/list']
								  },
								  {
									label: 'Liste paiment collaborator',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/paiment/paiment-collaborator/list']
								  },
						]
					  },
					  {
						label: 'Project Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste paiment collaborator state',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/project/paiment-collaborator-state/list']
								  },
								  {
									label: 'Liste project state',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/project/project-state/list']
								  },
								  {
									label: 'Liste paiment influencer state',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/project/paiment-influencer-state/list']
								  },
								  {
									label: 'Liste project',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/project/project/list']
								  },
						]
					  },
					  {
						label: 'Packaging Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste packaging',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/packaging/packaging/list']
								  },
						]
					  },
					  {
						label: 'Inscription Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste inscription collaborator',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/inscription/inscription-collaborator/list']
								  },
								  {
									label: 'Liste inscription membre state',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/inscription/inscription-membre-state/list']
								  },
								  {
									label: 'Liste inscription collaborator state',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/inscription/inscription-collaborator-state/list']
								  },
								  {
									label: 'Liste inscription membre',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/inscription/inscription-membre/list']
								  },
								  {
									label: 'Liste inscription collaborator type',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/inscription/inscription-collaborator-type/list']
								  },
						]
					  },
					  {
						label: 'Collaborator Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste collaborator',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/collaborator/collaborator/list']
								  },
						]
					  },
					  {
						label: 'Member Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste member',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/collaborator/member/list']
								  },
						]
					  },
					  {
						label: 'Coupon Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste influencer',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/coupon/influencer/list']
								  },
								  {
									label: 'Liste coupon',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/coupon/coupon/list']
								  },
								  {
									label: 'Liste coupon detail',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/collaborator/coupon/coupon-detail/list']
								  },
						]
					  },

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelMember =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [
					  {
						label: 'Category Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste category packaging',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/member/category/category-packaging/list']
								  },
						]
					  },
					  {
						label: 'Template Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste category template',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/member/template/category-template/list']
								  },
								  {
									label: 'Liste type template',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/member/template/type-template/list']
								  },
								  {
									label: 'Liste domain template',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/member/template/domain-template/list']
								  },
								  {
									label: 'Liste level template',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/member/template/level-template/list']
								  },
								  {
									label: 'Liste technology',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/member/template/technology/list']
								  },
								  {
									label: 'Liste template',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/member/template/template/list']
								  },
						]
					  },
					  {
						label: 'Paiment Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste paiment influencer',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/member/paiment/paiment-influencer/list']
								  },
								  {
									label: 'Liste paiment collaborator',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/member/paiment/paiment-collaborator/list']
								  },
						]
					  },
					  {
						label: 'Project Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste paiment collaborator state',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/member/project/paiment-collaborator-state/list']
								  },
								  {
									label: 'Liste project state',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/member/project/project-state/list']
								  },
								  {
									label: 'Liste paiment influencer state',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/member/project/paiment-influencer-state/list']
								  },
								  {
									label: 'Liste project',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/member/project/project/list']
								  },
						]
					  },
					  {
						label: 'Packaging Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste packaging',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/member/packaging/packaging/list']
								  },
						]
					  },
					  {
						label: 'Inscription Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste inscription collaborator',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/member/inscription/inscription-collaborator/list']
								  },
								  {
									label: 'Liste inscription membre state',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/member/inscription/inscription-membre-state/list']
								  },
								  {
									label: 'Liste inscription collaborator state',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/member/inscription/inscription-collaborator-state/list']
								  },
								  {
									label: 'Liste inscription membre',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/member/inscription/inscription-membre/list']
								  },
								  {
									label: 'Liste inscription collaborator type',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/member/inscription/inscription-collaborator-type/list']
								  },
						]
					  },
					  {
						label: 'Collaborator Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste collaborator',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/member/collaborator/collaborator/list']
								  },
						]
					  },
					  {
						label: 'Member Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste member',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/member/collaborator/member/list']
								  },
						]
					  },
					  {
						label: 'Coupon Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste influencer',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/member/coupon/influencer/list']
								  },
								  {
									label: 'Liste coupon',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/member/coupon/coupon/list']
								  },
								  {
									label: 'Liste coupon detail',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/member/coupon/coupon-detail/list']
								  },
						]
					  },

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];
    this.modelInfluencer =
      [

				{
                    label: 'Pages',
                    icon: 'pi pi-fw pi-briefcase',
                    items: [
					  {
						label: 'Category Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste category packaging',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/influencer/category/category-packaging/list']
								  },
						]
					  },
					  {
						label: 'Template Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste category template',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/influencer/template/category-template/list']
								  },
								  {
									label: 'Liste type template',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/influencer/template/type-template/list']
								  },
								  {
									label: 'Liste domain template',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/influencer/template/domain-template/list']
								  },
								  {
									label: 'Liste level template',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/influencer/template/level-template/list']
								  },
								  {
									label: 'Liste technology',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/influencer/template/technology/list']
								  },
								  {
									label: 'Liste template',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/influencer/template/template/list']
								  },
						]
					  },
					  {
						label: 'Paiment Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste paiment influencer',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/influencer/paiment/paiment-influencer/list']
								  },
								  {
									label: 'Liste paiment collaborator',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/influencer/paiment/paiment-collaborator/list']
								  },
						]
					  },
					  {
						label: 'Project Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste paiment collaborator state',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/influencer/project/paiment-collaborator-state/list']
								  },
								  {
									label: 'Liste project state',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/influencer/project/project-state/list']
								  },
								  {
									label: 'Liste paiment influencer state',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/influencer/project/paiment-influencer-state/list']
								  },
								  {
									label: 'Liste project',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/influencer/project/project/list']
								  },
						]
					  },
					  {
						label: 'Packaging Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste packaging',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/influencer/packaging/packaging/list']
								  },
						]
					  },
					  {
						label: 'Inscription Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste inscription collaborator',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/influencer/inscription/inscription-collaborator/list']
								  },
								  {
									label: 'Liste inscription membre state',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/influencer/inscription/inscription-membre-state/list']
								  },
								  {
									label: 'Liste inscription collaborator state',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/influencer/inscription/inscription-collaborator-state/list']
								  },
								  {
									label: 'Liste inscription membre',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/influencer/inscription/inscription-membre/list']
								  },
								  {
									label: 'Liste inscription collaborator type',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/influencer/inscription/inscription-collaborator-type/list']
								  },
						]
					  },
					  {
						label: 'Collaborator Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste collaborator',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/influencer/collaborator/collaborator/list']
								  },
						]
					  },
					  {
						label: 'Member Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste member',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/influencer/collaborator/member/list']
								  },
						]
					  },
					  {
						label: 'Coupon Management',
						icon: 'pi pi-wallet',
						items: [
								  {
									label: 'Liste influencer',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/influencer/coupon/influencer/list']
								  },
								  {
									label: 'Liste coupon',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/influencer/coupon/coupon/list']
								  },
								  {
									label: 'Liste coupon detail',
									icon: 'pi pi-fw pi-plus-circle',
									routerLink: ['/app/influencer/coupon/coupon-detail/list']
								  },
						]
					  },

				   {
					  label: 'Security Management',
					  icon: 'pi pi-wallet',
					  items: [
						  {
							  label: 'List User',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/user/list']
						  },
						  {
							  label: 'List Model',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/model-permission/list']
						  },
						  {
							  label: 'List Action Permission',
							  icon: 'pi pi-fw pi-plus-circle',
							  routerLink: ['/app/admin/security/action-permission/list']
						  },
					  ]
				  }
			]
	    }
    ];

        if (this.authService.authenticated) {
            if (this.authService.authenticatedUser.roleUsers) {
              this.authService.authenticatedUser.roleUsers.forEach(role => {
                  const roleName: string = this.getRole(role.role.authority);
                  this.roleService._role.next(roleName.toUpperCase());
                  eval('this.model = this.model' + this.getRole(role.role.authority));
              })
            }
        }
  }

    getRole(text){
        const [role, ...rest] = text.split('_');
        return this.upperCaseFirstLetter(rest.join(''));
    }

    upperCaseFirstLetter(word: string) {
      if (!word) { return word; }
      return word[0].toUpperCase() + word.substr(1).toLowerCase();
    }

    onMenuClick(event) {
        this.appMain.onMenuClick(event);
    }
}
