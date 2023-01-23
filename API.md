# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### PanlBoilerplateRepoProps <a name="PanlBoilerplateRepoProps" id="boilerplate.PanlBoilerplateRepoProps"></a>

#### Initializer <a name="Initializer" id="boilerplate.PanlBoilerplateRepoProps.Initializer"></a>

```typescript
import { PanlBoilerplateRepoProps } from 'boilerplate'

const panlBoilerplateRepoProps: PanlBoilerplateRepoProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcOptions</code> | Options for .projenrc.json. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Minimum node.js version to require via `engines` (inclusive). |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum Node.js version to require via package.json `engines` (inclusive). |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with standard-version package. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v3 A secret is required for private repos. Configured with @codeCovTokenSecret. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use github workflows to handle dependency upgrades. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version to use in GitHub workflows. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.buildCommand">buildCommand</a></code> | <code>string</code> | A command to execute before synthesis. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.cdkout">cdkout</a></code> | <code>string</code> | cdk.out directory. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.context">context</a></code> | <code>{[ key: string ]: any}</code> | Additional context to include in `cdk.json`. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.featureFlags">featureFlags</a></code> | <code>boolean</code> | Include all feature flags in cdk.json. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.requireApproval">requireApproval</a></code> | <code>projen.awscdk.ApprovalLevel</code> | To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.watchExcludes">watchExcludes</a></code> | <code>string[]</code> | Glob patterns to exclude from `cdk watch`. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.watchIncludes">watchIncludes</a></code> | <code>string[]</code> | Glob patterns to include in `cdk watch`. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | Minimum version of the AWS CDK to depend on. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.cdkAssert">cdkAssert</a></code> | <code>boolean</code> | Warning: NodeJS only. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.cdkAssertions">cdkAssertions</a></code> | <code>boolean</code> | Install the assertions library? |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.cdkDependencies">cdkDependencies</a></code> | <code>string[]</code> | Which AWS CDKv1 modules this project requires. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.cdkDependenciesAsDeps">cdkDependenciesAsDeps</a></code> | <code>boolean</code> | If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`). |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.cdkTestDependencies">cdkTestDependencies</a></code> | <code>string[]</code> | AWS CDK modules required for testing. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.cdkVersionPinning">cdkVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for CDK. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.constructsVersion">constructsVersion</a></code> | <code>string</code> | Minimum version of the `constructs` library to depend on. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The CDK app's entrypoint (relative to the source directory, which is "src" by default). |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.edgeLambdaAutoDiscover">edgeLambdaAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.integrationTestAutoDiscover">integrationTestAutoDiscover</a></code> | <code>boolean</code> | Automatically discovers and creates integration tests for each `.integ.ts` file in under your test directory. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.lambdaAutoDiscover">lambdaAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `awscdk.LambdaFunction` for each `.lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.lambdaExtensionAutoDiscover">lambdaExtensionAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#boilerplate.PanlBoilerplateRepoProps.property.lambdaOptions">lambdaOptions</a></code> | <code>projen.awscdk.LambdaFunctionCommonOptions</code> | Common options for all AWS Lambda functions. |

---

##### `name`<sup>Required</sup> <a name="name" id="boilerplate.PanlBoilerplateRepoProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="boilerplate.PanlBoilerplateRepoProps.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="boilerplate.PanlBoilerplateRepoProps.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="boilerplate.PanlBoilerplateRepoProps.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
sub-projects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="boilerplate.PanlBoilerplateRepoProps.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="boilerplate.PanlBoilerplateRepoProps.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="boilerplate.PanlBoilerplateRepoProps.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="boilerplate.PanlBoilerplateRepoProps.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcOptions;
```

