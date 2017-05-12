"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var list_component_1 = require("./list.component");
var list_routing_module_1 = require("./list-routing.module");
var shared_module_1 = require("../shared/shared.module");
var forms_1 = require("@angular/forms");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var ListModule = (function () {
    function ListModule() {
    }
    return ListModule;
}());
ListModule = __decorate([
    core_1.NgModule({
        imports: [
            list_routing_module_1.ListRoutingModule,
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
        declarations: [
            list_component_1.ListComponent
        ],
        exports: [
            list_component_1.ListComponent
        ],
        providers: []
    })
], ListModule);
exports.ListModule = ListModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9saXN0L2xpc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBRXpDLG1EQUFpRDtBQUNqRCw2REFBMEQ7QUFDMUQseURBQXVEO0FBQ3ZELHdDQUE2QztBQUU3QywrQ0FJdUQ7QUFvQ3ZELElBQWEsVUFBVTtJQUF2QjtJQUEwQixDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUExQixBQUEyQixJQUFBO0FBQWQsVUFBVTtJQWxDdEIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsdUNBQWlCO1lBQ2pCLDRCQUFZO1lBQ1osbUJBQVc7WUFHWCxnQ0FBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsK0JBQWUsQ0FBQyxPQUFPLEVBQUU7WUFDekIsMkJBQVcsQ0FBQyxPQUFPLEVBQUU7WUFDckIsNkJBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDdkIsOEJBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDeEIsOEJBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDeEIsZ0NBQWdCLENBQUMsT0FBTyxFQUFFO1lBQzFCLDJCQUFXLENBQUMsT0FBTyxFQUFFO1lBQ3JCLGdDQUFnQixDQUFDLE9BQU8sRUFBRTtZQUMxQiw2QkFBYSxDQUFDLE9BQU8sRUFBRTtZQUN2QixpQ0FBaUIsQ0FBQyxPQUFPLEVBQUU7WUFDM0IsNEJBQVksQ0FBQyxPQUFPLEVBQUU7WUFDdEIsOEJBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDeEIsMEJBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDcEIsZ0NBQWdCLENBQUMsT0FBTyxFQUFFO1lBQzFCLDZCQUFhLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLCtCQUFlLENBQUMsT0FBTyxFQUFFO1NBQzFCO1FBQ0QsWUFBWSxFQUFFO1lBQ1osOEJBQWE7U0FDZDtRQUNELE9BQU8sRUFBRTtZQUNQLDhCQUFhO1NBQ2Q7UUFDRCxTQUFTLEVBQUUsRUFDVjtLQUNGLENBQUM7R0FDVyxVQUFVLENBQUk7QUFBZCxnQ0FBVSIsImZpbGUiOiJhcHAvbGlzdC9saXN0Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2xpc3Qtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEJzRHJvcGRvd25Nb2R1bGUsIEFjY29yZGlvbk1vZHVsZSwgQWxlcnRNb2R1bGUsIEJ1dHRvbnNNb2R1bGUsXG4gICAgICAgICBDYXJvdXNlbE1vZHVsZSwgQ29sbGFwc2VNb2R1bGUsIERhdGVwaWNrZXJNb2R1bGUsIE1vZGFsTW9kdWxlLFxuICAgICAgICAgUGFnaW5hdGlvbk1vZHVsZSwgUG9wb3Zlck1vZHVsZSwgUHJvZ3Jlc3NiYXJNb2R1bGUsIFJhdGluZ01vZHVsZSxcbiAgICAgICAgIFNvcnRhYmxlTW9kdWxlLCBUYWJzTW9kdWxlLCBUaW1lcGlja2VyTW9kdWxlLCBUb29sdGlwTW9kdWxlLFxuICAgICAgICAgVHlwZWFoZWFkTW9kdWxlIH0gICAgICAgIGZyb20gJ25neC1ib290c3RyYXAnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTGlzdFJvdXRpbmdNb2R1bGUsXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuXG4gICAgLy8gQk9PVFNUUkFQIElNUE9SVFNcbiAgICBCc0Ryb3Bkb3duTW9kdWxlLmZvclJvb3QoKSxcbiAgICBBY2NvcmRpb25Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIEFsZXJ0TW9kdWxlLmZvclJvb3QoKSxcbiAgICBCdXR0b25zTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDYXJvdXNlbE1vZHVsZS5mb3JSb290KCksXG4gICAgQ29sbGFwc2VNb2R1bGUuZm9yUm9vdCgpLFxuICAgIERhdGVwaWNrZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE1vZGFsTW9kdWxlLmZvclJvb3QoKSxcbiAgICBQYWdpbmF0aW9uTW9kdWxlLmZvclJvb3QoKSxcbiAgICBQb3BvdmVyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBQcm9ncmVzc2Jhck1vZHVsZS5mb3JSb290KCksXG4gICAgUmF0aW5nTW9kdWxlLmZvclJvb3QoKSxcbiAgICBTb3J0YWJsZU1vZHVsZS5mb3JSb290KCksXG4gICAgVGFic01vZHVsZS5mb3JSb290KCksXG4gICAgVGltZXBpY2tlck1vZHVsZS5mb3JSb290KCksXG4gICAgVG9vbHRpcE1vZHVsZS5mb3JSb290KCksXG4gICAgVHlwZWFoZWFkTW9kdWxlLmZvclJvb3QoKSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTGlzdENvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTGlzdENvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0TW9kdWxlIHsgfVxuIl19
