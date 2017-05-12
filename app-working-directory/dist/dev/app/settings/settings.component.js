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
var router_1 = require("@angular/router");
var SettingsComponent = (function () {
    function SettingsComponent(router) {
        this.router = router;
        this.passwordconfirmed = false;
        this.confirmpasswordmessage = '';
        this.userconfirmpassword = '';
        this.nameInput = "";
        this.emailInput = "";
        this.invalidEmailMsg = "";
    }
    SettingsComponent.prototype.checkEmail = function () {
        var emailFormat = /^.+@.+\..+/.test(this.emailInput);
        if (emailFormat && this.emailInput.length > 1) {
            this.emailValid = true;
            this.invalidEmailMsg = "";
        }
        else {
            this.invalidEmailMsg = "Please enter a valid email address";
        }
    };
    SettingsComponent.prototype.checkComplexity = function (userpass) {
        var hasUpperCase = /[A-Z]/.test(userpass);
        var hasLowerCase = /[a-z]/.test(userpass);
        var hasNumbers = /\d/.test(userpass);
        var hasNonalphas = /\W/.test(userpass);
        if (hasUpperCase && hasLowerCase && hasNumbers && hasNonalphas) {
            this.passwordcomplex = true;
        }
        else {
            this.userpassword = null;
            this.userconfirmpassword = null;
        }
    };
    SettingsComponent.prototype.confirmPassword = function (pass1, pass2, ignoreblank) {
        if (ignoreblank === true && pass2.length === 0) {
            this.confirmpasswordmessage = '';
        }
        if (pass1 === pass2 && pass1.length > 0) {
            this.confirmpasswordmessage = '';
            this.passwordconfirmed = true;
        }
        else {
            this.confirmpasswordmessage = 'This password must match the one above';
            this.userpassword = null;
            this.userconfirmpassword = null;
        }
    };
    SettingsComponent.prototype.clearFields = function () {
        this.nameInput = "";
        this.emailInput = "";
        this.userpassword = "";
        this.userconfirmpassword = "";
    };
    SettingsComponent.prototype.changeInfo = function () {
        if (this.nameInput.length > 0 && this.emailValid
            && this.passwordcomplex == true && this.passwordconfirmed == true) {
            user_service_1.UserService.user.username = this.nameInput;
            user_service_1.UserService.user.email = this.emailInput;
            user_service_1.UserService.user.password = this.userpassword;
            this.clearFields();
            console.log('ACCOUNT OVERWRITE SUCCESS');
            this.router.navigateByUrl('/');
        }
        else {
            console.log('ACCOUNT OVERWRITE FAILED');
        }
        console.log(user_service_1.UserService.user);
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'gb-settings',
        templateUrl: 'settings.component.html',
        styleUrls: ['settings.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.Router])
], SettingsComponent);
exports.SettingsComponent = SettingsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBNkM7QUFDN0Msb0VBQW1FO0FBRW5FLDBDQUErQztBQVkvQyxJQUFhLGlCQUFpQjtJQWdCMUIsMkJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBYmxDLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQUVuQywyQkFBc0IsR0FBVSxFQUFFLENBQUM7UUFFbkMsd0JBQW1CLEdBQVUsRUFBRSxDQUFDO1FBRWhDLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFFdkIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUV4QixvQkFBZSxHQUFXLEVBQUUsQ0FBQztJQUs3QixDQUFDO0lBR0Qsc0NBQVUsR0FBVjtRQUNJLElBQUksV0FBVyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXJELEVBQUUsQ0FBQSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzlCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxlQUFlLEdBQUcsb0NBQW9DLENBQUE7UUFDL0QsQ0FBQztJQUNMLENBQUM7SUFHRCwyQ0FBZSxHQUFmLFVBQWdCLFFBQWdCO1FBRTVCLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLElBQUks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c2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9ICBmcm9tICcuLi9zaGFyZWQvdXNlci1zZXJ2aWNlL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyIH0gICAgICAgICBmcm9tICcuLi9zaGFyZWQvdXNlci1zZXJ2aWNlL3VzZXInO1xuaW1wb3J0IHsgUm91dGVyIH0gICAgICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEhvbWVDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdnYi1zZXR0aW5ncycsXG4gICAgdGVtcGxhdGVVcmw6ICdzZXR0aW5ncy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3NldHRpbmdzLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBTZXR0aW5nc0NvbXBvbmVudCB7XG5cbiAgICBwYXNzd29yZGNvbXBsZXg6IGJvb2xlYW47XG4gICAgcGFzc3dvcmRjb25maXJtZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwYXNzd29yZG1lc3NhZ2U6IHN0cmluZztcbiAgICBjb25maXJtcGFzc3dvcmRtZXNzYWdlOiBzdHJpbmcgPScnO1xuICAgIHVzZXJwYXNzd29yZDogc3RyaW5nO1xuICAgIHVzZXJjb25maXJtcGFzc3dvcmQ6IHN0cmluZyA9Jyc7XG5cbiAgICBuYW1lSW5wdXQ6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBlbWFpbElucHV0OiBzdHJpbmcgPSBcIlwiO1xuICAgIGVtYWlsVmFsaWQ6IGJvb2xlYW47XG4gICAgaW52YWxpZEVtYWlsTXNnOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgLy9Db25zdHJ1Y3RvciBmb3IgaW1wbGVtZW50aW5nIFJvdXRlci5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKXtcblxuICAgIH1cblxuICAgIC8vTWV0aG9kIGZvciBjaGVja2luZyBpZiB0aGUgZW1haWwgZW50ZXJlZCBpcyBwcm9wZXIgZW1haWwgZm9ybWF0XG4gICAgY2hlY2tFbWFpbCgpIHtcbiAgICAgICAgbGV0IGVtYWlsRm9ybWF0ID0gL14uK0AuK1xcLi4rLy50ZXN0KHRoaXMuZW1haWxJbnB1dCk7XG5cbiAgICAgICAgaWYoZW1haWxGb3JtYXQgJiYgdGhpcy5lbWFpbElucHV0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZW1haWxWYWxpZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmludmFsaWRFbWFpbE1zZyA9IFwiXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmludmFsaWRFbWFpbE1zZyA9IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzc1wiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL01ldGhvZCBmb3IgY2hlY2tpbmcgaWYgdGhlIHBhc3N3b3JkIGlzIGNvbXBsZXhcbiAgICBjaGVja0NvbXBsZXhpdHkodXNlcnBhc3M6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICAgIGxldCBoYXNVcHBlckNhc2UgPSAvW0EtWl0vLnRlc3QodXNlcnBhc3MpO1xuICAgICAgICBsZXQgaGFzTG93ZXJDYXNlID0gL1thLXpdLy50ZXN0KHVzZXJwYXNzKTtcbiAgICAgICAgbGV0IGhhc051bWJlcnMgPSAvXFxkLy50ZXN0KHVzZXJwYXNzKTtcbiAgICAgICAgbGV0IGhhc05vbmFscGhhcyA9IC9cXFcvLnRlc3QodXNlcnBhc3MpO1xuXG4gICAgICAgIGlmIChoYXNVcHBlckNhc2UgJiYgaGFzTG93ZXJDYXNlICYmIGhhc051bWJlcnMgJiYgaGFzTm9uYWxwaGFzKSB7XG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkY29tcGxleCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJwYXNzd29yZCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnVzZXJjb25maXJtcGFzc3dvcmQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9NZXRob2QgZm9yIG1ha2luZyBzdXJlIGJvdGggcGFzc3dvcmRzIGFyZSB0aGUgc2FtZVxuICAgIGNvbmZpcm1QYXNzd29yZChwYXNzMTogc3RyaW5nLCBwYXNzMjogc3RyaW5nLCBpZ25vcmVibGFuazogYm9vbGVhbik6IHZvaWQge1xuXG4gICAgICAgIGlmKGlnbm9yZWJsYW5rID09PSB0cnVlICYmIHBhc3MyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jb25maXJtcGFzc3dvcmRtZXNzYWdlID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZihwYXNzMSA9PT0gcGFzczIgJiYgcGFzczEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jb25maXJtcGFzc3dvcmRtZXNzYWdlID0gJyc7XG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkY29uZmlybWVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybXBhc3N3b3JkbWVzc2FnZSA9ICdUaGlzIHBhc3N3b3JkIG11c3QgbWF0Y2ggdGhlIG9uZSBhYm92ZSdcbiAgICAgICAgICAgIHRoaXMudXNlcnBhc3N3b3JkID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMudXNlcmNvbmZpcm1wYXNzd29yZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL01ldGhvZCBmb3IgY2xlYXJpbmcgdGhlIGFjY291bnQgZmllbGRzLlxuICAgIGNsZWFyRmllbGRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5hbWVJbnB1dCA9IFwiXCI7XG4gICAgICAgIHRoaXMuZW1haWxJbnB1dCA9IFwiXCI7XG4gICAgICAgIHRoaXMudXNlcnBhc3N3b3JkID0gXCJcIjtcbiAgICAgICAgdGhpcy51c2VyY29uZmlybXBhc3N3b3JkID0gXCJcIjtcbiAgICB9XG5cbiAgICAvL0EgbWV0aG9kIGZvciBzdWJtaXR0aW5nIHRoZSBuZXcgYWNjb3VudCBpbmZvcm1hdGlvblxuICAgIGNoYW5nZUluZm8oKTogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMubmFtZUlucHV0Lmxlbmd0aCA+IDAgJiYgdGhpcy5lbWFpbFZhbGlkXG4gICAgICAgICAgICAmJiB0aGlzLnBhc3N3b3JkY29tcGxleCA9PSB0cnVlICYmIHRoaXMucGFzc3dvcmRjb25maXJtZWQgPT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgVXNlclNlcnZpY2UudXNlci51c2VybmFtZSA9IHRoaXMubmFtZUlucHV0O1xuICAgICAgICAgICAgICAgIFVzZXJTZXJ2aWNlLnVzZXIuZW1haWwgPSB0aGlzLmVtYWlsSW5wdXQ7XG4gICAgICAgICAgICAgICAgVXNlclNlcnZpY2UudXNlci5wYXNzd29yZCA9IHRoaXMudXNlcnBhc3N3b3JkO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckZpZWxkcygpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBQ0NPVU5UIE9WRVJXUklURSBTVUNDRVNTJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FDQ09VTlQgT1ZFUldSSVRFIEZBSUxFRCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFVzZXJTZXJ2aWNlLnVzZXIpO1xuICAgIH1cbn1cbiJdfQ==
