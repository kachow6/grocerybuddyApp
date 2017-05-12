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
var router_1 = require("@angular/router");
var ListComponent = (function () {
    function ListComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.nameInput = '';
        this.myList = userService.getCurrentList().contents;
    }
    ListComponent.prototype.addItem = function () {
        if (this.nameInput.length > 0, this.numberInput > 0) {
            this.myList.push(new user_1.ShoppingItem(this.nameInput, this.numberInput, this.checkedInput));
            this.nameInput = '';
            this.numberInput = null;
        }
    };
    ListComponent.prototype.checkItem = function () {
        if (this.checkedInput === false) {
            this.checkedInput = true;
        }
        else if (this.checkedInput === true) {
            this.checkedInput = false;
        }
    };
    ListComponent.prototype.deleteItem = function (index) {
        console.log("Delete!");
        if (index >= 0 && index < this.myList.length) {
            var firstHalf = [];
            var lastHalf = [];
            firstHalf = this.myList.splice(0, index);
            lastHalf = this.myList.splice(index + 1, this.myList.length);
            this.myList = firstHalf.concat(lastHalf);
        }
    };
    ListComponent.prototype.resetList = function () {
        for (var i = 0; i < this.myList.length; i++) {
            this.myList[i].checked = false;
        }
    };
    ListComponent.prototype.checkout = function () {
        for (var i = 0; i < this.myList.length; i++) {
            if (this.myList[i].checked === true) {
                user_service_1.UserService.user.fridgeList.
                    push(new user_1.FridgeItem(this.myList[i].name, this.myList[i].quantity, 50));
            }
        }
        this.router.navigateByUrl('/fridge');
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'gb-list',
        templateUrl: 'list.component.html',
        styleUrls: ['list.component.css'],
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router])
], ListComponent);
exports.ListComponent = ListComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9saXN0L2xpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlEO0FBQ2pELG9FQUF1RTtBQUN2RSxvREFFK0Q7QUFDL0QsMENBQW1EO0FBWW5ELElBQWEsYUFBYTtJQU90Qix1QkFBb0IsV0FBd0IsRUFDeEIsTUFBYztRQURkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFMbEMsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQU1uQixJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUM7SUFDeEQsQ0FBQztJQUdELCtCQUFPLEdBQVA7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDeEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDNUIsQ0FBQztJQUVMLENBQUM7SUFHRCxpQ0FBUyxHQUFUO1FBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFlBQVksS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzdCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7SUFDTCxDQUFDO0lBR0Qsa0NBQVUsR0FBVixVQUFXLEtBQWE7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV2QixFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBSSxTQUFTLEdBQW1CLEVBQUUsQ0FBQztZQUNuQyxJQUFJLFFBQVEsR0FBb0IsRUFBRSxDQUFDO1lBRW5DLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEMsUUFBUSxHQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUU5RCxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsQ0FBQztJQUNMLENBQUM7SUFHRCxpQ0FBUyxHQUFUO1FBQ0ksR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNuQyxDQUFDO0lBQ0wsQ0FBQztJQUdELGdDQUFRLEdBQVI7UUFDSSxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbEMsMEJBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVTtvQkFDM0IsSUFBSSxDQUFDLElBQUksaUJBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNFLENBQUM7UUFDTCxDQUFDO1FBR0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FqRUEsQUFpRUMsSUFBQTtBQWpFWSxhQUFhO0lBUHpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtRQUNsQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztLQUNwQyxDQUFDO3FDQVNtQywwQkFBVztRQUNoQixlQUFNO0dBUnpCLGFBQWEsQ0FpRXpCO0FBakVZLHNDQUFhIiwiZmlsZSI6ImFwcC9saXN0L2xpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSAgICAgIGZyb20gJy4uL3NoYXJlZC91c2VyLXNlcnZpY2UvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IFNob3BwaW5nTGlzdCxcbiAgICAgICAgIFNob3BwaW5nSXRlbSxcbiAgICAgICAgIEZyaWRnZUl0ZW0gfSAgICAgICBmcm9tICcuLi9zaGFyZWQvdXNlci1zZXJ2aWNlL3VzZXInO1xuaW1wb3J0IHsgUm91dGVyIH0gICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBIb21lQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnZ2ItbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6ICdsaXN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnbGlzdC5jb21wb25lbnQuY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCB7XG4gICAgLy9JbnN0YW50aWF0aW5nIHRoZSBhcnJheSBvYmplY3QuXG4gICAgbXlMaXN0OiBTaG9wcGluZ0l0ZW1bXTtcbiAgICBuYW1lSW5wdXQ6IHN0cmluZyA9ICcnO1xuICAgIG51bWJlcklucHV0OiBudW1iZXI7XG4gICAgY2hlY2tlZElucHV0OiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICB0aGlzLm15TGlzdCA9IHVzZXJTZXJ2aWNlLmdldEN1cnJlbnRMaXN0KCkuY29udGVudHM7XG4gICAgfVxuXG4gICAgLy9NZXRob2QgZm9yIGFkZGluZyBhIG5ldyBpdGVtIGJ5IHVzZXIgaW5wdXRcbiAgICBhZGRJdGVtKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5uYW1lSW5wdXQubGVuZ3RoID4gMCwgdGhpcy5udW1iZXJJbnB1dCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubXlMaXN0LnB1c2gobmV3IFNob3BwaW5nSXRlbSh0aGlzLm5hbWVJbnB1dCwgdGhpcy5udW1iZXJJbnB1dCwgdGhpcy5jaGVja2VkSW5wdXQpKTtcbiAgICAgICAgICAgIHRoaXMubmFtZUlucHV0ID0gJyc7XG4gICAgICAgICAgICB0aGlzLm51bWJlcklucHV0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm15TGlzdC5jb250ZW50c1sxXSk7XG4gICAgfVxuXG4gICAgLy9NZXRob2QgZm9yIGNoYW5naW5nIHRoZSBjaGVja2VkIHN0YXRlIG9mIGFuIGl0ZW1cbiAgICBjaGVja0l0ZW0oKTogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMuY2hlY2tlZElucHV0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkSW5wdXQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2hlY2tlZElucHV0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWRJbnB1dCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGVsZXRlIEl0ZW0uXG4gICAgZGVsZXRlSXRlbShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGVsZXRlIVwiKTtcblxuICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMubXlMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGZpcnN0SGFsZjogU2hvcHBpbmdJdGVtW10gPSBbXTtcbiAgICAgICAgICAgIGxldCBsYXN0SGFsZiA6IFNob3BwaW5nSXRlbVtdID0gW107XG5cbiAgICAgICAgICAgIGZpcnN0SGFsZiA9IHRoaXMubXlMaXN0LnNwbGljZSgwLGluZGV4KTtcbiAgICAgICAgICAgIGxhc3RIYWxmICA9IHRoaXMubXlMaXN0LnNwbGljZShpbmRleCArIDEsIHRoaXMubXlMaXN0Lmxlbmd0aCk7XG5cbiAgICAgICAgICAgIHRoaXMubXlMaXN0ID0gZmlyc3RIYWxmLmNvbmNhdChsYXN0SGFsZik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL01ldGhvZCBmb3IgcmVzZXR0aW5nIGNoZWNrZWQgaXRlbXMgdG8gZmFsc2VcbiAgICByZXNldExpc3QoKTogdm9pZCB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLm15TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5teUxpc3RbaV0uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9NZXRob2QgZm9yIHRyYW5zZmVyaW5nIGNoZWNrZWQgaXRlbXMgdG8gZnJpZGdlIGFycmF5XG4gICAgY2hlY2tvdXQoKTogdm9pZCB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLm15TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMubXlMaXN0W2ldLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBVc2VyU2VydmljZS51c2VyLmZyaWRnZUxpc3QuXG4gICAgICAgICAgICAgICAgcHVzaChuZXcgRnJpZGdlSXRlbSh0aGlzLm15TGlzdFtpXS5uYW1lLCB0aGlzLm15TGlzdFtpXS5xdWFudGl0eSwgNTApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5hdmlnYXRlcyB0byB0aGUgZnJpZGdlIHBhZ2UuXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9mcmlkZ2UnKTtcbiAgICB9XG59XG4iXX0=
