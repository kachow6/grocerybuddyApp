"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RegisterComponent = (function () {
    function RegisterComponent() {
        this.confirmpasswordmessage = '';
        this.userconfirmpassword = '';
    }
    RegisterComponent.prototype.checkComplexity = function (userpass) {
        var hasUpperCase = /[A-Z]/.test(userpass);
        var hasLowerCase = /[a-z]/.test(userpass);
        var hasNumbers = /\d/.test(userpass);
        var hasNonalphas = /\W/.test(userpass);
        if (hasUpperCase && hasLowerCase && hasNumbers && hasNonalphas) {
            this.passwordmessage = "";
            this.passwordcomplex = true;
        }
        else {
            this.passwordmessage = "Must contain at least one uppercase and lower case letter as well as a number and a special character (ie. $, #, !, %)";
            this.userpassword = null;
        }
    };
    RegisterComponent.prototype.confirmPassword = function (pass1, pass2, ignoreblank) {
        if (ignoreblank == true && pass2.length == 0) {
            this.confirmpasswordmessage = "";
        }
        if (pass1 == pass2) {
            this.confirmpasswordmessage = "";
            this.passwordconfirmed = true;
        }
        else {
            this.confirmpasswordmessage = "This password must match the one above";
            this.userconfirmpassword = null;
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'gb-register',
        templateUrl: 'register.component.html',
        styleUrls: ['register.component.css'],
    })
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL3JlZ2lzdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUEwQztBQVkxQyxJQUFhLGlCQUFpQjtJQU45QjtRQVVFLDJCQUFzQixHQUFVLEVBQUUsQ0FBQztRQUVuQyx3QkFBbUIsR0FBVSxFQUFFLENBQUM7SUFnQ2xDLENBQUM7SUE5QkMsMkNBQWUsR0FBZixVQUFnQixRQUFnQjtRQUU5QixJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQyxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXZDLEVBQUUsQ0FBQyxDQUFDLFlBQVksSUFBSSxZQUFZLElBQUksVUFBVSxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDOUIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyx3SEFBd0gsQ0FBQztZQUNoSixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUMzQixDQUFDO0lBQ0gsQ0FBQztJQUVELDJDQUFlLEdBQWYsVUFBZ0IsS0FBYSxFQUFFLEtBQWEsRUFBRSxXQUFvQjtRQUVoRSxFQUFFLENBQUEsQ0FBQyxXQUFXLElBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsRUFBRSxDQUFDO1FBQ25DLENBQUM7UUFFRCxFQUFFLENBQUEsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsc0JBQXNCLEdBQUcsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDaEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLHNCQUFzQixHQUFHLHdDQUF3QyxDQUFBO1lBQ3RFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7UUFDbEMsQ0FBQztJQUNILENBQUM7SUFDSCx3QkFBQztBQUFELENBdENBLEFBc0NDLElBQUE7QUF0Q1ksaUJBQWlCO0lBTjdCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGFBQWE7UUFDdkIsV0FBVyxFQUFFLHlCQUF5QjtRQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztLQUN0QyxDQUFDO0dBQ1csaUJBQWlCLENBc0M3QjtBQXRDWSw4Q0FBaUIiLCJmaWxlIjoiYXBwL2F1dGgvcmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIFJlZ2lzdGVyQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdnYi1yZWdpc3RlcicsXG4gIHRlbXBsYXRlVXJsOiAncmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsncmVnaXN0ZXIuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCB7XG4gIHBhc3N3b3JkY29tcGxleDogYm9vbGVhbjtcbiAgcGFzc3dvcmRjb25maXJtZWQ6IGJvb2xlYW47XG4gIHBhc3N3b3JkbWVzc2FnZTogc3RyaW5nO1xuICBjb25maXJtcGFzc3dvcmRtZXNzYWdlOiBzdHJpbmcgPScnO1xuICB1c2VycGFzc3dvcmQ6IHN0cmluZztcbiAgdXNlcmNvbmZpcm1wYXNzd29yZDogc3RyaW5nID0nJztcblxuICBjaGVja0NvbXBsZXhpdHkodXNlcnBhc3M6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgbGV0IGhhc1VwcGVyQ2FzZSA9IC9bQS1aXS8udGVzdCh1c2VycGFzcyk7XG4gICAgbGV0IGhhc0xvd2VyQ2FzZSA9IC9bYS16XS8udGVzdCh1c2VycGFzcyk7XG4gICAgbGV0IGhhc051bWJlcnMgPSAvXFxkLy50ZXN0KHVzZXJwYXNzKTtcbiAgICBsZXQgaGFzTm9uYWxwaGFzID0gL1xcVy8udGVzdCh1c2VycGFzcyk7XG5cbiAgICBpZiAoaGFzVXBwZXJDYXNlICYmIGhhc0xvd2VyQ2FzZSAmJiBoYXNOdW1iZXJzICYmIGhhc05vbmFscGhhcykge1xuICAgICAgdGhpcy5wYXNzd29yZG1lc3NhZ2UgPSBcIlwiO1xuICAgICAgdGhpcy5wYXNzd29yZGNvbXBsZXggPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhc3N3b3JkbWVzc2FnZSA9IFwiTXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSB1cHBlcmNhc2UgYW5kIGxvd2VyIGNhc2UgbGV0dGVyIGFzIHdlbGwgYXMgYSBudW1iZXIgYW5kIGEgc3BlY2lhbCBjaGFyYWN0ZXIgKGllLiAkLCAjLCAhLCAlKVwiO1xuICAgICAgdGhpcy51c2VycGFzc3dvcmQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGNvbmZpcm1QYXNzd29yZChwYXNzMTogc3RyaW5nLCBwYXNzMjogc3RyaW5nLCBpZ25vcmVibGFuazogYm9vbGVhbik6IHZvaWQge1xuXG4gICAgaWYoaWdub3JlYmxhbms9PXRydWUgJiYgcGFzczIubGVuZ3RoPT0wKSB7XG4gICAgICB0aGlzLmNvbmZpcm1wYXNzd29yZG1lc3NhZ2UgPSBcIlwiO1xuICAgIH1cblxuICAgIGlmKHBhc3MxID09IHBhc3MyKSB7XG4gICAgICB0aGlzLmNvbmZpcm1wYXNzd29yZG1lc3NhZ2UgPSBcIlwiO1xuICAgICAgdGhpcy5wYXNzd29yZGNvbmZpcm1lZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29uZmlybXBhc3N3b3JkbWVzc2FnZSA9IFwiVGhpcyBwYXNzd29yZCBtdXN0IG1hdGNoIHRoZSBvbmUgYWJvdmVcIlxuICAgICAgdGhpcy51c2VyY29uZmlybXBhc3N3b3JkID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
