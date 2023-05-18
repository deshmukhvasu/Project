// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
module.exports = function (config) {
    config.set({
      basePath: "",
      frameworks: ["jasmine", "@angular-devkit/build-angular"],
      plugins: [
        require("karma-jasmine"),
        require("karma-chrome-launcher"),
        require("karma-jasmine-html-reporter"),
        require("karma-coverage"),
        require("karma-coverage-istanbul-reporter"),
        require("@angular-devkit/build-angular/plugins/karma"),
        require('karma-sonarqube-unit-reporter'),
      ],
      sonarQubeUnitReporter: {
        sonarQubeVersion: 'LATEST',
        outputDir: "coverage/unittest",
        outputFile: 'unit-test-result.xml',
        overrideTestDescription: true,
        testPaths: ['./src'],
        testFilePattern: '.spec.ts',
        useBrowserName: false
      },
      client: {
        jasmine: {
          // you can add configuration options for Jasmine here
          // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
          // for example, you can disable the random execution with `random: false`
          // or set a specific seed with `seed: 4321`
        },
        clearContext: false, // leave Jasmine Spec Runner output visible in browser
      },
      coverageIstanbulReporter: {
        dir: require("path").join(__dirname, "./coverage/FordPro"),
        reports: ["html", "lcovonly", "text-summary"],
        fixWebpackSourcePaths: true,
      },
      jasmineHtmlReporter: {
        suppressAll: true, // removes the duplicated traces
      },
      coverageReporter: {
        type: "cobertura",
        dir: "coverage",
        subdir: "coverage",
        file: "code-coverage.xml",
      },
      reporters: ["progress", "kjhtml", "coverage", "sonarqubeUnit"],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      //browsers: ['Chrome'],
      browsers: ["ChromeHeadless"],
      singleRun: false,
      restartOnFileChange: true,
    });
  };
