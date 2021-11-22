"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCourse = void 0;
const CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
function CreateCourse(req, res) {
    CreateCourseService_1.default.execute({
        name: "NodeJS",
        instructor: "Breno",
        timeweeks: 12,
    });
    CreateCourseService_1.default.execute({
        name: "ReactJS",
        instructor: "Breno",
    });
    return res.send();
}
exports.CreateCourse = CreateCourse;
