// ==UserScript==
// @name         360doc-limit-remover
// @namespace    http://github.com/DuckSoft
// @version      0.1
// @description  去除360doc个人图书馆复制限制
// @author       DuckSoft
// @match        *://www.360doc.com/content/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    Object.defineProperty(document.body, "oncopy", {
        get: ()=>true,
        set: ($)=>{}
    });
})();
