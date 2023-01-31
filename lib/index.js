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
                exclude: ['infra/**/*.ts'],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBaUU7QUFDakUsb0NBQW9DO0FBRXBDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQztBQUk1QixNQUFhLGtCQUFtQixTQUFRLG1CQUFVLENBQUMsb0JBQW9CO0lBQ3JFLFlBQVksT0FBaUM7UUFDM0MsS0FBSyxDQUFDO1lBQ0osVUFBVSxFQUFFLGdCQUFnQjtZQUM1QixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLGNBQWMsRUFBRSxtQkFBVSxDQUFDLGtCQUFrQixDQUFDLEdBQUc7WUFDakQsTUFBTSxFQUFFO2dCQUNOLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsb0JBQW9CO2FBQy9CO1lBQ0QsR0FBRyxPQUFPO1lBQ1YsMkRBQTJEO1lBQzNELE1BQU0sRUFBRSxLQUFLO1lBQ2IsYUFBYSxFQUFFO2dCQUNiLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7WUFDRCxjQUFjLEVBQUUsZ0JBQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFO1lBQy9DLFlBQVksRUFBRSxLQUFLO1lBQ25CLE1BQU0sRUFBRSxJQUFJO1lBQ1osYUFBYSxFQUFFO2dCQUNiLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7Z0JBQzFCLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7WUFDRCxRQUFRLEVBQUUsSUFBSTtZQUNkLGVBQWUsRUFBRTtnQkFDZixRQUFRLEVBQUU7b0JBQ1IsVUFBVSxFQUFFLEdBQUc7b0JBQ2YsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLGFBQWEsRUFBRSxtQkFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHO2lCQUM1QzthQUNGO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDMUIsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUN4QixlQUFlLEVBQUU7b0JBQ2YsT0FBTyxFQUFFLElBQUk7b0JBQ2Isc0JBQXNCLEVBQUUsS0FBSztvQkFDN0IsZUFBZSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxlQUFlO29CQUN0RSxhQUFhLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLGFBQWE7aUJBQ25FO2FBQ0Y7U0FDRixDQUFDLENBQUM7UUFDSCxRQUFRO1FBQ1IsNklBQTZJO1FBQzdJLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUIsa0ZBQWtGO1FBQ2xGLGtCQUFrQjtRQUVsQixNQUFNLEtBQUssR0FBRyxJQUFJLGVBQU0sQ0FBQyxtQkFBbUIsQ0FBQztZQUMzQyxJQUFJLEVBQUUsZ0JBQWdCO1lBQ3RCLE1BQU0sRUFBRSxJQUFJO1lBQ1osTUFBTSxFQUFFLE9BQU87WUFDZixvQkFBb0IsRUFBRSxRQUFRO1lBQzlCLGNBQWMsRUFBRSxtQkFBVSxDQUFDLGtCQUFrQixDQUFDLEdBQUc7WUFDakQsVUFBVTtZQUNWLElBQUksRUFBRSxDQUFDLGVBQWUsVUFBVSxFQUFFLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxDQUFDO1lBQ3JFLE1BQU0sRUFBRSxLQUFLO1lBQ2IsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQyxDQUFDO1FBRUgsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hCLENBQUM7O0FBN0RILGdEQThEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF3c2NkaywgamF2YXNjcmlwdCwgcmVsZWFzZSwgdHlwZXNjcmlwdCB9IGZyb20gJ3Byb2plbic7XG4vLyBpbXBvcnQgKiBhcyBwcm9qZW4gZnJvbSAncHJvamVuJztcblxuY29uc3QgY2RrVmVyc2lvbiA9ICcyLjYwLjAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhbmxCb2lsZXJwbGF0ZVJlcG9Qcm9wcyBleHRlbmRzIGF3c2Nkay5Bd3NDZGtUeXBlU2NyaXB0QXBwT3B0aW9ucyB7fVxuXG5leHBvcnQgY2xhc3MgUGFubEJvaWxlcnBsYXRlQXBwIGV4dGVuZHMgdHlwZXNjcmlwdC5UeXBlU2NyaXB0QXBwUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFBhbmxCb2lsZXJwbGF0ZVJlcG9Qcm9wcykge1xuICAgIHN1cGVyKHtcbiAgICAgIGF1dGhvck5hbWU6ICdNYXR0aGV3IEJyYW1lcicsXG4gICAgICBhdXRob3JFbWFpbDogJ21icmFtZXJAcGFuc29waGljbGVhcm5pbmcuY29tJyxcbiAgICAgIHBhY2thZ2VNYW5hZ2VyOiBqYXZhc2NyaXB0Lk5vZGVQYWNrYWdlTWFuYWdlci5OUE0sXG4gICAgICByZWFkbWU6IHtcbiAgICAgICAgZmlsZW5hbWU6ICdSRUFETUUubWQnLFxuICAgICAgICBjb250ZW50czogJyMgZGlkIHRoaXMgY2hhbmdlPycsXG4gICAgICB9LFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIC8vIGFueSBvcHRpb25zIGRvd24gaGVyZSB3b3VsZCBiZSBmb3JjZWQgYW5kIG5vdCBjaGFuZ2VhYmxlXG4gICAgICBnaXRodWI6IGZhbHNlLFxuICAgICAgZ2l0aHViT3B0aW9uczoge1xuICAgICAgICBtZXJnaWZ5OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICByZWxlYXNlVHJpZ2dlcjogcmVsZWFzZS5SZWxlYXNlVHJpZ2dlci5tYW51YWwoKSxcbiAgICAgIHJlbGVhc2VUb05wbTogZmFsc2UsXG4gICAgICBlc2xpbnQ6IHRydWUsXG4gICAgICBlc2xpbnRPcHRpb25zOiB7XG4gICAgICAgIGRpcnM6IFsnLi9zcmMnLCAnLi9pbmZyYSddLFxuICAgICAgICBwcmV0dGllcjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBwcmV0dGllcjogdHJ1ZSxcbiAgICAgIHByZXR0aWVyT3B0aW9uczoge1xuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHByaW50V2lkdGg6IDEyMCxcbiAgICAgICAgICBzaW5nbGVRdW90ZTogdHJ1ZSxcbiAgICAgICAgICB0cmFpbGluZ0NvbW1hOiBqYXZhc2NyaXB0LlRyYWlsaW5nQ29tbWEuQUxMLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHRzY29uZmlnOiB7XG4gICAgICAgIGV4Y2x1ZGU6IFsnaW5mcmEvKiovKi50cyddLFxuICAgICAgICBpbmNsdWRlOiBbJ3NyYy8qKi8qLmpzJ10sXG4gICAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xuICAgICAgICAgIGFsbG93SnM6IHRydWUsXG4gICAgICAgICAgZXhwZXJpbWVudGFsRGVjb3JhdG9yczogZmFsc2UsXG4gICAgICAgICAgaW5saW5lU291cmNlTWFwOiAhIW9wdGlvbnM/LnRzY29uZmlnPy5jb21waWxlck9wdGlvbnM/LmlubGluZVNvdXJjZU1hcCxcbiAgICAgICAgICBpbmxpbmVTb3VyY2VzOiAhIW9wdGlvbnM/LnRzY29uZmlnPy5jb21waWxlck9wdGlvbnM/LmlubGluZVNvdXJjZXMsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIC8vIFRPRE86XG4gICAgLy8gd2FybmluZyBKU0lJNjogQSBcInBlZXJEZXBlbmRlbmN5XCIgb24gXCJwcm9qZW5cIiBhdCBcIl54LngueFwiIG1lYW5zIHlvdSBzaG91bGQgdGFrZSBhIFwiZGV2RGVwZW5kZW5jeVwiIG9uIFwicHJvamVuXCIgYXQgXCIwLjAuMFwiIChmb3VuZCBcIl4wLjY3LjlcIilcbiAgICB0aGlzLmFkZERldkRlcHMoJ3Byb2plbkAqJyk7XG4gICAgLy8gdGhpcy5hZGREZXZEZXBzKGBhd3MtY2RrLWxpYkAke2Nka1ZlcnNpb259YCwgJ2NvbnN0cnVjdHNAMTAuMS45NCcsICdwcm9qZW5AKicpO1xuICAgIC8vIHRoaXMuYWRkRGVwcygpO1xuXG4gICAgY29uc3QgaW5mcmEgPSBuZXcgYXdzY2RrLkF3c0Nka1R5cGVTY3JpcHRBcHAoe1xuICAgICAgbmFtZTogJ2luZnJhLXBpcGVsaW5lJyxcbiAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgIG91dGRpcjogJ2luZnJhJyxcbiAgICAgIGRlZmF1bHRSZWxlYXNlQnJhbmNoOiAnZGVwbG95JyxcbiAgICAgIHBhY2thZ2VNYW5hZ2VyOiBqYXZhc2NyaXB0Lk5vZGVQYWNrYWdlTWFuYWdlci5OUE0sXG4gICAgICBjZGtWZXJzaW9uLFxuICAgICAgZGVwczogW2Bhd3MtY2RrLWxpYkAke2Nka1ZlcnNpb259YCwgJ2NvbnN0cnVjdHNAMTAuMS45NCcsICdwcm9qZW5AKiddLFxuICAgICAgZXNsaW50OiBmYWxzZSxcbiAgICAgIHByZXR0aWVyOiBmYWxzZSxcbiAgICB9KTtcblxuICAgIGluZnJhLnN5bnRoKCk7XG4gIH1cbn1cbiJdfQ==
