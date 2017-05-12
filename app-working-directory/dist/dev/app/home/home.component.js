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
var HomeComponent = (function () {
    function HomeComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.nameInput = "";
        this.renameInput = "";
        this.myList = userService.getHome();
    }
    HomeComponent.prototype.addList = function () {
        if (this.nameInput.length >= 1) {
            this.myList.push(new user_1.ShoppingList(this.nameInput));
            this.nameInput = '';
        }
    };
    HomeComponent.prototype.selectList = function (list) {
        this.userService.setCurrentList(list);
        this.router.navigateByUrl('/list');
    };
    HomeComponent.prototype.listRename = function (list) {
        if (this.renameInput.length > 0) {
            list.name = this.renameInput;
            this.renameInput = "";
        }
    };
    HomeComponent.prototype.resetList = function (list) {
        for (var i = 0; i < this.userService.getCurrentList().contents.length; i++) {
            this.userService.getCurrentList().contents[i].checked = false;
        }
    };
    HomeComponent.prototype.copyList = function (list) {
        var tempList = new user_1.ShoppingList(list.name);
        var tempIndex;
        for (var i = 0; i < list.contents.length; i++) {
            tempList.contents.push(new user_1.ShoppingItem(list.contents[i].name, list.contents[i].quantity, list.contents[i].checked));
        }
        this.myList.push(tempList);
    };
    HomeComponent.prototype.deleteList = function (list) {
        this.myList.splice(this.myList.indexOf(list), 1);
        if (this.userService.getCurrentList() === list) {
            this.userService.setCurrentList(null);
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'gb-home',
        templateUrl: 'home.component.html',
        styleUrls: ['home.component.css'],
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWlFO0FBQ2pFLG9FQUFrRTtBQUNsRSxvREFBeUU7QUFDekUsMENBQXlDO0FBWXpDLElBQWEsYUFBYTtJQU90Qix1QkFDWSxXQUF3QixFQUN4QixNQUFjO1FBRGQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUwxQixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBTXJCLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFHRCwrQkFBTyxHQUFQO1FBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLG1CQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDeEIsQ0FBQztJQUNMLENBQUM7SUFFRCxrQ0FBVSxHQUFWLFVBQVcsSUFBa0I7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUdELGtDQUFVLEdBQVYsVUFBVyxJQUFrQjtRQUN6QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixDQUFDO0lBQ0wsQ0FBQztJQUdELGlDQUFTLEdBQVQsVUFBVSxJQUFrQjtRQUN4QixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3hFLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDcEUsQ0FBQztJQUNILENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsSUFBa0I7UUFDdkIsSUFBSSxRQUFRLEdBQWlCLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsSUFBSSxTQUF5QixDQUFDO1FBQzlCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMzQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLG1CQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFDdEUsQ0FBQztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFHRCxrQ0FBVSxHQUFWLFVBQVcsSUFBa0I7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFFaEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLENBQUM7SUFDTCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQTdEQSxBQTZEQyxJQUFBO0FBN0RZLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUscUJBQXFCO1FBQ2xDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO0tBQ3BDLENBQUM7cUNBUzJCLDBCQUFXO1FBQ2hCLGVBQU07R0FUakIsYUFBYSxDQTZEekI7QUE3RFksc0NBQWEiLCJmaWxlIjoiYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvdXNlci1zZXJ2aWNlL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBTaG9wcGluZ0xpc3QsIFNob3BwaW5nSXRlbSB9IGZyb20gJy4uL3NoYXJlZC91c2VyLXNlcnZpY2UvdXNlcic7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBIb21lQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnZ2ItaG9tZScsXG4gICAgdGVtcGxhdGVVcmw6ICdob21lLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnaG9tZS5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuXG4gICAgLy9JbnN0YW50aWF0aW5nIHRoZSBhcnJheSBvYmplY3QuXG4gICAgbXlMaXN0OiBTaG9wcGluZ0xpc3RbXTtcbiAgICBuYW1lSW5wdXQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcmVuYW1lSW5wdXQ6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgICAgICAgKSB7XG4gICAgICAgIHRoaXMubXlMaXN0ID0gdXNlclNlcnZpY2UuZ2V0SG9tZSgpO1xuICAgIH1cblxuICAgIC8vTWV0aG9kIGZvciBhZGRpbmcgYSBuZXcgU2hvcHBpbmcgbGlzdCBvYmplY3Qgb24gaG9tZXBhZ2UuXG4gICAgYWRkTGlzdCgpOnZvaWQge1xuICAgICAgICBpZih0aGlzLm5hbWVJbnB1dC5sZW5ndGggPj0gMSkge1xuICAgICAgICAgICAgdGhpcy5teUxpc3QucHVzaChuZXcgU2hvcHBpbmdMaXN0KHRoaXMubmFtZUlucHV0KSk7XG4gICAgICAgICAgICB0aGlzLm5hbWVJbnB1dCA9ICcnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0TGlzdChsaXN0OiBTaG9wcGluZ0xpc3QpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5zZXRDdXJyZW50TGlzdChsaXN0KTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2xpc3QnKTtcbiAgICB9XG5cbiAgICAvL01ldGhvZCBmb3IgcmVuYW1pbmcgdGhlIHNob3BwaW5nIGxpc3QuXG4gICAgbGlzdFJlbmFtZShsaXN0OiBTaG9wcGluZ0xpc3QpOiAgdm9pZCB7XG4gICAgICAgIGlmKHRoaXMucmVuYW1lSW5wdXQubGVuZ3RoID4gMCkge1xuICAgICAgICBsaXN0Lm5hbWUgPSB0aGlzLnJlbmFtZUlucHV0O1xuICAgICAgICB0aGlzLnJlbmFtZUlucHV0ID0gXCJcIjsgXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy9NZXRob2QgZm9yIHJlc2V0dGluZyBpdGVtcyBjaGVja2VkIGluIHRoZSBsaXN0LlxuICAgIHJlc2V0TGlzdChsaXN0OiBTaG9wcGluZ0xpc3QpOiB2b2lkIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMudXNlclNlcnZpY2UuZ2V0Q3VycmVudExpc3QoKS5jb250ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5nZXRDdXJyZW50TGlzdCgpLmNvbnRlbnRzW2ldLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb3B5TGlzdChsaXN0OiBTaG9wcGluZ0xpc3QpOiB2b2lkIHtcbiAgICAgICAgbGV0IHRlbXBMaXN0OiBTaG9wcGluZ0xpc3QgPSBuZXcgU2hvcHBpbmdMaXN0KGxpc3QubmFtZSk7XG4gICAgICAgIGxldCB0ZW1wSW5kZXg6IFNob3BwaW5nSXRlbVtdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGlzdC5jb250ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGVtcExpc3QuY29udGVudHMucHVzaChuZXcgU2hvcHBpbmdJdGVtKGxpc3QuY29udGVudHNbaV0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmNvbnRlbnRzW2ldLnF1YW50aXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuY29udGVudHNbaV0uY2hlY2tlZCkpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5teUxpc3QucHVzaCh0ZW1wTGlzdCk7XG4gICAgfVxuXG4gICAgLy9NZXRob2QgZm9yIGRlbGV0aW5nIGEgc2hvcHBpbmcgbGlzdCBvZmYgaG9tZSBwYWdlLlxuICAgIGRlbGV0ZUxpc3QobGlzdDogU2hvcHBpbmdMaXN0KTogdm9pZCB7XG4gICAgICAgIHRoaXMubXlMaXN0LnNwbGljZSh0aGlzLm15TGlzdC5pbmRleE9mKGxpc3QpLDEpO1xuXG4gICAgICAgIGlmICh0aGlzLnVzZXJTZXJ2aWNlLmdldEN1cnJlbnRMaXN0KCkgPT09IGxpc3QpIHtcbiAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2Uuc2V0Q3VycmVudExpc3QobnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
