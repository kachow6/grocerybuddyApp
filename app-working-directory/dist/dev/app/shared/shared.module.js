"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var navbar_component_1 = require("./navbar/navbar.component");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./header/footer.component");
var user_service_1 = require("./user-service/user.service");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var SharedModule = SharedModule_1 = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [user_service_1.UserService]
        };
    };
    return SharedModule;
}());
SharedModule = SharedModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            ngx_bootstrap_1.BsDropdownModule.forRoot(),
            ngx_bootstrap_1.AccordionModule.forRoot(),
            ngx_bootstrap_1.AlertModule.forRoot(),
            ngx_bootstrap_1.ButtonsModule.forRoot(),
            ngx_bootstrap_1.CarouselModule.forRoot(),
            ngx_bootstrap_1.CollapseModule.forRoot(),
            ngx_bootstrap_1.DatepickerModule.forRoot(),
            ngx_bootstrap_1.ModalModule.forRoot(),
            ngx_bootstrap_1.PaginationModule.forRoot(),
            ngx_bootstrap_1.PopoverModule.forRoot(),
            ngx_bootstrap_1.ProgressbarModule.forRoot(),
            ngx_bootstrap_1.RatingModule.forRoot(),
            ngx_bootstrap_1.SortableModule.forRoot(),
            ngx_bootstrap_1.TabsModule.forRoot(),
            ngx_bootstrap_1.TimepickerModule.forRoot(),
            ngx_bootstrap_1.TooltipModule.forRoot(),
            ngx_bootstrap_1.TypeaheadModule.forRoot(),
        ],
        declarations: [
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            navbar_component_1.NavbarComponent
        ],
        exports: [
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            navbar_component_1.NavbarComponent,
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
var SharedModule_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUE4RDtBQUM5RCwwQ0FBK0M7QUFDL0Msd0NBQTZDO0FBQzdDLDBDQUErQztBQUcvQyw4REFBNEQ7QUFDNUQsOERBQTREO0FBQzVELDhEQUE0RDtBQUM1RCw0REFBOEQ7QUFNOUQsK0NBSXVEO0FBNEN2RCxJQUFhLFlBQVk7SUFBekI7SUFPQSxDQUFDO0lBTlEsb0JBQU8sR0FBZDtRQUNFLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxjQUFZO1lBQ3RCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7U0FDekIsQ0FBQztJQUNKLENBQUM7SUFDSCxtQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksWUFBWTtJQXRDeEIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AscUJBQVk7WUFDWixxQkFBWTtZQUdaLGdDQUFnQixDQUFDLE9BQU8sRUFBRTtZQUMxQiwrQkFBZSxDQUFDLE9BQU8sRUFBRTtZQUN6QiwyQkFBVyxDQUFDLE9BQU8sRUFBRTtZQUNyQiw2QkFBYSxDQUFDLE9BQU8sRUFBRTtZQUN2Qiw4QkFBYyxDQUFDLE9BQU8sRUFBRTtZQUN4Qiw4QkFBYyxDQUFDLE9BQU8sRUFBRTtZQUN4QixnQ0FBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsMkJBQVcsQ0FBQyxPQUFPLEVBQUU7WUFDckIsZ0NBQWdCLENBQUMsT0FBTyxFQUFFO1lBQzFCLDZCQUFhLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLGlDQUFpQixDQUFDLE9BQU8sRUFBRTtZQUMzQiw0QkFBWSxDQUFDLE9BQU8sRUFBRTtZQUN0Qiw4QkFBYyxDQUFDLE9BQU8sRUFBRTtZQUN4QiwwQkFBVSxDQUFDLE9BQU8sRUFBRTtZQUNwQixnQ0FBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsNkJBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDdkIsK0JBQWUsQ0FBQyxPQUFPLEVBQUU7U0FDMUI7UUFDRCxZQUFZLEVBQUU7WUFDWixrQ0FBZTtZQUNmLGtDQUFlO1lBQ2Ysa0NBQWU7U0FDaEI7UUFDRCxPQUFPLEVBQUU7WUFDUCxrQ0FBZTtZQUNmLGtDQUFlO1lBQ2Ysa0NBQWU7WUFDZixxQkFBWTtZQUNaLG1CQUFXO1lBQ1gscUJBQVk7U0FDYjtLQUNGLENBQUM7R0FDVyxZQUFZLENBT3hCO0FBUFksb0NBQVkiLCJmaWxlIjoiYXBwL3NoYXJlZC9zaGFyZWQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8vIGltcG9ydCB7IFRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmF2YmFyQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL2Zvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSAgICAgZnJvbSAnLi91c2VyLXNlcnZpY2UvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIsIFNob3BwaW5nTGlzdCxcbiAgICAgICAgIEZyaWRnZUl0ZW0sIFNob3BwaW5nSXRlbSB9ICAgIGZyb20gJy4vdXNlci1zZXJ2aWNlL3VzZXInO1xuXG5pbXBvcnQgeyBOYW1lTGlzdFNlcnZpY2UgfSBmcm9tICcuL25hbWUtbGlzdC9uYW1lLWxpc3Quc2VydmljZSc7XG5cbmltcG9ydCB7IEJzRHJvcGRvd25Nb2R1bGUsIEFjY29yZGlvbk1vZHVsZSwgQWxlcnRNb2R1bGUsIEJ1dHRvbnNNb2R1bGUsXG4gICAgICAgICBDYXJvdXNlbE1vZHVsZSwgQ29sbGFwc2VNb2R1bGUsIERhdGVwaWNrZXJNb2R1bGUsIE1vZGFsTW9kdWxlLFxuICAgICAgICAgUGFnaW5hdGlvbk1vZHVsZSwgUG9wb3Zlck1vZHVsZSwgUHJvZ3Jlc3NiYXJNb2R1bGUsIFJhdGluZ01vZHVsZSxcbiAgICAgICAgIFNvcnRhYmxlTW9kdWxlLCBUYWJzTW9kdWxlLCBUaW1lcGlja2VyTW9kdWxlLCBUb29sdGlwTW9kdWxlLFxuICAgICAgICAgVHlwZWFoZWFkTW9kdWxlIH0gICAgICAgIGZyb20gJ25neC1ib290c3RyYXAnO1xuXG4vKipcbiAqIERvIG5vdCBzcGVjaWZ5IHByb3ZpZGVycyBmb3IgbW9kdWxlcyB0aGF0IG1pZ2h0IGJlIGltcG9ydGVkIGJ5IGEgbGF6eSBsb2FkZWQgbW9kdWxlLlxuICovXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuXG4gICAgLy8gQk9PVFNUUkFQIElNUE9SVFNcbiAgICBCc0Ryb3Bkb3duTW9kdWxlLmZvclJvb3QoKSxcbiAgICBBY2NvcmRpb25Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIEFsZXJ0TW9kdWxlLmZvclJvb3QoKSxcbiAgICBCdXR0b25zTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDYXJvdXNlbE1vZHVsZS5mb3JSb290KCksXG4gICAgQ29sbGFwc2VNb2R1bGUuZm9yUm9vdCgpLFxuICAgIERhdGVwaWNrZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE1vZGFsTW9kdWxlLmZvclJvb3QoKSxcbiAgICBQYWdpbmF0aW9uTW9kdWxlLmZvclJvb3QoKSxcbiAgICBQb3BvdmVyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBQcm9ncmVzc2Jhck1vZHVsZS5mb3JSb290KCksXG4gICAgUmF0aW5nTW9kdWxlLmZvclJvb3QoKSxcbiAgICBTb3J0YWJsZU1vZHVsZS5mb3JSb290KCksXG4gICAgVGFic01vZHVsZS5mb3JSb290KCksXG4gICAgVGltZXBpY2tlck1vZHVsZS5mb3JSb290KCksXG4gICAgVG9vbHRpcE1vZHVsZS5mb3JSb290KCksXG4gICAgVHlwZWFoZWFkTW9kdWxlLmZvclJvb3QoKSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgSGVhZGVyQ29tcG9uZW50LFxuICAgIEZvb3RlckNvbXBvbmVudCxcbiAgICBOYXZiYXJDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEhlYWRlckNvbXBvbmVudCxcbiAgICBGb290ZXJDb21wb25lbnQsXG4gICAgTmF2YmFyQ29tcG9uZW50LFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNoYXJlZE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==
