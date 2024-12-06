import { defineConfig } from '@rsbuild/core';
import { join } from 'path';

export default defineConfig(({ env, envMode, command }) => {


  return {
    source: {
      entry: {
        index: join(__dirname, './index.ts'),
      },
    }
  }
});
