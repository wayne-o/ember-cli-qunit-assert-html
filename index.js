/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-qunit-assert-html',
  included: function(app) {
    this._super.included(app);
    app.import('vendor/qunit-assert-html.min.js');
  }
};
