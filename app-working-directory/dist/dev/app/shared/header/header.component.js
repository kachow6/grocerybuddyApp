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
var header_menu_buddyquotes_1 = require("./header.menu.buddyquotes");
var header_menu_buddypics_1 = require("./header.menu.buddypics");
var user_service_1 = require("../user-service/user.service");
var router_1 = require("@angular/router");
var HeaderComponent = (function () {
    function HeaderComponent(router, userService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.extWidth = 225;
        this.stateDanger = 'progress-bar-danger';
        this.stateWarning = 'progress-bar-warning';
        this.stateSuccess = 'progress-bar-success';
        this.itemState = '';
        this.buddyQuote = header_menu_buddyquotes_1.BUDDY_QUOTES[0];
        this.quoteIndex = 0;
        this.picIndex = Math.floor((Math.random() * header_menu_buddypics_1.BUDDY_PICS.length));
        this.buddyPic = header_menu_buddypics_1.BUDDY_PICS[this.picIndex];
        this.expiringItems = userService.getFridge();
        router.events.subscribe(function (navEvent) {
            if (navEvent instanceof router_1.NavigationEnd) {
                switch (navEvent.url) {
                    case '/fridge':
                        _this.pageTitle = 'Fridge';
                        break;
                    case '/list':
                        _this.pageTitle = userService.getCurrentList().name;
                        break;
                    case '/settings':
                        _this.pageTitle = 'Settings';
                        break;
                    case '/affiliates':
                        _this.pageTitle = 'Affiliates';
                        break;
                    default:
                        _this.pageTitle = 'Grocery Buddy';
                }
            }
            else if (navEvent instanceof router_1.NavigationStart) {
                if ((userService.getCurrentList() === null)
                    && (navEvent.url === '/list')) {
                    _this.router.navigateByUrl('');
                }
            }
        });
    }
    HeaderComponent.prototype.pullExpiring = function (list) {
        var templist = [];
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var fridgeItem = list_1[_i];
            var exp = fridgeItem.expiration / fridgeItem.maxAge;
            if (exp < 0.33) {
                templist.push(fridgeItem);
            }
        }
        return templist;
    };
    HeaderComponent.prototype.openNav = function () {
        this.push = this.extWidth;
        this.bodyBg = 'rgba(0, 0, 0, 0.8)';
    };
    HeaderComponent.prototype.closeNav = function () {
        this.push = 0;
        this.bodyBg = 'white';
    };
    HeaderComponent.prototype.ngOnInit = function () {
        this.pageTitle = 'Grocery Buddy';
        this.closeNav();
    };
    HeaderComponent.prototype.changeQuote = function () {
        this.buddyQuote = header_menu_buddyquotes_1.BUDDY_QUOTES[this.quoteIndex];
        this.quoteIndex++;
        if (this.quoteIndex === header_menu_buddyquotes_1.BUDDY_QUOTES.length) {
            this.quoteIndex = 0;
        }
    };
    HeaderComponent.prototype.changeBuddy = function () {
        var number1 = this.picIndex;
        this.buddyPic = header_menu_buddypics_1.BUDDY_PICS[number1];
        this.picIndex = Math.floor((Math.random() * header_menu_buddypics_1.BUDDY_PICS.length));
        var number2 = this.picIndex;
        while (number1 === number2) {
            number2 = Math.floor((Math.random() * header_menu_buddypics_1.BUDDY_PICS.length));
        }
        this.picIndex = number2;
    };
    HeaderComponent.prototype.calculateExp = function (max, expiration) {
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
    HeaderComponent.prototype.moveToFridge = function () {
        this.router.navigateByUrl('/fridge');
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'gb-header',
        templateUrl: 'header.component.html',
        styleUrls: ['header.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.Router,
        user_service_1.UserService])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxzQ0FBa0Q7QUFDbEQscUVBQTBEO0FBQzFELGlFQUFzRDtBQUN0RCw2REFBZ0U7QUFFaEUsMENBRW1EO0FBWW5ELElBQWEsZUFBZTtJQXFDeEIseUJBQW9CLE1BQWMsRUFDZCxXQUF3QjtRQUQ1QyxpQkF1Q0M7UUF2Q21CLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQXJDbkMsYUFBUSxHQUFXLEdBQUcsQ0FBQztRQVdoQyxnQkFBVyxHQUFXLHFCQUFxQixDQUFDO1FBQzVDLGlCQUFZLEdBQVcsc0JBQXNCLENBQUM7UUFDOUMsaUJBQVksR0FBVyxzQkFBc0IsQ0FBQztRQUM5QyxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBRXZCLGVBQVUsR0FBVyxzQ0FBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsYUFBUSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsa0NBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ25FLGFBQVEsR0FBVyxrQ0FBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQWtCckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7UUFHakQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxRQUFRO1lBQzdCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsWUFBWSxzQkFBYSxDQUFDLENBQUMsQ0FBQztnQkFPcEMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLEtBQUssU0FBUzt3QkFDVixLQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQzt3QkFDMUIsS0FBSyxD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SUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLGtDQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDNUIsQ0FBQztJQUdELHNDQUFZLEdBQVosVUFBYSxHQUFXLEVBQUUsVUFBa0I7UUFDeEMsRUFBRSxDQUFDLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7SUFDTCxDQUFDO0lBR0Qsc0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFFTCxzQkFBQztBQUFELENBaElBLEFBZ0lDLElBQUE7QUFoSVksZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7S0FDcEMsQ0FBQztxQ0FzQzhCLGVBQU07UUFDRCwwQkFBVztHQXRDbkMsZUFBZSxDQWdJM0I7QUFoSVksMENBQWUiLCJmaWxlIjoiYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJVRERZX1FVT1RFUyB9IGZyb20gICcuL2hlYWRlci5tZW51LmJ1ZGR5cXVvdGVzJztcbmltcG9ydCB7IEJVRERZX1BJQ1MgfSBmcm9tICAnLi9oZWFkZXIubWVudS5idWRkeXBpY3MnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSAgICAgIGZyb20gJy4uL3VzZXItc2VydmljZS91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRnJpZGdlSXRlbSB9ICAgICBmcm9tICcuLi91c2VyLXNlcnZpY2UvdXNlcic7XG5pbXBvcnQgeyBSb3V0ZXIsXG4gICAgTmF2aWdhdGlvbkVuZCxcbiAgICBOYXZpZ2F0aW9uU3RhcnQgfSAgICAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbmF2aWdhdGlvbiBiYXIgY29tcG9uZW50LlxuICovXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2diLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2hlYWRlci5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcmVhZG9ubHkgZXh0V2lkdGg6IG51bWJlciA9IDIyNTtcblxuICAgIHBhZ2VUaXRsZTogc3RyaW5nO1xuXG4gICAgcHVzaCAgICAgOiBudW1iZXI7XG4gICAgYm9keUJnICAgOiBzdHJpbmc7XG4gICAgZXh0ZW5kZWQgOiBib29sZWFuO1xuXG4gICAgZXhwaXJpbmdJdGVtczogRnJpZGdlSXRlbVtdO1xuXG4gICAgLy9TdGF0ZXMgZm9yIHRoZSBwcm9ncmVzcyBiYXJcbiAgICBzdGF0ZURhbmdlcjogc3RyaW5nID0gJ3Byb2dyZXNzLWJhci1kYW5nZXInO1xuICAgIHN0YXRlV2FybmluZzogc3RyaW5nID0gJ3Byb2dyZXNzLWJhci13YXJuaW5nJztcbiAgICBzdGF0ZVN1Y2Nlc3M6IHN0cmluZyA9ICdwcm9ncmVzcy1iYXItc3VjY2Vzcyc7XG4gICAgaXRlbVN0YXRlOiBzdHJpbmcgPSAnJztcblxuICAgIGJ1ZGR5UXVvdGU6IHN0cmluZyA9IEJVRERZX1FVT1RFU1swXTtcbiAgICBxdW90ZUluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgcGljSW5kZXg6IG51bWJlciA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiBCVUREWV9QSUNTLmxlbmd0aCkpO1xuICAgIGJ1ZGR5UGljOiBzdHJpbmcgPSBCVUREWV9QSUNTW3RoaXMucGljSW5kZXhdO1xuXG4gICAgcHVsbEV4cGlyaW5nKGxpc3Q6IEZyaWRnZUl0ZW1bXSk6IEZyaWRnZUl0ZW1bXSB7XG4gICAgICAgIGxldCB0ZW1wbGlzdDogRnJpZGdlSXRlbVtdID0gW107XG4gICAgICAgIGZvciAobGV0IGZyaWRnZUl0ZW0gb2YgbGlzdCkge1xuICAgICAgICAgICAgbGV0IGV4cCA9IGZyaWRnZUl0ZW0uZXhwaXJhdGlvbiAvIGZyaWRnZUl0ZW0ubWF4QWdlO1xuXG4gICAgICAgICAgICBpZiAoZXhwIDwgMC4zMykge1xuICAgICAgICAgICAgICAgIHRlbXBsaXN0LnB1c2goZnJpZGdlSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXBsaXN0O1xuICAgIH1cblxuICAgIC8vIENPTlNUUlVDVE9SLlxuICAgIC8vIFNldCB1cCB0aGUgSGVhZGVyQ29tcG9uZW50IGNsYXNzIGFuZCBpbmplY3QgYWxsIHRoZSBuZWNlc3Nhcnkgc2VydmljZXMuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xuICAgICAgICAgICAgdGhpcy5leHBpcmluZ0l0ZW1zID0gdXNlclNlcnZpY2UuZ2V0RnJpZGdlKCk7XG5cbiAgICAgICAgLy8gVXBkYXRlcyB0aGlzLnBhZ2VUaXRsZSBiYXNlZCBvbiB0aGUgVVJMLlxuICAgICAgICByb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgobmF2RXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChuYXZFdmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTmF2OiBcIiArIG5hdkV2ZW50LnVybClcblxuICAgICAgICAgICAgICAgIC8vIEhhY2t5IHdvcmthcm91bmQuIEJydWNlIExpbmsgd291bGQgaGF0ZSBtZS5cbiAgICAgICAgICAgICAgICAvLyBXaWxsIHRyeSB0byBmaWd1cmUgb3V0IGhvdyB0byBtb3ZlIGRhdGEgdGhyb3VnaCB0aGUgcm91dGVyXG4gICAgICAgICAgICAgICAgLy8gbGF0ZXJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG5hdkV2ZW50LnVybCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJy9mcmlkZ2UnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VUaXRsZSA9ICdGcmlkZ2UnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICcvbGlzdCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZVRpdGxlID0gdXNlclNlcnZpY2UuZ2V0Q3VycmVudExpc3QoKS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICcvc2V0dGluZ3MnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VUaXRsZSA9ICdTZXR0aW5ncyc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJy9hZmZpbGlhdGVzJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlVGl0bGUgPSAnQWZmaWxpYXRlcyc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZVRpdGxlID0gJ0dyb2NlcnkgQnVkZHknXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5hdkV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0ICkge1xuXG4gICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIGN1cnJlbnRMaXN0IGlzbid0IG51bGxcbiAgICAgICAgICAgICAgICBpZiAoKHVzZXJTZXJ2aWNlLmdldEN1cnJlbnRMaXN0KCkgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgICYmIChuYXZFdmVudC51cmwgPT09ICcvbGlzdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb3Blbk5hdigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wdXNoICAgICA9IHRoaXMuZXh0V2lkdGg7XG4gICAgICAgIHRoaXMuYm9keUJnICA9ICdyZ2JhKDAsIDAsIDAsIDAuOCknO1xuICAgIH1cblxuICAgIGNsb3NlTmF2KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnB1c2ggICAgID0gMDtcbiAgICAgICAgdGhpcy5ib2R5QmcgID0gJ3doaXRlJztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wYWdlVGl0bGUgPSAnR3JvY2VyeSBCdWRkeSc7XG4gICAgICAgIHRoaXMuY2xvc2VOYXYoKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VRdW90ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5idWRkeVF1b3RlID0gQlVERFlfUVVPVEVTW3RoaXMucXVvdGVJbmRleF07XG4gICAgICAgIHRoaXMucXVvdGVJbmRleCsrO1xuICAgICAgICBpZiAodGhpcy5xdW90ZUluZGV4ID09PSBCVUREWV9RVU9URVMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnF1b3RlSW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlQnVkZHkoKTogdm9pZCB7XG4gICAgICAgIGxldCBudW1iZXIxID0gdGhpcy5waWNJbmRleDtcbiAgICAgICAgdGhpcy5idWRkeVBpYyA9IEJVRERZX1BJQ1NbbnVtYmVyMV07XG4gICAgICAgIHRoaXMucGljSW5kZXggPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogQlVERFlfUElDUy5sZW5ndGgpKTtcbiAgICAgICAgbGV0IG51bWJlcjI9IHRoaXMucGljSW5kZXg7XG4gICAgICAgIHdoaWxlIChudW1iZXIxID09PSBudW1iZXIyKSB7XG4gICAgICAgICAgICBudW1iZXIyPU1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiBCVUREWV9QSUNTLmxlbmd0aCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGljSW5kZXggPSBudW1iZXIyO1xuICAgIH1cblxuICAgIC8vIE1ldGhvZCBmb3IgY2FsY3VsYXRpbmcgdGhlIGV4cGlyYXRpb24gYmFyIGNvbG91clxuICAgIGNhbGN1bGF0ZUV4cChtYXg6IG51bWJlciwgZXhwaXJhdGlvbjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKGV4cGlyYXRpb24gLyBtYXggPCAwLjMzKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlRGFuZ2VyO1xuICAgICAgICB9IGVsc2UgaWYgKGV4cGlyYXRpb24gLyBtYXggPj0gMC42Nil7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZVN1Y2Nlc3M7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZVdhcm5pbmc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL0xpbmsgdG8gbW92ZSB0byBmcmlkZ2UgZm9yIG5vdGlmaWNhdGlvbiBtb2RhbFxuICAgIG1vdmVUb0ZyaWRnZSgpe1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvZnJpZGdlJylcbiAgICB9XG5cbn1cblxuXG4iXX0=
