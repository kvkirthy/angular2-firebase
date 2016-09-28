(function (global) {
  System.config({
    // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
    transpiler: 'typescript',
    typescriptOptions: {

      "compilerOptions": {
        "target": "es5",
        "module": "system",
        "moduleResolution": "node",
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "removeComments": false,
        "noImplicitAny": false,
        "suppressImplicitAnyIndexErrors": true,
        "typeRoots": [
          "node_modules/@types"
        ]
      }

    },
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',

      // other libraries
      'rxjs': 'npm:rxjs',
      'typescript': 'npm:typescript/lib/typescript.js',
      'firebase':'npm:firebase',
      'angularfire2': 'npm:angularfire2'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      angularfire2:{
        main: 'index.js',
        defaultExtension: 'js'
      },
      firebase:{
        main: 'firebase-browser.js',
        defaultExtension: 'js'
      },
      src: {
        main: './main.ts',
        defaultExtension: 'ts'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
