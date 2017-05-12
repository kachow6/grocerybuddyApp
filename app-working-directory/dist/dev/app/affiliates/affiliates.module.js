"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var affiliates_component_1 = require("./affiliates.component");
var affiliates_routing_module_1 = require("./affiliates-routing.module");
var shared_module_1 = require("../shared/shared.module");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var AffiliatesModule = (function () {
    function AffiliatesModule() {
    }
    return AffiliatesModule;
}());
AffiliatesModule = __decorate([
    core_1.NgModule({
        imports: [
            affiliates_routing_module_1.AffiliatesRoutingModule,
            shared_module_1.SharedModule,
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
            affiliates_component_1.AffiliatesComponent
        ],
        exports: [
            affiliates_component_1.AffiliatesComponent
        ],
        providers: []
    })
], AffiliatesModule);
exports.AffiliatesModule = AffiliatesModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZmZpbGlhdGVzL2FmZmlsaWF0ZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBRXpDLCtEQUE2RDtBQUM3RCx5RUFBc0U7QUFDdEUseURBQXVEO0FBRXZELCtDQUl1RDtBQW1DdkQsSUFBYSxnQkFBZ0I7SUFBN0I7SUFBZ0MsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBaEMsQUFBaUMsSUFBQTtBQUFwQixnQkFBZ0I7SUFqQzVCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLG1EQUF1QjtZQUN2Qiw0QkFBWTtZQUdaLGdDQUFnQixDQUFDLE9BQU8sRUFBRTtZQUMxQiwrQkFBZSxDQUFDLE9BQU8sRUFBRTtZQUN6QiwyQkFBVyxDQUFDLE9BQU8sRUFBRTtZQUNyQiw2QkFBYSxDQUFDLE9BQU8sRUFBRTtZQUN2Qiw4QkFBYyxDQUFDLE9BQU8sRUFBRTtZQUN4Qiw4QkFBYyxDQUFDLE9BQU8sRUFBRTtZQUN4QixnQ0FBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsMkJBQVcsQ0FBQyxPQUFPLEVBQUU7WUFDckIsZ0NBQWdCLENBQUMsT0FBTyxFQUFFO1lBQzFCLDZCQUFhLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLGlDQUFpQixDQUFDLE9BQU8sRUFBRTtZQUMzQiw0QkFBWSxDQUFDLE9BQU8sRUFBRTtZQUN0Qiw4QkFBYyxDQUFDLE9BQU8sRUFBRTtZQUN4QiwwQkFBVSxDQUFDLE9BQU8sRUFBRTtZQUNwQixnQ0FBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsNkJBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDdkIsK0JBQWUsQ0FBQyxPQUFPLEVBQUU7U0FDMUI7UUFDRCxZQUFZLEVBQUU7WUFDWiwwQ0FBbUI7U0FDcEI7UUFDRCxPQUFPLEVBQUU7WUFDUCwwQ0FBbUI7U0FDcEI7UUFDRCxTQUFTLEVBQUUsRUFDVjtLQUNGLENBQUM7R0FDVyxnQkFBZ0IsQ0FBSTtBQUFwQiw0Q0FBZ0IiLCJmaWxlIjoiYXBwL2FmZmlsaWF0ZXMvYWZmaWxpYXRlcy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmZmlsaWF0ZXNDb21wb25lbnQgfSBmcm9tICcuL2FmZmlsaWF0ZXMuY29tcG9uZW50JztcbmltcG9ydCB7IEFmZmlsaWF0ZXNSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hZmZpbGlhdGVzLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuaW1wb3J0IHsgQnNEcm9wZG93bk1vZHVsZSwgQWNjb3JkaW9uTW9kdWxlLCBBbGVydE1vZHVsZSwgQnV0dG9uc01vZHVsZSxcbiAgICAgICAgIENhcm91c2VsTW9kdWxlLCBDb2xsYXBzZU1vZHVsZSwgRGF0ZXBpY2tlck1vZHVsZSwgTW9kYWxNb2R1bGUsXG4gICAgICAgICBQYWdpbmF0aW9uTW9kdWxlLCBQb3BvdmVyTW9kdWxlLCBQcm9ncmVzc2Jhck1vZHVsZSwgUmF0aW5nTW9kdWxlLFxuICAgICAgICAgU29ydGFibGVNb2R1bGUsIFRhYnNNb2R1bGUsIFRpbWVwaWNrZXJNb2R1bGUsIFRvb2x0aXBNb2R1bGUsXG4gICAgICAgICBUeXBlYWhlYWRNb2R1bGUgfSAgICAgICAgZnJvbSAnbmd4LWJvb3RzdHJhcCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBBZmZpbGlhdGVzUm91dGluZ01vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGUsXG5cbiAgICAvLyBCT09UU1RSQVAgSU1QT1JUU1xuICAgIEJzRHJvcGRvd25Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIEFjY29yZGlvbk1vZHVsZS5mb3JSb290KCksXG4gICAgQWxlcnRNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEJ1dHRvbnNNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENhcm91c2VsTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDb2xsYXBzZU1vZHVsZS5mb3JSb290KCksXG4gICAgRGF0ZXBpY2tlck1vZHVsZS5mb3JSb290KCksXG4gICAgTW9kYWxNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFBhZ2luYXRpb25Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIFBvcG92ZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFByb2dyZXNzYmFyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBSYXRpbmdNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFNvcnRhYmxlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBUYWJzTW9kdWxlLmZvclJvb3QoKSxcbiAgICBUaW1lcGlja2VyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBUb29sdGlwTW9kdWxlLmZvclJvb3QoKSxcbiAgICBUeXBlYWhlYWRNb2R1bGUuZm9yUm9vdCgpLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBZmZpbGlhdGVzQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBBZmZpbGlhdGVzQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFmZmlsaWF0ZXNNb2R1bGUgeyB9XG4iXX0=
