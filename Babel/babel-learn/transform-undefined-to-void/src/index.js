/*
 * @Author: your name
 * @Date: 2021-01-02 11:21:37
 * @LastEditTime: 2021-01-02 11:23:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /babel-learn/transform-undefined-to-void/src/index.js
 */
var parser = require("@babel/parser");
var traverse = require("babel-traverse").default;
var t = require("babel-types");
var template = require("@babel/template");
var generator = require("@babel/generator");

"use strict";

module.exports = function(babel) {
    const VOID_0 = t.unaryExpression("void", t.numericLiteral(0), true);
    return {
        name: "transform-undefined-to-void",
        visitor: {
            Identifier(path) {
                if (path.node.name === "undefined") {
                    path.replaceWith(VOID_0);
                }
            }
        }
    };
};