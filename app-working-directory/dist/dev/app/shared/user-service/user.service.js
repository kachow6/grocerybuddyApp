"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_user_1 = require("./mock-user");
var UserService = UserService_1 = (function () {
    function UserService() {
    }
    UserService.prototype.getUser = function () { return UserService_1.user; };
    UserService.prototype.getHome = function () { return UserService_1.user.homeList; };
    UserService.prototype.getFridge = function () { return UserService_1.user.fridgeList; };
    UserService.prototype.getCurrentList = function () { return UserService_1.user.currentList; };
    UserService.prototype.getAuth = function () { return UserService_1.auth; };
    UserService.prototype.setHome = function (list) {
        UserService_1.user.homeList = list;
    };
    UserService.prototype.setFridge = function (list) {
        UserService_1.user.fridgeList = list;
    };
    UserService.prototype.setCurrentList = function (list) {
        UserService_1.user.currentList = list;
    };
    return UserService;
}());
UserService.user = mock_user_1.USER;
UserService.auth = true;
UserService = UserService_1 = __decorate([
    core_1.Injectable()
], UserService);
exports.UserService = UserService;
var UserService_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdXNlci1zZXJ2aWNlL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUE2RDtBQUc3RCx5Q0FBMkQ7QUFHM0QsSUFBYSxXQUFXO0lBQXhCO0lBc0JBLENBQUM7SUFsQkcsNkJBQU8sR0FBUCxjQUFxQyxNQUFNLENBQUMsYUFBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDL0QsNkJBQU8sR0FBUCxjQUFxQyxNQUFNLENBQUMsYUFBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLCtCQUFTLEdBQVQsY0FBcUMsTUFBTSxDQUFDLGFBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMxRSxvQ0FBYyxHQUFkLGNBQXFDLE1BQU0sQ0FBQyxhQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFFM0UsNkJBQU8sR0FBUCxjQUFxQyxNQUFNLENBQUMsYUFBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFL0QsNkJBQU8sR0FBUCxVQUFRLElBQW9CO1FBQ3hCLGFBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRUQsK0JBQVMsR0FBVCxVQUFVLElBQWtCO1FBQ3hCLGFBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN2QyxDQUFDO0lBRUQsb0NBQWMsR0FBZCxVQUFlLElBQWtCO1FBQzdCLGFBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUN4QyxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBO0FBckJVLGdCQUFJLEdBQVMsZ0JBQUksQ0FBQztBQUNsQixnQkFBSSxHQUFZLElBQUksQ0FBQztBQUZuQixXQUFXO0lBRHZCLGlCQUFVLEVBQUU7R0FDQSxXQUFXLENBc0J2QjtBQXRCWSxrQ0FBVyIsImZpbGUiOiJhcHAvc2hhcmVkL3VzZXItc2VydmljZS91c2VyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyLCBGcmlkZ2VJdGVtLFxuICAgICAgICAgU2hvcHBpbmdJdGVtLCBTaG9wcGluZ0xpc3QgfSAgIGZyb20gJy4vdXNlcic7XG5pbXBvcnQgeyBVU0VSIH0gICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9tb2NrLXVzZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICAgIHN0YXRpYyB1c2VyOiBVc2VyID0gVVNFUjtcbiAgICBzdGF0aWMgYXV0aDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBnZXRVc2VyKCk6ICAgICAgICBVc2VyICAgICAgICAgICAgIHsgcmV0dXJuIFVzZXJTZXJ2aWNlLnVzZXI7IH1cbiAgICBnZXRIb21lKCk6ICAgICAgICBTaG9wcGluZ0xpc3RbXSAgIHsgcmV0dXJuIFVzZXJTZXJ2aWNlLnVzZXIuaG9tZUxpc3Q7IH1cbiAgICBnZXRGcmlkZ2UoKTogICAgICBGcmlkZ2VJdGVtW10gICAgIHsgcmV0dXJuIFVzZXJTZXJ2aWNlLnVzZXIuZnJpZGdlTGlzdDsgfVxuICAgIGdldEN1cnJlbnRMaXN0KCk6IFNob3BwaW5nTGlzdCAgICAgeyByZXR1cm4gVXNlclNlcnZpY2UudXNlci5jdXJyZW50TGlzdDsgfVxuXG4gICAgZ2V0QXV0aCgpOiAgICAgICAgYm9vbGVhbiAgICAgICAgICB7IHJldHVybiBVc2VyU2VydmljZS5hdXRoOyB9XG5cbiAgICBzZXRIb21lKGxpc3Q6IFNob3BwaW5nTGlzdFtdKTogdm9pZCB7XG4gICAgICAgIFVzZXJTZXJ2aWNlLnVzZXIuaG9tZUxpc3QgPSBsaXN0O1xuICAgIH1cblxuICAgIHNldEZyaWRnZShsaXN0OiBGcmlkZ2VJdGVtW10pOiB2b2lkIHtcbiAgICAgICAgVXNlclNlcnZpY2UudXNlci5mcmlkZ2VMaXN0ID0gbGlzdDtcbiAgICB9XG4gICAgXG4gICAgc2V0Q3VycmVudExpc3QobGlzdDogU2hvcHBpbmdMaXN0KSB7XG4gICAgICAgIFVzZXJTZXJ2aWNlLnVzZXIuY3VycmVudExpc3QgPSBsaXN0O1xuICAgIH1cbn1cbiJdfQ==