- *Type:* projen.ProjenrcOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="boilerplate.PanlBoilerplateRepoProps.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="boilerplate.PanlBoilerplateRepoProps.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="boilerplate.PanlBoilerplateRepoProps.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="boilerplate.PanlBoilerplateRepoProps.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="boilerplate.PanlBoilerplateRepoProps.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="boilerplate.PanlBoilerplateRepoProps.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="boilerplate.PanlBoilerplateRepoProps.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="boilerplate.PanlBoilerplateRepoProps.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="boilerplate.PanlBoilerplateRepoProps.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="boilerplate.PanlBoilerplateRepoProps.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="boilerplate.PanlBoilerplateRepoProps.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="boilerplate.PanlBoilerplateRepoProps.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="boilerplate.PanlBoilerplateRepoProps.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="boilerplate.PanlBoilerplateRepoProps.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="boilerplate.PanlBoilerplateRepoProps.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="boilerplate.PanlBoilerplateRepoProps.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

*Example*

```typescript
"{ filename: 'readme.md', contents: '# title' }"
```


##### `stale`<sup>Optional</sup> <a name="stale" id="boilerplate.PanlBoilerplateRepoProps.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="boilerplate.PanlBoilerplateRepoProps.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="boilerplate.PanlBoilerplateRepoProps.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="boilerplate.PanlBoilerplateRepoProps.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="boilerplate.PanlBoilerplateRepoProps.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="boilerplate.PanlBoilerplateRepoProps.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="boilerplate.PanlBoilerplateRepoProps.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="boilerplate.PanlBoilerplateRepoProps.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="boilerplate.PanlBoilerplateRepoProps.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="boilerplate.PanlBoilerplateRepoProps.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="boilerplate.PanlBoilerplateRepoProps.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="boilerplate.PanlBoilerplateRepoProps.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="boilerplate.PanlBoilerplateRepoProps.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="boilerplate.PanlBoilerplateRepoProps.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="boilerplate.PanlBoilerplateRepoProps.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'express', 'lodash', 'foo@^2' ]
```


##### `description`<sup>Optional</sup> <a name="description" id="boilerplate.PanlBoilerplateRepoProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="boilerplate.PanlBoilerplateRepoProps.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'typescript', '@types/express' ]
```


##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="boilerplate.PanlBoilerplateRepoProps.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="boilerplate.PanlBoilerplateRepoProps.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="boilerplate.PanlBoilerplateRepoProps.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="boilerplate.PanlBoilerplateRepoProps.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="boilerplate.PanlBoilerplateRepoProps.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="boilerplate.PanlBoilerplateRepoProps.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no max

Minimum node.js version to require via `engines` (inclusive).

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="boilerplate.PanlBoilerplateRepoProps.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no "engines" specified

