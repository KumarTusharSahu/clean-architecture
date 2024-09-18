"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_1 = __importDefault(require("../entities/user")); // Import the User model
const userRepository_1 = __importDefault(require("../repositories/userRepository"));
class UserService {
    register(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield userRepository_1.default.findByUsername(username);
            if (existingUser) {
                throw new Error('User already exists');
            }
            const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
            // Create a new User instance
            const user = new user_1.default({
                username,
                password: hashedPassword,
            });
            // Save the user instance using userRepository
            return yield userRepository_1.default.create(user);
        });
    }
}
exports.default = new UserService();
