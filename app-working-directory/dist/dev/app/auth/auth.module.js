"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_routing_module_1 = require("./auth-routing.module");
var shared_module_1 = require("../shared/shared.module");
var auth_component_1 = require("./auth.component");
var register_component_1 = require("./register.component");
var connect_component_1 = require("./connect.component");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    core_1.NgModule({
        imports: [
            auth_routing_module_1.AuthRoutingModule,
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
            auth_component_1.AuthComponent,
            connect_component_1.ConnectComponent,
            register_component_1.RegisterComponent,
        ],
        exports: [
            auth_component_1.AuthComponent
        ],
        providers: []
    })
], AuthModule);
exports.AuthModule = AuthModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2F1dGgubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXdEO0FBR3hELDZEQUFnRTtBQUNoRSx5REFBa0U7QUFFbEUsbURBQTJEO0FBQzNELDJEQUErRDtBQUMvRCx5REFBOEQ7QUFFOUQsK0NBSXVEO0FBcUN2RCxJQUFhLFVBQVU7SUFBdkI7SUFBMEIsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBMUIsQUFBMkIsSUFBQTtBQUFkLFVBQVU7SUFuQ3RCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHVDQUFpQjtZQUNqQiw0QkFBWTtZQUdaLGdDQUFnQixDQUFDLE9BQU8sRUFBRTtZQUMxQiwrQkFBZSxDQUFDLE9BQU8sRUFBRTtZQUN6QiwyQkFBVyxDQUFDLE9BQU8sRUFBRTtZQUNyQiw2QkFBYSxDQUFDLE9BQU8sRUFBRTtZQUN2Qiw4QkFBYyxDQUFDLE9BQU8sRUFBRTtZQUN4Qiw4QkFBYyxDQUFDLE9BQU8sRUFBRTtZQUN4QixnQ0FBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsMkJBQVcsQ0FBQyxPQUFPLEVBQUU7WUFDckIsZ0NBQWdCLENBQUMsT0FBTyxFQUFFO1lBQzFCLDZCQUFhLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLGlDQUFpQixDQUFDLE9BQU8sRUFBRTtZQUMzQiw0QkFBWSxDQUFDLE9BQU8sRUFBRTtZQUN0Qiw4QkFBYyxDQUFDLE9BQU8sRUFBRTtZQUN4QiwwQkFBVSxDQUFDLE9BQU8sRUFBRTtZQUNwQixnQ0FBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsNkJBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDdkIsK0JBQWUsQ0FBQyxPQUFPLEVBQUU7U0FDMUI7UUFDRCxZQUFZLEVBQUU7WUFDWiw4QkFBYTtZQUNiLG9DQUFnQjtZQUNoQixzQ0FBaUI7U0FDbEI7UUFDRCxPQUFPLEVBQUU7WUFDUCw4QkFBYTtTQUNkO1FBQ0QsU0FBUyxFQUFFLEVBQ1Y7S0FDRixDQUFDO0dBQ1csVUFBVSxDQUFJO0FBQWQsZ0NBQVUiLCJmaWxlIjoiYXBwL2F1dGgvYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBdXRoUm91dGluZ01vZHVsZSB9ICAgICAgIGZyb20gJy4vYXV0aC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSAgICAgICAgICAgIGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuaW1wb3J0IHsgQXV0aENvbXBvbmVudCB9ICAgICAgICAgICBmcm9tICcuL2F1dGguY29tcG9uZW50JztcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gICAgICAgZnJvbSAnLi9yZWdpc3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29ubmVjdENvbXBvbmVudCB9ICAgICAgICBmcm9tICcuL2Nvbm5lY3QuY29tcG9uZW50JztcblxuaW1wb3J0IHsgQnNEcm9wZG93bk1vZHVsZSwgQWNjb3JkaW9uTW9kdWxlLCBBbGVydE1vZHVsZSwgQnV0dG9uc01vZHVsZSxcbiAgICAgICAgIENhcm91c2VsTW9kdWxlLCBDb2xsYXBzZU1vZHVsZSwgRGF0ZXBpY2tlck1vZHVsZSwgTW9kYWxNb2R1bGUsXG4gICAgICAgICBQYWdpbmF0aW9uTW9kdWxlLCBQb3BvdmVyTW9kdWxlLCBQcm9ncmVzc2Jhck1vZHVsZSwgUmF0aW5nTW9kdWxlLFxuICAgICAgICAgU29ydGFibGVNb2R1bGUsIFRhYnNNb2R1bGUsIFRpbWVwaWNrZXJNb2R1bGUsIFRvb2x0aXBNb2R1bGUsXG4gICAgICAgICBUeXBlYWhlYWRNb2R1bGUgfSAgICAgICAgZnJvbSAnbmd4LWJvb3RzdHJhcCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBBdXRoUm91dGluZ01vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGUsXG5cbiAgICAvLyBCT09UU1RSQVAgSU1QT1JUU1xuICAgIEJzRHJvcGRvd25Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIEFjY29yZGlvbk1vZHVsZS5mb3JSb290KCksXG4gICAgQWxlcnRNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEJ1dHRvbnNNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENhcm91c2VsTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDb2xsYXBzZU1vZHVsZS5mb3JSb290KCksXG4gICAgRGF0ZXBpY2tlck1vZHVsZS5mb3JSb290KCksXG4gICAgTW9kYWxNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFBhZ2luYXRpb25Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIFBvcG92ZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFByb2dyZXNzYmFyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBSYXRpbmdNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFNvcnRhYmxlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBUYWJzTW9kdWxlLmZvclJvb3QoKSxcbiAgICBUaW1lcGlja2VyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBUb29sdGlwTW9kdWxlLmZvclJvb3QoKSxcbiAgICBUeXBlYWhlYWRNb2R1bGUuZm9yUm9vdCgpLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBdXRoQ29tcG9uZW50LFxuICAgIENvbm5lY3RDb21wb25lbnQsXG4gICAgUmVnaXN0ZXJDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBBdXRoQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhNb2R1bGUgeyB9XG4iXX0=
