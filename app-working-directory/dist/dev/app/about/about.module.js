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
var about_component_1 = require("./about.component");
var about_routing_module_1 = require("./about-routing.module");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var AboutModule = (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
AboutModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            about_routing_module_1.AboutRoutingModule,
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
        declarations: [about_component_1.AboutComponent],
        exports: [about_component_1.AboutComponent]
    })
], AboutModule);
exports.AboutModule = AboutModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hYm91dC9hYm91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBQy9DLHFEQUFtRDtBQUNuRCwrREFBNEQ7QUFFNUQsK0NBSXVEO0FBNkJ2RCxJQUFhLFdBQVc7SUFBeEI7SUFBMkIsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBM0IsQUFBNEIsSUFBQTtBQUFmLFdBQVc7SUEzQnZCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHFCQUFZO1lBQ1oseUNBQWtCO1lBR2xCLGdDQUFnQixDQUFDLE9BQU8sRUFBRTtZQUMxQiwrQkFBZSxDQUFDLE9BQU8sRUFBRTtZQUN6QiwyQkFBVyxDQUFDLE9BQU8sRUFBRTtZQUNyQiw2QkFBYSxDQUFDLE9BQU8sRUFBRTtZQUN2Qiw4QkFBYyxDQUFDLE9BQU8sRUFBRTtZQUN4Qiw4QkFBYyxDQUFDLE9BQU8sRUFBRTtZQUN4QixnQ0FBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsMkJBQVcsQ0FBQyxPQUFPLEVBQUU7WUFDckIsZ0NBQWdCLENBQUMsT0FBTyxFQUFFO1lBQzFCLDZCQUFhLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLGlDQUFpQixDQUFDLE9BQU8sRUFBRTtZQUMzQiw0QkFBWSxDQUFDLE9BQU8sRUFBRTtZQUN0Qiw4QkFBYyxDQUFDLE9BQU8sRUFBRTtZQUN4QiwwQkFBVSxDQUFDLE9BQU8sRUFBRTtZQUNwQixnQ0FBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsNkJBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDdkIsK0JBQWUsQ0FBQyxPQUFPLEVBQUU7U0FDeEI7UUFDSCxZQUFZLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1FBQzlCLE9BQU8sRUFBRSxDQUFDLGdDQUFjLENBQUM7S0FDMUIsQ0FBQztHQUNXLFdBQVcsQ0FBSTtBQUFmLGtDQUFXIiwiZmlsZSI6ImFwcC9hYm91dC9hYm91dC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSAnLi9hYm91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWJvdXRSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hYm91dC1yb3V0aW5nLm1vZHVsZSc7XG5cbmltcG9ydCB7IEJzRHJvcGRvd25Nb2R1bGUsIEFjY29yZGlvbk1vZHVsZSwgQWxlcnRNb2R1bGUsIEJ1dHRvbnNNb2R1bGUsXG4gICAgICAgICBDYXJvdXNlbE1vZHVsZSwgQ29sbGFwc2VNb2R1bGUsIERhdGVwaWNrZXJNb2R1bGUsIE1vZGFsTW9kdWxlLFxuICAgICAgICAgUGFnaW5hdGlvbk1vZHVsZSwgUG9wb3Zlck1vZHVsZSwgUHJvZ3Jlc3NiYXJNb2R1bGUsIFJhdGluZ01vZHVsZSxcbiAgICAgICAgIFNvcnRhYmxlTW9kdWxlLCBUYWJzTW9kdWxlLCBUaW1lcGlja2VyTW9kdWxlLCBUb29sdGlwTW9kdWxlLFxuICAgICAgICAgVHlwZWFoZWFkTW9kdWxlIH0gICAgICAgIGZyb20gJ25neC1ib290c3RyYXAnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEFib3V0Um91dGluZ01vZHVsZSxcblxuICAgIC8vIEJPT1RTVFJBUCBJTVBPUlRTXG4gICAgQnNEcm9wZG93bk1vZHVsZS5mb3JSb290KCksXG4gICAgQWNjb3JkaW9uTW9kdWxlLmZvclJvb3QoKSxcbiAgICBBbGVydE1vZHVsZS5mb3JSb290KCksXG4gICAgQnV0dG9uc01vZHVsZS5mb3JSb290KCksXG4gICAgQ2Fyb3VzZWxNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENvbGxhcHNlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBEYXRlcGlja2VyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBNb2RhbE1vZHVsZS5mb3JSb290KCksXG4gICAgUGFnaW5hdGlvbk1vZHVsZS5mb3JSb290KCksXG4gICAgUG9wb3Zlck1vZHVsZS5mb3JSb290KCksXG4gICAgUHJvZ3Jlc3NiYXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFJhdGluZ01vZHVsZS5mb3JSb290KCksXG4gICAgU29ydGFibGVNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFRhYnNNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFRpbWVwaWNrZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFRvb2x0aXBNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFR5cGVhaGVhZE1vZHVsZS5mb3JSb290KCksXG4gICAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQWJvdXRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQWJvdXRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFib3V0TW9kdWxlIHsgfVxuIl19
