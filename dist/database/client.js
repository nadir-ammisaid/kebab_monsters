"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Get variables from .env file for database connection
var _a = process.env, DB_HOST = _a.DB_HOST, DB_PORT = _a.DB_PORT, DB_USER = _a.DB_USER, DB_PASSWORD = _a.DB_PASSWORD, DB_NAME = _a.DB_NAME;
// Create a connection pool to the database
var promise_1 = __importDefault(require("mysql2/promise"));
var client = promise_1.default.createPool({
    host: DB_HOST,
    port: Number.parseInt(DB_PORT),
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
});
// Ready to export
exports.default = client;
