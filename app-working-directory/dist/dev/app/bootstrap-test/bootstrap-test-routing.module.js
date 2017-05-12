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
var bootstrap_test_component_1 = require("./bootstrap-test.component");
var BootstrapTestRoutingModule = (function () {
    function BootstrapTestRoutingModule() {
    }
    return BootstrapTestRoutingModule;
}());
BootstrapTestRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                { path: 'bootstrap-test', component: bootstrap_test_component_1.BootstrapTestComponent }
            ])
        ],
        exports: [router_1.RouterModule]
    })
], BootstrapTestRoutingModule);
exports.BootstrapTestRoutingModule = BootstrapTestRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ib290c3RyYXAtdGVzdC9ib290c3RyYXAtdGVzdC1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsdUVBQW9FO0FBVXBFLElBQWEsMEJBQTBCO0lBQXZDO0lBQTBDLENBQUM7SUFBRCxpQ0FBQztBQUFELENBQTFDLEFBQTJDLElBQUE7QUFBOUIsMEJBQTBCO0lBUnRDLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHFCQUFZLENBQUMsUUFBUSxDQUFDO2dCQUNwQixFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsaURBQXNCLEVBQUU7YUFDOUQsQ0FBQztTQUNIO1FBQ0QsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztLQUN4QixDQUFDO0dBQ1csMEJBQTBCLENBQUk7QUFBOUIsZ0VBQTBCIiwiZmlsZSI6ImFwcC9ib290c3RyYXAtdGVzdC9ib290c3RyYXAtdGVzdC1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQm9vdHN0cmFwVGVzdENvbXBvbmVudCB9IGZyb20gJy4vYm9vdHN0cmFwLXRlc3QuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICB7IHBhdGg6ICdib290c3RyYXAtdGVzdCcsIGNvbXBvbmVudDogQm9vdHN0cmFwVGVzdENvbXBvbmVudCB9XG4gICAgXSlcbiAgXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwVGVzdFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=
