"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = __importDefault(require("./client"));
// Try to get a connection to the database
client_1.default
    .getConnection()
    .then(function (connection) {
    console.info("Using database ".concat(process.env.DB_NAME));
    connection.release();
})
    .catch(function (error) {
    console.warn("Warning:", "Failed to establish a database connection.", "Please check your database credentials in the .env file if you need a database access.");
    console.warn(error.message);
});
