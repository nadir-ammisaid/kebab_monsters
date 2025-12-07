"use strict";
// Load the express module to create a web application
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
// Configure it
/* ************************************************************************* */
// CORS Handling: Why is the current code present and do I need to define specific allowed origins for my project?
// CORS (Cross-Origin Resource Sharing) is a security mechanism in web browsers that blocks requests from a different domain than the server.
// You may find the following magic line in forums:
// app.use(cors());
// You should NOT do that: such code uses the `cors` module to allow all origins, which can pose security issues.
// For this pedagogical template, the CORS code allows CLIENT_URL in development mode (when process.env.CLIENT_URL is defined).
var cors_1 = __importDefault(require("cors"));
if (process.env.CLIENT_URL != null) {
    app.use((0, cors_1.default)({ origin: [process.env.CLIENT_URL] }));
}
// If you need to allow extra origins, you can add something like this:
/*
app.use(
  cors({
    origin: ["http://mysite.com", "http://another-domain.com"],
  }),
);
*/
// With ["http://mysite.com", "http://another-domain.com"]
// to be replaced with an array of your trusted origins
/* ************************************************************************* */
// Request Parsing: Understanding the purpose of this part
// Request parsing is necessary to extract data sent by the client in an HTTP request.
// For example to access the body of a POST request.
// The current code contains different parsing options as comments to demonstrate different ways of extracting data.
// 1. `express.json()`: Parses requests with JSON data.
// 2. `express.urlencoded()`: Parses requests with URL-encoded data.
// 3. `express.text()`: Parses requests with raw text data.
// 4. `express.raw()`: Parses requests with raw binary data.
// Uncomment one or more of these options depending on the format of the data sent by your client:
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.text());
// app.use(express.raw());
/* ************************************************************************* */
// Import the API router
var router_1 = __importDefault(require("./router"));
// Mount the API router under the "/api" endpoint
app.use(router_1.default);
/* ************************************************************************* */
// Production-ready setup: What is it for?
// The code includes sections to set up a production environment where the client and server are executed from the same processus.
// What it's for:
// - Serving client static files from the server, which is useful when building a single-page application with React.
// - Redirecting unhandled requests (e.g., all requests not matching a defined API route) to the client's index.html. This allows the client to handle client-side routing.
var node_fs_1 = __importDefault(require("node:fs"));
var node_path_1 = __importDefault(require("node:path"));
// Serve server resources
var publicFolderPath = node_path_1.default.join(__dirname, "../../server/public");
if (node_fs_1.default.existsSync(publicFolderPath)) {
    app.use(express_1.default.static(publicFolderPath));
}
// Serve client resources
var clientBuildPath = node_path_1.default.join(__dirname, "../../client/dist");
if (node_fs_1.default.existsSync(clientBuildPath)) {
    app.use(express_1.default.static(clientBuildPath));
    // Redirect unhandled requests to the client index file
    app.get("*", function (_, res) {
        res.sendFile("index.html", { root: clientBuildPath });
    });
}
// Define a middleware function to log errors
var logErrors = function (err, req, res, next) {
    // Log the error to the console for debugging purposes
    console.error(err);
    console.error("on req:", req.method, req.path);
    // Pass the error to the next middleware in the stack
    next(err);
};
// Mount the logErrors middleware globally
app.use(logErrors);
/* ************************************************************************* */
exports.default = app;
