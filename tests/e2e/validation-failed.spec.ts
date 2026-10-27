import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';

describe('Validation failed', () => {
  let app: INestApplication;

  it(`should not bootstrap when validation fails`, async () => {
    expect(() => AppModule.withValidationFailed()).toThrow(
      'isAuthEnabled must be a boolean value',
    );
    expect(() => AppModule.withValidationFailed()).toThrow(
      'name must be a string',
    );
    expect(() => AppModule.withValidationFailed()).toThrow(
      'port must be an integer number',
    );
  });

  afterEach(async () => {
    await app?.close();
  });
});
