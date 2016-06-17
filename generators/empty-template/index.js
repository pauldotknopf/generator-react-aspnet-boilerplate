'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

  initializing: function() {

  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Let\'s prepare a react boilerplate using the ' + chalk.red('empty-template') + ' branch!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someAnswer;

      done();
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('**/*'),
      this.destinationPath()
    );
    this.fs.copy(
      this.templatePath('**/.*'),
      this.destinationPath()
    );
    this.fs.copy(
      this.templatePath('**/*.cs'),
      this.destinationPath(),
      {
        process: function(contents) {
          console.log("c#");
          console.log(contents[0]);
          console.log(contents[1]);
          console.log(contents[2]);

          var missingBOM = (contents[0] !== 0x69 && contents[1] !== 0x6D && contents[2] !== 0x70);

          console.log(missingBOM);

          // if(missingBOM) return contents;
          //
          // return "test";
          //
          // console.log("missing bom = " + missingBOM);

          var s = contents.toString();
          return s;
          // var BOM = new Buffer([0xEF,0xBB,0xBF]);
          //
          // return new Buffer(s, 'utf-8');
        }
      }
    );
    // this.fs.copy(
    //   this.templatePath('**/*.cs'),
    //   this.destinationPath(),
    //   {
    //     process: function(contents) {
    //       return "CSHARP!";
    //     }
    //   }
    // );
    // this.fs.copy(
    //   this.templatePath('**/*.cs'),
    //   this.destinationPath(),
    //   {
    //     process: function(contents) {
    //
    //       console.log(contents[0]);
    //       console.log(contents[1]);
    //       console.log(contents[2]);
    //
    //       var missingBOM = (contents[0] !== 0x69 && contents[1] !== 0x6D && contents[2] !== 0x70);
    //
    //       console.log(missingBOM);
    //
    //       if(missingBOM) return contents;
    //
    //       return "test";
    //
    //       console.log("missing bom = " + missingBOM);
    //
    //       var s = contents.toString('utf-8');
    //       var BOM = new Buffer([0xEF,0xBB,0xBF]);
    //
    //       return new Buffer(s, 'utf-8');
    //     }
    //   }
    // );
  },

  install: function () {
    this.installDependencies();
  }
});
