var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  copy: function () {

    var done = this.async();

    this.prompt({
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname // Default to current folder name
    }, function (answers) {
      this.log(answers.name);

      this.fs.copyTpl(
        this.templatePath('server.js.tpl'),
        this.destinationPath('server.js'),
        {message: answers.name}
      );

      done();
    }.bind(this));

  }
});
