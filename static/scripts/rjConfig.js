define([], function () {
  'use strict';

  /* 
   * To change this license header, choose License Headers in Project Properties.
   * To change this template file, choose Tools | Templates
   * and open the template in the editor.
   */
  requirejs.config({
    baseUrl: '/static/scripts'
  });
  require(['apps/index'], function (AppUtils) {
    //
    alert(AppUtils.default.show('yiifaa'));
  });
});