"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../shared/user-service/user.service");
var user_1 = require("../shared/user-service/user");
var FridgeComponent = (function () {
    function FridgeComponent(userService) {
        this.userService = userService;
        this.nameInput = '';
        this.stateDanger = 'progress-bar-danger';
        this.stateWarning = 'progress-bar-warning';
        this.stateSuccess = 'progress-bar-success';
        this.itemState = '';
        this.fridgeList = userService.getFridge();
    }
    FridgeComponent.prototype.calculateExp = function (max, expiration) {
        if (expiration / max < 0.33) {
            return this.stateDanger;
        }
        else if (expiration / max >= 0.66) {
            return this.stateSuccess;
        }
        else {
            return this.stateWarning;
        }
    };
    FridgeComponent.prototype.addItem = function () {
        if (this.nameInput.length > 0, this.numberInput > 0) {
            this.fridgeList.push(new user_1.FridgeItem(this.nameInput, this.numberInput, null));
            this.nameInput = '';
            this.numberInput = null;
        }
    };
    FridgeComponent.prototype.itemRename = function (item) {
        if (this.renameInput.length > 2) {
            item.name = this.renameInput;
            this.renameInput = "";
        }
    };
    FridgeComponent.prototype.deleteItem = function (list) {
        this.fridgeList.splice(this.fridgeList.indexOf(list), 1);
    };
    return FridgeComponent;
}());
FridgeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'gb-fridge',
        templateUrl: 'fridge.component.html',
        styleUrls: ['fridge.component.css'],
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], FridgeComponent);
exports.FridgeComponent = FridgeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mcmlkZ2UvZnJpZGdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFvRDtBQUNwRCxvRUFBMEU7QUFDMUUsb0RBQWdFO0FBbUJoRSxJQUFhLGVBQWU7SUFleEIseUJBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBWDVDLGNBQVMsR0FBZ0IsRUFBRSxDQUFDO1FBTTVCLGdCQUFXLEdBQVcscUJBQXFCLENBQUM7UUFDNUMsaUJBQVksR0FBVyxzQkFBc0IsQ0FBQztRQUM5QyxpQkFBWSxHQUFXLHNCQUFzQixDQUFDO1FBQzlDLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFHbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUdELHNDQUFZLEdBQVosVUFBYSxHQUFXLEVBQUUsVUFBa0I7UUFDeEMsRUFBRSxDQUFDLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7SUFDTCxDQUFDO0lBR0QsaUNBQU8sR0FBUDtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxpQkFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzVCLENBQUM7SUFDTCxDQUFDO0lBRUQsb0NBQVUsR0FBVixVQUFXLElBQWdCO1FBQ3pCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBR0Qsb0NBQVUsR0FBVixVQUFXLElBQWdCO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFTCxzQkFBQztBQUFELENBbkRBLEFBbURDLElBQUE7QUFuRFksZUFBZTtJQVAzQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7S0FDcEMsQ0FBQztxQ0FpQm1DLDBCQUFXO0dBZm5DLGVBQWUsQ0FtRDNCO0FBbkRZLDBDQUFlIiwiZmlsZSI6ImFwcC9mcmlkZ2UvZnJpZGdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gICAgICAgICBmcm9tICcuLi9zaGFyZWQvdXNlci1zZXJ2aWNlL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGcmlkZ2VJdGVtIH0gICAgICAgIGZyb20gJy4uL3NoYXJlZC91c2VyLXNlcnZpY2UvdXNlcic7XG5cbi8vIC8vQXJyYXkgdGhhdCBjb250YWlucyB0aGUgaXRlbXMgb24gTGlzdCBwYWdlLlxuLy8gY29uc3QgRlJJREdFX0lURU1TOiBJdGVtTGlzdFtdID0gW1xuLy8gICAgIG5ldyBJdGVtTGlzdCgnT3JhbmdlcycsIDYsIDMwKSxcbi8vICAgICBuZXcgSXRlbUxpc3QoJ01hbmdvJywgMTIsIDg1KSxcbi8vICAgICBuZXcgSXRlbUxpc3QoJ0R1cmlhbicsIDMsIDQ1KVxuLy8gXTtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEhvbWVDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2diLWZyaWRnZScsXG4gIHRlbXBsYXRlVXJsOiAnZnJpZGdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2ZyaWRnZS5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgRnJpZGdlQ29tcG9uZW50IHtcblxuICAgIGZyaWRnZUxpc3Q6ICAgICBGcmlkZ2VJdGVtW107XG5cbiAgICBuYW1lSW5wdXQ6ICAgICAgc3RyaW5nID0gJyc7XG4gICAgbnVtYmVySW5wdXQ6ICAgIG51bWJlcjtcbiAgICBleHBpcmF0aW9uOiAgICAgbnVtYmVyO1xuICAgIHJlbmFtZUlucHV0OiBzdHJpbmc7XG5cbiAgICAvL1N0YXRlcyBmb3IgdGhlIHByb2dyZXNzIGJhclxuICAgIHN0YXRlRGFuZ2VyOiBzdHJpbmcgPSAncHJvZ3Jlc3MtYmFyLWRhbmdlcic7XG4gICAgc3RhdGVXYXJuaW5nOiBzdHJpbmcgPSAncHJvZ3Jlc3MtYmFyLXdhcm5pbmcnO1xuICAgIHN0YXRlU3VjY2Vzczogc3RyaW5nID0gJ3Byb2dyZXNzLWJhci1zdWNjZXNzJztcbiAgICBpdGVtU3RhdGU6IHN0cmluZyA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5mcmlkZ2VMaXN0ID0gdXNlclNlcnZpY2UuZ2V0RnJpZGdlKCk7XG4gICAgfVxuXG4gICAgLy8gTWV0aG9kIGZvciBjYWxjdWxhdGluZyB0aGUgZXhwaXJhdGlvbiBiYXIgY29sb3VyXG4gICAgY2FsY3VsYXRlRXhwKG1heDogbnVtYmVyLCBleHBpcmF0aW9uOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBpZiAoZXhwaXJhdGlvbiAvIG1heCA8IDAuMzMpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVEYW5nZXI7XG4gICAgICAgIH0gZWxzZSBpZiAoZXhwaXJhdGlvbiAvIG1heCA+PSAwLjY2KXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlU3VjY2VzcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlV2FybmluZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1ldGhvZCBmb3IgYWRkaW5nIGEgZnJpZGdlIGl0ZW0gb2JqZWN0IHRvIHRoZSBhcnJheVxuICAgIGFkZEl0ZW0oKTogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMubmFtZUlucHV0Lmxlbmd0aCA+IDAsIHRoaXMubnVtYmVySW5wdXQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmZyaWRnZUxpc3QucHVzaChuZXcgRnJpZGdlSXRlbSh0aGlzLm5hbWVJbnB1dCwgdGhpcy5udW1iZXJJbnB1dCwgbnVsbCkpO1xuICAgICAgICAgICAgdGhpcy5uYW1lSW5wdXQgPSAnJztcbiAgICAgICAgICAgIHRoaXMubnVtYmVySW5wdXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXRlbVJlbmFtZShpdGVtOiBGcmlkZ2VJdGVtKTogIHZvaWQge1xuICAgICAgaWYodGhpcy5yZW5hbWVJbnB1dC5sZW5ndGggPiAyKSB7XG4gICAgICBpdGVtLm5hbWUgPSB0aGlzLnJlbmFtZUlucHV0OyBcbiAgICAgIHRoaXMucmVuYW1lSW5wdXQgPSBcIlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vTWV0aG9kIGZvciBkZWxldGluZyBhIHNob3BwaW5nIGxpc3Qgb2ZmIGhvbWUgcGFnZS5cbiAgICBkZWxldGVJdGVtKGxpc3Q6IEZyaWRnZUl0ZW0pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mcmlkZ2VMaXN0LnNwbGljZSh0aGlzLmZyaWRnZUxpc3QuaW5kZXhPZihsaXN0KSwxKTtcbiAgICB9XG5cbn1cbiJdfQ==