Minimum Node.js version to require via package.json `engines` (inclusive).

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="boilerplate.PanlBoilerplateRepoProps.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="boilerplate.PanlBoilerplateRepoProps.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="boilerplate.PanlBoilerplateRepoProps.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="boilerplate.PanlBoilerplateRepoProps.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="boilerplate.PanlBoilerplateRepoProps.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="boilerplate.PanlBoilerplateRepoProps.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="boilerplate.PanlBoilerplateRepoProps.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="boilerplate.PanlBoilerplateRepoProps.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="boilerplate.PanlBoilerplateRepoProps.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="boilerplate.PanlBoilerplateRepoProps.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="boilerplate.PanlBoilerplateRepoProps.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### `scripts`<sup>Optional</sup> <a name="scripts" id="boilerplate.PanlBoilerplateRepoProps.property.scripts"></a>

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="boilerplate.PanlBoilerplateRepoProps.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="boilerplate.PanlBoilerplateRepoProps.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="boilerplate.PanlBoilerplateRepoProps.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="boilerplate.PanlBoilerplateRepoProps.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="boilerplate.PanlBoilerplateRepoProps.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="boilerplate.PanlBoilerplateRepoProps.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="boilerplate.PanlBoilerplateRepoProps.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="boilerplate.PanlBoilerplateRepoProps.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="boilerplate.PanlBoilerplateRepoProps.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="boilerplate.PanlBoilerplateRepoProps.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="boilerplate.PanlBoilerplateRepoProps.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="boilerplate.PanlBoilerplateRepoProps.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="boilerplate.PanlBoilerplateRepoProps.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="boilerplate.PanlBoilerplateRepoProps.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="boilerplate.PanlBoilerplateRepoProps.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="boilerplate.PanlBoilerplateRepoProps.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="boilerplate.PanlBoilerplateRepoProps.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "Release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="boilerplate.PanlBoilerplateRepoProps.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="boilerplate.PanlBoilerplateRepoProps.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with standard-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="boilerplate.PanlBoilerplateRepoProps.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="boilerplate.PanlBoilerplateRepoProps.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="boilerplate.PanlBoilerplateRepoProps.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="boilerplate.PanlBoilerplateRepoProps.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="boilerplate.PanlBoilerplateRepoProps.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="boilerplate.PanlBoilerplateRepoProps.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowTriggers`<sup>Optional</sup> <a name="buildWorkflowTriggers" id="boilerplate.PanlBoilerplateRepoProps.property.buildWorkflowTriggers"></a>

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="boilerplate.PanlBoilerplateRepoProps.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="boilerplate.PanlBoilerplateRepoProps.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v3 A secret is required for private repos. Configured with @codeCovTokenSecret.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="boilerplate.PanlBoilerplateRepoProps.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="boilerplate.PanlBoilerplateRepoProps.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="boilerplate.PanlBoilerplateRepoProps.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="boilerplate.PanlBoilerplateRepoProps.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="boilerplate.PanlBoilerplateRepoProps.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="boilerplate.PanlBoilerplateRepoProps.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="boilerplate.PanlBoilerplateRepoProps.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="boilerplate.PanlBoilerplateRepoProps.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="boilerplate.PanlBoilerplateRepoProps.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="boilerplate.PanlBoilerplateRepoProps.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### `mutableBuild`<sup>Optional</sup> <a name="mutableBuild" id="boilerplate.PanlBoilerplateRepoProps.property.mutableBuild"></a>

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="boilerplate.PanlBoilerplateRepoProps.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="boilerplate.PanlBoilerplateRepoProps.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `package`<sup>Optional</sup> <a name="package" id="boilerplate.PanlBoilerplateRepoProps.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="boilerplate.PanlBoilerplateRepoProps.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="boilerplate.PanlBoilerplateRepoProps.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="boilerplate.PanlBoilerplateRepoProps.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="boilerplate.PanlBoilerplateRepoProps.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="boilerplate.PanlBoilerplateRepoProps.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="boilerplate.PanlBoilerplateRepoProps.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="boilerplate.PanlBoilerplateRepoProps.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="boilerplate.PanlBoilerplateRepoProps.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="boilerplate.PanlBoilerplateRepoProps.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="boilerplate.PanlBoilerplateRepoProps.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="boilerplate.PanlBoilerplateRepoProps.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="boilerplate.PanlBoilerplateRepoProps.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="boilerplate.PanlBoilerplateRepoProps.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="boilerplate.PanlBoilerplateRepoProps.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* same as `minNodeVersion`

The node version to use in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="boilerplate.PanlBoilerplateRepoProps.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="boilerplate.PanlBoilerplateRepoProps.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="boilerplate.PanlBoilerplateRepoProps.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="boilerplate.PanlBoilerplateRepoProps.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="boilerplate.PanlBoilerplateRepoProps.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="boilerplate.PanlBoilerplateRepoProps.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="boilerplate.PanlBoilerplateRepoProps.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="boilerplate.PanlBoilerplateRepoProps.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="boilerplate.PanlBoilerplateRepoProps.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="boilerplate.PanlBoilerplateRepoProps.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="boilerplate.PanlBoilerplateRepoProps.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="boilerplate.PanlBoilerplateRepoProps.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="boilerplate.PanlBoilerplateRepoProps.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="boilerplate.PanlBoilerplateRepoProps.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="boilerplate.PanlBoilerplateRepoProps.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="boilerplate.PanlBoilerplateRepoProps.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `buildCommand`<sup>Optional</sup> <a name="buildCommand" id="boilerplate.PanlBoilerplateRepoProps.property.buildCommand"></a>

```typescript
public readonly buildCommand: string;
```

- *Type:* string
- *Default:* no build command

A command to execute before synthesis.

This command will be called when
running `cdk synth` or when `cdk watch` identifies a change in your source
code before redeployment.

---

##### `cdkout`<sup>Optional</sup> <a name="cdkout" id="boilerplate.PanlBoilerplateRepoProps.property.cdkout"></a>

```typescript
public readonly cdkout: string;
```

- *Type:* string
- *Default:* "cdk.out"

cdk.out directory.

---

##### `context`<sup>Optional</sup> <a name="context" id="boilerplate.PanlBoilerplateRepoProps.property.context"></a>

```typescript
public readonly context: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* no additional context

