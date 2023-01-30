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
            eslint: false,
            prettier: false,
        });
        infra.synth();
    }
}
exports.PanlBoilerplateApp = PanlBoilerplateApp;
_a = JSII_RTTI_SYMBOL_1;
PanlBoilerplateApp[_a] = { fqn: "boilerplate.PanlBoilerplateApp", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBaUU7QUFDakUsb0NBQW9DO0FBRXBDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQztBQUk1QixNQUFhLGtCQUFtQixTQUFRLG1CQUFVLENBQUMsb0JBQW9CO0lBQ3JFLFlBQVksT0FBaUM7UUFDM0MsS0FBSyxDQUFDO1lBQ0osVUFBVSxFQUFFLGdCQUFnQjtZQUM1QixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLGNBQWMsRUFBRSxtQkFBVSxDQUFDLGtCQUFrQixDQUFDLEdBQUc7WUFDakQsTUFBTSxFQUFFO2dCQUNOLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsb0JBQW9CO2FBQy9CO1lBQ0QsR0FBRyxPQUFPO1lBQ1YsMkRBQTJEO1lBQzNELE1BQU0sRUFBRSxLQUFLO1lBQ2IsYUFBYSxFQUFFO2dCQUNiLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7WUFDRCxjQUFjLEVBQUUsZ0JBQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFO1lBQy9DLFlBQVksRUFBRSxLQUFLO1lBQ25CLE1BQU0sRUFBRSxJQUFJO1lBQ1osYUFBYSxFQUFFO2dCQUNiLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7Z0JBQzFCLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7WUFDRCxRQUFRLEVBQUUsSUFBSTtZQUNkLGVBQWUsRUFBRTtnQkFDZixRQUFRLEVBQUU7b0JBQ1IsVUFBVSxFQUFFLEdBQUc7b0JBQ2YsV0FBVyxFQUFFLElBQUk7b0JBQ2pCLGFBQWEsRUFBRSxtQkFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHO2lCQUM1QzthQUNGO1lBQ0QsUUFBUSxFQUFFO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLENBQUM7Z0JBQzlELGVBQWUsRUFBRTtvQkFDZixPQUFPLEVBQUUsSUFBSTtvQkFDYixzQkFBc0IsRUFBRSxLQUFLO29CQUM3QixlQUFlLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLGVBQWU7b0JBQ3RFLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsYUFBYTtpQkFDbkU7YUFDRjtTQUNGLENBQUMsQ0FBQztRQUNILFFBQVE7UUFDUiw2SUFBNkk7UUFDN0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1QixrRkFBa0Y7UUFDbEYsa0JBQWtCO1FBRWxCLE1BQU0sS0FBSyxHQUFHLElBQUksZUFBTSxDQUFDLG1CQUFtQixDQUFDO1lBQzNDLElBQUksRUFBRSxnQkFBZ0I7WUFDdEIsTUFBTSxFQUFFLElBQUk7WUFDWixNQUFNLEVBQUUsT0FBTztZQUNmLG9CQUFvQixFQUFFLFFBQVE7WUFDOUIsY0FBYyxFQUFFLG1CQUFVLENBQUMsa0JBQWtCLENBQUMsR0FBRztZQUNqRCxVQUFVO1lBQ1YsSUFBSSxFQUFFLENBQUMsZUFBZSxVQUFVLEVBQUUsRUFBRSxvQkFBb0IsRUFBRSxVQUFVLENBQUM7WUFDckUsTUFBTSxFQUFFLEtBQUs7WUFDYixRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFDLENBQUM7UUFFSCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7QUE1REgsZ0RBNkRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXdzY2RrLCBqYXZhc2NyaXB0LCByZWxlYXNlLCB0eXBlc2NyaXB0IH0gZnJvbSAncHJvamVuJztcbi8vIGltcG9ydCAqIGFzIHByb2plbiBmcm9tICdwcm9qZW4nO1xuXG5jb25zdCBjZGtWZXJzaW9uID0gJzIuNjAuMCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFubEJvaWxlcnBsYXRlUmVwb1Byb3BzIGV4dGVuZHMgYXdzY2RrLkF3c0Nka1R5cGVTY3JpcHRBcHBPcHRpb25zIHt9XG5cbmV4cG9ydCBjbGFzcyBQYW5sQm9pbGVycGxhdGVBcHAgZXh0ZW5kcyB0eXBlc2NyaXB0LlR5cGVTY3JpcHRBcHBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3Iob3B0aW9uczogUGFubEJvaWxlcnBsYXRlUmVwb1Byb3BzKSB7XG4gICAgc3VwZXIoe1xuICAgICAgYXV0aG9yTmFtZTogJ01hdHRoZXcgQnJhbWVyJyxcbiAgICAgIGF1dGhvckVtYWlsOiAnbWJyYW1lckBwYW5zb3BoaWNsZWFybmluZy5jb20nLFxuICAgICAgcGFja2FnZU1hbmFnZXI6IGphdmFzY3JpcHQuTm9kZVBhY2thZ2VNYW5hZ2VyLk5QTSxcbiAgICAgIHJlYWRtZToge1xuICAgICAgICBmaWxlbmFtZTogJ1JFQURNRS5tZCcsXG4gICAgICAgIGNvbnRlbnRzOiAnIyBkaWQgdGhpcyBjaGFuZ2U/JyxcbiAgICAgIH0sXG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgLy8gYW55IG9wdGlvbnMgZG93biBoZXJlIHdvdWxkIGJlIGZvcmNlZCBhbmQgbm90IGNoYW5nZWFibGVcbiAgICAgIGdpdGh1YjogZmFsc2UsXG4gICAgICBnaXRodWJPcHRpb25zOiB7XG4gICAgICAgIG1lcmdpZnk6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHJlbGVhc2VUcmlnZ2VyOiByZWxlYXNlLlJlbGVhc2VUcmlnZ2VyLm1hbnVhbCgpLFxuICAgICAgcmVsZWFzZVRvTnBtOiBmYWxzZSxcbiAgICAgIGVzbGludDogdHJ1ZSxcbiAgICAgIGVzbGludE9wdGlvbnM6IHtcbiAgICAgICAgZGlyczogWycuL3NyYycsICcuL2luZnJhJ10sXG4gICAgICAgIHByZXR0aWVyOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHByZXR0aWVyOiB0cnVlLFxuICAgICAgcHJldHRpZXJPcHRpb25zOiB7XG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgcHJpbnRXaWR0aDogMTIwLFxuICAgICAgICAgIHNpbmdsZVF1b3RlOiB0cnVlLFxuICAgICAgICAgIHRyYWlsaW5nQ29tbWE6IGphdmFzY3JpcHQuVHJhaWxpbmdDb21tYS5BTEwsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdHNjb25maWc6IHtcbiAgICAgICAgaW5jbHVkZTogWycuL3NyYy8qKi8qLmpzJywgJy4vc3JjLyoqLyoudHMnLCAnLi9pbmZyYS8qKi8qLnRzJ10sXG4gICAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xuICAgICAgICAgIGFsbG93SnM6IHRydWUsXG4gICAgICAgICAgZXhwZXJpbWVudGFsRGVjb3JhdG9yczogZmFsc2UsXG4gICAgICAgICAgaW5saW5lU291cmNlTWFwOiAhIW9wdGlvbnM/LnRzY29uZmlnPy5jb21waWxlck9wdGlvbnM/LmlubGluZVNvdXJjZU1hcCxcbiAgICAgICAgICBpbmxpbmVTb3VyY2VzOiAhIW9wdGlvbnM/LnRzY29uZmlnPy5jb21waWxlck9wdGlvbnM/LmlubGluZVNvdXJjZXMsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIC8vIFRPRE86XG4gICAgLy8gd2FybmluZyBKU0lJNjogQSBcInBlZXJEZXBlbmRlbmN5XCIgb24gXCJwcm9qZW5cIiBhdCBcIl54LngueFwiIG1lYW5zIHlvdSBzaG91bGQgdGFrZSBhIFwiZGV2RGVwZW5kZW5jeVwiIG9uIFwicHJvamVuXCIgYXQgXCIwLjAuMFwiIChmb3VuZCBcIl4wLjY3LjlcIilcbiAgICB0aGlzLmFkZERldkRlcHMoJ3Byb2plbkAqJyk7XG4gICAgLy8gdGhpcy5hZGREZXZEZXBzKGBhd3MtY2RrLWxpYkAke2Nka1ZlcnNpb259YCwgJ2NvbnN0cnVjdHNAMTAuMS45NCcsICdwcm9qZW5AKicpO1xuICAgIC8vIHRoaXMuYWRkRGVwcygpO1xuXG4gICAgY29uc3QgaW5mcmEgPSBuZXcgYXdzY2RrLkF3c0Nka1R5cGVTY3JpcHRBcHAoe1xuICAgICAgbmFtZTogJ2luZnJhLXBpcGVsaW5lJyxcbiAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgIG91dGRpcjogJ2luZnJhJyxcbiAgICAgIGRlZmF1bHRSZWxlYXNlQnJhbmNoOiAnZGVwbG95JyxcbiAgICAgIHBhY2thZ2VNYW5hZ2VyOiBqYXZhc2NyaXB0Lk5vZGVQYWNrYWdlTWFuYWdlci5OUE0sXG4gICAgICBjZGtWZXJzaW9uLFxuICAgICAgZGVwczogW2Bhd3MtY2RrLWxpYkAke2Nka1ZlcnNpb259YCwgJ2NvbnN0cnVjdHNAMTAuMS45NCcsICdwcm9qZW5AKiddLFxuICAgICAgZXNsaW50OiBmYWxzZSxcbiAgICAgIHByZXR0aWVyOiBmYWxzZSxcbiAgICB9KTtcblxuICAgIGluZnJhLnN5bnRoKCk7XG4gIH1cbn1cbiJdfQ==