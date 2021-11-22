"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ name, timeweeks = 8, instructor }) {
        console.log(name, timeweeks, instructor);
    }
}
exports.default = new CreateCourseService();
