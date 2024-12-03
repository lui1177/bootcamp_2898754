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
exports.Bootcamp = void 0;
const course_entity_1 = require("./../../courses/entities/course.entity");
const typeorm_1 = require("typeorm");
let Bootcamp = class Bootcamp {
};
exports.Bootcamp = Bootcamp;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Bootcamp.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 30
    }),
    __metadata("design:type", String)
], Bootcamp.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'integer'
    }),
    __metadata("design:type", String)
], Bootcamp.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text'
    }),
    __metadata("design:type", String)
], Bootcamp.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'integer'
    }),
    __metadata("design:type", String)
], Bootcamp.prototype, "topics", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'double'
    }),
    __metadata("design:type", Number)
], Bootcamp.prototype, "averageRating", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", Date)
], Bootcamp.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => course_entity_1.Course, (course) => course.bootcamp),
    __metadata("design:type", Array)
], Bootcamp.prototype, "courses", void 0);
exports.Bootcamp = Bootcamp = __decorate([
    (0, typeorm_1.Entity)('bootcamps')
], Bootcamp);
//# sourceMappingURL=bootcamp.entity.js.map