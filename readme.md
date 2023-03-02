======================v8================
1. If you're in the root directory of an existing project, run:
npm init wdio .
2.  if you want to create a new project:
npm init wdio ./path/to/new/project
3. This single command downloads the WebdriverIO CLI tool and runs a configuration wizard that helps you to configure your test suite.
The wizard will prompt a set questions that guides you through the setup. You can pass a --yes parameter to pick a default set up which will 
use Mocha with Chrome using the Page Object pattern.
npm init wdio . -- --yes

To run your tests, execute:
$ cd D:\wdio-v8
$ npm run wdio

Run Test================
You can start your test suite by using the run command and pointing to the WebdriverIO config that you just created:
npx wdio run ./wdio.conf.js
If you like to run specific test files you can add a --spec parameter:
npx wdio run ./wdio.conf.js --spec example.e2e.js
or define suites in your config file and run just the test files defined by in a suite:
npx wdio run ./wdio.conf.js --suite exampleSuiteName