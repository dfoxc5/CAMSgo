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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var estate_service_1 = require("./estate.service");
var EstateDetailComponent = (function () {
    function EstateDetailComponent(estateService, route, location) {
        this.estateService = estateService;
        this.route = route;
        this.location = location;
    }
    EstateDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.estateService.getEstate(+params.get('id')); })
            .subscribe(function (estate) { return _this.estate = estate; });
    };
    EstateDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    EstateDetailComponent.prototype.save = function () {
        var _this = this;
        this.estateService.update(this.estate).then(function () { return _this.goBack(); });
    };
    return EstateDetailComponent;
}());
EstateDetailComponent = __decorate([
    core_1.Component({
        selector: 'estate-detail',
        templateUrl: './estate-detail.component.html',
    }),
    __metadata("design:paramtypes", [estate_service_1.EstateService,
        router_1.ActivatedRoute,
        common_1.Location])
], EstateDetailComponent);
exports.EstateDetailComponent = EstateDetailComponent;
//# sourceMappingURL=estate-detail.component.js.map