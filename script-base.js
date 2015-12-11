'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var angularUtils = require('./util.js');

var Generator = module.exports = function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);

  try {
    this.appname = require(path.join(process.cwd(), 'bower.json')).name;
  } catch (e) {
    this.appname = path.basename(process.cwd());
  }
  this.appname = this.lodash.slugify(this.lodash.humanize(this.appname));
  this.scriptAppName = this.lodash.camelize(this.appname) + angularUtils.appName(this);

  this.cameledName = this.lodash.camelize(this.name);
  this.classedName = this.lodash.classify(this.name);

  this.filters = this.config.get('filters');
  this.sourceRoot(path.join(__dirname, '/templates'));
};

util.inherits(Generator, yeoman.generators.NamedBase);