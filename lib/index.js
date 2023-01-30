"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanlBoilerplateApp = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const cdkVersion = '2.60.0';
// export class PanlBoilerplateApp extends javascript.NodeProject {
class PanlBoilerplateApp extends projen_1.awscdk.AwsCdkTypeScriptApp {
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
            cdkVersion,
            github: false,
            githubOptions: {
                mergify: false,
            },
            releaseTrigger: projen_1.release.ReleaseTrigger.manual(),
            projenrcTs: true,
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
    }
}
exports.PanlBoilerplateApp = PanlBoilerplateApp;
_a = JSII_RTTI_SYMBOL_1;
PanlBoilerplateApp[_a] = { fqn: "boilerplate.PanlBoilerplateApp", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBcUQ7QUFFckQsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDO0FBSTVCLG1FQUFtRTtBQUNuRSxNQUFhLGtCQUFtQixTQUFRLGVBQU0sQ0FBQyxtQkFBbUI7SUFDaEUsWUFBWSxPQUFpQztRQUMzQyxLQUFLLENBQUM7WUFDSixVQUFVLEVBQUUsZ0JBQWdCO1lBQzVCLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsY0FBYyxFQUFFLG1CQUFVLENBQUMsa0JBQWtCLENBQUMsR0FBRztZQUNqRCxNQUFNLEVBQUU7Z0JBQ04sUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSxvQkFBb0I7YUFDL0I7WUFDRCxHQUFHLE9BQU87WUFDViwyREFBMkQ7WUFDM0QsVUFBVTtZQUNWLE1BQU0sRUFBRSxLQUFLO1lBQ2IsYUFBYSxFQUFFO2dCQUNiLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7WUFDRCxjQUFjLEVBQUUsZ0JBQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFO1lBQy9DLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFlBQVksRUFBRSxLQUFLO1lBQ25CLE1BQU0sRUFBRSxJQUFJO1lBQ1osYUFBYSxFQUFFO2dCQUNiLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7Z0JBQzFCLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7WUFDRCxRQUFRLEVBQUUsSUFBSTtZQUNkLGVBQWUsRUFBRTtnQkFDZixRQUFRLEVBQUU7b0JBQ1IsVUFBVSxFQUFFLEdBQUc7b0JBQ2YsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLGFBQWEsRUFBRSxtQkFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHO2lCQUM1QzthQUNGO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLENBQUM7Z0JBQzlELGVBQWUsRUFBRTtvQkFDZixPQUFPLEVBQUUsSUFBSTtvQkFDYixzQkFBc0IsRUFBRSxLQUFLO29CQUM3QixlQUFlLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLGVBQWU7b0JBQ3RFLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsYUFBYTtpQkFDbkU7YUFDRjtTQUNGLENBQUMsQ0FBQztRQUNILGtDQUFrQztRQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVCLGtGQUFrRjtRQUNsRixrQkFBa0I7SUFDcEIsQ0FBQzs7QUEvQ0gsZ0RBZ0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXdzY2RrLCBqYXZhc2NyaXB0LCByZWxlYXNlIH0gZnJvbSAncHJvamVuJztcblxuY29uc3QgY2RrVmVyc2lvbiA9ICcyLjYwLjAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhbmxCb2lsZXJwbGF0ZVJlcG9Qcm9wcyBleHRlbmRzIGF3c2Nkay5Bd3NDZGtUeXBlU2NyaXB0QXBwT3B0aW9ucyB7fVxuXG4vLyBleHBvcnQgY2xhc3MgUGFubEJvaWxlcnBsYXRlQXBwIGV4dGVuZHMgamF2YXNjcmlwdC5Ob2RlUHJvamVjdCB7XG5leHBvcnQgY2xhc3MgUGFubEJvaWxlcnBsYXRlQXBwIGV4dGVuZHMgYXdzY2RrLkF3c0Nka1R5cGVTY3JpcHRBcHAge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBQYW5sQm9pbGVycGxhdGVSZXBvUHJvcHMpIHtcbiAgICBzdXBlcih7XG4gICAgICBhdXRob3JOYW1lOiAnTWF0dGhldyBCcmFtZXInLFxuICAgICAgYXV0aG9yRW1haWw6ICdtYnJhbWVyQHBhbnNvcGhpY2xlYXJuaW5nLmNvbScsXG4gICAgICBwYWNrYWdlTWFuYWdlcjogamF2YXNjcmlwdC5Ob2RlUGFja2FnZU1hbmFnZXIuTlBNLFxuICAgICAgcmVhZG1lOiB7XG4gICAgICAgIGZpbGVuYW1lOiAnUkVBRE1FLm1kJyxcbiAgICAgICAgY29udGVudHM6ICcjIGRpZCB0aGlzIGNoYW5nZT8nLFxuICAgICAgfSxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAvLyBhbnkgb3B0aW9ucyBkb3duIGhlcmUgd291bGQgYmUgZm9yY2VkIGFuZCBub3QgY2hhbmdlYWJsZVxuICAgICAgY2RrVmVyc2lvbixcbiAgICAgIGdpdGh1YjogZmFsc2UsXG4gICAgICBnaXRodWJPcHRpb25zOiB7XG4gICAgICAgIG1lcmdpZnk6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHJlbGVhc2VUcmlnZ2VyOiByZWxlYXNlLlJlbGVhc2VUcmlnZ2VyLm1hbnVhbCgpLFxuICAgICAgcHJvamVucmNUczogdHJ1ZSxcbiAgICAgIHJlbGVhc2VUb05wbTogZmFsc2UsXG4gICAgICBlc2xpbnQ6IHRydWUsXG4gICAgICBlc2xpbnRPcHRpb25zOiB7XG4gICAgICAgIGRpcnM6IFsnLi9zcmMnLCAnLi9pbmZyYSddLFxuICAgICAgICBwcmV0dGllcjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBwcmV0dGllcjogdHJ1ZSxcbiAgICAgIHByZXR0aWVyT3B0aW9uczoge1xuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHByaW50V2lkdGg6IDEyMCxcbiAgICAgICAgICBzaW5nbGVRdW90ZTogdHJ1ZSxcbiAgICAgICAgICB0cmFpbGluZ0NvbW1hOiBqYXZhc2NyaXB0LlRyYWlsaW5nQ29tbWEuQUxMLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHRzY29uZmlnOiB7XG4gICAgICAgIGluY2x1ZGU6IFsnLi9zcmMvKiovKi5qcycsICcuL3NyYy8qKi8qLnRzJywgJy4vaW5mcmEvKiovKi50cyddLFxuICAgICAgICBjb21waWxlck9wdGlvbnM6IHtcbiAgICAgICAgICBhbGxvd0pzOiB0cnVlLFxuICAgICAgICAgIGV4cGVyaW1lbnRhbERlY29yYXRvcnM6IGZhbHNlLFxuICAgICAgICAgIGlubGluZVNvdXJjZU1hcDogISFvcHRpb25zPy50c2NvbmZpZz8uY29tcGlsZXJPcHRpb25zPy5pbmxpbmVTb3VyY2VNYXAsXG4gICAgICAgICAgaW5saW5lU291cmNlczogISFvcHRpb25zPy50c2NvbmZpZz8uY29tcGlsZXJPcHRpb25zPy5pbmxpbmVTb3VyY2VzLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICAvLyBkZXBzIGFyZSBiZXR0ZXIgYWRkZWQgbGlrZSB0aGlzXG4gICAgdGhpcy5hZGREZXZEZXBzKCdwcm9qZW5AKicpO1xuICAgIC8vIHRoaXMuYWRkRGV2RGVwcyhgYXdzLWNkay1saWJAJHtjZGtWZXJzaW9ufWAsICdjb25zdHJ1Y3RzQDEwLjEuOTQnLCAncHJvamVuQConKTtcbiAgICAvLyB0aGlzLmFkZERlcHMoKTtcbiAgfVxufVxuIl19