Additional context to include in `cdk.json`.

---

##### `featureFlags`<sup>Optional</sup> <a name="featureFlags" id="boilerplate.PanlBoilerplateRepoProps.property.featureFlags"></a>

```typescript
public readonly featureFlags: boolean;
```

- *Type:* boolean
- *Default:* true

Include all feature flags in cdk.json.

---

##### `requireApproval`<sup>Optional</sup> <a name="requireApproval" id="boilerplate.PanlBoilerplateRepoProps.property.requireApproval"></a>

```typescript
public readonly requireApproval: ApprovalLevel;
```

- *Type:* projen.awscdk.ApprovalLevel
- *Default:* ApprovalLevel.BROADENING

To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them.

---

##### `watchExcludes`<sup>Optional</sup> <a name="watchExcludes" id="boilerplate.PanlBoilerplateRepoProps.property.watchExcludes"></a>

```typescript
public readonly watchExcludes: string[];
```

- *Type:* string[]
- *Default:* []

Glob patterns to exclude from `cdk watch`.

---

##### `watchIncludes`<sup>Optional</sup> <a name="watchIncludes" id="boilerplate.PanlBoilerplateRepoProps.property.watchIncludes"></a>

```typescript
public readonly watchIncludes: string[];
```

- *Type:* string[]
- *Default:* []

Glob patterns to include in `cdk watch`.

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="boilerplate.PanlBoilerplateRepoProps.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string
- *Default:* "2.1.0"

Minimum version of the AWS CDK to depend on.

---

##### ~~`cdkAssert`~~<sup>Optional</sup> <a name="cdkAssert" id="boilerplate.PanlBoilerplateRepoProps.property.cdkAssert"></a>

- *Deprecated:* The

```typescript
public readonly cdkAssert: boolean;
```

- *Type:* boolean
- *Default:* will be included by default for AWS CDK >= 1.0.0 < 2.0.0

Warning: NodeJS only.

Install the @aws-cdk/assert library?

---

##### `cdkAssertions`<sup>Optional</sup> <a name="cdkAssertions" id="boilerplate.PanlBoilerplateRepoProps.property.cdkAssertions"></a>

```typescript
public readonly cdkAssertions: boolean;
```

- *Type:* boolean
- *Default:* will be included by default for AWS CDK >= 1.111.0 < 2.0.0

Install the assertions library?

Only needed for CDK 1.x. If using CDK 2.x then
assertions is already included in 'aws-cdk-lib'

---

##### ~~`cdkDependencies`~~<sup>Optional</sup> <a name="cdkDependencies" id="boilerplate.PanlBoilerplateRepoProps.property.cdkDependencies"></a>

