"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Load environment variables from .env file
require("dotenv/config");
// Check database connection
// Note: This is optional and can be removed if the database connection
// is not required when starting the application
require("../database/checkConnection");
// Import the Express application from ./app
var app_1 = __importDefault(require("./app"));
// Get the port from the environment variables
var port = process.env.APP_PORT;
// Start the server and listen on the specified port
app_1.default
    .listen(port, function () {
    console.info("Server is listening on port ".concat(port));
})
    .on("error", function (err) {
    console.error("Error:", err.message);
});
