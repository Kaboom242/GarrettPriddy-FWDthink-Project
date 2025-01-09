// web-test-runner.config.js
import { playwrightLauncher } from '@web/test-runner-playwright';
import { esbuildPlugin } from '@web/dev-server-esbuild'; 
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  browsers: [
    playwrightLauncher({ product: 'firefox',  args: ['--incognito'],}),
  ],
   plugins: [
    esbuildPlugin({
      ts: true, 
      target: 'esnext', 
    }),
    nodeResolve(),
  ],
  testDir: './src/tests',
  files: ['*.test.ts', '**/*.test.ts', '**/*.spec.ts'],
  nodeResolve: true,
  // alias: {
  //   '@': './src', 
  // },
};


// export default {

//   testDir: './tests',
//   files: ['*.test.ts', '**/*.test.ts'], 
//   //fullyParallel: true,

//   nodeResolve: true,
//   // plugins: [
//   //   {
//   //     name: 'esbuild-plugin',
//   //     transform(context) {
//   //       if (context.response.is('html')) {
//   //         return context.body.replace(
//   //           '</head>',
//   //           `<script type="module" src="/node_modules/@web/test-runner-commands/browser/commands.mjs"></script></head>`
//   //         );
//   //       }
//   //     },
//   //   },
//   // ],
// };
