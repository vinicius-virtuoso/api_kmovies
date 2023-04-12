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
exports.Schedule = void 0;
const typeorm_1 = require("typeorm");
const real_estate_entity_1 = require("./real_estate.entity");
const user_entity_1 = require("./user.entity");
let Schedule = class Schedule {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Schedule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], Schedule.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', name: 'hour' }),
    __metadata("design:type", String)
], Schedule.prototype, "hour", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => real_estate_entity_1.RealEstate),
    __metadata("design:type", real_estate_entity_1.RealEstate)
], Schedule.prototype, "realEstate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.schedules),
    __metadata("design:type", user_entity_1.User
    // @BeforeInsert()
    // setFormattedDate() {
    //   const formattedDate = this.date.split('/')
    //   const day = formattedDate[formattedDate.length / formattedDate.length]
    //   const month = formattedDate[formattedDate.length - 1]
    //   const year = formattedDate[formattedDate.length - formattedDate.length]
    //   const dateStringFormatted = `${year}/${month}/${day}`
    //   this.date = dateStringFormatted
    // }
    )
], Schedule.prototype, "user", void 0);
Schedule = __decorate([
    (0, typeorm_1.Entity)('schedules_users_properties')
], Schedule);
exports.Schedule = Schedule;
