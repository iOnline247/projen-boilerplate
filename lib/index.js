"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanlBoilerplateApp = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
// import * as projen from 'projen';
const cdkVersion = '2.60.0';
class PanlBoilerplateApp extends projen_1.typescript.TypeScriptAppProject {
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
                include: ['src/**/*.js'],
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
            eslint: false,
            prettier: false,
        });
        infra.synth();
    }
}
exports.PanlBoilerplateApp = PanlBoilerplateApp;
_a = JSII_RTTI_SYMBOL_1;
PanlBoilerplateApp[_a] = { fqn: "boilerplate.PanlBoilerplateApp", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBaUU7QUFDakUsb0NBQW9DO0FBRXBDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQztBQUk1QixNQUFhLGtCQUFtQixTQUFRLG1CQUFVLENBQUMsb0JBQW9CO0lBQ3JFLFlBQVksT0FBaUM7UUFDM0MsS0FBSyxDQUFDO1lBQ0osVUFBVSxFQUFFLGdCQUFnQjtZQUM1QixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLGNBQWMsRUFBRSxtQkFBVSxDQUFDLGtCQUFrQixDQUFDLEdBQUc7WUFDakQsTUFBTSxFQUFFO2dCQUNOLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsb0JBQW9CO2FBQy9CO1lBQ0QsR0FBRyxPQUFPO1lBQ1YsMkRBQTJEO1lBQzNELE1BQU0sRUFBRSxLQUFLO1lBQ2IsYUFBYSxFQUFFO2dCQUNiLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7WUFDRCxjQUFjLEVBQUUsZ0JBQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFO1lBQy9DLFlBQVksRUFBRSxLQUFLO1lBQ25CLE1BQU0sRUFBRSxJQUFJO1lBQ1osYUFBYSxFQUFFO2dCQUNiLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7Z0JBQzFCLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7WUFDRCxRQUFRLEVBQUUsSUFBSTtZQUNkLGVBQWUsRUFBRTtnQkFDZixRQUFRLEVBQUU7b0JBQ1IsVUFBVSxFQUFFLEdBQUc7b0JBQ2YsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLGFBQWEsRUFBRSxtQkFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHO2lCQUM1QzthQUNGO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDeEIsZUFBZSxFQUFFO29CQUNmLE9BQU8sRUFBRSxJQUFJO29CQUNiLHNCQUFzQixFQUFFLEtBQUs7b0JBQzdCLGVBQWUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsZUFBZTtvQkFDdEUsYUFBYSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxhQUFhO2lCQUNuRTthQUNGO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsUUFBUTtRQUNSLDZJQUE2STtRQUM3SSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVCLGtGQUFrRjtRQUNsRixrQkFBa0I7UUFFbEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxlQUFNLENBQUMsbUJBQW1CLENBQUM7WUFDM0MsSUFBSSxFQUFFLGdCQUFnQjtZQUN0QixNQUFNLEVBQUUsSUFBSTtZQUNaLE1BQU0sRUFBRSxPQUFPO1lBQ2Ysb0JBQW9CLEVBQUUsUUFBUTtZQUM5QixjQUFjLEVBQUUsbUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHO1lBQ2pELFVBQVU7WUFDVixJQUFJLEVBQUUsQ0FBQyxlQUFlLFVBQVUsRUFBRSxFQUFFLG9CQUFvQixFQUFFLFVBQVUsQ0FBQztZQUNyRSxNQUFNLEVBQUUsS0FBSztZQUNiLFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUMsQ0FBQztRQUVILEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoQixDQUFDOztBQTVESCxnREE2REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhd3NjZGssIGphdmFzY3JpcHQsIHJlbGVhc2UsIHR5cGVzY3JpcHQgfSBmcm9tICdwcm9qZW4nO1xuLy8gaW1wb3J0ICogYXMgcHJvamVuIGZyb20gJ3Byb2plbic7XG5cbmNvbnN0IGNka1ZlcnNpb24gPSAnMi42MC4wJztcblxuZXhwb3J0IGludGVyZmFjZSBQYW5sQm9pbGVycGxhdGVSZXBvUHJvcHMgZXh0ZW5kcyBhd3NjZGsuQXdzQ2RrVHlwZVNjcmlwdEFwcE9wdGlvbnMge31cblxuZXhwb3J0IGNsYXNzIFBhbmxCb2lsZXJwbGF0ZUFwcCBleHRlbmRzIHR5cGVzY3JpcHQuVHlwZVNjcmlwdEFwcFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBQYW5sQm9pbGVycGxhdGVSZXBvUHJvcHMpIHtcbiAgICBzdXBlcih7XG4gICAgICBhdXRob3JOYW1lOiAnTWF0dGhldyBCcmFtZXInLFxuICAgICAgYXV0aG9yRW1haWw6ICdtYnJhbWVyQHBhbnNvcGhpY2xlYXJuaW5nLmNvbScsXG4gICAgICBwYWNrYWdlTWFuYWdlcjogamF2YXNjcmlwdC5Ob2RlUGFja2FnZU1hbmFnZXIuTlBNLFxuICAgICAgcmVhZG1lOiB7XG4gICAgICAgIGZpbGVuYW1lOiAnUkVBRE1FLm1kJyxcbiAgICAgICAgY29udGVudHM6ICcjIGRpZCB0aGlzIGNoYW5nZT8nLFxuICAgICAgfSxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAvLyBhbnkgb3B0aW9ucyBkb3duIGhlcmUgd291bGQgYmUgZm9yY2VkIGFuZCBub3QgY2hhbmdlYWJsZVxuICAgICAgZ2l0aHViOiBmYWxzZSxcbiAgICAgIGdpdGh1Yk9wdGlvbnM6IHtcbiAgICAgICAgbWVyZ2lmeTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgcmVsZWFzZVRyaWdnZXI6IHJlbGVhc2UuUmVsZWFzZVRyaWdnZXIubWFudWFsKCksXG4gICAgICByZWxlYXNlVG9OcG06IGZhbHNlLFxuICAgICAgZXNsaW50OiB0cnVlLFxuICAgICAgZXNsaW50T3B0aW9uczoge1xuICAgICAgICBkaXJzOiBbJy4vc3JjJywgJy4vaW5mcmEnXSxcbiAgICAgICAgcHJldHRpZXI6IHRydWUsXG4gICAgICB9LFxuICAgICAgcHJldHRpZXI6IHRydWUsXG4gICAgICBwcmV0dGllck9wdGlvbnM6IHtcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBwcmludFdpZHRoOiAxMjAsXG4gICAgICAgICAgc2luZ2xlUXVvdGU6IHRydWUsXG4gICAgICAgICAgdHJhaWxpbmdDb21tYTogamF2YXNjcmlwdC5UcmFpbGluZ0NvbW1hLkFMTCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0c2NvbmZpZzoge1xuICAgICAgICBpbmNsdWRlOiBbJ3NyYy8qKi8qLmpzJ10sXG4gICAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xuICAgICAgICAgIGFsbG93SnM6IHRydWUsXG4gICAgICAgICAgZXhwZXJpbWVudGFsRGVjb3JhdG9yczogZmFsc2UsXG4gICAgICAgICAgaW5saW5lU291cmNlTWFwOiAhIW9wdGlvbnM/LnRzY29uZmlnPy5jb21waWxlck9wdGlvbnM/LmlubGluZVNvdXJjZU1hcCxcbiAgICAgICAgICBpbmxpbmVTb3VyY2VzOiAhIW9wdGlvbnM/LnRzY29uZmlnPy5jb21waWxlck9wdGlvbnM/LmlubGluZVNvdXJjZXMsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIC8vIFRPRE86XG4gICAgLy8gd2FybmluZyBKU0lJNjogQSBcInBlZXJEZXBlbmRlbmN5XCIgb24gXCJwcm9qZW5cIiBhdCBcIl54LngueFwiIG1lYW5zIHlvdSBzaG91bGQgdGFrZSBhIFwiZGV2RGVwZW5kZW5jeVwiIG9uIFwicHJvamVuXCIgYXQgXCIwLjAuMFwiIChmb3VuZCBcIl4wLjY3LjlcIilcbiAgICB0aGlzLmFkZERldkRlcHMoJ3Byb2plbkAqJyk7XG4gICAgLy8gdGhpcy5hZGREZXZEZXBzKGBhd3MtY2RrLWxpYkAke2Nka1ZlcnNpb259YCwgJ2NvbnN0cnVjdHNAMTAuMS45NCcsICdwcm9qZW5AKicpO1xuICAgIC8vIHRoaXMuYWRkRGVwcygpO1xuXG4gICAgY29uc3QgaW5mcmEgPSBuZXcgYXdzY2RrLkF3c0Nka1R5cGVTY3JpcHRBcHAoe1xuICAgICAgbmFtZTogJ2luZnJhLXBpcGVsaW5lJyxcbiAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgIG91dGRpcjogJ2luZnJhJyxcbiAgICAgIGRlZmF1bHRSZWxlYXNlQnJhbmNoOiAnZGVwbG95JyxcbiAgICAgIHBhY2thZ2VNYW5hZ2VyOiBqYXZhc2NyaXB0Lk5vZGVQYWNrYWdlTWFuYWdlci5OUE0sXG4gICAgICBjZGtWZXJzaW9uLFxuICAgICAgZGVwczogW2Bhd3MtY2RrLWxpYkAke2Nka1ZlcnNpb259YCwgJ2NvbnN0cnVjdHNAMTAuMS45NCcsICdwcm9qZW5AKiddLFxuICAgICAgZXNsaW50OiBmYWxzZSxcbiAgICAgIHByZXR0aWVyOiBmYWxzZSxcbiAgICB9KTtcblxuICAgIGluZnJhLnN5bnRoKCk7XG4gIH1cbn1cbiJdfQ==