- *Deprecated:* For CDK 2.x use "deps" instead. (or "peerDeps" if you're building a library)

```typescript
public readonly cdkDependencies: string[];
```

- *Type:* string[]

Which AWS CDKv1 modules this project requires.

---

##### ~~`cdkDependenciesAsDeps`~~<sup>Optional</sup> <a name="cdkDependenciesAsDeps" id="boilerplate.PanlBoilerplateRepoProps.property.cdkDependenciesAsDeps"></a>

- *Deprecated:* Not supported in CDK v2.

```typescript
public readonly cdkDependenciesAsDeps: boolean;
```

- *Type:* boolean
- *Default:* true

If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`).

This is to ensure that downstream consumers actually have your CDK dependencies installed
when using npm < 7 or yarn, where peer dependencies are not automatically installed.
If this is disabled, `cdkDependencies` will be added to `devDependencies` to ensure
they are present during development.

Note: this setting only applies to construct library projects

---

##### ~~`cdkTestDependencies`~~<sup>Optional</sup> <a name="cdkTestDependencies" id="boilerplate.PanlBoilerplateRepoProps.property.cdkTestDependencies"></a>

- *Deprecated:* For CDK 2.x use 'devDeps' (in node.js projects) or 'testDeps' (in java projects) instead

```typescript
public readonly cdkTestDependencies: string[];
```

- *Type:* string[]

AWS CDK modules required for testing.

---

##### `cdkVersionPinning`<sup>Optional</sup> <a name="cdkVersionPinning" id="boilerplate.PanlBoilerplateRepoProps.property.cdkVersionPinning"></a>

```typescript
public readonly cdkVersionPinning: boolean;
```

- *Type:* boolean

Use pinned version instead of caret version for CDK.

You can use this to prevent mixed versions for your CDK dependencies and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `constructsVersion`<sup>Optional</sup> <a name="constructsVersion" id="boilerplate.PanlBoilerplateRepoProps.property.constructsVersion"></a>

```typescript
public readonly constructsVersion: string;
```

- *Type:* string
- *Default:* for CDK 1.x the default is "3.2.27", for CDK 2.x the default is "10.0.5".

Minimum version of the `constructs` library to depend on.

---

##### `appEntrypoint`<sup>Optional</sup> <a name="appEntrypoint" id="boilerplate.PanlBoilerplateRepoProps.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string
- *Default:* "main.ts"

The CDK app's entrypoint (relative to the source directory, which is "src" by default).

---

##### `edgeLambdaAutoDiscover`<sup>Optional</sup> <a name="edgeLambdaAutoDiscover" id="boilerplate.PanlBoilerplateRepoProps.property.edgeLambdaAutoDiscover"></a>

```typescript
public readonly edgeLambdaAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `integrationTestAutoDiscover`<sup>Optional</sup> <a name="integrationTestAutoDiscover" id="boilerplate.PanlBoilerplateRepoProps.property.integrationTestAutoDiscover"></a>

```typescript
public readonly integrationTestAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically discovers and creates integration tests for each `.integ.ts` file in under your test directory.

---

##### `lambdaAutoDiscover`<sup>Optional</sup> <a name="lambdaAutoDiscover" id="boilerplate.PanlBoilerplateRepoProps.property.lambdaAutoDiscover"></a>

```typescript
public readonly lambdaAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `awscdk.LambdaFunction` for each `.lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `lambdaExtensionAutoDiscover`<sup>Optional</sup> <a name="lambdaExtensionAutoDiscover" id="boilerplate.PanlBoilerplateRepoProps.property.lambdaExtensionAutoDiscover"></a>

```typescript
public readonly lambdaExtensionAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `lambdaOptions`<sup>Optional</sup> <a name="lambdaOptions" id="boilerplate.PanlBoilerplateRepoProps.property.lambdaOptions"></a>

```typescript
public readonly lambdaOptions: LambdaFunctionCommonOptions;
```

- *Type:* projen.awscdk.LambdaFunctionCommonOptions
- *Default:* default options

Common options for all AWS Lambda functions.

---



