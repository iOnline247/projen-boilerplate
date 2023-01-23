import { javascript, release } from "projen";
import { ProjenProjectFromGit } from "@mrgrain/projen-from-git";

const project = new ProjenProjectFromGit({
  author: "Matthew Bramer",
  authorAddress: "mbramer@pansophiclearning.com",
  name: "boilerplate",
  repositoryUrl:
    "https://git-codecommit.us-east-1.amazonaws.com/v1/repos/boilerplate",
  defaultReleaseBranch: "deploy",
  projenrcTs: true,
  github: false,
  githubOptions: {
    mergify: false,
  },
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
  deps: ["aws-cdk-lib@2.40.0", "constructs@10.1.94"],
  devDeps: [
    "@mrgrain/projen-from-git@mrgrain/projen-from-git",
    "typescript",
    "projen",
  ],

  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.synth();
