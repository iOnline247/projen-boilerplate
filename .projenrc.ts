import { awscdk, javascript, release } from 'projen';

// const jsiiMixin = (BaseClass: { new(...args) }) => {
//   return class cdk.JsiiProject extends BaseClass {
//       constructor(options) {
//         super(options);
//       }
//   }
// }
// class PanlJsiiProject extends cdk.JsiiProject {
//   constructor(options: cdk.JsiiProjectOptions) {
//     super(options);
//   }
// }

// class PanlAwsCdkTsApp extends awscdk.AwsCdkTypeScriptApp {
//   constructor(options: awscdk.AwsCdkTypeScriptAppOptions) {
//     super(options);
//   }
// }

class PanlBoilerplateRepo extends awscdk.AwsCdkTypeScriptApp {
  constructor(options: awscdk.AwsCdkTypeScriptAppOptions) {
    super(options);
  }
}

// function applyMixins(derivedCtor: any, constructors: any[]) {
//   constructors.forEach((baseCtor) => {
//     Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
//       Object.defineProperty(
//         derivedCtor.prototype,
//         name,
//         Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
//           Object.create(null)
//       );
//     });
//   });
// }

// applyMixins(PanlBoilerplateRepo, [cdk.JsiiProject, awscdk.AwsCdkTypeScriptApp]);

const project = new PanlBoilerplateRepo({
  authorEmail: 'mbramer@pansophiclearning.com',
  authorName: 'Matthew Bramer',
  name: 'boilerplate',
  cdkVersion: '2.1.0',
  github: false,
  githubOptions: {
    mergify: false,
  },
  projenrcTs: true,
  defaultReleaseBranch: 'main',
  repository: 'https://git-codecommit.us-east-1.amazonaws.com/v1/repos/boilerplate',
  packageManager: javascript.NodePackageManager.NPM,
  releaseTrigger: release.ReleaseTrigger.manual(),
  releaseToNpm: false,
  prettier: true,
  prettierOptions: {
    settings: {
      printWidth: 120,
      singleQuote: true,
      trailingComma: javascript.TrailingComma.ALL,
    },
  },

  deps: ['aws-cdk-lib@2.40.0', 'constructs@10.1.94', 'projen'],
  devDeps: ['projen'],
  // peerDeps: ["projen@0.61.45"],
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.synth();
