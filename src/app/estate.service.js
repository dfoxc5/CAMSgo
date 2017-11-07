"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var my_app_database_1 = require("./my-app-database");
var EstateService = (function () {
    function EstateService() {
    }
    EstateService.prototype.getEstates = function () {
        return Promise.resolve(my_app_database_1.db.estates.toArray());
    };
    EstateService.prototype.getEstate = function (id) {
        return this.getEstates()
            .then(function (estates) { return estates.find(function (estate) { return estate.id === id; }); });
    };
    EstateService.prototype.saveEstate = function (id, firstName, lastName) {
        my_app_database_1.db.estates.put({ id: Number(id), firstName: firstName, lastName: lastName });
    };
    EstateService.prototype.update = function (estate) {
        return my_app_database_1.db.estates.put({ id: estate.id, firstName: estate.firstName, lastName: estate.lastName });
    };
    EstateService.prototype.delete = function (estate) {
        my_app_database_1.db.estates.delete(estate.id);
    };
    return EstateService;
}());
EstateService = __decorate([
    core_1.Injectable()
], EstateService);
exports.EstateService = EstateService;
//# sourceMappingURL=estate.service.js.map