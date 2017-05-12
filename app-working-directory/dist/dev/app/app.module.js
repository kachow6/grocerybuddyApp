"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var angularfire2_1 = require("angularfire2");
var shared_module_1 = require("./shared/shared.module");
var about_module_1 = require("./about/about.module");
var home_module_1 = require("./home/home.module");
var fridge_module_1 = require("./fridge/fridge.module");
var list_module_1 = require("./list/list.module");
var settings_module_1 = require("./settings/settings.module");
var affiliates_module_1 = require("./affiliates/affiliates.module");
var auth_module_1 = require("./auth/auth.module");
var platform_browser_2 = require("@angular/platform-browser");
var bootstrap_test_module_1 = require("./bootstrap-test/bootstrap-test.module");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var FIREBASE_APP_CONFIG = {
    apiKey: '<->',
    authDomain: '<->',
    databaseURL: '<->',
    storageBucket: '<->',
};
var MyHammerConfig = (function (_super) {
    __extends(MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            'pan': {
                threshold: 5
            },
            'swipe': {
                velocity: 0.4,
                threshold: 5,
                direction: 31
            }
        };
        return _this;
    }
    return MyHammerConfig;
}(platform_browser_2.HammerGestureConfig));
exports.MyHammerConfig = MyHammerConfig;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule,
            shared_module_1.SharedModule.forRoot(),
            angularfire2_1.AngularFireModule.initializeApp(FIREBASE_APP_CONFIG),
            home_module_1.HomeModule,
            about_module_1.AboutModule,
            fridge_module_1.FridgeModule,
            list_module_1.ListModule,
            settings_module_1.SettingsModule,
            affiliates_module_1.AffiliatesModule,
            auth_module_1.AuthModule,
            bootstrap_test_module_1.BootstrapTestModule,
            ngx_bootstrap_1.BsDropdownModule.forRoot(),
            ngx_bootstrap_1.AccordionModule.forRoot(),
            ngx_bootstrap_1.AlertModule.forRoot(),
            ngx_bootstrap_1.ButtonsModule.forRoot(),
            ngx_bootstrap_1.CarouselModule.forRoot(),
            ngx_bootstrap_1.CollapseModule.forRoot(),
            ngx_bootstrap_1.DatepickerModule.forRoot(),
            ngx_bootstrap_1.ModalModule.forRoot(),
            ngx_bootstrap_1.PaginationModule.forRoot(),
            ngx_bootstrap_1.PopoverModule.forRoot(),
            ngx_bootstrap_1.ProgressbarModule.forRoot(),
            ngx_bootstrap_1.RatingModule.forRoot(),
            ngx_bootstrap_1.SortableModule.forRoot(),
            ngx_bootstrap_1.TabsModule.forRoot(),
            ngx_bootstrap_1.TimepickerModule.forRoot(),
            ngx_bootstrap_1.TooltipModule.forRoot(),
            ngx_bootstrap_1.TypeaheadModule.forRoot(),
        ],
        declarations: [
            app_component_1.AppComponent
        ],
        providers: [{
                provide: common_1.APP_BASE_HREF,
                useValue: '/'
            },
            {
                provide: platform_browser_2.HAMMER_GESTURE_CONFIG,
                useClass: MyHammerConfig
            }],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUF1RDtBQUN2RCw4REFBbUU7QUFDbkUsMENBQXlEO0FBQ3pELHNDQUF1RDtBQUN2RCxpREFBeUQ7QUFDekQsMkRBQThEO0FBQzlELDZDQUFzRDtBQUV0RCx3REFBZ0U7QUFDaEUscURBQThEO0FBRTlELGtEQUE0RDtBQUM1RCx3REFBZ0U7QUFDaEUsa0RBQTREO0FBQzVELDhEQUFvRTtBQUNwRSxvRUFBd0U7QUFDeEUsa0RBQTREO0FBRTVELDhEQUF1RjtBQUV2RixnRkFBZ0Y7QUFFaEYsK0NBSXVEO0FBRXZELElBQU0sbUJBQW1CLEdBQUc7SUFDeEIsTUFBTSxFQUFFLEtBQUs7SUFDYixVQUFVLEVBQUUsS0FBSztJQUNqQixXQUFXLEVBQUUsS0FBSztJQUNsQixhQUFhLEVBQUUsS0FBSztDQUN2QixDQUFDO0FBS0Y7SUFBb0Msa0NBQW1CO0lBQXZEO1FBQUEscUVBWUM7UUFYRyxlQUFTLEdBQVE7WUFFYixLQUFLLEVBQUU7Z0JBQ0gsU0FBUyxFQUFFLENBQUM7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCxRQUFRLEVBQUUsR0FBRztnQkFDYixTQUFTLEVBQUUsQ0FBQztnQkFDWixTQUFTLEVBQUUsRUFBRTthQUNoQjtTQUNKLENBQUE7O0lBQ0wsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FaQSxBQVlDLENBWm1DLHNDQUFtQixHQVl0RDtBQVpZLHdDQUFjO0FBb0UzQixJQUFhLFNBQVM7SUFBdEI7SUFDQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLFNBQVM7SUFwRHJCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLGdDQUFhO1lBQ2IsaUJBQVU7WUFDVixxQ0FBZ0I7WUFDaEIsNEJBQVksQ0FBQyxPQUFPLEVBQUU7WUFDdEIsZ0NBQWlCLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDO1lBRXBELHdCQUFVO1lBQ1YsMEJBQVc7WUFFWCw0QkFBWTtZQUNaLHdCQUFVO1lBQ1YsZ0NBQWM7WUFDZCxvQ0FBZ0I7WUFDaEIsd0JBQVU7WUFFViwyQ0FBbUI7WUFHbkIsZ0NBQWdCLENBQUMsT0FBTyxFQUFFO1lBQzFCLCtCQUFlLENBQUMsT0FBTyxFQUFFO1lBQ3pCLDJCQUFXLENBQUMsT0FBTyxFQUFFO1lBQ3JCLDZCQUFhLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLDhCQUFjLENBQUMsT0FBTyxFQUFFO1lBQ3hCLDhCQUFjLENBQUMsT0FBTyxFQUFFO1lBQ3hCLGdDQUFnQixDQUFDLE9BQU8sRUFBRTtZQUMxQiwyQkFBVyxDQUFDLE9BQU8sRUFBRTtZQUNyQixnQ0FBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsNkJBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDdkIsaUNBQWlCLENBQUMsT0FBTyxFQUFFO1lBQzNCLDRCQUFZLENBQUMsT0FBTyxFQUFFO1lBQ3RCLDhCQUFjLENBQUMsT0FBTyxFQUFFO1lBQ3hCLDBCQUFVLENBQUMsT0FBTyxFQUFFO1lBQ3BCLGdDQUFnQixDQUFDLE9BQU8sRUFBRTtZQUMxQiw2QkFBYSxDQUFDLE9BQU8sRUFBRTtZQUN2QiwrQkFBZSxDQUFDLE9BQU8sRUFBRTtTQUM1QjtRQUNELFlBQVksRUFBRTtZQUNWLDRCQUFZO1NBQ2Y7UUFDRCxTQUFTLEVBQUUsQ0FBQztnQkFDUixPQUFPLEVBQUUsc0JBQWE7Z0JBQ3RCLFFBQVEsRUFBRSxpQkFBaUI7YUFDOUI7WUFDRDtnQkFDSSxPQUFPLEVBQUUsd0NBQXFCO2dCQUM5QixRQUFRLEVBQUUsY0FBYzthQUMzQixDQUFDO1FBQ0YsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUU1QixDQUFDO0dBQ1csU0FBUyxDQUNyQjtBQURZLDhCQUFTIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9ICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQVBQX0JBU0VfSFJFRiB9ICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSAgICAgICAgICAgZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSAgICAgICBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZU1vZHVsZSB9ICAgICAgZnJvbSAnYW5ndWxhcmZpcmUyJztcblxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gICAgICAgICAgIGZyb20gJy4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQWJvdXRNb2R1bGUgfSAgICAgICAgICAgIGZyb20gJy4vYWJvdXQvYWJvdXQubW9kdWxlJztcblxuaW1wb3J0IHsgSG9tZU1vZHVsZSB9ICAgICAgICAgICAgIGZyb20gJy4vaG9tZS9ob21lLm1vZHVsZSc7XG5pbXBvcnQgeyBGcmlkZ2VNb2R1bGUgfSAgICAgICAgICAgZnJvbSAnLi9mcmlkZ2UvZnJpZGdlLm1vZHVsZSc7XG5pbXBvcnQgeyBMaXN0TW9kdWxlIH0gICAgICAgICAgICAgZnJvbSAnLi9saXN0L2xpc3QubW9kdWxlJztcbmltcG9ydCB7IFNldHRpbmdzTW9kdWxlIH0gICAgICAgICBmcm9tICcuL3NldHRpbmdzL3NldHRpbmdzLm1vZHVsZSc7XG5pbXBvcnQgeyBBZmZpbGlhdGVzTW9kdWxlIH0gICAgICAgZnJvbSAnLi9hZmZpbGlhdGVzL2FmZmlsaWF0ZXMubW9kdWxlJztcbmltcG9ydCB7IEF1dGhNb2R1bGUgfSAgICAgICAgICAgICBmcm9tICcuL2F1dGgvYXV0aC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBIYW1tZXJHZXN0dXJlQ29uZmlnLCBIQU1NRVJfR0VTVFVSRV9DT05GSUcgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgQm9vdHN0cmFwVGVzdE1vZHVsZSB9ICAgIGZyb20gJy4vYm9vdHN0cmFwLXRlc3QvYm9vdHN0cmFwLXRlc3QubW9kdWxlJztcblxuaW1wb3J0IHsgQnNEcm9wZG93bk1vZHVsZSwgQWNjb3JkaW9uTW9kdWxlLCBBbGVydE1vZHVsZSwgQnV0dG9uc01vZHVsZSxcbiAgICAgICAgIENhcm91c2VsTW9kdWxlLCBDb2xsYXBzZU1vZHVsZSwgRGF0ZXBpY2tlck1vZHVsZSwgTW9kYWxNb2R1bGUsXG4gICAgICAgICBQYWdpbmF0aW9uTW9kdWxlLCBQb3BvdmVyTW9kdWxlLCBQcm9ncmVzc2Jhck1vZHVsZSwgUmF0aW5nTW9kdWxlLFxuICAgICAgICAgU29ydGFibGVNb2R1bGUsIFRhYnNNb2R1bGUsIFRpbWVwaWNrZXJNb2R1bGUsIFRvb2x0aXBNb2R1bGUsXG4gICAgICAgICBUeXBlYWhlYWRNb2R1bGUgfSAgICAgICAgZnJvbSAnbmd4LWJvb3RzdHJhcCc7XG5cbmNvbnN0IEZJUkVCQVNFX0FQUF9DT05GSUcgPSB7XG4gICAgYXBpS2V5OiAnPC0+JyxcbiAgICBhdXRoRG9tYWluOiAnPC0+JyxcbiAgICBkYXRhYmFzZVVSTDogJzwtPicsXG4gICAgc3RvcmFnZUJ1Y2tldDogJzwtPicsXG59O1xuXG5cblxuXG5leHBvcnQgY2xhc3MgTXlIYW1tZXJDb25maWcgZXh0ZW5kcyBIYW1tZXJHZXN0dXJlQ29uZmlnICB7XG4gICAgb3ZlcnJpZGVzID0gPGFueT57XG4gICAgICAgIC8vIG92ZXJyaWRlIGhhbW1lcmpzIGRlZmF1bHQgY29uZmlndXJhdGlvblxuICAgICAgICAncGFuJzoge1xuICAgICAgICAgICAgdGhyZXNob2xkOiA1XG4gICAgICAgIH0sXG4gICAgICAgICdzd2lwZSc6IHtcbiAgICAgICAgICAgIHZlbG9jaXR5OiAwLjQsXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDUsXG4gICAgICAgICAgICBkaXJlY3Rpb246IDMxIC8vIC8hXFwgdWdseSBoYWNrIHRvIGFsbG93IHN3aXBlIGluIGFsbCBkaXJlY3Rpb25cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBCcm93c2VyTW9kdWxlLFxuICAgICAgICBIdHRwTW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBTaGFyZWRNb2R1bGUuZm9yUm9vdCgpLFxuICAgICAgICBBbmd1bGFyRmlyZU1vZHVsZS5pbml0aWFsaXplQXBwKEZJUkVCQVNFX0FQUF9DT05GSUcpLFxuICAgIFxuICAgICAgICBIb21lTW9kdWxlLFxuICAgICAgICBBYm91dE1vZHVsZSxcbiAgICBcbiAgICAgICAgRnJpZGdlTW9kdWxlLFxuICAgICAgICBMaXN0TW9kdWxlLFxuICAgICAgICBTZXR0aW5nc01vZHVsZSxcbiAgICAgICAgQWZmaWxpYXRlc01vZHVsZSxcbiAgICAgICAgQXV0aE1vZHVsZSxcbiAgICBcbiAgICAgICAgQm9vdHN0cmFwVGVzdE1vZHVsZSxcbiAgICBcbiAgICAgICAgLy8gQk9PVFNUUkFQIElNUE9SVFNcbiAgICAgICAgQnNEcm9wZG93bk1vZHVsZS5mb3JSb290KCksXG4gICAgICAgIEFjY29yZGlvbk1vZHVsZS5mb3JSb290KCksXG4gICAgICAgIEFsZXJ0TW9kdWxlLmZvclJvb3QoKSxcbiAgICAgICAgQnV0dG9uc01vZHVsZS5mb3JSb290KCksXG4gICAgICAgIENhcm91c2VsTW9kdWxlLmZvclJvb3QoKSxcbiAgICAgICAgQ29sbGFwc2VNb2R1bGUuZm9yUm9vdCgpLFxuICAgICAgICBEYXRlcGlja2VyTW9kdWxlLmZvclJvb3QoKSxcbiAgICAgICAgTW9kYWxNb2R1bGUuZm9yUm9vdCgpLFxuICAgICAgICBQYWdpbmF0aW9uTW9kdWxlLmZvclJvb3QoKSxcbiAgICAgICAgUG9wb3Zlck1vZHVsZS5mb3JSb290KCksXG4gICAgICAgIFByb2dyZXNzYmFyTW9kdWxlLmZvclJvb3QoKSxcbiAgICAgICAgUmF0aW5nTW9kdWxlLmZvclJvb3QoKSxcbiAgICAgICAgU29ydGFibGVNb2R1bGUuZm9yUm9vdCgpLFxuICAgICAgICBUYWJzTW9kdWxlLmZvclJvb3QoKSxcbiAgICAgICAgVGltZXBpY2tlck1vZHVsZS5mb3JSb290KCksXG4gICAgICAgIFRvb2x0aXBNb2R1bGUuZm9yUm9vdCgpLFxuICAgICAgICBUeXBlYWhlYWRNb2R1bGUuZm9yUm9vdCgpLFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbe1xuICAgICAgICBwcm92aWRlOiBBUFBfQkFTRV9IUkVGLFxuICAgICAgICB1c2VWYWx1ZTogJzwlPSBBUFBfQkFTRSAlPidcbiAgICB9LFxuICAgIHsgXG4gICAgICAgIHByb3ZpZGU6IEhBTU1FUl9HRVNUVVJFX0NPTkZJRywgXG4gICAgICAgIHVzZUNsYXNzOiBNeUhhbW1lckNvbmZpZyBcbiAgICB9XSxcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG5cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbn1cbiJdfQ==
