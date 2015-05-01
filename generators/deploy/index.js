'use strict';
var chalk = require('chalk');
var yeoman = require('yeoman-generator');
var util = require('util');

var Generator = module.exports = function Generator() {
  yeoman.generators.Base.apply(this, arguments);
};

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.deprecated = function deprecated() {
  this.log(chalk.yellow(chalk.bold('yo coffee-fullstack:deploy') + ' is deprecated, instead use: \n') +
           chalk.green('yo coffee-fullstack:heroku') + ' or ' + chalk.green('yo coffee-fullstack:openshift'));
};