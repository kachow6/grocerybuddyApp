"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BootstrapTestComponent = (function () {
    function BootstrapTestComponent() {
        this.alerts = [
            {
                type: 'success',
                msg: "You successfully read this important alert message."
            },
            {
                type: 'info',
                msg: "This alert needs your attention, but it's not super important."
            },
            {
                type: 'danger',
                msg: "Better check yourself, you're not looking too good."
            }
        ];
    }
    BootstrapTestComponent.prototype.reset = function () {
        this.alerts = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    };
    return BootstrapTestComponent;
}());
BootstrapTestComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'gb-bootstrap-test',
        templateUrl: 'bootstrap-test.component.html',
        styleUrls: ['bootstrap-test.component.css'],
    })
], BootstrapTestComponent);
exports.BootstrapTestComponent = BootstrapTestComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ib290c3RyYXAtdGVzdC9ib290c3RyYXAtdGVzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFXMUMsSUFBYSxzQkFBc0I7SUFObkM7UUFPUyxXQUFNLEdBQVE7WUFDbkI7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsR0FBRyxFQUFFLHFEQUFxRDthQUMzRDtZQUNEO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLEdBQUcsRUFBRSxnRUFBZ0U7YUFDdEU7WUFDRDtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxHQUFHLEVBQUUscURBQXFEO2FBQzNEO1NBQ0YsQ0FBQztJQUtKLENBQUM7SUFIUSxzQ0FBSyxHQUFaO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTtBQW5CWSxzQkFBc0I7SUFObEMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLFdBQVcsRUFBRSwrQkFBK0I7UUFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7S0FDNUMsQ0FBQztHQUNXLHNCQUFzQixDQW1CbEM7QUFuQlksd0RBQXNCIiwiZmlsZSI6ImFwcC9ib290c3RyYXAtdGVzdC9ib290c3RyYXAtdGVzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEhvbWVDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2diLWJvb3RzdHJhcC10ZXN0JyxcbiAgdGVtcGxhdGVVcmw6ICdib290c3RyYXAtdGVzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydib290c3RyYXAtdGVzdC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcFRlc3RDb21wb25lbnQge1xuICBwdWJsaWMgYWxlcnRzOiBhbnkgPSBbXG4gICAge1xuICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgbXNnOiBgWW91IHN1Y2Nlc3NmdWxseSByZWFkIHRoaXMgaW1wb3J0YW50IGFsZXJ0IG1lc3NhZ2UuYFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ2luZm8nLFxuICAgICAgbXNnOiBgVGhpcyBhbGVydCBuZWVkcyB5b3VyIGF0dGVudGlvbiwgYnV0IGl0J3Mgbm90IHN1cGVyIGltcG9ydGFudC5gXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgIG1zZzogYEJldHRlciBjaGVjayB5b3Vyc2VsZiwgeW91J3JlIG5vdCBsb29raW5nIHRvbyBnb29kLmBcbiAgICB9XG4gIF07XG5cbiAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuYWxlcnRzID0gdGhpcy5hbGVydHMubWFwKChhbGVydDogYW55KSA9PiBPYmplY3QuYXNzaWduKHt9LCBhbGVydCkpO1xuICB9XG59Il19
