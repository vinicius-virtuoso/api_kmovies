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
exports.Address = void 0;
const real_estate_entity_1 = require("./real_estate.entity");
const typeorm_1 = require("typeorm");
let Address = class Address {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Address.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 45 }),
    __metadata("design:type", String)
], Address.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 8 }),
    __metadata("design:type", String)
], Address.prototype, "zipCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, length: 7 }),
    __metadata("design:type", Object)
], Address.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 2 }),
    __metadata("design:type", String)
], Address.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => real_estate_entity_1.RealEstate, (realState) => realState.address),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", real_estate_entity_1.RealEstate)
], Address.prototype, "realEstate", void 0);
Address = __decorate([
    (0, typeorm_1.Entity)('address')
], Address);
exports.Address = Address;
