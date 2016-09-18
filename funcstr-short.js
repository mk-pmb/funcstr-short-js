/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var EX;

EX = function describeFunction(func) {
  var descr = String(func).replace(/\s+/g, ' ').split(/\{/);

  return descr.replace(/^function\s+/, EX.utf8ent.latinSmallFWithHook
    ).substr(0, 32)
};













module.exports = EX;
