"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var steptacular = function (workflowDirectory) {
    var fileNames = (0, fs_1.readdirSync)(workflowDirectory);
};
exports.default = steptacular;
