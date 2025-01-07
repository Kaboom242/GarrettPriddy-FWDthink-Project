import { playwrightLauncher } from '@web/test-runner-playwright';

export default {
  browsers: [
    playwrightLauncher({ product: 'chromium' }),
    // playwrightLauncher({ product: 'firefox' }),
  ],
  testDir: './src/test',
  files: ['**/*.test.ts', '**/*.spec.ts'],
  nodeResolve: true,
  plugins: [
    {
      name: 'esbuild-plugin',
      transform(context) {
        if (context.response.is('html')) {
          return context.body.replace(
            '</head>',
            `<script type="module" src="/node_modules/@web/test-runner-commands/browser/commands.mjs"></script></head>`
          );
        }
      },
    },
  ],
};
