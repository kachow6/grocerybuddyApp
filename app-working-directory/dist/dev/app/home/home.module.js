"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var home_component_1 = require("./home.component");
var home_routing_module_1 = require("./home-routing.module");
var shared_module_1 = require("../shared/shared.module");
var name_list_service_1 = require("../shared/name-list/name-list.service");
var forms_1 = require("@angular/forms");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        imports: [
            home_routing_module_1.HomeRoutingModule,
            shared_module_1.SharedModule,
            forms_1.FormsModule,
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
        declarations: [home_component_1.HomeComponent],
        exports: [home_component_1.HomeComponent],
        providers: [name_list_service_1.NameListService]
    })
], HomeModule);
exports.HomeModule = HomeModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBRXpDLG1EQUFpRDtBQUNqRCw2REFBMEQ7QUFDMUQseURBQXVEO0FBQ3ZELDJFQUF3RTtBQUN4RSx3Q0FBNkM7QUFFN0MsK0NBSXVEO0FBK0J2RCxJQUFhLFVBQVU7SUFBdkI7SUFBMEIsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBMUIsQUFBMkIsSUFBQTtBQUFkLFVBQVU7SUE3QnRCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHVDQUFpQjtZQUNqQiw0QkFBWTtZQUNaLG1CQUFXO1lBR1gsZ0NBQWdCLENBQUMsT0FBTyxFQUFFO1lBQzFCLCtCQUFlLENBQUMsT0FBTyxFQUFFO1lBQ3pCLDJCQUFXLENBQUMsT0FBTyxFQUFFO1lBQ3JCLDZCQUFhLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLDhCQUFjLENBQUMsT0FBTyxFQUFFO1lBQ3hCLDhCQUFjLENBQUMsT0FBTyxFQUFFO1lBQ3hCLGdDQUFnQixDQUFDLE9BQU8sRUFBRTtZQUMxQiwyQkFBVyxDQUFDLE9BQU8sRUFBRTtZQUNyQixnQ0FBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsNkJBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDdkIsaUNBQWlCLENBQUMsT0FBTyxFQUFFO1lBQzNCLDRCQUFZLENBQUMsT0FBTyxFQUFFO1lBQ3RCLDhCQUFjLENBQUMsT0FBTyxFQUFFO1lBQ3hCLDBCQUFVLENBQUMsT0FBTyxFQUFFO1lBQ3BCLGdDQUFnQixDQUFDLE9BQU8sRUFBRTtZQUMxQiw2QkFBYSxDQUFDLE9BQU8sRUFBRTtZQUN2QiwrQkFBZSxDQUFDLE9BQU8sRUFBRTtTQUMxQjtRQUNELFlBQVksRUFBRSxDQUFDLDhCQUFhLENBQUM7UUFDN0IsT0FBTyxFQUFFLENBQUMsOEJBQWEsQ0FBQztRQUN4QixTQUFTLEVBQUUsQ0FBQyxtQ0FBZSxDQUFDO0tBQzdCLENBQUM7R0FDVyxVQUFVLENBQUk7QUFBZCxnQ0FBVSIsImZpbGUiOiJhcHAvaG9tZS9ob21lLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2hvbWUtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgTmFtZUxpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL25hbWUtbGlzdC9uYW1lLWxpc3Quc2VydmljZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQnNEcm9wZG93bk1vZHVsZSwgQWNjb3JkaW9uTW9kdWxlLCBBbGVydE1vZHVsZSwgQnV0dG9uc01vZHVsZSxcbiAgICAgICAgIENhcm91c2VsTW9kdWxlLCBDb2xsYXBzZU1vZHVsZSwgRGF0ZXBpY2tlck1vZHVsZSwgTW9kYWxNb2R1bGUsXG4gICAgICAgICBQYWdpbmF0aW9uTW9kdWxlLCBQb3BvdmVyTW9kdWxlLCBQcm9ncmVzc2Jhck1vZHVsZSwgUmF0aW5nTW9kdWxlLFxuICAgICAgICAgU29ydGFibGVNb2R1bGUsIFRhYnNNb2R1bGUsIFRpbWVwaWNrZXJNb2R1bGUsIFRvb2x0aXBNb2R1bGUsXG4gICAgICAgICBUeXBlYWhlYWRNb2R1bGUgfSAgICAgICAgZnJvbSAnbmd4LWJvb3RzdHJhcCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBIb21lUm91dGluZ01vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG5cbiAgICAvLyBCT09UU1RSQVAgSU1QT1JUU1xuICAgIEJzRHJvcGRvd25Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIEFjY29yZGlvbk1vZHVsZS5mb3JSb290KCksXG4gICAgQWxlcnRNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEJ1dHRvbnNNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENhcm91c2VsTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDb2xsYXBzZU1vZHVsZS5mb3JSb290KCksXG4gICAgRGF0ZXBpY2tlck1vZHVsZS5mb3JSb290KCksXG4gICAgTW9kYWxNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFBhZ2luYXRpb25Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIFBvcG92ZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFByb2dyZXNzYmFyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBSYXRpbmdNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFNvcnRhYmxlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBUYWJzTW9kdWxlLmZvclJvb3QoKSxcbiAgICBUaW1lcGlja2VyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBUb29sdGlwTW9kdWxlLmZvclJvb3QoKSxcbiAgICBUeXBlYWhlYWRNb2R1bGUuZm9yUm9vdCgpLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtIb21lQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0hvbWVDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtOYW1lTGlzdFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUgeyB9XG4iXX0=
