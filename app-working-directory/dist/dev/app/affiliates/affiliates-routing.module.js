"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var affiliates_component_1 = require("./affiliates.component");
var AffiliatesRoutingModule = (function () {
    function AffiliatesRoutingModule() {
    }
    return AffiliatesRoutingModule;
}());
AffiliatesRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                { path: 'affiliates', component: affiliates_component_1.AffiliatesComponent }
            ])
        ],
        exports: [router_1.RouterModule]
    })
], AffiliatesRoutingModule);
exports.AffiliatesRoutingModule = AffiliatesRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZmZpbGlhdGVzL2FmZmlsaWF0ZXMtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBQy9DLCtEQUE2RDtBQVU3RCxJQUFhLHVCQUF1QjtJQUFwQztJQUF1QyxDQUFDO0lBQUQsOEJBQUM7QUFBRCxDQUF2QyxBQUF3QyxJQUFBO0FBQTNCLHVCQUF1QjtJQVJuQyxlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxxQkFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDcEIsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSwwQ0FBbUIsRUFBRTthQUN2RCxDQUFDO1NBQ0g7UUFDRCxPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO0tBQ3hCLENBQUM7R0FDVyx1QkFBdUIsQ0FBSTtBQUEzQiwwREFBdUIiLCJmaWxlIjoiYXBwL2FmZmlsaWF0ZXMvYWZmaWxpYXRlcy1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWZmaWxpYXRlc0NvbXBvbmVudCB9IGZyb20gJy4vYWZmaWxpYXRlcy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgIHsgcGF0aDogJ2FmZmlsaWF0ZXMnLCBjb21wb25lbnQ6IEFmZmlsaWF0ZXNDb21wb25lbnQgfVxuICAgIF0pXG4gIF0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFmZmlsaWF0ZXNSb3V0aW5nTW9kdWxlIHsgfVxuIl19
