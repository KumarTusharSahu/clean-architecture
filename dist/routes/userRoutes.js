"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registerUserController_1 = __importDefault(require("../controllers/registerUserController"));
const loginUserController_1 = __importDefault(require("../controllers/loginUserController"));
const router = (0, express_1.Router)();
router.post('/register', registerUserController_1.default.handle);
router.post('/login', loginUserController_1.default.handle);
exports.default = router;
