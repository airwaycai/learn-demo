/*
 * @Author: your name
 * @Date: 2020-12-31 10:43:57
 * @LastEditTime: 2021-01-03 16:57:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /babel-learn/transform-remove-debugger/src/index.js
 */
var parser = require("@babel/parser");
var traverse = require("babel-traverse").default;
var t = require("babel-types");
var template = require("@babel/template");
var generator = require("@babel/generator");

"use strict";

module.exports = function(babel) {
    return {
        name: "transform-remove-debugger",
        visitor: {
            DebuggerStatement : {
                enter(path, options) {
                    // debugger
                    path.remove();
                }
            }
        }
    };
};