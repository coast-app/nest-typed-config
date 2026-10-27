import { join } from 'path';
import { fileLoader } from '../../lib';

describe('Environment variable substitutions in js config files', () => {
  const load = () =>
    fileLoader({
      absolutePath: join(__dirname, '../src/.env-function-reference.sub.js'),
      ignoreEnvironmentVariableSubstitution: false,
    })();

  it(`should keep a placeholder that references a function`, () => {
    const config = load();
    expect(config.handlerAlias).toBe('${handler}');
    expect(config.handler()).toBe('handled');
  });

  it(`should keep null values`, () => {
    expect(load().timeout).toBeNull();
  });
});
