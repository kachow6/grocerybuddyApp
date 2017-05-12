"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fridge_component_1 = require("./fridge.component");
var fridge_routing_module_1 = require("./fridge-routing.module");
var shared_module_1 = require("../shared/shared.module");
var forms_1 = require("@angular/forms");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var FridgeModule = (function () {
    function FridgeModule() {
    }
    return FridgeModule;
}());
FridgeModule = __decorate([
    core_1.NgModule({
        imports: [
            fridge_routing_module_1.FridgeRoutingModule,
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
            fridge_component_1.FridgeComponent
        ],
        exports: [
            fridge_component_1.FridgeComponent
        ],
        providers: []
    })
], FridgeModule);
exports.FridgeModule = FridgeModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmlkZ2UvZnJpZGdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUV6Qyx1REFBcUQ7QUFDckQsaUVBQThEO0FBQzlELHlEQUF1RDtBQUN2RCx3Q0FBNkM7QUFFN0MsK0NBSXVEO0FBb0N2RCxJQUFhLFlBQVk7SUFBekI7SUFBNEIsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBNUIsQUFBNkIsSUFBQTtBQUFoQixZQUFZO0lBbEN4QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCwyQ0FBbUI7WUFDbkIsNEJBQVk7WUFDWixtQkFBVztZQUdYLGdDQUFnQixDQUFDLE9BQU8sRUFBRTtZQUMxQiwrQkFBZSxDQUFDLE9BQU8sRUFBRTtZQUN6QiwyQkFBVyxDQUFDLE9BQU8sRUFBRTtZQUNyQiw2QkFBYSxDQUFDLE9BQU8sRUFBRTtZQUN2Qiw4QkFBYyxDQUFDLE9BQU8sRUFBRTtZQUN4Qiw4QkFBYyxDQUFDLE9BQU8sRUFBRTtZQUN4QixnQ0FBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsMkJBQVcsQ0FBQyxPQUFPLEVBQUU7WUFDckIsZ0NBQWdCLENBQUMsT0FBTyxFQUFFO1lBQzFCLDZCQUFhLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLGlDQUFpQixDQUFDLE9BQU8sRUFBRTtZQUMzQiw0QkFBWSxDQUFDLE9BQU8sRUFBRTtZQUN0Qiw4QkFBYyxDQUFDLE9BQU8sRUFBRTtZQUN4QiwwQkFBVSxDQUFDLE9BQU8sRUFBRTtZQUNwQixnQ0FBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsNkJBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDdkIsK0JBQWUsQ0FBQyxPQUFPLEVBQUU7U0FDMUI7UUFDRCxZQUFZLEVBQUU7WUFDWixrQ0FBZTtTQUNoQjtRQUNELE9BQU8sRUFBRTtZQUNQLGtDQUFlO1NBQ2hCO1FBQ0QsU0FBUyxFQUFFLEVBQ1Y7S0FDRixDQUFDO0dBQ1csWUFBWSxDQUFJO0FBQWhCLG9DQUFZIiwiZmlsZSI6ImFwcC9mcmlkZ2UvZnJpZGdlLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRnJpZGdlQ29tcG9uZW50IH0gZnJvbSAnLi9mcmlkZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IEZyaWRnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2ZyaWRnZS1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQnNEcm9wZG93bk1vZHVsZSwgQWNjb3JkaW9uTW9kdWxlLCBBbGVydE1vZHVsZSwgQnV0dG9uc01vZHVsZSxcbiAgICAgICAgIENhcm91c2VsTW9kdWxlLCBDb2xsYXBzZU1vZHVsZSwgRGF0ZXBpY2tlck1vZHVsZSwgTW9kYWxNb2R1bGUsXG4gICAgICAgICBQYWdpbmF0aW9uTW9kdWxlLCBQb3BvdmVyTW9kdWxlLCBQcm9ncmVzc2Jhck1vZHVsZSwgUmF0aW5nTW9kdWxlLFxuICAgICAgICAgU29ydGFibGVNb2R1bGUsIFRhYnNNb2R1bGUsIFRpbWVwaWNrZXJNb2R1bGUsIFRvb2x0aXBNb2R1bGUsXG4gICAgICAgICBUeXBlYWhlYWRNb2R1bGUgfSAgICAgICAgZnJvbSAnbmd4LWJvb3RzdHJhcCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBGcmlkZ2VSb3V0aW5nTW9kdWxlLFxuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcblxuICAgIC8vIEJPT1RTVFJBUCBJTVBPUlRTXG4gICAgQnNEcm9wZG93bk1vZHVsZS5mb3JSb290KCksXG4gICAgQWNjb3JkaW9uTW9kdWxlLmZvclJvb3QoKSxcbiAgICBBbGVydE1vZHVsZS5mb3JSb290KCksXG4gICAgQnV0dG9uc01vZHVsZS5mb3JSb290KCksXG4gICAgQ2Fyb3VzZWxNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENvbGxhcHNlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBEYXRlcGlja2VyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBNb2RhbE1vZHVsZS5mb3JSb290KCksXG4gICAgUGFnaW5hdGlvbk1vZHVsZS5mb3JSb290KCksXG4gICAgUG9wb3Zlck1vZHVsZS5mb3JSb290KCksXG4gICAgUHJvZ3Jlc3NiYXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFJhdGluZ01vZHVsZS5mb3JSb290KCksXG4gICAgU29ydGFibGVNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFRhYnNNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFRpbWVwaWNrZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFRvb2x0aXBNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFR5cGVhaGVhZE1vZHVsZS5mb3JSb290KCksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEZyaWRnZUNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRnJpZGdlQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEZyaWRnZU1vZHVsZSB7IH1cbiJdfQ==
