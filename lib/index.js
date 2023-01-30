"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanlBoilerplateApp = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
// import * as projen from 'projen';
const cdkVersion = '2.60.0';
// export class PanlBoilerplateApp extends javascript.NodeProject {
class PanlBoilerplateApp extends projen_1.awscdk.AwsCdkTypeScriptApp {
    // #infra: awscdk.AwsCdkTypeScriptApp;
    constructor(options) {
        super({
            authorName: 'Matthew Bramer',
            authorEmail: 'mbramer@pansophiclearning.com',
            packageManager: projen_1.javascript.NodePackageManager.NPM,
            readme: {
                filename: 'README.md',
                contents: '# did this change?',
            },
            ...options,
            // any options down here would be forced and not changeable
            github: false,
            githubOptions: {
                mergify: false,
            },
            releaseTrigger: projen_1.release.ReleaseTrigger.manual(),
            releaseToNpm: false,
            eslint: true,
            eslintOptions: {
                dirs: ['./src', './infra'],
                prettier: true,
            },
            prettier: true,
            prettierOptions: {
                settings: {
                    printWidth: 120,
                    singleQuote: true,
                    trailingComma: projen_1.javascript.TrailingComma.ALL,
                },
            },
            tsconfig: {
                include: ['./src/**/*.js', './src/**/*.ts', './infra/**/*.ts'],
                compilerOptions: {
                    allowJs: true,
                    experimentalDecorators: false,
                    inlineSourceMap: !!options?.tsconfig?.compilerOptions?.inlineSourceMap,
                    inlineSources: !!options?.tsconfig?.compilerOptions?.inlineSources,
                },
            },
        });
        // deps are better added like this
        this.addDevDeps('projen@*');
        // this.addDevDeps(`aws-cdk-lib@${cdkVersion}`, 'constructs@10.1.94', 'projen@*');
        // this.addDeps();
        const infra = new projen_1.awscdk.AwsCdkTypeScriptApp({
            name: 'infra-pipeline',
            parent: this,
            outdir: 'infra',
            defaultReleaseBranch: 'deploy',
            packageManager: projen_1.javascript.NodePackageManager.NPM,
            cdkVersion,
            deps: [`aws-cdk-lib@${cdkVersion}`, 'constructs@10.1.94', 'projen@*'],
        });
        infra.synth();
    }
}
exports.PanlBoilerplateApp = PanlBoilerplateApp;
_a = JSII_RTTI_SYMBOL_1;
PanlBoilerplateApp[_a] = { fqn: "boilerplate.PanlBoilerplateApp", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBcUQ7QUFDckQsb0NBQW9DO0FBRXBDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQztBQUk1QixtRUFBbUU7QUFDbkUsTUFBYSxrQkFBbUIsU0FBUSxlQUFNLENBQUMsbUJBQW1CO0lBQ2hFLHNDQUFzQztJQUV0QyxZQUFZLE9BQWlDO1FBQzNDLEtBQUssQ0FBQztZQUNKLFVBQVUsRUFBRSxnQkFBZ0I7WUFDNUIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxjQUFjLEVBQUUsbUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHO1lBQ2pELE1BQU0sRUFBRTtnQkFDTixRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLG9CQUFvQjthQUMvQjtZQUNELEdBQUcsT0FBTztZQUNWLDJEQUEyRDtZQUMzRCxNQUFNLEVBQUUsS0FBSztZQUNiLGFBQWEsRUFBRTtnQkFDYixPQUFPLEVBQUUsS0FBSzthQUNmO1lBQ0QsY0FBYyxFQUFFLGdCQUFPLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTtZQUMvQyxZQUFZLEVBQUUsS0FBSztZQUNuQixNQUFNLEVBQUUsSUFBSTtZQUNaLGFBQWEsRUFBRTtnQkFDYixJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO2dCQUMxQixRQUFRLEVBQUUsSUFBSTthQUNmO1lBQ0QsUUFBUSxFQUFFLElBQUk7WUFDZCxlQUFlLEVBQUU7Z0JBQ2YsUUFBUSxFQUFFO29CQUNSLFVBQVUsRUFBRSxHQUFHO29CQUNmLFdBQVcsRUFBRSxJQUFJO29CQUNqQixhQUFhLEVBQUUsbUJBQVUsQ0FBQyxhQUFhLENBQUMsR0FBRztpQkFDNUM7YUFDRjtZQUNELFFBQVEsRUFBRTtnQkFDUixPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixDQUFDO2dCQUM5RCxlQUFlLEVBQUU7b0JBQ2YsT0FBTyxFQUFFLElBQUk7b0JBQ2Isc0JBQXNCLEVBQUUsS0FBSztvQkFDN0IsZUFBZSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxlQUFlO29CQUN0RSxhQUFhLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLGFBQWE7aUJBQ25FO2FBQ0Y7U0FDRixDQUFDLENBQUM7UUFDSCxrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1QixrRkFBa0Y7UUFDbEYsa0JBQWtCO1FBRWxCLE1BQU0sS0FBSyxHQUFHLElBQUksZUFBTSxDQUFDLG1CQUFtQixDQUFDO1lBQzNDLElBQUksRUFBRSxnQkFBZ0I7WUFDdEIsTUFBTSxFQUFFLElBQUk7WUFDWixNQUFNLEVBQUUsT0FBTztZQUNmLG9CQUFvQixFQUFFLFFBQVE7WUFDOUIsY0FBYyxFQUFFLG1CQUFVLENBQUMsa0JBQWtCLENBQUMsR0FBRztZQUNqRCxVQUFVO1lBQ1YsSUFBSSxFQUFFLENBQUMsZUFBZSxVQUFVLEVBQUUsRUFBRSxvQkFBb0IsRUFBRSxVQUFVLENBQUM7U0FDdEUsQ0FBQyxDQUFDO1FBRUgsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hCLENBQUM7O0FBM0RILGdEQTREQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF3c2NkaywgamF2YXNjcmlwdCwgcmVsZWFzZSB9IGZyb20gJ3Byb2plbic7XG4vLyBpbXBvcnQgKiBhcyBwcm9qZW4gZnJvbSAncHJvamVuJztcblxuY29uc3QgY2RrVmVyc2lvbiA9ICcyLjYwLjAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhbmxCb2lsZXJwbGF0ZVJlcG9Qcm9wcyBleHRlbmRzIGF3c2Nkay5Bd3NDZGtUeXBlU2NyaXB0QXBwT3B0aW9ucyB7fVxuXG4vLyBleHBvcnQgY2xhc3MgUGFubEJvaWxlcnBsYXRlQXBwIGV4dGVuZHMgamF2YXNjcmlwdC5Ob2RlUHJvamVjdCB7XG5leHBvcnQgY2xhc3MgUGFubEJvaWxlcnBsYXRlQXBwIGV4dGVuZHMgYXdzY2RrLkF3c0Nka1R5cGVTY3JpcHRBcHAge1xuICAvLyAjaW5mcmE6IGF3c2Nkay5Bd3NDZGtUeXBlU2NyaXB0QXBwO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFBhbmxCb2lsZXJwbGF0ZVJlcG9Qcm9wcykge1xuICAgIHN1cGVyKHtcbiAgICAgIGF1dGhvck5hbWU6ICdNYXR0aGV3IEJyYW1lcicsXG4gICAgICBhdXRob3JFbWFpbDogJ21icmFtZXJAcGFuc29waGljbGVhcm5pbmcuY29tJyxcbiAgICAgIHBhY2thZ2VNYW5hZ2VyOiBqYXZhc2NyaXB0Lk5vZGVQYWNrYWdlTWFuYWdlci5OUE0sXG4gICAgICByZWFkbWU6IHtcbiAgICAgICAgZmlsZW5hbWU6ICdSRUFETUUubWQnLFxuICAgICAgICBjb250ZW50czogJyMgZGlkIHRoaXMgY2hhbmdlPycsXG4gICAgICB9LFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIC8vIGFueSBvcHRpb25zIGRvd24gaGVyZSB3b3VsZCBiZSBmb3JjZWQgYW5kIG5vdCBjaGFuZ2VhYmxlXG4gICAgICBnaXRodWI6IGZhbHNlLFxuICAgICAgZ2l0aHViT3B0aW9uczoge1xuICAgICAgICBtZXJnaWZ5OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICByZWxlYXNlVHJpZ2dlcjogcmVsZWFzZS5SZWxlYXNlVHJpZ2dlci5tYW51YWwoKSxcbiAgICAgIHJlbGVhc2VUb05wbTogZmFsc2UsXG4gICAgICBlc2xpbnQ6IHRydWUsXG4gICAgICBlc2xpbnRPcHRpb25zOiB7XG4gICAgICAgIGRpcnM6IFsnLi9zcmMnLCAnLi9pbmZyYSddLFxuICAgICAgICBwcmV0dGllcjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBwcmV0dGllcjogdHJ1ZSxcbiAgICAgIHByZXR0aWVyT3B0aW9uczoge1xuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHByaW50V2lkdGg6IDEyMCxcbiAgICAgICAgICBzaW5nbGVRdW90ZTogdHJ1ZSxcbiAgICAgICAgICB0cmFpbGluZ0NvbW1hOiBqYXZhc2NyaXB0LlRyYWlsaW5nQ29tbWEuQUxMLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHRzY29uZmlnOiB7XG4gICAgICAgIGluY2x1ZGU6IFsnLi9zcmMvKiovKi5qcycsICcuL3NyYy8qKi8qLnRzJywgJy4vaW5mcmEvKiovKi50cyddLFxuICAgICAgICBjb21waWxlck9wdGlvbnM6IHtcbiAgICAgICAgICBhbGxvd0pzOiB0cnVlLFxuICAgICAgICAgIGV4cGVyaW1lbnRhbERlY29yYXRvcnM6IGZhbHNlLFxuICAgICAgICAgIGlubGluZVNvdXJjZU1hcDogISFvcHRpb25zPy50c2NvbmZpZz8uY29tcGlsZXJPcHRpb25zPy5pbmxpbmVTb3VyY2VNYXAsXG4gICAgICAgICAgaW5saW5lU291cmNlczogISFvcHRpb25zPy50c2NvbmZpZz8uY29tcGlsZXJPcHRpb25zPy5pbmxpbmVTb3VyY2VzLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICAvLyBkZXBzIGFyZSBiZXR0ZXIgYWRkZWQgbGlrZSB0aGlzXG4gICAgdGhpcy5hZGREZXZEZXBzKCdwcm9qZW5AKicpO1xuICAgIC8vIHRoaXMuYWRkRGV2RGVwcyhgYXdzLWNkay1saWJAJHtjZGtWZXJzaW9ufWAsICdjb25zdHJ1Y3RzQDEwLjEuOTQnLCAncHJvamVuQConKTtcbiAgICAvLyB0aGlzLmFkZERlcHMoKTtcblxuICAgIGNvbnN0IGluZnJhID0gbmV3IGF3c2Nkay5Bd3NDZGtUeXBlU2NyaXB0QXBwKHtcbiAgICAgIG5hbWU6ICdpbmZyYS1waXBlbGluZScsXG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICBvdXRkaXI6ICdpbmZyYScsXG4gICAgICBkZWZhdWx0UmVsZWFzZUJyYW5jaDogJ2RlcGxveScsXG4gICAgICBwYWNrYWdlTWFuYWdlcjogamF2YXNjcmlwdC5Ob2RlUGFja2FnZU1hbmFnZXIuTlBNLFxuICAgICAgY2RrVmVyc2lvbixcbiAgICAgIGRlcHM6IFtgYXdzLWNkay1saWJAJHtjZGtWZXJzaW9ufWAsICdjb25zdHJ1Y3RzQDEwLjEuOTQnLCAncHJvamVuQConXSxcbiAgICB9KTtcblxuICAgIGluZnJhLnN5bnRoKCk7XG4gIH1cbn1cbiJdfQ==