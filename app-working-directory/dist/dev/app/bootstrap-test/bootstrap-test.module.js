"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var bootstrap_test_component_1 = require("./bootstrap-test.component");
var bootstrap_test_routing_module_1 = require("./bootstrap-test-routing.module");
var shared_module_1 = require("../shared/shared.module");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var BootstrapTestModule = (function () {
    function BootstrapTestModule() {
    }
    return BootstrapTestModule;
}());
BootstrapTestModule = __decorate([
    core_1.NgModule({
        imports: [
            bootstrap_test_routing_module_1.BootstrapTestRoutingModule,
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
            bootstrap_test_component_1.BootstrapTestComponent
        ],
        exports: [
            bootstrap_test_component_1.BootstrapTestComponent
        ],
        providers: []
    })
], BootstrapTestModule);
exports.BootstrapTestModule = BootstrapTestModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ib290c3RyYXAtdGVzdC9ib290c3RyYXAtdGVzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFFekMsdUVBQW9FO0FBQ3BFLGlGQUE2RTtBQUM3RSx5REFBdUQ7QUFFdkQsK0NBSXVEO0FBbUN2RCxJQUFhLG1CQUFtQjtJQUFoQztJQUFtQyxDQUFDO0lBQUQsMEJBQUM7QUFBRCxDQUFuQyxBQUFvQyxJQUFBO0FBQXZCLG1CQUFtQjtJQWpDL0IsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsMERBQTBCO1lBQzFCLDRCQUFZO1lBR1osZ0NBQWdCLENBQUMsT0FBTyxFQUFFO1lBQzFCLCtCQUFlLENBQUMsT0FBTyxFQUFFO1lBQ3pCLDJCQUFXLENBQUMsT0FBTyxFQUFFO1lBQ3JCLDZCQUFhLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLDhCQUFjLENBQUMsT0FBTyxFQUFFO1lBQ3hCLDhCQUFjLENBQUMsT0FBTyxFQUFFO1lBQ3hCLGdDQUFnQixDQUFDLE9BQU8sRUFBRTtZQUMxQiwyQkFBVyxDQUFDLE9BQU8sRUFBRTtZQUNyQixnQ0FBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsNkJBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDdkIsaUNBQWlCLENBQUMsT0FBTyxFQUFFO1lBQzNCLDRCQUFZLENBQUMsT0FBTyxFQUFFO1lBQ3RCLDhCQUFjLENBQUMsT0FBTyxFQUFFO1lBQ3hCLDBCQUFVLENBQUMsT0FBTyxFQUFFO1lBQ3BCLGdDQUFnQixDQUFDLE9BQU8sRUFBRTtZQUMxQiw2QkFBYSxDQUFDLE9BQU8sRUFBRTtZQUN2QiwrQkFBZSxDQUFDLE9BQU8sRUFBRTtTQUMxQjtRQUNELFlBQVksRUFBRTtZQUNaLGlEQUFzQjtTQUN2QjtRQUNELE9BQU8sRUFBRTtZQUNQLGlEQUFzQjtTQUN2QjtRQUNELFNBQVMsRUFBRSxFQUNWO0tBQ0YsQ0FBQztHQUNXLG1CQUFtQixDQUFJO0FBQXZCLGtEQUFtQiIsImZpbGUiOiJhcHAvYm9vdHN0cmFwLXRlc3QvYm9vdHN0cmFwLXRlc3QubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCb290c3RyYXBUZXN0Q29tcG9uZW50IH0gZnJvbSAnLi9ib290c3RyYXAtdGVzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQm9vdHN0cmFwVGVzdFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2Jvb3RzdHJhcC10ZXN0LXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuaW1wb3J0IHsgQnNEcm9wZG93bk1vZHVsZSwgQWNjb3JkaW9uTW9kdWxlLCBBbGVydE1vZHVsZSwgQnV0dG9uc01vZHVsZSxcbiAgICAgICAgIENhcm91c2VsTW9kdWxlLCBDb2xsYXBzZU1vZHVsZSwgRGF0ZXBpY2tlck1vZHVsZSwgTW9kYWxNb2R1bGUsXG4gICAgICAgICBQYWdpbmF0aW9uTW9kdWxlLCBQb3BvdmVyTW9kdWxlLCBQcm9ncmVzc2Jhck1vZHVsZSwgUmF0aW5nTW9kdWxlLFxuICAgICAgICAgU29ydGFibGVNb2R1bGUsIFRhYnNNb2R1bGUsIFRpbWVwaWNrZXJNb2R1bGUsIFRvb2x0aXBNb2R1bGUsXG4gICAgICAgICBUeXBlYWhlYWRNb2R1bGUgfSAgICAgICAgZnJvbSAnbmd4LWJvb3RzdHJhcCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBCb290c3RyYXBUZXN0Um91dGluZ01vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGUsXG5cbiAgICAvLyBCT09UU1RSQVAgSU1QT1JUU1xuICAgIEJzRHJvcGRvd25Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIEFjY29yZGlvbk1vZHVsZS5mb3JSb290KCksXG4gICAgQWxlcnRNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEJ1dHRvbnNNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENhcm91c2VsTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDb2xsYXBzZU1vZHVsZS5mb3JSb290KCksXG4gICAgRGF0ZXBpY2tlck1vZHVsZS5mb3JSb290KCksXG4gICAgTW9kYWxNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFBhZ2luYXRpb25Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIFBvcG92ZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFByb2dyZXNzYmFyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBSYXRpbmdNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFNvcnRhYmxlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBUYWJzTW9kdWxlLmZvclJvb3QoKSxcbiAgICBUaW1lcGlja2VyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBUb29sdGlwTW9kdWxlLmZvclJvb3QoKSxcbiAgICBUeXBlYWhlYWRNb2R1bGUuZm9yUm9vdCgpLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCb290c3RyYXBUZXN0Q29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBCb290c3RyYXBUZXN0Q29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcFRlc3RNb2R1bGUgeyB9XG4iXX0=
