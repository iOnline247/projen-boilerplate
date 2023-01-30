"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanlBoilerplateApp = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
// import * as projen from 'projen';
const cdkVersion = '2.60.0';
// export class PanlBoilerplateApp extends javascript.NodeProject {
class PanlBoilerplateApp extends projen_1.typescript.TypeScriptAppProject {
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
        // TODO:
        // warning JSII6: A "peerDependency" on "projen" at "^x.x.x" means you should take a "devDependency" on "projen" at "0.0.0" (found "^0.67.9")
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBaUU7QUFDakUsb0NBQW9DO0FBRXBDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQztBQUk1QixtRUFBbUU7QUFDbkUsTUFBYSxrQkFBbUIsU0FBUSxtQkFBVSxDQUFDLG9CQUFvQjtJQUNyRSxzQ0FBc0M7SUFFdEMsWUFBWSxPQUFpQztRQUMzQyxLQUFLLENBQUM7WUFDSixVQUFVLEVBQUUsZ0JBQWdCO1lBQzVCLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsY0FBYyxFQUFFLG1CQUFVLENBQUMsa0JBQWtCLENBQUMsR0FBRztZQUNqRCxNQUFNLEVBQUU7Z0JBQ04sUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSxvQkFBb0I7YUFDL0I7WUFDRCxHQUFHLE9BQU87WUFDViwyREFBMkQ7WUFDM0QsTUFBTSxFQUFFLEtBQUs7WUFDYixhQUFhLEVBQUU7Z0JBQ2IsT0FBTyxFQUFFLEtBQUs7YUFDZjtZQUNELGNBQWMsRUFBRSxnQkFBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7WUFDL0MsWUFBWSxFQUFFLEtBQUs7WUFDbkIsTUFBTSxFQUFFLElBQUk7WUFDWixhQUFhLEVBQUU7Z0JBQ2IsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztnQkFDMUIsUUFBUSxFQUFFLElBQUk7YUFDZjtZQUNELFFBQVEsRUFBRSxJQUFJO1lBQ2QsZUFBZSxFQUFFO2dCQUNmLFFBQVEsRUFBRTtvQkFDUixVQUFVLEVBQUUsR0FBRztvQkFDZixXQUFXLEVBQUUsSUFBSTtvQkFDakIsYUFBYSxFQUFFLG1CQUFVLENBQUMsYUFBYSxDQUFDLEdBQUc7aUJBQzVDO2FBQ0Y7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQztnQkFDOUQsZUFBZSxFQUFFO29CQUNmLE9BQU8sRUFBRSxJQUFJO29CQUNiLHNCQUFzQixFQUFFLEtBQUs7b0JBQzdCLGVBQWUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsZUFBZTtvQkFDdEUsYUFBYSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxhQUFhO2lCQUNuRTthQUNGO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsUUFBUTtRQUNSLDZJQUE2STtRQUM3SSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVCLGtGQUFrRjtRQUNsRixrQkFBa0I7UUFFbEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxlQUFNLENBQUMsbUJBQW1CLENBQUM7WUFDM0MsSUFBSSxFQUFFLGdCQUFnQjtZQUN0QixNQUFNLEVBQUUsSUFBSTtZQUNaLE1BQU0sRUFBRSxPQUFPO1lBQ2Ysb0JBQW9CLEVBQUUsUUFBUTtZQUM5QixjQUFjLEVBQUUsbUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHO1lBQ2pELFVBQVU7WUFDVixJQUFJLEVBQUUsQ0FBQyxlQUFlLFVBQVUsRUFBRSxFQUFFLG9CQUFvQixFQUFFLFVBQVUsQ0FBQztTQUN0RSxDQUFDLENBQUM7UUFFSCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7QUE1REgsZ0RBNkRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXdzY2RrLCBqYXZhc2NyaXB0LCByZWxlYXNlLCB0eXBlc2NyaXB0IH0gZnJvbSAncHJvamVuJztcbi8vIGltcG9ydCAqIGFzIHByb2plbiBmcm9tICdwcm9qZW4nO1xuXG5jb25zdCBjZGtWZXJzaW9uID0gJzIuNjAuMCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFubEJvaWxlcnBsYXRlUmVwb1Byb3BzIGV4dGVuZHMgYXdzY2RrLkF3c0Nka1R5cGVTY3JpcHRBcHBPcHRpb25zIHt9XG5cbi8vIGV4cG9ydCBjbGFzcyBQYW5sQm9pbGVycGxhdGVBcHAgZXh0ZW5kcyBqYXZhc2NyaXB0Lk5vZGVQcm9qZWN0IHtcbmV4cG9ydCBjbGFzcyBQYW5sQm9pbGVycGxhdGVBcHAgZXh0ZW5kcyB0eXBlc2NyaXB0LlR5cGVTY3JpcHRBcHBQcm9qZWN0IHtcbiAgLy8gI2luZnJhOiBhd3NjZGsuQXdzQ2RrVHlwZVNjcmlwdEFwcDtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBQYW5sQm9pbGVycGxhdGVSZXBvUHJvcHMpIHtcbiAgICBzdXBlcih7XG4gICAgICBhdXRob3JOYW1lOiAnTWF0dGhldyBCcmFtZXInLFxuICAgICAgYXV0aG9yRW1haWw6ICdtYnJhbWVyQHBhbnNvcGhpY2xlYXJuaW5nLmNvbScsXG4gICAgICBwYWNrYWdlTWFuYWdlcjogamF2YXNjcmlwdC5Ob2RlUGFja2FnZU1hbmFnZXIuTlBNLFxuICAgICAgcmVhZG1lOiB7XG4gICAgICAgIGZpbGVuYW1lOiAnUkVBRE1FLm1kJyxcbiAgICAgICAgY29udGVudHM6ICcjIGRpZCB0aGlzIGNoYW5nZT8nLFxuICAgICAgfSxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAvLyBhbnkgb3B0aW9ucyBkb3duIGhlcmUgd291bGQgYmUgZm9yY2VkIGFuZCBub3QgY2hhbmdlYWJsZVxuICAgICAgZ2l0aHViOiBmYWxzZSxcbiAgICAgIGdpdGh1Yk9wdGlvbnM6IHtcbiAgICAgICAgbWVyZ2lmeTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgcmVsZWFzZVRyaWdnZXI6IHJlbGVhc2UuUmVsZWFzZVRyaWdnZXIubWFudWFsKCksXG4gICAgICByZWxlYXNlVG9OcG06IGZhbHNlLFxuICAgICAgZXNsaW50OiB0cnVlLFxuICAgICAgZXNsaW50T3B0aW9uczoge1xuICAgICAgICBkaXJzOiBbJy4vc3JjJywgJy4vaW5mcmEnXSxcbiAgICAgICAgcHJldHRpZXI6IHRydWUsXG4gICAgICB9LFxuICAgICAgcHJldHRpZXI6IHRydWUsXG4gICAgICBwcmV0dGllck9wdGlvbnM6IHtcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBwcmludFdpZHRoOiAxMjAsXG4gICAgICAgICAgc2luZ2xlUXVvdGU6IHRydWUsXG4gICAgICAgICAgdHJhaWxpbmdDb21tYTogamF2YXNjcmlwdC5UcmFpbGluZ0NvbW1hLkFMTCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0c2NvbmZpZzoge1xuICAgICAgICBpbmNsdWRlOiBbJy4vc3JjLyoqLyouanMnLCAnLi9zcmMvKiovKi50cycsICcuL2luZnJhLyoqLyoudHMnXSxcbiAgICAgICAgY29tcGlsZXJPcHRpb25zOiB7XG4gICAgICAgICAgYWxsb3dKczogdHJ1ZSxcbiAgICAgICAgICBleHBlcmltZW50YWxEZWNvcmF0b3JzOiBmYWxzZSxcbiAgICAgICAgICBpbmxpbmVTb3VyY2VNYXA6ICEhb3B0aW9ucz8udHNjb25maWc/LmNvbXBpbGVyT3B0aW9ucz8uaW5saW5lU291cmNlTWFwLFxuICAgICAgICAgIGlubGluZVNvdXJjZXM6ICEhb3B0aW9ucz8udHNjb25maWc/LmNvbXBpbGVyT3B0aW9ucz8uaW5saW5lU291cmNlcyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgLy8gVE9ETzpcbiAgICAvLyB3YXJuaW5nIEpTSUk2OiBBIFwicGVlckRlcGVuZGVuY3lcIiBvbiBcInByb2plblwiIGF0IFwiXngueC54XCIgbWVhbnMgeW91IHNob3VsZCB0YWtlIGEgXCJkZXZEZXBlbmRlbmN5XCIgb24gXCJwcm9qZW5cIiBhdCBcIjAuMC4wXCIgKGZvdW5kIFwiXjAuNjcuOVwiKVxuICAgIHRoaXMuYWRkRGV2RGVwcygncHJvamVuQConKTtcbiAgICAvLyB0aGlzLmFkZERldkRlcHMoYGF3cy1jZGstbGliQCR7Y2RrVmVyc2lvbn1gLCAnY29uc3RydWN0c0AxMC4xLjk0JywgJ3Byb2plbkAqJyk7XG4gICAgLy8gdGhpcy5hZGREZXBzKCk7XG5cbiAgICBjb25zdCBpbmZyYSA9IG5ldyBhd3NjZGsuQXdzQ2RrVHlwZVNjcmlwdEFwcCh7XG4gICAgICBuYW1lOiAnaW5mcmEtcGlwZWxpbmUnLFxuICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgb3V0ZGlyOiAnaW5mcmEnLFxuICAgICAgZGVmYXVsdFJlbGVhc2VCcmFuY2g6ICdkZXBsb3knLFxuICAgICAgcGFja2FnZU1hbmFnZXI6IGphdmFzY3JpcHQuTm9kZVBhY2thZ2VNYW5hZ2VyLk5QTSxcbiAgICAgIGNka1ZlcnNpb24sXG4gICAgICBkZXBzOiBbYGF3cy1jZGstbGliQCR7Y2RrVmVyc2lvbn1gLCAnY29uc3RydWN0c0AxMC4xLjk0JywgJ3Byb2plbkAqJ10sXG4gICAgfSk7XG5cbiAgICBpbmZyYS5zeW50aCgpO1xuICB9XG59XG4iXX0=