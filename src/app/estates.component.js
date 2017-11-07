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
var estate_service_1 = require("./estate.service");
var router_1 = require("@angular/router");
var EstatesComponent = (function () {
    function EstatesComponent(estateService, router) {
        this.estateService = estateService;
        this.router = router;
    }
    EstatesComponent.prototype.getEstates = function () {
        var _this = this;
        this.estateService.getEstates().then(function (estates) { return _this.estates = estates; });
    };
    EstatesComponent.prototype.ngOnInit = function () {
        this.getEstates();
    };
    EstatesComponent.prototype.onSelect = function (estate) {
        this.selectedEstate = estate;
    };
    EstatesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedEstate.id]);
    };
    EstatesComponent.prototype.addEstate = function (id, firstName, lastName) {
        firstName = firstName.trim();
        lastName = lastName.trim();
        if (!lastName) {
            return;
        }
        this.estateService.saveEstate(id, firstName, lastName);
        this.getEstates();
        this.selectedEstate = null;
    };
    EstatesComponent.prototype.delete = function (estate) {
        this.estateService.delete(estate);
        this.getEstates();
        this.selectedEstate = null;
    };
    return EstatesComponent;
}());
EstatesComponent = __decorate([
    core_1.Component({
        selector: 'my-estates',
        templateUrl: './estates.component.html',
        styleUrls: ['./estates.component.css'],
    }),
    __metadata("design:paramtypes", [estate_service_1.EstateService, router_1.Router])
], EstatesComponent);
exports.EstatesComponent = EstatesComponent;
//# sourceMappingURL=estates.component.js.map