"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
// Define item-related routes
var itemActions_1 = __importDefault(require("./modules/item/itemActions"));
router.get("/api/items", itemActions_1.default.browse);
router.get("/api/items/:id", itemActions_1.default.read);
router.post("/api/items", itemActions_1.default.add);
/* ************************************************************************* */
exports.default = router;
