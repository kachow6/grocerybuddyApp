"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_component_1 = require("./settings.component");
var settings_routing_module_1 = require("./settings-routing.module");
var shared_module_1 = require("../shared/shared.module");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var SettingsModule = (function () {
    function SettingsModule() {
    }
    return SettingsModule;
}());
SettingsModule = __decorate([
    core_1.NgModule({
        imports: [
            settings_routing_module_1.SettingsRoutingModule,
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
            settings_component_1.SettingsComponent
        ],
        exports: [
            settings_component_1.SettingsComponent
        ],
        providers: []
    })
], SettingsModule);
exports.SettingsModule = SettingsModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXR0aW5ncy9zZXR0aW5ncy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFFekMsMkRBQXlEO0FBQ3pELHFFQUFrRTtBQUNsRSx5REFBdUQ7QUFFdkQsK0NBSXVEO0FBbUN2RCxJQUFhLGNBQWM7SUFBM0I7SUFBOEIsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBOUIsQUFBK0IsSUFBQTtBQUFsQixjQUFjO0lBakMxQixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCwrQ0FBcUI7WUFDckIsNEJBQVk7WUFHWixnQ0FBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsK0JBQWUsQ0FBQyxPQUFPLEVBQUU7WUFDekIsMkJBQVcsQ0FBQyxPQUFPLEVBQUU7WUFDckIsNkJBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDdkIsOEJBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDeEIsOEJBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDeEIsZ0NBQWdCLENBQUMsT0FBTyxFQUFFO1lBQzFCLDJCQUFXLENBQUMsT0FBTyxFQUFFO1lBQ3JCLGdDQUFnQixDQUFDLE9BQU8sRUFBRTtZQUMxQiw2QkFBYSxDQUFDLE9BQU8sRUFBRTtZQUN2QixpQ0FBaUIsQ0FBQyxPQUFPLEVBQUU7WUFDM0IsNEJBQVksQ0FBQyxPQUFPLEVBQUU7WUFDdEIsOEJBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDeEIsMEJBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDcEIsZ0NBQWdCLENBQUMsT0FBTyxFQUFFO1lBQzFCLDZCQUFhLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLCtCQUFlLENBQUMsT0FBTyxFQUFFO1NBQzFCO1FBQ0QsWUFBWSxFQUFFO1lBQ1osc0NBQWlCO1NBQ2xCO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asc0NBQWlCO1NBQ2xCO1FBQ0QsU0FBUyxFQUFFLEVBQ1Y7S0FDRixDQUFDO0dBQ1csY0FBYyxDQUFJO0FBQWxCLHdDQUFjIiwiZmlsZSI6ImFwcC9zZXR0aW5ncy9zZXR0aW5ncy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFNldHRpbmdzQ29tcG9uZW50IH0gZnJvbSAnLi9zZXR0aW5ncy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2V0dGluZ3NSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9zZXR0aW5ncy1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbmltcG9ydCB7IEJzRHJvcGRvd25Nb2R1bGUsIEFjY29yZGlvbk1vZHVsZSwgQWxlcnRNb2R1bGUsIEJ1dHRvbnNNb2R1bGUsXG4gICAgICAgICBDYXJvdXNlbE1vZHVsZSwgQ29sbGFwc2VNb2R1bGUsIERhdGVwaWNrZXJNb2R1bGUsIE1vZGFsTW9kdWxlLFxuICAgICAgICAgUGFnaW5hdGlvbk1vZHVsZSwgUG9wb3Zlck1vZHVsZSwgUHJvZ3Jlc3NiYXJNb2R1bGUsIFJhdGluZ01vZHVsZSxcbiAgICAgICAgIFNvcnRhYmxlTW9kdWxlLCBUYWJzTW9kdWxlLCBUaW1lcGlja2VyTW9kdWxlLCBUb29sdGlwTW9kdWxlLFxuICAgICAgICAgVHlwZWFoZWFkTW9kdWxlIH0gICAgICAgIGZyb20gJ25neC1ib290c3RyYXAnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU2V0dGluZ3NSb3V0aW5nTW9kdWxlLFxuICAgIFNoYXJlZE1vZHVsZSxcblxuICAgIC8vIEJPT1RTVFJBUCBJTVBPUlRTXG4gICAgQnNEcm9wZG93bk1vZHVsZS5mb3JSb290KCksXG4gICAgQWNjb3JkaW9uTW9kdWxlLmZvclJvb3QoKSxcbiAgICBBbGVydE1vZHVsZS5mb3JSb290KCksXG4gICAgQnV0dG9uc01vZHVsZS5mb3JSb290KCksXG4gICAgQ2Fyb3VzZWxNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENvbGxhcHNlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBEYXRlcGlja2VyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBNb2RhbE1vZHVsZS5mb3JSb290KCksXG4gICAgUGFnaW5hdGlvbk1vZHVsZS5mb3JSb290KCksXG4gICAgUG9wb3Zlck1vZHVsZS5mb3JSb290KCksXG4gICAgUHJvZ3Jlc3NiYXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFJhdGluZ01vZHVsZS5mb3JSb290KCksXG4gICAgU29ydGFibGVNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFRhYnNNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFRpbWVwaWNrZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFRvb2x0aXBNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFR5cGVhaGVhZE1vZHVsZS5mb3JSb290KCksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNldHRpbmdzQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTZXR0aW5nc0NvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc01vZHVsZSB7IH1cbiJdfQ==
